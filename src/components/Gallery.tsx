import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ZoomIn } from "lucide-react";

// ✅ Importing asset images
import image56 from '../assets/image56.jpg';
import image57 from '../assets/image57.webp';
import image58 from '../assets/image58.webp';
import image59 from '../assets/image59.webp';
import image60 from '../assets/image60.webp';
import image61 from '../assets/image61.webp';
import image62 from '../assets/image62.webp';
import image63 from '../assets/image63.webp';
import image64 from '../assets/image64.webp';
import image65 from '../assets/image65.webp';
import image76 from '../assets/image76.jpeg';
import image90 from '../assets/image90.jpeg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // ✅ Use imported asset images
  const galleryImages = [
    { id: 1, src: image56, alt: "Modern Dental Chair", category: "interior" },
    { id: 2, src: image57, alt: "Dental Instruments", category: "equipment" },
    { id: 3, src: image58, alt: "Reception Area", category: "interior" },
    { id: 4, src: image59, alt: "Patient Examination", category: "treatment" },
    { id: 5, src: image60, alt: "Treatment Room", category: "interior" },
    { id: 6, src: image61, alt: "Advanced Equipment", category: "equipment" },
    { id: 7, src: image62, alt: "Hygiene Station", category: "treatment" },
    { id: 8, src: image63, alt: "Patient Care", category: "treatment" },
    { id: 9, src: image64, alt: "Waiting Area", category: "interior" },
    { id: 10, src: image65, alt: "Consultation Room", category: "interior" },
    { id: 11, src: image76, alt: "Digital X-Ray", category: "equipment" },
    { id: 12, src: image90, alt: "Doctor Consultation", category: "treatment" },
  ];

  const categories = [
    { id: 'all', name: 'All', count: galleryImages.length },
    { id: 'interior', name: 'Interior', count: galleryImages.filter(img => img.category === 'interior').length },
    { id: 'equipment', name: 'Equipment', count: galleryImages.filter(img => img.category === 'equipment').length },
    { id: 'treatment', name: 'Treatment', count: galleryImages.filter(img => img.category === 'treatment').length }
  ];

  const [activeCategory, setActiveCategory] = useState('all');
  const filteredImages =
    activeCategory === 'all'
      ? galleryImages
      : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Our Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            See the Transformation Through Our Modern Facility and Patient Care
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-primary text-white shadow-glow"
                  : "glass-card hover:bg-primary/10 text-muted-foreground hover:text-primary"
              }`}
            >
              {category.name} ({category.count})
            </motion.button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, rotateY: 5 }}
              className="group relative overflow-hidden rounded-xl glass-card hover-glow cursor-pointer interactive-card"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="aspect-square">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium">{image.alt}</p>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <ZoomIn className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
            <div className="relative">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 right-0 z-10 w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              {selectedImage && (
                <img src={selectedImage} alt="Gallery image" className="w-full h-auto rounded-lg" />
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;
