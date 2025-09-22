import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/blue-sky-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav bg-gradient-sky">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={logo} 
              alt="Blue Sky Dental Care Logo" 
              className="h-12 w-auto float-animation"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-primary">Blue Sky Dental Care</h1>
              <p className="text-sm text-muted-foreground">Multi-Speciality Clinic</p>
            </div>
          </div>

          {/* Contact Info - Desktop */}
    

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-1">
            {[
              { name: "Home", id: "home" },
              { name: "About", id: "about" },
              { name: "Services", id: "services" },
              { name: "Gallery", id: "gallery" },
              { name: "Testimonials", id: "testimonials" },
                            { name: "Blogs", id: "blog" },

              { name: "Contact", id: "contact" }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-accent/50"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Book Appointment Button - Desktop */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-primary hover:shadow-floating transition-all duration-300"
            >
              Book Appointment
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-accent/50 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden glass-card mt-2 rounded-lg p-4 space-y-2 mb-10">
            <div className="flex items-center justify-between pb-3 border-b border-border">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 " />
                <span className="font-medium">9136242706</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-yellow-400">★★★★★</span>
                <span className="text-sm font-medium">5.0</span>
              </div>
            </div>
            
            {[
              { name: "Home", id: "home" },
              { name: "About", id: "about" },
              { name: "Services", id: "services" },
              { name: "Gallery", id: "gallery" },
                                          { name: "Blogs", id: "blog" },

              { name: "Testimonials", id: "testimonials" },
              { name: "Contact", id: "contact" }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-accent/50"
              >
                {item.name}
              </button>
            ))}
            
            <Button 
              onClick={() => scrollToSection("contact")}
              className="w-full mt-4 bg-gradient-primary"
            >
              Book Appointment
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;