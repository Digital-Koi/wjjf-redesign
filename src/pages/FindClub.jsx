import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { clubs } from '../clubs';
import L from 'leaflet';
import { MapPin, Calendar, User, Search, Navigation } from 'lucide-react';

// Fix for default Leaflet marker icons not showing in React
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

// Helper component to control map view specific to React Leaflet
function MapController({ center, zoom }) {
    const map = useMap();
    if (center) {
        map.flyTo(center, zoom, { duration: 1.5 });
    }
    return null;
}

export default function FindClub() {
    const [postcode, setPostcode] = useState('');
    const [loading, setLoading] = useState(false);
    const [closestClub, setClosestClub] = useState(null);
    const [mapCenter, setMapCenter] = useState([54.7, -6.5]); // Default: Northern Ireland center
    const [mapZoom, setMapZoom] = useState(9);
    const [error, setError] = useState('');

    // Haversine formula to calculate distance between two coords
    const calculateDistance = (lat1, lon1, lat2, lon2) => {
        const R = 6371; // Radius of earth in km
        const dLat = (lat2 - lat1) * Math.PI / 180;
        const dLon = (lon2 - lon1) * Math.PI / 180;
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c; // Distance in km
    };

    const [searchLocation, setSearchLocation] = useState('');

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!postcode.trim()) return;

        setLoading(true);
        setError('');
        setClosestClub(null);
        setSearchLocation('');

        try {
            let query = postcode.trim().toUpperCase();

            // 1. Format Postcode: "BT436TH" -> "BT43 6TH"
            // Regex detects UK postcode format with optional space
            const postcodeRegex = /^([A-Z]{1,2}[0-9][0-9A-Z]?)\s*([0-9][A-Z]{2})$/;
            const match = query.match(postcodeRegex);

            let isPostcode = false;
            if (match) {
                // Formatting to standard format: "BT43 6TH"
                query = `${match[1]} ${match[2]}`;
                isPostcode = true;
            }

            // 2. Fetch Logic
            // If it IS a postcode, search strictly for that.
            // If it is NOT a postcode (e.g. "Toome"), use the NI viewbox to prevent finding "Toome, Ireland".

            let url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&countrycodes=gb,ie&limit=1`;

            if (!isPostcode) {
                // Northern Ireland Bounding Box (approx) for town names
                const viewbox = '&viewbox=-8.2,55.3,-5.4,54.0&bounded=1';
                url += viewbox;
            }

            let response = await fetch(url);
            let data = await response.json();

            // 3. Postcode Fallback: If exact postcode "BT43 6TH" not found, try "BT43" sector
            if (isPostcode && (!data || data.length === 0)) {
                console.log("Exact postcode not found, retrying with sector:", match[1]);
                const sectorQuery = match[1]; // e.g. "BT43"
                url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(sectorQuery)}&countrycodes=gb,ie&limit=1`;
                response = await fetch(url);
                data = await response.json();
            }

            if (data && data.length > 0) {
                const result = data[0];
                const userLat = parseFloat(result.lat);
                const userLon = parseFloat(result.lon);

                // Set the friendly name of the location found
                setSearchLocation(result.display_name.split(',')[0]);

                // Calculate distance to all clubs
                let minDistance = Infinity;
                let nearest = null;

                clubs.forEach(club => {
                    const dist = calculateDistance(userLat, userLon, club.lat, club.lng);
                    if (dist < minDistance) {
                        minDistance = dist;
                        nearest = { ...club, distance: dist.toFixed(1) };
                    }
                });

                if (nearest) {
                    setClosestClub(nearest);
                    setMapCenter([nearest.lat, nearest.lng]);
                    setMapZoom(13); // Zoom in on the closest club
                }
            } else {
                setError('Location not found in Northern Ireland. Please try a valid Postcode or Town.');
            }
        } catch (err) {
            console.error(err);
            setError('An error occurred while searching. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="pt-20 min-h-screen bg-gray-50 flex flex-col">
            {/* Header */}
            <div className="bg-[#003087] text-white py-16 text-center px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Find a Club Near You</h1>
                <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
                    Explore our network of over 80 clubs across Northern Ireland. Search by postcode to find your nearest dojo.
                </p>

                {/* Search Bar */}
                <form onSubmit={handleSearch} className="max-w-md mx-auto relative flex items-center">
                    <input
                        type="text"
                        placeholder="Enter Postcode or Town (e.g. Toome)"
                        className="w-full pl-6 pr-14 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-500/30 shadow-lg text-lg"
                        value={postcode}
                        onChange={(e) => setPostcode(e.target.value)}
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className="absolute right-2 top-2 bottom-2 bg-[#E31B23] text-white p-2.5 rounded-full hover:bg-[#B9151B] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {loading ? (
                            <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        ) : (
                            <Search size={24} />
                        )}
                    </button>
                </form>
                {error && <p className="mt-4 text-red-200 bg-red-900/20 py-2 px-4 rounded-lg inline-block">{error}</p>}
            </div>

            {/* Map Section */}
            <div className="flex-grow container mx-auto px-4 py-8 mb-10 flex flex-col lg:flex-row gap-8">

                {/* Results Sidebar (Conditional) */}
                {closestClub && (
                    <div className="lg:w-1/3 bg-white rounded-3xl p-6 shadow-xl border border-gray-100 h-fit animate-fade-in">
                        <div className="mb-6 pb-6 border-b border-gray-100">
                            <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Closest to {searchLocation}:</h2>
                            <h3 className="text-2xl font-bold text-[#003087]">{closestClub.name}</h3>
                            <span className="inline-block bg-green-100 text-green-700 font-bold px-3 py-1 rounded-full text-sm mt-2">
                                {closestClub.distance} km away
                            </span>
                        </div>

                        <div className="bg-gray-50 rounded-xl overflow-hidden mb-6">
                            <img src={closestClub.image} alt={closestClub.name} className="w-full h-48 object-contain bg-white" />
                        </div>

                        <div className="space-y-4 mb-6">
                            <div className="flex items-start gap-3 text-gray-600">
                                <User className="shrink-0 mt-1 text-[#E31B23]" size={18} />
                                <div>
                                    <span className="font-semibold block text-gray-900">Coach</span>
                                    {closestClub.coach}
                                </div>
                            </div>
                            <div className="flex items-start gap-3 text-gray-600">
                                <MapPin className="shrink-0 mt-1 text-[#E31B23]" size={18} />
                                <div className="break-words">
                                    <span className="font-semibold block text-gray-900">Address</span>
                                    {closestClub.address}
                                </div>
                            </div>
                            <div className="flex items-start gap-3 text-gray-600">
                                <Calendar className="shrink-0 mt-1 text-[#E31B23]" size={18} />
                                <div>
                                    <span className="font-semibold block text-gray-900">Training Times</span>
                                    {closestClub.times}
                                </div>
                            </div>
                        </div>

                        <a href={`https://www.google.com/maps/dir/?api=1&destination=${closestClub.lat},${closestClub.lng}`} target="_blank" rel="noreferrer" className="btn btn-primary w-full text-center block">
                            Get Directions
                        </a>
                    </div>
                )}

                {/* Map */}
                <div className={`bg-white p-4 rounded-3xl shadow-xl border border-gray-200 h-[600px] relative overflow-hidden z-0 transition-all duration-500 ${closestClub ? 'lg:w-2/3' : 'w-full'}`}>
                    <MapContainer center={mapCenter} zoom={mapZoom} scrollWheelZoom={false} style={{ height: '100%', width: '100%', borderRadius: '1rem' }}>
                        <MapController center={mapCenter} zoom={mapZoom} />
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                        {clubs.map((club) => (
                            <Marker key={club.id} position={[club.lat, club.lng]}>
                                <Popup className="custom-popup">
                                    <div className="min-w-[250px]">
                                        <img src={club.image} alt={club.coach} className="w-full h-48 object-contain bg-gray-50 rounded-lg mb-3" />
                                        <h3 className="font-bold text-lg text-[#003087] mb-1">{club.name}</h3>

                                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                                            <User size={16} className="text-[#E31B23]" />
                                            <span>{club.coach}</span>
                                        </div>

                                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                                            <MapPin size={16} className="text-[#E31B23]" />
                                            <span className="truncate">{club.address}</span>
                                        </div>

                                        <div className="flex items-center gap-2 text-sm text-gray-600">
                                            <Calendar size={16} className="text-[#E31B23]" />
                                            <span>{club.times}</span>
                                        </div>
                                    </div>
                                </Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                </div>
            </div>
        </div>
    );
}
