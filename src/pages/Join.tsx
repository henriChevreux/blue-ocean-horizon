
import NavBar from '../components/NavBar';
import { Mail, Send, User, Users } from 'lucide-react';

const Join = () => {
  return (
    <div className="min-h-screen bg-ocean-dark text-white pt-16">
      <NavBar />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Mission</h1>
          <p className="text-xl text-ocean-light mb-10 max-w-2xl mx-auto">
            Together, we can make a difference for our oceans and marine life. 
            Join BlueTomorrow and become part of the solution.
          </p>
        </div>
      </section>
      
      {/* Volunteer Options */}
      <section className="py-16 px-4 bg-ocean-dark/80">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Ways to Get Involved</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <VolunteerCard 
              icon={<User className="w-10 h-10 text-ocean" />}
              title="Volunteer"
              description="Join our volunteer network and participate in beach cleanups, educational events, and community outreach programs."
            />
            <VolunteerCard 
              icon={<Users className="w-10 h-10 text-ocean" />}
              title="Become a Member"
              description="Support our work with a monthly contribution and receive exclusive updates, event invitations, and merchandise."
            />
            <VolunteerCard 
              icon={<Mail className="w-10 h-10 text-ocean" />}
              title="Ambassador Program"
              description="Spread awareness about ocean conservation in your community and on social media as an official BlueTomorrow Ambassador."
            />
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Get in Touch</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-ocean text-white"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-ocean text-white"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="interest">I'm interested in:</label>
              <select
                id="interest"
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-ocean text-white"
              >
                <option value="">Select an option</option>
                <option value="volunteer">Volunteering</option>
                <option value="member">Becoming a Member</option>
                <option value="ambassador">Ambassador Program</option>
                <option value="donate">Making a Donation</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-ocean text-white"
                placeholder="Tell us how you'd like to help..."
              ></textarea>
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center px-6 py-3 bg-ocean hover:bg-ocean-light text-white font-medium rounded-md transition-colors"
              >
                <Send className="mr-2 h-4 w-4" />
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

const VolunteerCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 hover:bg-white/10 transition-colors">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-3 text-center">{title}</h3>
    <p className="text-gray-300 text-center">{description}</p>
    <div className="mt-6 text-center">
      <button className="text-ocean hover:text-ocean-light font-medium transition-colors">
        Learn More →
      </button>
    </div>
  </div>
);

export default Join;
