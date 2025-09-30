import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, MessageCircle, Mail, MapPin, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/Header';

const Contact = () => {
  const contactMethods = [
    {
      icon: Instagram,
      title: "Instagram",
      description: "Follow us for latest updates",
      value: "@elegance.perfumes",
      link: "https://instagram.com/elegance.perfumes",
      gradient: "from-rose-gold to-champagne"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp", 
      description: "Direct messaging for instant support",
      value: "+91 98765 43210",
      link: "https://wa.me/919876543210",
      gradient: "from-champagne to-rose-gold"
    },
    {
      icon: Mail,
      title: "Email",
      description: "Send us your inquiries",
      value: "hello@eleganceperfumes.com",
      link: "mailto:hello@eleganceperfumes.com",
      gradient: "from-accent to-primary"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold bg-gradient-luxury bg-clip-text text-white mb-6"
          >
            Get in Touch
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            We'd love to hear from you. Reach out through any of these channels for personalized fragrance consultations and support.
          </motion.p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Card className="luxury-card border-0 h-full relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <CardContent className="p-8 text-center relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${method.gradient} flex items-center justify-center shadow-lg`}
                    >
                      <method.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold mb-3 text-foreground">{method.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{method.description}</p>
                    
                    <div className="mb-6">
                      <p className="font-semibold text-lg text-accent">{method.value}</p>
                    </div>
                    
                    <Button
                      asChild
                      className={`w-full bg-gradient-to-r ${method.gradient} text-white hover:shadow-lg hover-glow font-semibold`}
                    >
                      <a href={method.link} target="_blank" rel="noopener noreferrer">
                        Connect Now
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-accent/5 to-primary/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Card className="luxury-card border-0 p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <div className="flex items-center mb-4">
                    <MapPin className="h-6 w-6 text-accent mr-3" />
                    <h3 className="text-xl font-bold">Visit Our Store</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Experience our luxury fragrances in person at our flagship boutique.
                  </p>
                  <p className="font-medium text-foreground">
                    123 Fragrance Lane<br />
                    Mumbai, Maharashtra 400001<br />
                    India
                  </p>
                </div>
                
                <div className="text-left">
                  <div className="flex items-center mb-4">
                    <Phone className="h-6 w-6 text-accent mr-3" />
                    <h3 className="text-xl font-bold">Business Hours</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    We're here to help you find your perfect scent.
                  </p>
                  <div className="space-y-1 text-foreground">
                    <p><span className="font-medium">Mon - Sat:</span> 10:00 AM - 8:00 PM</p>
                    <p><span className="font-medium">Sunday:</span> 11:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;