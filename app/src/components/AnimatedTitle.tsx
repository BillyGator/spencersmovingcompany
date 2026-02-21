import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedTitleProps {
    children: React.ReactNode;
    className?: string;
    as?: React.ElementType;
}

const AnimatedTitle = ({ children, className = '', as: Component = 'h2' }: AnimatedTitleProps) => {
    const titleRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                titleRef.current,
                { opacity: 0, scale: 0.6, y: 40 },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 1,
                    ease: 'back.out(1.7)',
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: 'top 85%',
                        once: true, // Only fires once
                    }
                }
            );
        });

        return () => ctx.revert();
    }, []);

    return (
        <Component ref={titleRef} className={`inline-block ${className}`}>
            {children}
        </Component>
    );
};

export default AnimatedTitle;
