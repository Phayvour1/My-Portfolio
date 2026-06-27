import { motion } from 'framer-motion';

export const Loader = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
        >
            <div className="flex">
                <motion.span
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ 
                        y: [20, 0, 0],
                        x: [0, 0, -20],
                        opacity: [0, 1, 0]
                    }}
                    transition={{ 
                        duration: 1.8, 
                        times: [0, 0.3, 0.8],
                        ease: "easeInOut"
                    }}
                    className="text-8xl font-display font-bold"
                >
                    F
                </motion.span>
                <motion.span
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ 
                        y: [20, 0, 0],
                        x: [0, 0, 20],
                        opacity: [0, 1, 0]
                    }}
                    transition={{ 
                        duration: 1.8, 
                        times: [0, 0.3, 0.8],
                        ease: "easeInOut"
                    }}
                    className="text-8xl font-display font-bold"
                >
                    F
                </motion.span>
            </div>
        </motion.div>
    );
};
