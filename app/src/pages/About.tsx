import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent } from '@/components/ui/card';
import AnimatedTitle from '@/components/AnimatedTitle';
import {
  Pin,
  Star,
  CheckCircle
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(
        '.about-hero-content',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      );

      // Story section
      gsap.fromTo(
        '.story-content',
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: storyRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.story-image',
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: storyRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Circle callout animation
      gsap.fromTo(
        '.circle-callout',
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: 'back.out(1.5)', delay: 0.3 }
      );

      // Values cards
      gsap.fromTo(
        '.value-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: valuesRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Stats
      gsap.fromTo(
        '.stat-item',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const values = [
    {
      image: '/images/value_customer_first_medal.png',
      title: 'Customer First',
      description: 'We treat every move like it\'s our own, ensuring your belongings arrive safely.',
    },
    {
      image: '/images/value_trust_integrity.png',
      title: 'Trust & Integrity',
      description: 'Licensed, bonded, and insured with transparent pricing and no hidden fees.',
    },
    {
      image: '/images/value_excellence.png',
      title: 'Excellence',
      description: 'We strive for 100% satisfaction on every move, big or small.',
    },
    {
      image: '/images/value_community.png',
      title: 'Community',
      description: 'Proudly serving the Gulf Coast community we call home.',
    },
  ];

  const stats = [
    { number: '500+', label: 'Moves Completed' },
    { number: '3+', label: 'Years Experience' },
    { number: '8', label: 'Service Areas' },
    { number: '100%', label: 'Satisfaction Goal' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[60vh] flex items-center bg-[#1B3B6F] pt-20"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D32F2F] rounded-full blur-3xl" />
        </div>

        <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-20">
          <div className="about-hero-content text-center max-w-4xl mx-auto relative">

            {/* Animated Circle Callout graphic */}
            <div className="circle-callout absolute -right-4 md:-right-10 lg:-right-16 -top-12 md:-top-16 z-20 w-36 h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 bg-[#D32F2F] text-white rounded-full flex flex-col items-center justify-center text-center shadow-[8px_8px_0px_rgba(0,0,0,0.3)] border-[4px] border-white animate-float">
              <p className="text-base md:text-lg lg:text-xl font-bold uppercase tracking-wider leading-tight opacity-95">Big or small,</p>
              <p className="text-xl md:text-2xl lg:text-3xl font-black mt-1 leading-tight">WE MOVE<br />IT ALL!</p>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              MEET SPENCER'S
              <br />
              <span className="text-[#D32F2F]">MOVING COMPANY</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
              Founded by Spencer Bethel, Spencer's Moving Company is a mid-sized moving company rated #1 on the Gulf Coast.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section ref={storyRef} className="py-20 lg:py-28 bg-[#EAF2FB]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Content */}
            <div className="story-content">
              <AnimatedTitle className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B3B6F] block text-left">
                OUR STORY
              </AnimatedTitle>
              <div className="mt-6 space-y-4 text-[#3A4A65] leading-relaxed">
                <p>
                  Spencer's Moving Company was founded in 2021 by Spencer Bethel,
                  a lifelong resident of the Florida Panhandle with a passion for
                  helping people and a vision for creating a different kind of moving company.
                </p>
                <p>
                  Starting with just one truck and a small crew, Spencer built the
                  company on the principles of honesty, hard work, and treating every
                  customer like family. The company's slogan, "Big or small, we move it all,"
                  reflects our commitment to handling any job with the same level of care
                  and professionalism.
                </p>
                <p>
                  Today, Spencer's Moving Company has grown to serve Pensacola, Gulf Breeze,
                  Navarre, Fort Walton Beach, and surrounding areas. We've completed over
                  500 moves and maintain our reputation as the #1 rated moving company
                  on the Gulf Coast.
                </p>
              </div>

              <div className="mt-8 flex items-center space-x-4">
                <img
                  src="/images/Spencers_Satisfaction_ribbon.svg"
                  alt="100% Satisfaction Guaranteed"
                  className="h-24 w-auto"
                />
                <div>
                  <p className="font-bold text-[#1B3B6F]">Spencer Bethel</p>
                  <p className="text-sm text-[#3A4A65]">Founder & Owner</p>
                </div>
              </div>
            </div>

            {/* Right - Image */}
            <div className="story-image relative">
              <img
                src="/images/3 trucks.jpg"
                alt="Spencer's Moving Fleet"
                className="rounded-3xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-10 -left-6 sm:-left-10 w-44 h-44 md:w-52 md:h-52 bg-[#D32F2F] text-white rounded-full flex flex-col items-center justify-center text-center shadow-[8px_8px_0px_#1B3B6F] border-[4px] border-[#1B3B6F] animate-float z-20">
                <p className="text-sm md:text-base font-bold uppercase tracking-wider mb-1 px-4 leading-tight opacity-95">Since</p>
                <p className="text-5xl md:text-6xl font-black">2021</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section ref={valuesRef} className="py-20 lg:py-28 bg-[#1B3B6F]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-16">
            <AnimatedTitle className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white block">
              OUR VALUES
            </AnimatedTitle>
            <p className="mt-4 text-white/70 max-w-2xl mx-auto">
              These core principles guide everything we do, from the first phone call
              to the final box being placed in your new home.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="value-card bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 rounded-2xl"
              >
                <CardContent className="p-6 lg:p-8 text-center flex flex-col items-center">
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 bg-white rounded-full overflow-hidden flex items-center justify-center mx-auto mb-6 transform transition-transform duration-500 hover:scale-110 shadow-[6px_6px_0px_rgba(0,0,0,0.3)] border-4 border-white">
                    <img src={value.image} alt={value.title} className="w-[85%] h-[85%] object-contain scale-110" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 lg:py-28 bg-[#EAF2FB]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="stat-item bg-white rounded-2xl p-6 lg:p-8 text-center shadow-lg"
              >
                <p className="text-4xl lg:text-5xl font-bold text-[#D32F2F]">
                  {stat.number}
                </p>
                <p className="mt-2 text-[#3A4A65] font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 lg:py-28 bg-[#1B3B6F]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Image */}
            <div className="relative order-2 lg:order-1 h-[350px] sm:h-[400px] lg:h-[500px]">
              <iframe
                title="Spencer's Moving Service Areas Map"
                src="https://maps.google.com/maps?q=Gulf%20Breeze,%20FL&t=&z=10&ie=UTF8&iwloc=&output=embed"
                className="rounded-3xl shadow-2xl w-full h-full border-4 border-white"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
              ></iframe>
            </div>

            {/* Right - Content */}
            <div className="order-1 lg:order-2">

              <AnimatedTitle className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white block">
                SERVING THE
                <br />
                GULF COAST
              </AnimatedTitle>
              <p className="mt-6 text-white/70 leading-relaxed">
                Based in Gulf Breeze, Florida, we proudly serve homes and businesses
                across the Florida Panhandle. Whether you're moving across town or
                across the state, we've got you covered.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {[
                  'Pensacola, FL',
                  'Gulf Breeze, FL',
                  'Navarre, FL',
                  'Fort Walton Beach, FL',
                  'Destin, FL',
                  'Niceville, FL',
                  'Milton, FL',
                  'Pace, FL',
                ].map((location, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 text-white/90"
                  >
                    <div className="relative mr-3 w-5 h-5 flex-shrink-0">
                      {/* Drop shadow pin back */}
                      <Pin className="absolute top-[2px] left-[2px] w-5 h-5 text-black/40 fill-black/40 rotate-[35deg] blur-[1px]" />
                      {/* Actual pin */}
                      <Pin className="absolute top-0 left-0 w-5 h-5 text-white fill-[#D32F2F] rotate-[35deg]" />
                    </div>
                    <span className="text-lg font-medium">{location}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 inline-block p-6 bg-white/5 rounded-2xl border-2 border-white/20 shadow-[4px_4px_0_rgba(255,255,255,0.1)]">
                <div>
                  <p className="text-white font-semibold">New Locations Coming Soon!</p>
                  <p className="text-white/70 text-sm mt-1 max-w-[400px]">
                    We're expanding to serve even more communities across Florida and beyond.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="py-20 lg:py-28 bg-[#EAF2FB]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-16">
            <AnimatedTitle className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B3B6F] block">
              WHY WE'RE DIFFERENT
            </AnimatedTitle>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 lg:gap-x-8 lg:gap-y-12">
            {[
              {
                title: 'No Job Too Small',
                description: 'From moving a single refrigerator to a full house, we treat every job with the same care and professionalism.',
              },
              {
                title: 'Transparent Pricing',
                description: 'No hidden fees, no surprises. We provide upfront quotes so you know exactly what to expect.',
              },
              {
                title: 'Experienced Crews',
                description: 'Our movers are trained professionals who know how to handle your belongings with care.',
              },
              {
                title: 'Fully Equipped',
                description: 'We come prepared with all the tools, padding, and equipment needed for a safe move.',
              },
              {
                title: 'Local Expertise',
                description: 'We know the Gulf Coast area inside and out, ensuring efficient routes and timing.',
              },
              {
                title: '100% Satisfaction',
                description: 'We\'re not happy until you\'re happy. That\'s our guarantee on every move.',
              },
            ].map((item, index) => {
              const style = { border: 'border-[#D32F2F]', bg: 'bg-[#D32F2F]', iconColor: 'text-white' };

              return (
                <div
                  key={index}
                  className={`relative bg-white rounded-3xl p-6 lg:p-8 border-[4px] ${style.border} shadow-[6px_6px_0_#050D1A] transition-transform duration-300 hover:-translate-y-1 flex flex-col`}
                >
                  <h3 className="text-xl font-black text-[#1B3B6F] mb-3 uppercase tracking-wide">{item.title}</h3>
                  <p className="text-[#3A4A65] text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Floating Icon Emblem (like the vehicle/sign icons on SignGator) */}
                  <div className={`absolute -bottom-6 -right-4 w-12 h-12 rounded-full ${style.bg} border-[3px] border-[#050D1A] flex items-center justify-center shadow-[4px_4px_0_#050D1A]`}>
                    <CheckCircle className={`w-6 h-6 ${style.iconColor}`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-28 bg-[#1B3B6F]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-16">
            <AnimatedTitle className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white block">
              MEET THE CREW
            </AnimatedTitle>
            <p className="mt-4 text-white/70 max-w-2xl mx-auto">
              Our dedicated team of moving professionals is what makes Spencer's
              the #1 choice on the Gulf Coast.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="/images/fishing_team.jpg.png"
              alt="Spencer's Moving Team"
              className="rounded-3xl shadow-2xl w-full max-w-4xl border-4 border-white"
            />
            <div className="bg-white rounded-3xl p-8 md:p-10 max-w-3xl w-full mt-12 shadow-[8px_8px_0_#050D1A] border-4 border-white relative z-10 transition-transform duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-[#D32F2F] text-[#D32F2F]" />
                ))}
              </div>
              <p className="text-center text-[#3A4A65] text-lg md:text-xl font-medium leading-relaxed">
                "Our team is like family, and we treat our customers the same way.
                That's the Spencer's difference."
              </p>
              <p className="text-center font-black text-[#1B3B6F] mt-4 uppercase tracking-wider">
                — Spencer Bethel, Founder
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
