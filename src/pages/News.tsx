
import React from 'react';
import { Newspaper, Calendar, User, Award, ArrowRight } from 'lucide-react';
import NavBar from '../components/NavBar';

const News = () => {
  return (
    <div className="min-h-screen bg-ocean-dark text-white">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-dark/30 to-ocean-dark"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center animate-fade-up">
            <div className="inline-flex items-center justify-center p-2 bg-ocean/10 backdrop-blur-sm rounded-full mb-4">
              <Newspaper className="w-6 h-6 text-ocean-light" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Latest News</h1>
            <p className="text-xl text-ocean-light max-w-2xl mx-auto">
              Stay updated with our conservation efforts and ocean news
            </p>
          </div>
        </div>
      </section>
      
      {/* Featured News */}
      <section className="py-16 bg-gradient-to-b from-ocean-dark to-ocean-dark/90">
        <div className="container mx-auto px-4">
          <div className="bg-white/5 backdrop-blur-lg rounded-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1484291470158-b8f8d608850d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Breakthrough in Coral Restoration" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:w-1/2">
                <div className="flex items-center mb-4">
                  <div className="bg-ocean/20 p-2 rounded-full mr-3">
                    <Award className="w-5 h-5 text-ocean-light" />
                  </div>
                  <span className="text-ocean-light text-sm font-semibold">FEATURED STORY</span>
                </div>
                <h2 className="text-3xl font-bold mb-4">Breakthrough in Coral Restoration Shows Promise for Reef Recovery</h2>
                <div className="flex items-center text-sm text-white/60 mb-6">
                  <div className="flex items-center mr-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>June 15, 2023</span>
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    <span>Dr. Emily Chen</span>
                  </div>
                </div>
                <p className="mb-6 text-white/80">
                  A new technique developed by BlueTomorrow scientists has shown remarkable success in accelerating coral growth and resilience. The method, which combines coral fragmentation with specialized nutrients, has resulted in a 300% increase in growth rates compared to traditional restoration methods.
                </p>
                <a
                  href="#coral-breakthrough"
                  className="inline-block bg-ocean hover:bg-ocean-light text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
                >
                  Read Full Story
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Recent News */}
      <section className="py-16 bg-gradient-to-b from-ocean-dark/90 to-ocean-dark/80">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Recent News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentNews.map((article) => (
              <NewsCard key={article.title} {...article} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <a
              href="#news-archive"
              className="inline-flex items-center text-ocean-light hover:text-white transition-colors"
            >
              View News Archive
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
      
      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-b from-ocean-dark/80 to-ocean-dark">
        <div className="container mx-auto px-4">
          <div className="bg-white/5 backdrop-blur-lg rounded-lg p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Stay Informed</h2>
            <p className="text-center mb-8 text-white/80">
              Subscribe to our newsletter to receive updates on our projects, ocean conservation news, and upcoming events.
            </p>
            <form className="max-w-xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-ocean-light"
                  required
                />
                <button
                  type="submit"
                  className="bg-ocean hover:bg-ocean-light text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-white/60 text-sm mt-4 text-center">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

type NewsArticleProps = {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
};

const NewsCard = ({ title, excerpt, image, date, author, category }: NewsArticleProps) => (
  <div className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
    <div className="h-48 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-6">
      <div className="inline-block bg-ocean/10 px-2 py-1 rounded-full text-xs text-ocean-light mb-2">
        {category}
      </div>
      <h3 className="text-xl font-bold mb-2 line-clamp-2">{title}</h3>
      <div className="flex items-center text-xs text-white/60 mb-3">
        <div className="flex items-center mr-3">
          <Calendar className="w-3 h-3 mr-1" />
          <span>{date}</span>
        </div>
        <div className="flex items-center">
          <User className="w-3 h-3 mr-1" />
          <span>{author}</span>
        </div>
      </div>
      <p className="text-white/80 mb-4 text-sm line-clamp-3">{excerpt}</p>
      <a
        href={`#news-${title.toLowerCase().replace(/\s+/g, '-')}`}
        className="text-ocean-light hover:text-white transition-colors text-sm font-medium"
      >
        Read More →
      </a>
    </div>
  </div>
);

// Sample data
const recentNews: NewsArticleProps[] = [
  {
    title: "BlueTomorrow Secures $2M Grant for Ocean Plastic Cleanup",
    excerpt: "The foundation has been awarded a significant grant to expand its plastic removal operations in Southeast Asia, targeting the most polluted coastal areas.",
    image: "https://images.unsplash.com/photo-1611284446314-160acfc48505?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "May 22, 2023",
    author: "Sarah Johnson",
    category: "Funding"
  },
  {
    title: "New Marine Protected Area Established in the Mediterranean",
    excerpt: "After years of advocacy, a 100,000-hectare area of the Mediterranean Sea has been designated as a marine protected zone, limiting fishing and industrial activities.",
    image: "https://images.unsplash.com/photo-1498674202618-768840cbaf39?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "April 18, 2023",
    author: "Michael Rodriguez",
    category: "Conservation"
  },
  {
    title: "Volunteer Divers Remove 5 Tons of Ghost Nets in Single Operation",
    excerpt: "A team of 20 volunteer divers coordinated by BlueTomorrow has successfully removed abandoned fishing gear that threatened marine life in the Pacific.",
    image: "https://images.unsplash.com/photo-1544551763-92ab472cad5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "March 5, 2023",
    author: "Elena Diaz",
    category: "Fieldwork"
  },
  {
    title: "Climate Change Impact on Coral Reefs Worse Than Previously Thought",
    excerpt: "New research conducted by our scientific team shows that rising ocean temperatures are affecting coral reefs more severely than initial models predicted.",
    image: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "February 28, 2023",
    author: "Dr. James Wilson",
    category: "Research"
  },
  {
    title: "Annual Ocean Conservation Gala Raises Record $1.5M",
    excerpt: "The BlueTomorrow annual fundraising event saw unprecedented support from donors, with funds allocated toward coral restoration projects.",
    image: "https://images.unsplash.com/photo-1519834784384-d790ed596dca?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "February 12, 2023",
    author: "Sarah Johnson",
    category: "Events"
  },
  {
    title: "Partnership with Universities to Train Next Generation of Marine Scientists",
    excerpt: "BlueTomorrow has established a partnership program with five leading universities to provide hands-on training for marine biology students.",
    image: "https://images.unsplash.com/photo-1507668339897-8a035aa9527d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "January 25, 2023",
    author: "Dr. Aisha Patel",
    category: "Education"
  }
];

export default News;
