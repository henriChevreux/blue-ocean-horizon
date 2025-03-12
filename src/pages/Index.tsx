
import { Heart, Waves, Fish, LifeBuoy } from 'lucide-react';
import NavBar from '../components/NavBar';

const Index = () => {
  return (
    <div className="min-h-screen bg-ocean-dark text-white">
      <NavBar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/lovable-uploads/9a003f15-eb4a-4d64-83af-d1711ce2e5b6.png"
            alt="Underwater scene with coral"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-ocean-dark/40 backdrop-blur-sm"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            BLUE TOMORROW IS ABOUT MAKING A DIFFERENCE
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-ocean-light">
            Join us in protecting our oceans for future generations
          </p>
          <a
            href="#join"
            className="inline-block bg-ocean hover:bg-ocean-light text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300"
          >
            Make a Difference
          </a>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-gradient-to-b from-ocean-dark to-ocean-dark/80">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard
              icon={<Heart className="w-8 h-8 text-coral" />}
              number="1M+"
              label="Marine Animals Saved"
            />
            <StatCard
              icon={<Waves className="w-8 h-8 text-ocean-light" />}
              number="500k"
              label="Square Miles Protected"
            />
            <StatCard
              icon={<Fish className="w-8 h-8 text-coral-light" />}
              number="100+"
              label="Species Preserved"
            />
            <StatCard
              icon={<LifeBuoy className="w-8 h-8 text-ocean" />}
              number="50k"
              label="Volunteers Worldwide"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const StatCard = ({ icon, number, label }: { icon: React.ReactNode; number: string; label: string }) => (
  <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
    <div className="flex justify-center mb-4">{icon}</div>
    <div className="text-3xl font-bold mb-2">{number}</div>
    <div className="text-ocean-light">{label}</div>
  </div>
);

export default Index;
