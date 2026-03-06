import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import AnimatedTitle from '@/components/AnimatedTitle';
import {
  Truck,
  Package,
  Warehouse,
  Piano,
  Users,
  Star,
  ArrowRight,
  Phone,
  CheckCircle
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const whyUsRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.fromTo(
        '.hero-ribbon',
        { scale: 0, rotation: -35, opacity: 0 },
        { scale: 1, rotation: -16, opacity: 1, duration: 1, ease: 'back.out(1.5)', delay: 0.1 }
      );
      gsap.fromTo(
        '.hero-title',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
      );
      gsap.fromTo(
        '.hero-subtitle',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.5 }
      );
      gsap.fromTo(
        '.hero-buttons',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.7 }
      );
      gsap.fromTo(
        '.hero-truck',
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 0.4 }
      );

      // Services section
      gsap.fromTo(
        '.service-card',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: servicesRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Why Us section
      gsap.fromTo(
        '.why-us-item',
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: whyUsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Testimonials
      gsap.fromTo(
        '.testimonial-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: testimonialsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // CTA section
      gsap.fromTo(
        '.cta-content',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Watermark Parallax Effect
      gsap.to('.hero-watermark', {
        yPercent: 30, // Moves down slightly slower than the scroll, maintaining relative size offset
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1, // Smooth scrubbing
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: Truck,
      title: 'LOCAL & LONG DISTANCE',
      description: 'From cross-town moves to interstate relocations, we handle it all with care.',
      link: '/services',
      scrollTo: 'local-moves',
      image: '/images/Pic 3.webp',
      features: ['Local Moves', 'Interstate Relocations', 'Commercial Moving', 'Dedicated Fleet']
    },
    {
      icon: Package,
      title: 'PACKING SERVICES',
      description: 'Full or partial packing services with quality materials and expert care.',
      link: '/services',
      scrollTo: 'packing-services',
      image: '/images/Pic 5.webp',
      features: ['Full Home Packing', 'Partial Packing', 'Unpacking Services', 'Quality Materials']
    },
    {
      icon: Warehouse,
      title: 'STORAGE SOLUTIONS',
      description: 'Short-term and long-term storage options for your belongings.',
      link: '/services',
      scrollTo: 'storage-solutions',
      image: '/images/Pic 6.webp',
      features: ['Short-Term Storage', 'Long-Term Storage', 'Climate Controlled', 'Secure Facility']
    },
    {
      icon: Piano,
      title: 'SPECIALTY MOVES',
      description: 'Pianos, safes, antiques, and other heavy or fragile items.',
      link: '/services',
      scrollTo: 'specialty-moves',
      image: '/images/Pic 7.webp',
      features: ['Piano Moving', 'Gun Safes', 'Antiques', 'Fine Art']
    },
    {
      icon: Users,
      title: 'LABOR ONLY',
      description: 'Loading and unloading help for your rental truck or container.',
      link: '/services',
      scrollTo: 'labor-only',
      image: '/images/Pic 8.webp',
      features: ['Truck Loading', 'Truck Unloading', 'In-Home Moving', 'Container Loading']
    },
    {
      icon: Truck,
      title: 'SINGLE ITEM MOVES',
      description: 'Need just a refrigerator or couch moved? No job is too small!',
      link: '/services',
      scrollTo: 'single-item-moves',
      image: '/images/top of truck.webp',
      features: ['Appliance Delivery', 'Furniture Moving', 'Store Pickups', 'Heavy Item Transport']
    },
  ];


  const whyUsItems = [
    'Licensed, Bonded & Insured',
    '100% Satisfaction Guaranteed',
    'No Hidden Fees',
    'Experienced Professional Crews',
    'Same-Day Service Available',
    'Serving the Gulf Coast Since 2021',
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      location: 'Pensacola, FL',
      text: 'On time, friendly, and nothing scratched. Best move we\'ve ever had! Spencer\'s team made our move so easy.',
      rating: 5,
    },
    {
      name: 'James T.',
      location: 'Gulf Breeze, FL',
      text: 'They handled our piano like pros. Highly recommend Spencer\'s for any specialty moves. Very professional!',
      rating: 5,
    },
    {
      name: 'Elena R.',
      location: 'Navarre, FL',
      text: 'Quote was exactly what I paid. No hidden fees, no surprises. Honest company that does great work!',
      rating: 5,
    },
  ];

  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>Spencer's Moving Company | Top Rated Local & Long Distance Movers</title>
        <meta name="description" content="Spencer's Moving Company is the #1 rated moving company on the Gulf Coast. We provide professional, reliable, and stress-free local and long-distance moving services. Big or small, we move it all!" />
        <link rel="canonical" href="https://spencersmovingcompany.com/" />
      </Helmet>
      <section
        ref={heroRef}
        className="relative min-h-[105vh] pt-28 pb-40 flex items-center overflow-hidden bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/images/Blue_background.webp')" }}
      >
        {/* Watermark Logo */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
          <img
            src="/images/Spencer's_logo_top_only.svg"
            alt="Watermark silhouette"
            className="hero-watermark w-[120%] min-w-[800px] h-auto object-cover"
          />
        </div>

        <div className="relative w-full px-4 sm:px-6 lg:px-16 xl:px-24 pt-20 flex justify-center">
          <div className="max-w-4xl w-full relative">
            {/* Floating Satisfaction Ribbon */}
            <div className="hero-ribbon absolute hidden md:block -left-12 md:-left-20 lg:-left-32 top-10 xl:-left-36 xl:top-4 z-20">
              <img
                src="/images/Satisfaction_Guaranteed_Optimized.png"
                alt="100% Satisfaction Guaranteed"
                className="w-32 md:w-40 lg:w-48 xl:w-56 h-auto animate-float"
              />
            </div>

            {/* Center Content */}
            <div className="text-center relative z-10">
              <div className="hero-title">
                <span className="inline-block px-4 py-2 bg-[#D32F2F]/20 text-[#D32F2F] text-sm font-semibold uppercase tracking-wider rounded-full mb-6">
                  #1 Rated on the Gulf Coast
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#1B3B6F] leading-tight tracking-tight">
                  BIG OR SMALL,
                  <br />
                  <span className="text-[#D32F2F]">WE MOVE IT ALL</span>
                </h1>
              </div>

              <p className="hero-subtitle mt-6 text-lg sm:text-xl text-[#1B3B6F] font-medium max-w-xl mx-auto">
                Local and long-distance moving across the Gulf Coast—done right.
                From single items to full homes, Spencer's Moving Company has you covered.
              </p>

              <div className="hero-buttons mt-8 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-bold px-8 py-6 text-lg rounded-xl transition-all duration-200 hover:scale-105 shadow-lg shadow-[#D32F2F]/30"
                  >
                    Get a Free Quote
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <a href="tel:850-760-4588">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-[#1B3B6F] text-[#1B3B6F] hover:bg-[#1B3B6F] hover:text-white font-bold px-8 py-6 text-lg rounded-xl transition-all duration-200"
                  >
                    <Phone className="mr-2 w-5 h-5" />
                    (850) 760-4588
                  </Button>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="hero-buttons mt-10 flex items-center justify-center space-x-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#D32F2F] text-[#D32F2F]" />
                  ))}
                </div>
                <span className="text-[#1B3B6F]/80 font-medium text-sm">500+ Happy Customers</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <div className="w-6 h-10 border-2 border-[#1B3B6F]/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-[#1B3B6F]/60 rounded-full" />
          </div>
        </div>

        {/* SVG Wave Transition Bottom */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none z-10 w-full flex justify-center">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-[30px] sm:h-[50px] lg:h-[70px]"
          >
            <path
              d="M0,120 Q600,0 1200,120 Z"
              className="fill-[#EAF2FB]"
            />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 lg:py-28 bg-[#EAF2FB] relative z-20">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center mb-20 lg:mb-28">
            <AnimatedTitle className="text-4xl sm:text-5xl lg:text-5xl font-black text-[#1B3B6F]">
              OUR SERVICES
            </AnimatedTitle>
            <p className="mt-4 text-[#3A4A65] max-w-2xl mx-auto text-lg">
              From packing to delivery, we offer comprehensive moving solutions
              tailored to your needs. No job is too big or too small!
            </p>
          </div>

          <div className="flex flex-col gap-20 lg:gap-32">
            {services.map((service, index) => (
              <div
                key={index}
                className={`service-card flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                  }`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-[45%] relative group">
                  <div className={`relative rounded-[2rem] border-[4px] border-[#1B3B6F] shadow-[10px_10px_0px_#1B3B6F] bg-white overflow-hidden w-full aspect-[4/3] transition-transform duration-300 group-hover:-translate-y-2`}>
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  {/* Icon Badge */}
                  <div className={`absolute -bottom-6 ${index % 2 !== 0 ? '-left-6' : '-right-6'} w-20 h-20 rounded-full flex justify-center items-center shadow-[4px_4px_0px_#1B3B6F] z-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6
                    ${index % 2 === 0 ? 'bg-[#D32F2F] border-[3px] border-[#1B3B6F]' : 'bg-white border-[3px] border-[#1B3B6F]'}`}>
                    <service.icon className={`w-10 h-10 ${index % 2 === 0 ? 'text-white' : 'text-[#D32F2F]'}`} />
                  </div>
                </div>

                {/* Text Side */}
                <div className="w-full lg:w-[55%] flex flex-col items-start px-2 lg:px-0">
                  <h3 className="text-3xl sm:text-4xl font-black text-[#1B3B6F] mb-4 uppercase tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-[#3A4A65] text-lg leading-relaxed mb-6 lg:max-w-xl">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 w-full mb-8 lg:max-w-xl">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-[#1B3B6F] font-bold text-[15px]">
                        <div className={`w-3.5 h-3.5 rounded-full mr-3 border-2 border-[#1B3B6F] ${index % 2 === 0 ? 'bg-[#D32F2F]' : 'bg-[#1B3B6F]'}`} />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Link to={service.link} state={{ scrollTo: service.scrollTo }}>
                    <Button
                      className={`font-black uppercase tracking-wider text-sm sm:text-base px-6 py-6 sm:px-8 sm:py-7 rounded-2xl transition-all duration-300 hover:-translate-y-1 ${index % 2 === 0
                        ? 'bg-[#D32F2F] hover:bg-[#B71C1C] text-white border-[3px] border-[#1B3B6F] shadow-[6px_6px_0px_#1B3B6F]'
                        : 'bg-[#1B3B6F] hover:bg-[#0B1A33] text-white border-[3px] border-[#D32F2F] shadow-[6px_6px_0px_#D32F2F]'
                        }`}
                    >
                      Learn More <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section ref={whyUsRef} className="py-20 lg:py-28 bg-[#1B3B6F] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#0B1A33] skew-x-12 transform origin-top-right" />

        <div className="relative w-full px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Image */}
            <div className="relative">
              <img
                src="/images/fishing_team.jpg.webp"
                alt="Spencer's Moving Team Fishing For Your Business"
                className="rounded-3xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-10 -right-6 sm:-right-10 w-44 h-44 md:w-52 md:h-52 bg-[#D32F2F] text-white rounded-full flex flex-col items-center justify-center text-center shadow-[8px_8px_0px_#1B3B6F] border-[4px] border-[#1B3B6F] animate-float z-20">
                <p className="text-5xl md:text-6xl font-black">500+</p>
                <p className="text-sm md:text-base font-bold uppercase tracking-wider mt-1 px-4 leading-tight opacity-95">Moves<br />Completed</p>
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <AnimatedTitle className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                FISHING FOR
                <br />
                YOUR BUSINESS
              </AnimatedTitle>
              <p className="mt-6 text-white/70 text-lg leading-relaxed">
                At Spencer's Moving Company, we believe in earning your trust with
                every move. Our experienced crews treat your belongings like their own,
                ensuring a smooth, stress-free moving experience.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {whyUsItems.map((item, index) => (
                  <div
                    key={index}
                    className="why-us-item flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-[#D32F2F] flex-shrink-0" />
                    <span className="text-white/90 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link to="/about">
                  <Button
                    size="lg"
                    className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-bold px-8 py-6 rounded-xl transition-all duration-200 hover:scale-105"
                  >
                    Meet Our Team
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-20 lg:py-28 bg-[#EAF2FB]">
        <div className="w-full px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center mb-16">
            <span className="block text-[#D32F2F] font-semibold uppercase tracking-wider text-sm mb-3">
              Testimonials
            </span>
            <AnimatedTitle className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B3B6F] block">
              5-STAR SERVICE
            </AnimatedTitle>
            <p className="mt-4 text-[#3A4A65] max-w-2xl mx-auto">
              Homeowners across the Gulf Coast trust Spencer's Moving Company
              for their relocation needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="testimonial-card bg-white border-0 shadow-lg rounded-2xl overflow-hidden"
              >
                <CardContent className="p-6 lg:p-8">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#D32F2F] text-[#D32F2F]" />
                    ))}
                  </div>
                  <p className="text-[#3A4A65] leading-relaxed mb-6">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-[#1B3B6F] rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold text-[#1B3B6F]">{testimonial.name}</p>
                      <p className="text-sm text-[#3A4A65]">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 lg:py-28 bg-[#1B3B6F] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D32F2F] rounded-full blur-3xl" />
        </div>

        <div className="relative w-full px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="cta-content max-w-4xl mx-auto text-center">
            <AnimatedTitle className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white">
              LET'S GET MOVING
            </AnimatedTitle>
            <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
              Tell us what you're moving and when. We'll reply with a clear plan
              and a fair price. Get your free quote today!
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-bold px-10 py-7 text-lg rounded-xl transition-all duration-200 hover:scale-105 shadow-lg shadow-[#D32F2F]/30"
                >
                  Request My Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:850-760-4588">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 bg-transparent text-white hover:bg-white/10 font-bold px-10 py-7 text-lg rounded-xl transition-all duration-200"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
