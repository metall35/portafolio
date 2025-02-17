"use client";
import { useInView } from 'react-intersection-observer';

const FadeInSection = ({ children }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div
            ref={ref}
            className={`transition-opacity duration-1000 ease-in-out ${inView ? 'opacity-100' : 'opacity-0'
                }`}
            style={{ willChange: 'opacity' }}
        >
            {children}
        </div>
    );
};

export default FadeInSection;
