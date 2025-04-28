import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import StacksSection from '@/components/StacksSection';
import ExploreSection from '@/components/ExploreSection';
import CTAButton from '@/components/CTAButton';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen w-full overflow-hidden">
      <Navbar />
      <HeroSection />
      <StacksSection />
      <ExploreSection />
      <CTAButton />
      <Footer />
    </main>
  );
}

