"use client";

import React, { useEffect, useRef, useState } from 'react';
import styles from './AIBuiltSection.module.css';
import SparklesText from "@/components/magicui/sparkles-text";
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
                particle.style.left = '0';
                particle.style.top = `${Math.random() * 100}%`;
                particle.style.animationDuration = `${Math.random() * 2 + 3}s`;
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
            <div className="container relative z-20 mx-auto text-center text-white h-screen flex flex-col justify-center items-center">
                <h2 className="text-3xl font-bold mb-8">This website is made using</h2>
                <h1 className="text-6xl font-bold mb-4 text-blue-500 font-lato"><SparklesText text="Artificial Intelligence"/></h1>
                <p className="mt-4 text-lg text-gray-300">
                    My frontend programming language is <b>English</b>. I write everything as a prompt and pass it to AI models.
                </p>
                <p className="mt-4 text-lg text-gray-300 flex items-center justify-center">
                    Beautifully orchestrated by{' '}
                    <WordRotate 
                        className="text-2xl font-bold text-white dark:text-white font-lato ml-2" 
                        words={["Claude 3.5 Sonnet", "ChatGPT 4o", "Gemini 1.5 Flash"]}
                    />
                </p>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent z-30"></div>
        </section>
    );
};

export default AIBuiltSection;