import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const FAQ = () => {
  const faqs = [
    {
      question: "Are General Dentistry procedures painful?",
      answer: "At Blue Sky Dental Care, we prioritize your comfort. Dr. Satish Kumar uses modern techniques and gentle approaches to minimize discomfort. For procedures that might cause discomfort, we offer various pain management options including local anesthesia and sedation to ensure a comfortable experience."
    },
    {
      question: "How common is dental anxiety?",
      answer: "Dental anxiety is very common, affecting about 10-15% of people. We understand this concern and have created a calming environment with soothing music and a gentle approach. Dr. Satish is known for his reassuring demeanor and takes time to explain procedures, helping patients feel more relaxed and confident."
    },
    {
      question: "Will I need to have someone drive me home following General Dentistry?",
      answer: "For most general dentistry procedures like cleanings, fillings, or routine check-ups, you can drive yourself home. However, if you receive sedation or undergo more complex procedures, we recommend arranging transportation. We'll always inform you beforehand if driving restrictions apply."
    },
    {
      question: "How much does Dental treatments cost?",
      answer: "Treatment costs vary depending on the specific procedure and your individual needs. We offer transparent pricing and will provide a detailed treatment plan with costs before beginning any work. We also offer various payment options and can discuss treatment alternatives to fit your budget."
    },
    {
      question: "What are Veneers?",
      answer: "Veneers are thin, custom-made shells designed to cover the front surface of teeth. They're made from porcelain or composite resin and can dramatically improve the appearance of your smile by correcting issues like discoloration, chips, gaps, or misalignment. The process typically takes 2-3 visits."
    },
    {
      question: "How long does Teeth whitening typically last?",
      answer: "Professional teeth whitening results typically last 1-3 years, depending on your lifestyle habits. Factors like consuming coffee, tea, wine, or tobacco can affect longevity. We provide take-home maintenance kits and recommend touch-up treatments to help maintain your bright smile."
    },
    {
      question: "What should I do with my bleeding gums?",
      answer: "Bleeding gums often indicate gum disease or inflammation. Don't ignore this symptom - schedule an appointment immediately. In the meantime, maintain gentle brushing, use an antimicrobial mouthwash, and avoid tobacco. Our team can provide professional cleaning and develop a treatment plan to restore your gum health."
    },
    {
      question: "When should a child be taken to the dentist for their first checkup?",
      answer: "We recommend bringing your child for their first dental visit by age 1 or within 6 months of their first tooth appearing. Early visits help establish good oral hygiene habits and allow us to monitor proper dental development. Our pediatric-friendly approach makes these visits comfortable for children."
    },
    {
      question: "Do you have Car Parking?",
      answer: "Yes, we provide convenient parking facilities for our patients. Our clinic is located near Reliance Mart on Bannerghatta Road, making it easily accessible. If you have any trouble finding parking, please call us at 8047111989 and our staff will assist you."
    }
  ];

  return (
    <section className="py-20 bg-gradient-sky">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            FAQ
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Your Dental Questions, Answered
          </h2>
          <p className="text-lg text-muted-foreground">
            Find Clear and Helpful Information About Your Dental Care
          </p>
        </div>

        <div className="glass-card rounded-lg p-6 hover-glow">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open('tel:+919136242706')}
              className="px-6 py-3 bg-gradient-primary text-white rounded-lg hover:shadow-floating transition-all duration-300"
            >
              Call us: 8047111989
            </button>
            <button
              onClick={() => {
                const message = "Hi! I have some questions about dental treatments at Blue Sky Dental Care.";
                window.open(`https://wa.me/919136242706?text=${encodeURIComponent(message)}`, '_blank');
              }}
              className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-all duration-300"
            >
              WhatsApp Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;