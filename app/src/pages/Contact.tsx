import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import AnimatedTitle from '@/components/AnimatedTitle';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Facebook,
  Instagram,
  Star
} from 'lucide-react';
import { toast } from 'sonner';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const locationsRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    moveDate: '',
    fromAddress: '',
    toAddress: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(
        '.contact-hero-content',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      );

      // Form section
      gsap.fromTo(
        '.contact-form',
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Info cards
      gsap.fromTo(
        '.info-card',
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: infoRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Locations
      gsap.fromTo(
        '.location-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: locationsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast.success('Quote request submitted!', {
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      moveDate: '',
      fromAddress: '',
      toAddress: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '(850) 760-4588',
      link: 'tel:850-760-4588',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@spencersmovingcompany.com',
      link: 'mailto:info@spencersmovingcompany.com',
    },
    {
      icon: MapPin,
      title: 'Main Office',
      content: '4564 Gulf Breeze Pkwy, Gulf Breeze, FL 32563',
      link: 'https://maps.google.com',
    },
    {
      icon: Clock,
      title: 'Hours',
      content: 'Mon-Sun: 9:00 AM - 5:00 PM',
      link: null,
    },
  ];

  const serviceAreas = [
    { name: 'Pensacola, FL', status: 'active' },
    { name: 'Gulf Breeze, FL', status: 'active' },
    { name: 'Navarre, FL', status: 'active' },
    { name: 'Fort Walton Beach, FL', status: 'active' },
    { name: 'Destin, FL', status: 'active' },
    { name: 'Niceville, FL', status: 'active' },
    { name: 'Milton, FL', status: 'active' },
    { name: 'Pace, FL', status: 'active' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[50vh] flex items-center bg-[#1B3B6F] pt-20"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D32F2F] rounded-full blur-3xl" />
        </div>

        <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16">
          <div className="contact-hero-content text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-2 bg-[#D32F2F]/20 text-[#D32F2F] text-sm font-semibold uppercase tracking-wider rounded-full mb-6">
              Get In Touch
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              LET'S GET
              <span className="text-[#D32F2F]"> MOVING</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
              Tell us what you're moving and when. We'll reply with a clear plan
              and a fair price. Get your free quote today!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 lg:py-28 bg-[#EAF2FB]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <div ref={formRef} className="contact-form">
              <Card className="bg-white border-0 shadow-xl rounded-3xl overflow-hidden">
                <CardContent className="p-6 lg:p-10">
                  <div className="mb-8">
                    <AnimatedTitle className="text-2xl sm:text-3xl font-bold text-[#1B3B6F] mb-2 block">
                      Request a Free Quote
                    </AnimatedTitle>
                    <p className="text-[#3A4A65]">
                      Fill out the form below and we'll get back to you within 24 hours.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-[#1B3B6F] font-medium">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          required
                          className="h-12 rounded-xl border-gray-200 focus:border-[#D32F2F] focus:ring-[#D32F2F]"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-[#1B3B6F] font-medium">
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="(850) 555-0199"
                          required
                          className="h-12 rounded-xl border-gray-200 focus:border-[#D32F2F] focus:ring-[#D32F2F]"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-[#1B3B6F] font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        required
                        className="h-12 rounded-xl border-gray-200 focus:border-[#D32F2F] focus:ring-[#D32F2F]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="moveDate" className="text-[#1B3B6F] font-medium">
                        Preferred Move Date
                      </Label>
                      <Input
                        id="moveDate"
                        name="moveDate"
                        type="date"
                        value={formData.moveDate}
                        onChange={handleInputChange}
                        className="h-12 rounded-xl border-gray-200 focus:border-[#D32F2F] focus:ring-[#D32F2F]"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="fromAddress" className="text-[#1B3B6F] font-medium">
                          Moving From
                        </Label>
                        <Input
                          id="fromAddress"
                          name="fromAddress"
                          value={formData.fromAddress}
                          onChange={handleInputChange}
                          placeholder="Current address"
                          className="h-12 rounded-xl border-gray-200 focus:border-[#D32F2F] focus:ring-[#D32F2F]"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="toAddress" className="text-[#1B3B6F] font-medium">
                          Moving To
                        </Label>
                        <Input
                          id="toAddress"
                          name="toAddress"
                          value={formData.toAddress}
                          onChange={handleInputChange}
                          placeholder="New address"
                          className="h-12 rounded-xl border-gray-200 focus:border-[#D32F2F] focus:ring-[#D32F2F]"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-[#1B3B6F] font-medium">
                        Additional Details
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your move (size, special items, etc.)"
                        rows={4}
                        className="rounded-xl border-gray-200 focus:border-[#D32F2F] focus:ring-[#D32F2F] resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-bold h-14 rounded-xl transition-all duration-200 hover:scale-[1.02] disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="mr-2 w-5 h-5" />
                          Request My Quote
                        </span>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div ref={infoRef} className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="info-card bg-white border-0 shadow-lg rounded-2xl hover:shadow-xl transition-shadow duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#1B3B6F] rounded-xl flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#1B3B6F] mb-1">{info.title}</h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            target={info.link.startsWith('http') ? '_blank' : undefined}
                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-[#3A4A65] hover:text-[#D32F2F] transition-colors"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-[#3A4A65]">{info.content}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Social Links */}
              <Card className="info-card bg-[#1B3B6F] border-0 shadow-lg rounded-2xl">
                <CardContent className="p-6">
                  <h3 className="font-bold text-white mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-[#D32F2F] transition-colors"
                    >
                      <Facebook className="w-6 h-6 text-white" />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-[#D32F2F] transition-colors"
                    >
                      <Instagram className="w-6 h-6 text-white" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Satisfaction Guarantee */}
              <div className="info-card bg-gradient-to-br from-[#D32F2F] to-[#B71C1C] rounded-2xl p-6 text-white">
                <div className="flex items-center space-x-4">
                  <img
                    src="/images/Spencers_Satisfaction_ribbon.svg"
                    alt="100% Satisfaction"
                    className="h-20 w-auto"
                  />
                  <div>
                    <h3 className="font-bold text-lg">100% Satisfaction Guaranteed</h3>
                    <p className="text-white/80 text-sm mt-1">
                      We're not happy until you're happy. That's our promise.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section ref={locationsRef} className="py-20 lg:py-28 bg-[#1B3B6F]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-16">
            <span className="text-[#D32F2F] font-semibold uppercase tracking-wider text-sm">
              Where We Operate
            </span>
            <AnimatedTitle className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white block">
              SERVICE AREAS
            </AnimatedTitle>
            <p className="mt-4 text-white/70 max-w-2xl mx-auto">
              Proudly serving the Florida Panhandle. New locations coming soon!
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {serviceAreas.map((area, index) => (
              <div
                key={index}
                className="location-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 flex items-center space-x-3 hover:bg-white/10 transition-colors"
              >
                <CheckCircle className="w-5 h-5 text-[#D32F2F] flex-shrink-0" />
                <span className="text-white font-medium">{area.name}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-white/60 text-sm">
              Don't see your area? Contact us—we may still be able to help!
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-[#EAF2FB]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-[#D32F2F] text-[#D32F2F]" />
              ))}
            </div>
            <AnimatedTitle className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B3B6F] block">
              READY TO MOVE?
            </AnimatedTitle>
            <p className="mt-6 text-lg sm:text-xl text-[#3A4A65] max-w-2xl mx-auto">
              Don't wait—schedule your move today and experience the Spencer's difference.
              Big or small, we move it all!
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="tel:850-760-4588">
                <Button
                  size="lg"
                  className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-bold px-10 py-7 text-lg rounded-xl transition-all duration-200 hover:scale-105 shadow-lg shadow-[#D32F2F]/30"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call (850) 760-4588
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
