import { Container } from './ui/Container';
import { copy } from '../data/copy';

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-white/5">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] uppercase tracking-[0.2em] text-gray-500 font-mono">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p>{copy.footer.copyright}</p>
            <p className="hidden md:block opacity-30">|</p>
            <p>{copy.footer.allRightsReserved}</p>
          </div>
          
          <div className="flex items-center gap-2 text-gray-400">
            <span className="w-1.5 h-1.5 bg-[#4ade80] rounded-full" />
            <p>{copy.footer.performance}</p>
          </div>
        </div>
      </Container>
    </footer>

  );
};
