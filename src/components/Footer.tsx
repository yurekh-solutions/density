import { MapPin, Phone, Mail, Clock, Star } from "lucide-react";
import logo from "@/assets/blue-sky-logo.png";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Clinic", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-indigo-800 text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={logo} 
                alt="Blue Sky Dental Care Logo" 
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-xl font-bold">Blue Sky Dental Care</h3>
                <p className="text-primary-foreground/80">Multi-Speciality Clinic</p>
              </div>
            </div>
            
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              At Blue Sky Dental Care, under the expertise of Dr. Satish Kumar, our welcoming 
              dental team is dedicated to helping you achieve your best smile. We're committed 
              to your oral health with experienced professionals providing top-quality care.
            </p>

            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="font-semibold">5.0</span>
              <span className="text-primary-foreground/80">(266 patient stories)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div > 
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 ">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-foreground/60 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-primary-foreground/80">
                  54/55, 3rd Cross, Omkar Nagar, Arekere Gate, 
                  Near Reliance Mart, Bangalore
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-foreground/60 flex-shrink-0" />
                <div className="text-sm text-primary-foreground/80">8047111989</div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-foreground/60 flex-shrink-0" />
                <div className="text-sm text-primary-foreground/80">blueskydentalcare@gmail.com</div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary-foreground/60 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-primary-foreground/80">
                  Monday - Sunday<br />
                  9:00am to 10:00pm
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/80">
              © 2025 Blue Sky Dental Care. All rights reserved.
            </div>
              <div className="text-center ">
            <p className="text-lg text-primary-foreground/60">
              Designed and Developed by YurekhSolutions
            </p>
          </div>
            <div className="flex items-center space-x-6">
              <button
                onClick={() => window.open('tel:+918047111989')}
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
              >
                Emergency: 8047111989
              </button>
              
              <button
                onClick={() => {
                  const message = "Hi! I need emergency dental assistance.";
                  window.open(`https://wa.me/918047111989?text=${encodeURIComponent(message)}`, '_blank');
                }}
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
              >
                24/7 WhatsApp
              </button>
            </div>
          </div>
          
        
        </div>
      </div>
    </footer>
  );
};

export default Footer;