import React, { useEffect, useRef } from "react";

const ParticlesBackground = () => {
    const particlesContainerRef = useRef(null);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            if (window.particlesJS && particlesContainerRef.current) {
                window.particlesJS(particlesContainerRef.current.id, {
                    particles: {
                        number: {
                            value: 267,
                            density: {
                                enable: true,
                                value_area: 1399,
                            },
                        },
                        color: { value: "#ffffff" },
                        shape: {
                            type: "circle",
                            stroke: { width: 0, color: "#000000" },
                        },
                        opacity: {
                            value: 0.5,
                            random: false,
                        },
                        size: {
                            value: 3,
                            random: true,
                        },
                        line_linked: {
                            enable: true,
                            distance: 150,
                            color: "#ffffff",
                            opacity: 0.4,
                            width: 1,
                        },
                        move: {
                            enable: true,
                            speed: 6,
                            direction: "none",
                            out_mode: "out",
                        },
                    },
                    interactivity: {
                        events: {
                            onhover: { enable: true, mode: "repulse" },
                            onclick: { enable: true, mode: "push" },
                        },
                        modes: {
                            repulse: { distance: 200 },
                            push: { particles_nb: 4 },
                        },
                    },
                    retina_detect: true,
                });
            } else {
                console.error("particles.js não foi carregado corretamente.");
            }
        };

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div
            id="particles-js" // importante para o particles.js encontrar o elemento
            ref={particlesContainerRef}
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 0,
            }}
        />
    );
};

export default ParticlesBackground;
