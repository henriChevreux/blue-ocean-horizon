
import { useState } from 'react';
import { DropletIcon, Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-ocean/10 backdrop-blur-lg z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <DropletIcon className="h-8 w-8 text-ocean" />
              <span className="text-xl font-bold text-white">BlueTomorrow</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <NavLink href="#about">About</NavLink>
              <NavLink href="#mission">Mission</NavLink>
              <NavLink href="#impact">Impact</NavLink>
              <NavLink href="#join">Join Us</NavLink>
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
            <MobileNavLink href="#about">About</MobileNavLink>
            <MobileNavLink href="#mission">Mission</MobileNavLink>
            <MobileNavLink href="#impact">Impact</MobileNavLink>
            <MobileNavLink href="#join">Join Us</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-white hover:text-ocean-light px-3 py-2 text-sm font-medium transition-colors"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-white hover:text-ocean-light block px-3 py-2 text-base font-medium transition-colors"
  >
    {children}
  </a>
);

export default NavBar;
