import { Helmet } from 'react-helmet-async';
import { Hero } from '../components/home/Hero';
import { About } from '../components/home/About';
import { Projects } from '../components/home/Projects';
import { Contact } from '../components/home/Contact';
import { QuestSection } from '../components/QuestSection';
import { JourneySection } from '../components/JourneySection';

export const Home = () => {
    return (
        <>
            <Helmet>
                <title>Favour Falola — Software Engineer | Frontend Specialist</title>
                <meta name="description" content="Favour Falola is a software engineer based in Lagos, Nigeria, specialising in frontend development with React and TypeScript." />
                <link rel="canonical" href="https://falolafavour.vercel.app/" />
            </Helmet>

            
            <div className="flex flex-col">
                <Hero />
                <Projects />
                <JourneySection />
                <About />
                <QuestSection />
                <Contact />
            </div>
        </>
    );
};

