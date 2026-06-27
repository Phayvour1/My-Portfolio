import { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { fadeUp, clipReveal } from '../../utils/animationVariants';
import { copy } from '../../data/copy';

export const Contact = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(copy.contact.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <Section id="contact" bgColor="#000000" className="bg-black text-white py-24 md:py-28" aria-label="Contact">
            <Container className="max-w-4xl">
                <div className="flex flex-col items-center text-center space-y-10">
                     <motion.h2 
                        {...clipReveal}
                        className="text-4xl md:text-6xl font-display font-bold tracking-tight"
                     >
                        {copy.contact.heading}
                     </motion.h2>
                     <motion.p
                        {...fadeUp}
                        transition={{ ...fadeUp.transition, delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-400 font-light max-w-xl"
                     >
                        {copy.contact.subtext}
                     </motion.p>
                     
                     <div className="flex flex-col items-center gap-3">
                        <span className="text-[9px] uppercase tracking-[0.3em] text-gray-500 font-bold">
                            {copy.contact.emailLabel}
                        </span>
                        <motion.button 
                            onClick={handleCopy}
                            {...fadeUp}
                            transition={{ ...fadeUp.transition, delay: 0.3 }}
                            whileHover={{ scale: 1.02 }}
                            className="text-2xl md:text-4xl font-display font-bold hover:text-gray-300 transition-colors cursor-pointer tracking-tight"
                        >
                            {copied ? 'Copied ✓' : copy.contact.email}
                        </motion.button>
                     </div>

                </div>
            </Container>
        </Section>
    );
};


