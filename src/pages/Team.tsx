
import React from 'react';
import { Users, Anchor, Mail } from 'lucide-react';
import NavBar from '../components/NavBar';

const Team = () => {
  return (
    <div className="min-h-screen bg-ocean-dark text-white">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-dark/30 to-ocean-dark"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center animate-fade-up">
            <div className="inline-flex items-center justify-center p-2 bg-ocean/10 backdrop-blur-sm rounded-full mb-4">
              <Users className="w-6 h-6 text-ocean-light" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
            <p className="text-xl text-ocean-light max-w-2xl mx-auto">
              Meet the dedicated individuals working tirelessly to protect our oceans
            </p>
          </div>
        </div>
      </section>
      
      {/* Leadership Team */}
      <section className="py-16 bg-gradient-to-b from-ocean-dark to-ocean-dark/90">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipTeam.map((member) => (
              <TeamMemberCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Scientists & Researchers */}
      <section className="py-16 bg-gradient-to-b from-ocean-dark/90 to-ocean-dark/80">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Scientists & Researchers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {scientificTeam.map((member) => (
              <TeamMemberCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Field Operations */}
      <section className="py-16 bg-gradient-to-b from-ocean-dark/80 to-ocean-dark/70">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Field Operations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fieldTeam.map((member) => (
              <TeamMemberCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Join Us */}
      <section className="py-16 bg-gradient-to-b from-ocean-dark/70 to-ocean-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Passionate about marine conservation? We're always looking for dedicated individuals to join our mission.
          </p>
          <a
            href="#careers"
            className="inline-block bg-ocean hover:bg-ocean-light text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
          >
            View Open Positions
          </a>
        </div>
      </section>
    </div>
  );
};

type TeamMemberProps = {
  name: string;
  title: string;
  image: string;
  bio: string;
  email?: string;
};

const TeamMemberCard = ({ name, title, image, bio, email }: TeamMemberProps) => (
  <div className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
    <div className="h-64 overflow-hidden">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-1">{name}</h3>
      <p className="text-ocean-light mb-4">{title}</p>
      <p className="text-white/80 mb-4 text-sm">{bio}</p>
      {email && (
        <div className="flex items-center text-ocean-light">
          <Mail className="w-4 h-4 mr-2" />
          <a href={`mailto:${email}`} className="hover:text-white transition-colors">
            {email}
          </a>
        </div>
      )}
    </div>
  </div>
);

// Sample data
const leadershipTeam: TeamMemberProps[] = [
  {
    name: "Dr. Emily Chen",
    title: "Executive Director",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    bio: "Marine biologist with over 15 years of experience in ocean conservation and policy development.",
    email: "emily.chen@bluetomorrow.org"
  },
  {
    name: "Michael Rodriguez",
    title: "Operations Director",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    bio: "Former Coast Guard officer with expertise in managing large-scale marine protection initiatives.",
    email: "michael.rodriguez@bluetomorrow.org"
  },
  {
    name: "Sarah Johnson",
    title: "Development Director",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    bio: "Fundraising specialist who has secured over $5M in grants for marine conservation projects.",
    email: "sarah.johnson@bluetomorrow.org"
  }
];

const scientificTeam: TeamMemberProps[] = [
  {
    name: "Dr. James Wilson",
    title: "Lead Marine Biologist",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    bio: "Specializes in coral reef ecosystems and has published over 30 research papers on marine biodiversity.",
    email: "james.wilson@bluetomorrow.org"
  },
  {
    name: "Dr. Aisha Patel",
    title: "Climate Scientist",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    bio: "Researches the impact of climate change on marine ecosystems and develops adaptation strategies.",
    email: "aisha.patel@bluetomorrow.org"
  },
  {
    name: "Dr. Robert Kim",
    title: "Marine Ecologist",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    bio: "Studies the relationships between marine species and their environment, focusing on keystone species.",
    email: "robert.kim@bluetomorrow.org"
  }
];

const fieldTeam: TeamMemberProps[] = [
  {
    name: "Elena Diaz",
    title: "Field Operations Manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    bio: "Coordinates cleanup expeditions and leads a team of 20+ field researchers and volunteers.",
    email: "elena.diaz@bluetomorrow.org"
  },
  {
    name: "Tomas Nakamura",
    title: "Conservation Specialist",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    bio: "Implements marine protected area management plans and works with local communities.",
    email: "tomas.nakamura@bluetomorrow.org"
  },
  {
    name: "Maya Williams",
    title: "Education & Outreach",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    bio: "Develops educational programs for schools and community groups about ocean conservation.",
    email: "maya.williams@bluetomorrow.org"
  }
];

export default Team;
