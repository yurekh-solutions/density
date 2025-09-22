import { Button } from "@/components/ui/button";
import { Star, MapPin, Phone, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import heroImage from '../assets/dental-hero-bg.jpg';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left fade-in">
            <Badge className="mb-6 mt-6   bg-primary/10 text-gray-400 border-primary/20 hover:bg-primary/20 transition-colors">
              ⭐ 5.0 Rating • 266+ Happy Patients
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold  text-white leading-tight mb-6">
              Welcome to{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Blue Sky Dental Care
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl mx-auto lg:mx-0">
              Your path to a healthier, brighter smile starts here. We provide gentle, 
              comprehensive dental care for patients of all ages with state-of-the-art technology.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="bg-gradient-primary hover:shadow-floating hover:scale-105 transition-all duration-300 w-[200px] sm:w-[180px] md:w-[200px] mx-auto sm:mx-0"
              >
                Book Appointment
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open('tel:+918047111989')}
                className="border-primary/30 hover:bg-primary/5 w-[200px] sm:w-[180px] md:w-[200px] mx-auto sm:mx-0"
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
            </div>
          </div>

          {/* Right Content - Info Card */}
          <div className="lg:ml-auto slide-in-right mt-10 lg:mt-0">
            <div className="bg-gradient-sky p-8 rounded-2xl max-w-md mx-auto lg:mx-0 hover-glow">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-primary mb-2">Blue Sky Dental Care</h3>
                <p className="text-muted-foreground">Multi-Speciality Clinic</p>

                <div className="flex items-center justify-center space-x-1 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 font-semibold">5.0</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">(266 patient stories)</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-sm text-muted-foreground">
                      54/55, 3rd Cross, Omkar Nagar, Arekere Gate, 
                      Landmark: Near to Reliance Mart, Bangalore
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium">Open Hours</p>
                    <p className="text-sm text-muted-foreground">Monday - Sunday: 9:00am to 10:00pm</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <Button 
                    className="w-full bg-gradient-primary hover:shadow-soft"
                    onClick={() => window.open('https://www.google.com/maps?sca_esv=48fe7a04eb7d5933&hl=en&gl=in&kgmid=/g/1tr7gtwp&shndl=30&shem=ptotplc,shrtsdl&kgs=c8bd44996920800a&um=1&ie=UTF-8&fb=1&sa=X&geocode=KfFg0SQlFa47MRYiCp77zgeS&daddr=54/55,+3rd+Cross+Rd,+Arakere+Gate,+Omkar+Nagar,+Arekere,+Bengaluru,+Karnataka+560076', '_blank')}
                  >
                    <MapPin className="mr-2 h-4 w-4" />
                    Get Directions
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
