"use client";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  Star,
  Trophy,
  ClockClockwise,
  Flask,
  Shield,
  Heart,
} from "phosphor-react"; // ✅ All from Phosphor
import { motion } from "framer-motion";

const About = () => {
  const achievements = [
    { icon: ClockClockwise, value: "8+", label: "Years of Experience" },
    { icon: Users, value: "266+", label: "Happy Patients" },
    { icon: Star, value: "5.0", label: "Google Rating" },
    { icon: Trophy, value: "100%", label: "Success Rate" },
  ];

  const expertise = [
    "Expertise in Microscopic Root Canal Treatment",
    "Painless and Minimally Invasive Techniques",
    "Gentle and Reassuring Demeanor",
    "Pain and Anxiety Management",
    "Strong Specialists Team and Referral Network",
  ];

  const commitments = [
    {
      icon: Flask, // replaced Microscope
      title: "Advanced Technology",
      description:
        "We use the latest dental technology and techniques for superior care.",
    },
    {
      icon: Shield,
      title: "Safety Standards",
      description:
        "Strict sterilization and hygiene practices for a clean, safe environment.",
    },
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description:
        "Personalized treatment plans focused on your comfort and goals.",
    },
  ];

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Meet Our Expert
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Dr. Satish Kumar
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Leading Blue Sky Dental Care with expertise and compassion
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Bio */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <Card className="glass-card p-8 hover-glow">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  MDS in Conservative Dentistry & Endodontics
                </h3>
                <p className="text-muted-foreground mb-6">
                  Dr. Satish Kumar is a highly experienced dentist and root canal
                  specialist based in Bannerghatta Road, Bangalore. With over 8
                  years of expertise in Conservative Dentistry & Endodontics
                  (BDS, MDS), he is dedicated to providing gentle, comprehensive
                  care for patients of all ages.
                </p>
                <p className="text-muted-foreground mb-6">
                  At Blue Sky Dental Care, he offers services ranging from
                  routine check-ups to advanced treatments such as Full Mouth
                  Rehabilitation, Single Sitting RCT, Implants, Whitening,
                  Braces & Aligners, and Pediatric Dentistry.
                </p>
                <div className="space-y-3">
                  {expertise.map((item, i) => (
                    <motion.div
                      key={i}
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeUp}
                      className="flex items-start space-x-3"
                    >
                      <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right - Stats */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {achievements.map((ach, i) => {
              const Icon = ach.icon;
              return (
                <motion.div
                  key={ach.label}
                  custom={i}
                  variants={fadeUp}
                  className="glass-card hover-glow text-center p-6"
                >
                  <CardContent className="p-0">
                    <div className="bg-gradient-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Icon size={32} className="text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">
                      {ach.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {ach.label}
                    </div>
                  </CardContent>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Commitment */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-8">
            Our Commitment to Excellence
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {commitments.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="glass-card p-6 rounded-lg hover-glow"
                >
                  <Icon size={40} className="text-primary mx-auto mb-4" />
                  <h4 className="text-lg font-semibold mb-3">{c.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {c.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
