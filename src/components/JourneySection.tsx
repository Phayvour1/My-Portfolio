import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Navigation, Pagination, Keyboard, A11y, Autoplay } from 'swiper/modules'

import type { Swiper as SwiperClass } from 'swiper'
// @ts-ignore
import 'swiper/css'
// @ts-ignore
import 'swiper/css/effect-fade'
// @ts-ignore
import 'swiper/css/pagination'

import { Container } from './ui/Container'
import { fadeUp, clipReveal } from '../utils/animationVariants'
import { journeyData } from '../data/journeyData'
import { copy } from '../data/copy'

const slideVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } }
}

export const JourneySection = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [bgColor, setBgColor] = useState(journeyData[0].mood)
  const [timeInSlide, setTimeInSlide] = useState(0)
  const swiperRef = useRef<SwiperClass | null>(null)
  const [mounted, setMounted] = useState(false)

  const SLIDE_DURATION = 8000

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    const interval = setInterval(() => {
      setTimeInSlide(prev => {
        if (prev >= SLIDE_DURATION) return prev
        return prev + 50
      })
    }, 50)
    return () => clearInterval(interval)
  }, [mounted, activeIndex])

  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveIndex(swiper.activeIndex)
    setBgColor(journeyData[swiper.activeIndex].mood)
    setTimeInSlide(0)
  }

  // Calculate progress: total progress across all segments + current segment progress
  // If we are on the last slide, we don't progress beyond 100%
  const isLastSlide = activeIndex === journeyData.length - 1
  const baseProgress = (activeIndex / (journeyData.length - 1)) * 100
  const segmentProgress = isLastSlide ? 0 : (timeInSlide / SLIDE_DURATION) * (100 / (journeyData.length - 1))
  const progress = baseProgress + segmentProgress

  return (
    <section
      id="journey"
      aria-label="Engineering Journey"
      className="relative py-20 md:py-24 transition-colors duration-[800ms] ease-in-out text-white overflow-hidden min-h-[90vh] flex flex-col justify-center"
      style={{ backgroundColor: bgColor }}
    >
      <Container>
        <div className="mb-12">
          <motion.h2 
            {...clipReveal}
            className="text-3xl md:text-4xl font-display font-bold mb-3"
          >
            {copy.journey.heading}
          </motion.h2>
          <motion.p
            {...fadeUp}
            className="text-gray-400 font-light text-sm md:text-base"
          >
            {copy.journey.subheading}
          </motion.p>
        </div>

        {!mounted ? (
          <div className="h-[50vh] flex items-center justify-center opacity-20 font-mono text-xs uppercase tracking-widest">
            Loading story...
          </div>
        ) : (
          <div className="relative">
            <Swiper
              modules={[EffectFade, Navigation, Pagination, Keyboard, A11y, Autoplay]}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              speed={700}
              keyboard={{ enabled: true }}
              pagination={{ clickable: true }}
              autoplay={{
                delay: SLIDE_DURATION,
                disableOnInteraction: false,
              }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={handleSlideChange}
              className="journey-swiper"
            >
              {journeyData.map((chapter, i) => (
                <SwiperSlide key={chapter.id} className="py-8 md:py-12">
                  <motion.div
                    key={activeIndex} // Force re-animation on active slide change
                    variants={slideVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-[42%_58%] gap-10 md:gap-16 items-center relative"
                  >
                    {/* LEFT COLUMN */}
                    <div className="flex flex-col gap-5 md:gap-6 z-10">
                      <motion.div variants={itemVariants} className="flex gap-3 items-center font-mono text-[0.65rem] uppercase tracking-[0.2em] text-gray-400">
                        <span>{chapter.year}</span>
                        <span className="w-3 h-px bg-white/20" />
                        <span>{chapter.season}</span>
                      </motion.div>

                      <motion.h3 
                        variants={itemVariants}
                        className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-display font-bold leading-[1.15] tracking-tight"
                      >
                        {chapter.title}
                      </motion.h3>

                      <div className="space-y-4">
                        <motion.p 
                          variants={itemVariants}
                          className="text-sm md:text-base opacity-70 max-w-[42ch] leading-relaxed"
                        >
                          {chapter.body}
                        </motion.p>
                        <motion.p 
                          variants={itemVariants}
                          className="text-xs md:text-sm opacity-40 max-w-[44ch] italic leading-relaxed font-light"
                        >
                          {chapter.detail}
                        </motion.p>
                      </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="flex flex-col gap-6 md:gap-8 relative min-h-[250px] justify-center">
                      {/* Ambient Era Text */}
                      <motion.span 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.03 }}
                        transition={{ duration: 1.2, delay: 0.3 }}
                        className="era-ambient absolute top-1/2 -translate-y-1/2 -right-4 md:-right-8 text-[clamp(4rem,10vw,8rem)] font-display font-bold select-none pointer-events-none whitespace-nowrap text-white hidden md:block"
                      >
                        {chapter.era}
                      </motion.span>

                      <motion.div variants={itemVariants} className="z-10">
                        <div className="inline-block border border-white/10 px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.12em] bg-white/5 backdrop-blur-sm">
                          {chapter.milestone}
                        </div>
                      </motion.div>

                      <div className="flex flex-wrap gap-2.5 z-10">
                        {chapter.techUnlocked.map((tech, idx) => (
                          <motion.span
                            key={tech}
                            variants={itemVariants}
                            transition={{ delay: 0.1 + idx * 0.06 }}
                            className="bg-white/5 border border-white/10 rounded-full px-2.5 py-1 text-[0.65rem] font-medium tracking-tight opacity-60"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>

                      <div className="mt-4 md:mt-8 font-mono text-[0.65rem] opacity-20 tracking-widest z-10">
                        0{i + 1} / 0{journeyData.length}
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>


            {/* Custom Navigation */}
            <div className="flex justify-between items-center mt-12 md:mt-20">
              <button 
                onClick={() => swiperRef.current?.slidePrev()}
                className="journey-prev group flex items-center gap-3 font-mono text-[0.75rem] uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity"
                aria-label="Previous chapter"
              >
                <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span>
                <span className="nav-label">prev</span>
              </button>

              <button 
                onClick={() => swiperRef.current?.slideNext()}
                className="journey-next group flex items-center gap-3 font-mono text-[0.75rem] uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity"
                aria-label="Next chapter"
              >
                <span className="nav-label">next</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
            </div>
          </div>
        )}

        {/* Progress Thread */}
        <div className="mt-16 md:mt-24 space-y-6">
          <div className="h-px w-full bg-white/10 relative">
            <motion.div 
              className="absolute top-0 left-0 h-[2px] -top-[0.5px] bg-white/60 origin-left"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1, ease: 'linear' }}
            />

          </div>
          <div className="flex justify-between px-1">
            {journeyData.map((chapter, index) => (
              <button
                key={chapter.id}
                onClick={() => swiperRef.current?.slideTo(index)}
                className={`text-[9px] font-mono uppercase tracking-tighter transition-colors duration-300 ${activeIndex === index ? 'text-white' : 'text-white/20 hover:text-white/50'}`}
              >
                {chapter.id}
              </button>
            ))}
          </div>
        </div>
      </Container>

      <style>{`
        .journey-swiper {
          overflow: visible !important;
        }
        @media (max-width: 768px) {
           .era-ambient { display: none; }
        }
      `}</style>

    </section>
  )
}
