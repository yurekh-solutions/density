import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingButtons = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I would like to book an appointment at Blue Sky Dental Care.");
    window.open(`https://wa.me/919136242706?text=${message}`, '_blank');
  };

  const handleCallClick = () => {
    window.open('tel:+919136242706');
  };

  return (
    <div className="fixed right-4 bottom-6 z-40 flex flex-col space-y-3">
      {/* WhatsApp Button */}
      <Button
        onClick={handleWhatsAppClick}
        size="lg"
        className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 shadow-floating hover:scale-110 transition-all duration-300 p-0"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </Button>

      {/* Call Button */}
      <Button
        onClick={handleCallClick}
        size="lg"
        className="h-14 w-14 rounded-full bg-gradient-primary shadow-floating hover:scale-110 transition-all duration-300 p-0 pulse-slow"
        aria-label="Call us"
      >
        <Phone className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default FloatingButtons;