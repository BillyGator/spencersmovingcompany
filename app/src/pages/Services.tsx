import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import AnimatedTitle from '@/components/AnimatedTitle';
import {
  Truck,
  Package,
  Warehouse,
  Piano,
  Users,
  Home,
  Building2,
  Car,
  Armchair,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Scroll to specific service when navigating from Home page
  useEffect(() => {
    const scrollTo = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (scrollTo) {
      const el = document.getElementById(scrollTo);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 400);
      }
    }
  }, [location.state]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(
        '.services-hero-content',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      );

      // Service cards
      gsap.fromTo(
        '.service-detail-card',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: servicesRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Process steps
      gsap.fromTo(
        '.process-step',
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: processRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const mainServices = [
    {
      id: 'local-moves',
      icon: Home,
      title: 'Local Moves',
      description: 'Moving within the same city or nearby? Our local moving service is perfect for short-distance relocations. We handle everything from studio apartments to large family homes.',
      features: [
        'Same-day service available',
        'Hourly or flat-rate pricing',
        'Trained, professional crews',
        'Fully equipped trucks',
        'Furniture protection included',
      ],
      image: '/images/local_move_infographic_v3.webp',
    },
    {
      id: 'long-distance-moves',
      icon: Truck,
      title: 'Long Distance Moves',
      description: 'Relocating across Florida or out of state? We provide reliable long-distance moving services with careful planning and tracking to ensure your belongings arrive safely.',
      features: [
        'Interstate moving expertise',
        'Detailed inventory tracking',
        'Flexible delivery windows',
        'Competitive flat-rate pricing',
        'Licensed for interstate moves',
      ],
      image: '/images/long_distance_move_infographic_v3.webp',
    },
    {
      id: 'packing-services',
      icon: Package,
      title: 'Packing Services',
      description: 'Don\'t want to deal with the hassle of packing? Our professional packers use quality materials to protect your belongings, from fragile items to bulky furniture.',
      features: [
        'Full home packing',
        'Partial packing (kitchen, fragile items)',
        'Quality packing materials',
        'Custom crating available',
        'Unpacking services',
      ],
      image: '/images/packing_services_infographic_v6.webp',
    },
    {
      id: 'storage-solutions',
      icon: Warehouse,
      title: 'Storage Solutions',
      description: 'Need a place to store your belongings? We offer secure short-term and long-term storage options for residential and commercial customers.',
      features: [
        'Short-term storage',
        'Long-term storage',
        'Climate-controlled options',
        'Secure facility',
        'Easy access to your items',
      ],
      image: '/images/storage_solutions_infographic_v2.webp',
    },
    {
      id: 'specialty-moves',
      icon: Piano,
      title: 'Specialty Moves',
      description: 'Have heavy, fragile, or valuable items? Our specialty moving service handles pianos, safes, antiques, artwork, and other items that require extra care.',
      features: [
        'Piano & organ moving',
        'Gun safe relocation',
        'Antique furniture',
        'Artwork & sculptures',
        'Appliance moving',
      ],
      image: '/images/specialty_moves_infographic.webp',
    },
    {
      id: 'labor-only',
      icon: Users,
      title: 'Labor Only',
      description: 'Renting your own truck? Our labor-only service provides professional movers to load and unload your belongings, saving you time and preventing injuries.',
      features: [
        'Load / unload rental trucks',
        'Load / unload storage containers',
        'In-home furniture rearranging',
        'Single-item moves',
        'Hourly rates available',
      ],
      image: '/images/labor_only_infographic.webp',
    },
    {
      id: 'single-item-moves',
      icon: Armchair,
      title: 'Single Item Moves',
      description: 'No job is too small! Need just one piece of furniture or a single appliance moved across town? Our team will handle it quickly and safely — no full truck required.',
      features: [
        'Furniture delivery & placement',
        'Appliance moves',
        'Store pickups & deliveries',
        'Heavy or bulky single items',
        'No minimum move size',
      ],
      image: '/images/single_item_moves_infographic.webp',
    },
  ];

  const additionalServices = [
    {
      icon: Building2,
      title: 'Commercial Moves',
      description: 'Office relocations, retail moves, and business transfers with minimal downtime.',
    },
    {
      icon: Car,
      title: 'Vehicle Transport',
      description: 'We can arrange transport for cars, trucks, boats, and other vehicles.',
    },
    {
      icon: Home,
      title: 'Senior Moves',
      description: 'Compassionate, patient service for seniors downsizing or moving to assisted living.',
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Free Quote',
      description: 'Contact us for a free, no-obligation quote. We\'ll discuss your needs and provide upfront pricing.',
    },
    {
      number: '02',
      title: 'Schedule',
      description: 'Choose a date and time that works for you. We offer flexible scheduling including weekends.',
    },
    {
      number: '03',
      title: 'Pack (Optional)',
      description: 'Our team can pack your belongings with care, or you can pack yourself—we\'ll provide tips!',
    },
    {
      number: '04',
      title: 'Move Day',
      description: 'Our professional crew arrives on time, handles your belongings with care, and gets you settled.',
    },
  ];

  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>Moving Services | Spencer's Moving Company</title>
        <meta name="description" content="From local and long-distance moves to packing and storage, Spencer's Moving Company offers comprehensive moving solutions tailored to your needs." />
        <link rel="canonical" href="https://spencersmovingcompany.com/services" />
      </Helmet>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[60vh] flex items-center bg-[#1B3B6F] pt-20"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D32F2F] rounded-full blur-3xl" />
        </div>

        <div className="relative w-full px-4 sm:px-6 lg:px-16 xl:px-24 py-20">
          <div className="services-hero-content text-center max-w-4xl mx-auto">

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              OUR
              <span className="text-[#D32F2F]"> SERVICES</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
              From single-item moves to full-service relocations, we offer
              comprehensive moving solutions tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section ref={servicesRef} className="py-20 lg:py-28 bg-[#EAF2FB]">
        <div className="w-full px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="space-y-20">
            {mainServices.map((service, index) => (
              <div
                key={index}
                id={service.id}
                className={`service-detail-card grid lg:grid-cols-2 gap-10 lg:gap-16 items-center scroll-mt-28 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className={`service-float rounded-3xl ${['Local Moves', 'Long Distance Moves', 'Packing Services', 'Storage Solutions', 'Specialty Moves', 'Labor Only', 'Single Item Moves'].includes(service.title) ? 'w-[60%] mx-auto' : 'w-full'
                        }`}
                      style={{ animationDelay: `${index * 0.65}s` }}
                    />

                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <AnimatedTitle className="text-3xl sm:text-4xl font-bold text-[#1B3B6F] mb-4 block">
                    {service.title}
                  </AnimatedTitle>
                  <p className="text-[#3A4A65] text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, fIndex) => (
                      <div
                        key={fIndex}
                        className="flex items-center space-x-3"
                      >
                        <CheckCircle className="w-5 h-5 text-[#D32F2F] flex-shrink-0" />
                        <span className="text-[#3A4A65]">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link to="/contact">
                    <Button
                      className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-semibold px-8 py-6 rounded-xl transition-all duration-200 hover:scale-105"
                    >
                      Get a Quote
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 lg:py-28 bg-[#1B3B6F]">
        <div className="w-full px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center mb-16">
            <AnimatedTitle className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white block">
              ADDITIONAL SERVICES
            </AnimatedTitle>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 pb-8">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="relative bg-white rounded-3xl p-6 lg:p-8 border-[4px] border-[#D32F2F] shadow-[6px_6px_0_#050D1A] transition-transform duration-300 hover:-translate-y-1 flex flex-col"
              >
                <h3 className="text-xl font-black text-[#1B3B6F] mb-3 uppercase tracking-wide">
                  {service.title}
                </h3>
                <p className="text-[#3A4A65] text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                {/* Floating icon emblem */}
                <div className="absolute -bottom-6 -right-4 w-12 h-12 rounded-full bg-[#D32F2F] border-[3px] border-[#050D1A] flex items-center justify-center shadow-[4px_4px_0_#050D1A]">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Our Process */}
      <section ref={processRef} className="py-20 lg:py-28 bg-[#EAF2FB]">
        <div className="w-full px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center mb-16">
            <AnimatedTitle className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B3B6F] block">
              OUR PROCESS
            </AnimatedTitle>
            <p className="mt-4 text-[#3A4A65] max-w-2xl mx-auto">
              We've streamlined the moving process to make your experience
              as smooth and stress-free as possible.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pt-6">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="process-step relative bg-white rounded-[2rem] border-[4px] border-[#1B3B6F] shadow-[10px_10px_0px_#1B3B6F] p-6 lg:p-8 transition-transform duration-300 hover:-translate-y-2"
              >
                {/* Number badge top-left */}
                <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-[#D32F2F] border-[3px] border-[#1B3B6F] flex items-center justify-center shadow-[4px_4px_0px_#1B3B6F] z-10">
                  <span className="text-white font-black text-lg leading-none">{step.number}</span>
                </div>

                <h3 className="text-xl font-black text-[#1B3B6F] mb-3 uppercase tracking-wide mt-2">
                  {step.title}
                </h3>
                <p className="text-[#3A4A65] text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-[#1B3B6F] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D32F2F] rounded-full blur-3xl" />
        </div>

        <div className="relative w-full px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-[#D32F2F] text-[#D32F2F]" />
              ))}
            </div>
            <AnimatedTitle className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white block">
              READY TO GET MOVING?
            </AnimatedTitle>
            <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
              Contact us today for a free, no-obligation quote. Let's make your
              next move your best move!
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-bold px-10 py-7 text-lg rounded-xl transition-all duration-200 hover:scale-105 shadow-lg shadow-[#D32F2F]/30"
                >
                  Get Your Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
