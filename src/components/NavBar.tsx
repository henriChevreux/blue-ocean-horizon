
import { useState } from 'react';
import { DropletIcon, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-ocean/10 backdrop-blur-lg z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <DropletIcon className="h-8 w-8 text-ocean" />
              <span className="text-xl font-bold text-white">BlueTomorrow</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/team">Team</NavLink>
              <NavLink to="/projects">Projects</NavLink>
              <NavLink to="/news">News</NavLink>
              <NavLink to="/join">Join Us</NavLink>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-ocean-light transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-ocean-dark/90 backdrop-blur-lg">
            <MobileNavLink to="/">Home</MobileNavLink>
            <MobileNavLink to="/about">About</MobileNavLink>
            <MobileNavLink to="/team">Team</MobileNavLink>
            <MobileNavLink to="/projects">Projects</MobileNavLink>
            <MobileNavLink to="/news">News</MobileNavLink>
            <MobileNavLink to="/join">Join Us</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="text-white hover:text-ocean-light px-3 py-2 text-sm font-medium transition-colors"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="text-white hover:text-ocean-light block px-3 py-2 text-base font-medium transition-colors"
  >
    {children}
  </Link>
);

export default NavBar;
