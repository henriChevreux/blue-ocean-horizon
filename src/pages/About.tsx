
import NavBar from '../components/NavBar';

const About = () => {
  return (
    <div className="min-h-screen bg-ocean-dark text-white">
      <NavBar />
      
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
            About BlueTomorrow
          </h1>
          
          <div className="space-y-6 text-lg">
            <p>
              BlueTomorrow is a non-profit organization dedicated to the conservation and protection of our oceans 
              and marine life. Founded in 2010, we have been working tirelessly to address the threats facing our 
              oceans, from plastic pollution and overfishing to climate change and habitat destruction.
            </p>
            
            <p>
              Our mission is to create a sustainable future for our oceans through education, advocacy, research, 
              and direct action. We believe that by working together, we can ensure that future generations will 
              be able to enjoy the beauty and bounty of healthy oceans.
            </p>
            
            <p>
              Through our global network of scientists, conservationists, volunteers, and supporters, we develop 
              and implement innovative solutions to protect marine ecosystems and the communities that depend on them.
            </p>
            
            <h2 className="text-2xl font-bold mt-10 mb-4 text-ocean-light">Our Core Values</h2>
            
            <ul className="list-disc pl-6 space-y-3">
              <li><span className="font-semibold">Scientific Integrity:</span> We base our work on sound science and evidence-based approaches.</li>
              <li><span className="font-semibold">Collaboration:</span> We believe in the power of partnerships and working across sectors.</li>
              <li><span className="font-semibold">Inclusivity:</span> We welcome diverse perspectives and ensure that all voices are heard.</li>
              <li><span className="font-semibold">Transparency:</span> We operate with openness and accountability in all our activities.</li>
              <li><span className="font-semibold">Innovation:</span> We continuously seek creative solutions to complex environmental challenges.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
