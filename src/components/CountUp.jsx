import React, { useEffect, useRef } from 'react';
import { useInView, animate } from 'framer-motion';

export default function CountUp({ to, duration = 2, suffix = "" }) {
    const nodeRef = useRef();
    const inView = useInView(nodeRef, { once: true, margin: "-10% 0px -10% 0px" }); // Triggers when element is well within view

    useEffect(() => {
        if (inView) {
            const node = nodeRef.current;
            const controls = animate(0, to, {
                duration: duration,
                ease: "easeOut",
                onUpdate(value) {
                    node.textContent = Math.floor(value) + suffix;
                },
            });

            return () => controls.stop();
        }
    }, [to, inView, duration, suffix]);

    return <span ref={nodeRef} className="tabular-nums">0{suffix}</span>;
}
