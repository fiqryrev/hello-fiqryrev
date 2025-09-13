"use client";

import React, { useEffect, useRef, useState } from 'react';
import styles from '../styles/components/5-AIBuiltSection.module.css';
import WordRotate from "@/components/magicui/word-rotate";

const AIBuiltSection: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const [particleCount, setParticleCount] = useState(0);
    const maxParticles = 500;

    useEffect(() => {
        const createParticle = () => {
            if (particleCount < maxParticles) {
                const particle = document.createElement('div');
                particle.classList.add(styles.particle);
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.top = '0';
                particle.style.animationDuration = `${Math.random() * 3 + 5}s`;
                document.querySelector(`.${styles.wormholeBackground}`)?.appendChild(particle);

                setParticleCount(prevCount => prevCount + 1);

                particle.addEventListener('animationend', () => {
                    particle.remove();
                    setParticleCount(prevCount => prevCount - 1);
                });
            }
        };
    
        const particleInterval = setInterval(createParticle, 200);
    
        return () => {
            clearInterval(particleInterval);
        };
    }, [particleCount]);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            const playVideo = () => {
                video.play().catch(error => {
                    console.error("Error playing the video:", error);
                });
            };

            if (isVideoLoaded) {
                playVideo();
            }

            video.addEventListener('canplaythrough', playVideo);

            return () => {
                video.removeEventListener('canplaythrough', playVideo);
            };
        }
    }, [isVideoLoaded]);

    return (
        <section className={`${styles.gradientBackground} relative`}>
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent z-30"></div>
            <video
                ref={videoRef}
                className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
                loop
                muted
                playsInline
                onLoadedData={() => setIsVideoLoaded(true)}
            >
                <source src="/images/background/blackhole.webm" type="video/webm" />
                Your browser does not support the video tag.
            </video>
            <div className={`${styles.wormholeBackground} z-10`}></div>
            <div className="container relative z-20 mx-auto text-center text-white h-screen flex flex-col justify-center items-center px-4">
                <h2 className="text-3xl font-bold mb-6 text-white/80">This website is made using</h2>
                <h1 className="text-5xl md:text-7xl font-bold mb-8">
                    <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Artificial Intelligence
                    </span>
                </h1>
                <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto">
                    My frontend programming language is <span className="text-purple-400 font-semibold">English</span>. I write everything as a prompt and pass it to AI models.
                </p>
                <div className="mt-6 text-lg text-white/60 flex flex-col sm:flex-row items-center justify-center gap-2">
                    <span>Beautifully orchestrated by</span>
                    <WordRotate
                        className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-lato"
                        words={["Anthropic Claude", "OpenAI GPT", "Google Gemini"]}
                    />
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent z-30"></div>
        </section>
    );
};

export default AIBuiltSection;