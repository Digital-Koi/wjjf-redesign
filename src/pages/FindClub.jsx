import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { clubs } from '../clubs';
import L from 'leaflet';
import { MapPin, Calendar, User } from 'lucide-react';

// Fix for default Leaflet marker icons not showing in React
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function FindClub() {
    return (
        <div className="pt-20 min-h-screen bg-gray-50 flex flex-col">
            {/* Header */}
            <div className="bg-[#003087] text-white py-16 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Find a Club Near You</h1>
                <p className="text-lg text-blue-100 max-w-2xl mx-auto px-4">
                    Explore our network of over 80 clubs across Northern Ireland. Click on a pin to see club details and meet the coach.
                </p>
            </div>

            {/* Map Section */}
            <div className="flex-grow container mx-auto px-4 py-8 mb-10">
                <div className="bg-white p-4 rounded-3xl shadow-xl border border-gray-200 h-[600px] relative overflow-hidden z-0">
                    <MapContainer center={[54.7, -6.5]} zoom={9} scrollWheelZoom={false} style={{ height: '100%', width: '100%', borderRadius: '1rem' }}>
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
