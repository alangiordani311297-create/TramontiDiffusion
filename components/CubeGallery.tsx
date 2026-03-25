"use client";

import React, { useEffect, useRef } from 'react';
import { motion, useSpring, useTransform, useMotionValue } from 'framer-motion';

const IMAGES = [
    "/immagini/chi_sono/paolo_tramonti_bentley.png",
    "/immagini/chi_sono/foto_1.jpg",
    "/immagini/chi_sono/foto_2.jpg",
    "/immagini/chi_sono/foto_3.jpg",
    "/immagini/chi_sono/foto_4.jpg",
    "/immagini/chi_sono/foto_5.jpg"
];

const rots = [ 
  { ry: 0,   rx: 0  }, // Front
  { ry: 90,  rx: 0  }, // Right
  { ry: 180, rx: 0  }, // Back
  { ry: 270, rx: 0  }, // Left
  { ry: 0,   rx: 90 }, // Top
  { ry: 0,   rx:-90 }  // Bottom
];

const CubeGallery: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);

    // Aggiungo uno smorzamento (spring) per rendere il movimento più fluido e premium
    const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    // Mappo i valori da 0..1 ai gradi di rotazione da -180 a +180
    const rotateX = useTransform(smoothY, [0, 1], [180, -180]);
    const rotateY = useTransform(smoothX, [0, 1], [-180, 180]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX / window.innerWidth);
            mouseY.set(e.clientY / window.innerHeight);
        };
        
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div ref={containerRef} className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] mx-auto z-10" style={{ perspective: "1500px" }}>
            <motion.div 
                className="w-full h-full relative"
                style={{
                    transformStyle: "preserve-3d",
                    rotateX,
                    rotateY
                }}
            >
                {IMAGES.map((img, i) => (
                    <div 
                        key={i} 
                        className="absolute w-full h-full overflow-hidden shadow-2xl border border-white/10"
                        style={{
                            backfaceVisibility: 'hidden',
                            // Devo usare translateZ dinamico in base alla grandezza del box
                            // Su desktop la Z deve essere 225px (450/2), su mobile 150px (300/2)
                            transform: `rotateY(${rots[i].ry}deg) rotateX(${rots[i].rx}deg) translateZ(var(--translate-z, 150px))`
                        }}
                    >
                        <img 
                            src={img} 
                            alt={`Gallery image ${i+1}`} 
                            className="w-full h-full object-cover pointer-events-none" 
                        />
                    </div>
                ))}
            </motion.div>
            {/* CSS inline per variare la translateZ in base al breakpoint */}
            <style jsx>{`
                @media (min-width: 768px) {
                    div { --translate-z: 225px; }
                }
            `}</style>
        </div>
    );
};

export default CubeGallery;
