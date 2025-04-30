import Image from 'next/image';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface HeroProps {
    children: (isHovered: boolean) => React.ReactNode;
}

export default function Hero({ children }: HeroProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // 检测是否为移动端
        const check = () => setIsMobile(window.matchMedia('(pointer: coarse)').matches);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    // 移动端用 tap/click 切换
    const handleMobileToggle = () => {
        if (isMobile) setIsHovered(h => !h);
    };

    return (
        <div
            className="flex-1 relative w-full flex flex-col items-center"
            onMouseEnter={() => !isMobile && setIsHovered(true)}
            onMouseLeave={() => !isMobile && setIsHovered(false)}
            onClick={handleMobileToggle}
            onTouchStart={handleMobileToggle}
        >
            {children(isHovered)}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        key="variant2"
                        initial={{ opacity: 0, scale: 0.98, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.98, y: 20 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute left-0 top-0 w-full h-full flex items-center justify-center z-30 pointer-events-none"
                    >
                
                            <Image
                                src="/figma-images/Hero-animation.svg"
                                alt="Hero Animation"
                                width="1066"
                                height="718"
                                className="object-contain"
                            />
                     
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
} 