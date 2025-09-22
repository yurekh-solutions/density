import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "ESHAN SIL",
      date: "7 days ago",
      rating: 5,
      text: "I visited Blue Sky Dental Care for a dental scaling and had a wonderful experience. The doctor was excellent — very skilled, gentle, and reassuring throughout the procedure. The clinic has a warm and welcoming vibe, with soothing background music that really helped me feel relaxed. A special mention to the assistant, who was equally attentive and supportive. Overall, I'm very satisfied and would highly recommend Blue Sky Dental Care!",
      treatment: "Dental Scaling"
    },
    {
      name: "Lakshata Shetty",
      date: "17 days ago", 
      rating: 5,
      text: "Doctor Satish has carried out my entire treatment very nicely and painfree. The overall experience was fantastic and would recommend others also to visit for any teeth related treatment and checkup. The most friendly doctor in town.",
      treatment: "Complete Treatment"
    },
    {
      name: "Seema Ramdasi",
      date: "1 month ago",
      rating: 5,
      text: "Had to go a root canal and was honestly dreading it but Dr Satish completely changed the experience. Absolutely no pain, super gentle and they kept checking. Exceptional!",
      treatment: "Root Canal"
    },
    {
      name: "Shilpa Borde",
      date: "1 month ago",
      rating: 5,
      text: "I got my veneers done at Blue Sky Dental Care and honestly the difference is amazing. The Doctors really took time to understand what I wanted and the result looks so natural.",
      treatment: "Veneers"
    },
    {
      name: "Federico Diaz Lopez",
      date: "2 months ago",
      rating: 5,
      text: "Good combination. A doctor (science) and a musician (another aspect of science) The Blue Sky Dental Care. I met this couple in Scotland (Europe), sightseeing that part of the world. I soon realized how brilliant both of them were. I can assure that if I weren't so far away (Spain) from the surgery room, I would definitely go and have my teeth fixed and renewed my dental apparatus. Good professionals on whom one can really trust. God bless you and I wish you the BEST in your careers.",
      treatment: "Consultation"
    },
    {
      name: "Shubhendu Lalit",
      date: "2 months ago",
      rating: 5,
      text: "I hate dental appointments but this was a pleasant experience after having multiple bad experiences at other clinics. Dr Satish is very friendly and explained everything in depth, which made me feel calm and confident in his abilities. I got my wisdom tooth removed, and had a great experience. The clinic has a very positive vibe. 10/10 dentists would recommend.",
      treatment: "Wisdom Tooth Removal"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-sky">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Patient Stories
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            REAL STORIES, REAL SMILES
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            See why our patients trust us with their dental care.
          </p>
          
          {/* Google Rating */}
          <div className="flex items-center justify-center space-x-2 mt-6">
            <span className="text-sm font-medium">Excellent on Google</span>
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-2xl font-bold">5.0</span>
            <span className="text-sm text-muted-foreground">(266)</span>
          </div>
        </div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <Card className="glass-card hover-glow">
            <CardContent className="p-8 md:p-12">
              <Quote className="h-12 w-12 text-primary/30 mb-6" />
              
              <div className="mb-6">
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                  "{testimonials[currentIndex].text}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-lg">{testimonials[currentIndex].name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonials[currentIndex].date}</p>
                    <Badge variant="outline" className="mt-2">
                      {testimonials[currentIndex].treatment}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full hover:bg-primary/10"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            {/* Dots Indicator */}
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-primary w-8' 
                      : 'bg-muted-foreground/30 hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full hover:bg-primary/10"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <Card 
              key={testimonial.name} 
              className="glass-card hover-glow cursor-pointer transition-all duration-300 hover:scale-105"
              onClick={() => setCurrentIndex(index)}
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  "{testimonial.text.substring(0, 120)}..."
                </p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-muted-foreground">{testimonial.date}</p>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {testimonial.treatment}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Google Review CTA */}
        <div className="text-center mt-12">
          <Button 
            onClick={() => window.open('https://g.page/r/your-google-business-id/review', '_blank')}
            className="bg-gradient-primary hover:shadow-floating"
          >
            Review us on Google
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;