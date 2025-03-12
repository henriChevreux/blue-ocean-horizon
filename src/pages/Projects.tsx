
import React from 'react';
import { FolderIcon, Globe, Anchor, Shield, BarChart, MapPin } from 'lucide-react';
import NavBar from '../components/NavBar';

const Projects = () => {
  return (
    <div className="min-h-screen bg-ocean-dark text-white">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-dark/30 to-ocean-dark"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center animate-fade-up">
            <div className="inline-flex items-center justify-center p-2 bg-ocean/10 backdrop-blur-sm rounded-full mb-4">
              <FolderIcon className="w-6 h-6 text-ocean-light" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Ongoing Projects</h1>
            <p className="text-xl text-ocean-light max-w-2xl mx-auto">
              Discover our current initiatives to protect and restore marine ecosystems
            </p>
          </div>
        </div>
      </section>
      
      {/* Featured Project */}
      <section className="py-16 bg-gradient-to-b from-ocean-dark to-ocean-dark/90">
        <div className="container mx-auto px-4">
          <div className="bg-white/5 backdrop-blur-lg rounded-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Coral Reef Restoration" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:w-1/2">
                <div className="flex items-center mb-4">
                  <div className="bg-ocean/20 p-2 rounded-full mr-3">
                    <Anchor className="w-5 h-5 text-ocean-light" />
                  </div>
                  <span className="text-ocean-light text-sm font-semibold">FEATURED PROJECT</span>
                </div>
                <h2 className="text-3xl font-bold mb-4">Great Barrier Reef Restoration</h2>
                <p className="mb-6 text-white/80">
                  Our flagship project focuses on restoring damaged sections of the Great Barrier Reef using innovative coral farming techniques. We're working with local communities and research institutions to develop sustainable methods for coral propagation and transplantation.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="bg-ocean/10 px-3 py-1 rounded-full text-sm">Coral Restoration</div>
                  <div className="bg-ocean/10 px-3 py-1 rounded-full text-sm">Australia</div>
                  <div className="bg-ocean/10 px-3 py-1 rounded-full text-sm">2020-2025</div>
                </div>
                <a
                  href="#reef-restoration"
                  className="inline-block bg-ocean hover:bg-ocean-light text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* All Projects */}
      <section className="py-16 bg-gradient-to-b from-ocean-dark/90 to-ocean-dark/80">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Current Initiatives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Impact Metrics */}
      <section className="py-16 bg-gradient-to-b from-ocean-dark/80 to-ocean-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ImpactCard 
              icon={<Globe className="w-8 h-8 text-ocean-light" />}
              stat="12"
              label="Countries"
            />
            <ImpactCard 
              icon={<Anchor className="w-8 h-8 text-ocean-light" />}
              stat="24"
              label="Active Projects"
            />
            <ImpactCard 
              icon={<Shield className="w-8 h-8 text-ocean-light" />}
              stat="1.2M"
              label="Hectares Protected"
            />
            <ImpactCard 
              icon={<BarChart className="w-8 h-8 text-ocean-light" />}
              stat="$8.2M"
              label="Funding Secured"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

type ProjectProps = {
  title: string;
  description: string;
  image: string;
  category: string;
  location: string;
  timeframe: string;
};

const ProjectCard = ({ title, description, image, category, location, timeframe }: ProjectProps) => (
  <div className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
    <div className="h-48 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-6">
      <div className="flex items-center mb-2">
        <MapPin className="w-4 h-4 text-ocean-light mr-2" />
        <span className="text-ocean-light text-sm">{location}</span>
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-white/80 mb-4 text-sm line-clamp-3">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        <div className="bg-ocean/10 px-2 py-1 rounded-full text-xs">{category}</div>
        <div className="bg-ocean/10 px-2 py-1 rounded-full text-xs">{timeframe}</div>
      </div>
      <a
        href={`#project-${title.toLowerCase().replace(/\s+/g, '-')}`}
        className="text-ocean-light hover:text-white transition-colors text-sm font-medium"
      >
        View Details →
      </a>
    </div>
  </div>
);

type ImpactCardProps = {
  icon: React.ReactNode;
  stat: string;
  label: string;
};

const ImpactCard = ({ icon, stat, label }: ImpactCardProps) => (
  <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
    <div className="flex justify-center mb-4">{icon}</div>
    <div className="text-3xl font-bold mb-2">{stat}</div>
    <div className="text-ocean-light">{label}</div>
  </div>
);

// Sample data
const projects: ProjectProps[] = [
  {
    title: "Plastic Pollution Cleanup",
    description: "Removing plastic waste from coastal areas and implementing recycling programs with local communities in Southeast Asia.",
    image: "https://images.unsplash.com/photo-1621451537084-482c73073a0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Waste Management",
    location: "Indonesia & Thailand",
    timeframe: "2021-2024"
  },
  {
    title: "Mangrove Restoration",
    description: "Replanting mangrove forests that serve as crucial nurseries for marine life and protect coastlines from erosion and storm surges.",
    image: "https://images.unsplash.com/photo-1565479553505-92b7a16f8be4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Habitat Restoration",
    location: "Florida & Caribbean",
    timeframe: "2019-2023"
  },
  {
    title: "Sea Turtle Conservation",
    description: "Protecting nesting sites, rehabilitating injured turtles, and educating local communities about the importance of these keystone species.",
    image: "https://images.unsplash.com/photo-1591025207163-942350e47db2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Species Protection",
    location: "Costa Rica",
    timeframe: "2020-2024"
  },
  {
    title: "Sustainable Fishing Practices",
    description: "Working with fishing communities to implement sustainable practices that protect fish stocks while maintaining livelihoods.",
    image: "https://images.unsplash.com/photo-1545816250-0d5974a335e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Sustainable Livelihoods",
    location: "Philippines",
    timeframe: "2022-2025"
  },
  {
    title: "Ocean Acidification Research",
    description: "Studying the effects of increased carbon dioxide levels on ocean pH and developing mitigation strategies for vulnerable ecosystems.",
    image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Research",
    location: "Global",
    timeframe: "2021-2024"
  },
  {
    title: "Marine Protected Areas",
    description: "Establishing and managing zones where human activity is limited to allow marine ecosystems to recover and thrive.",
    image: "https://images.unsplash.com/photo-1513553404607-988bf2703777?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Conservation Policy",
    location: "Mediterranean Sea",
    timeframe: "2018-2025"
  }
];

export default Projects;
