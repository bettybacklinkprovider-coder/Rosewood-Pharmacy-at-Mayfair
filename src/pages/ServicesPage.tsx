import React, { useState } from 'react';
import { PageId, ServiceItem } from '../types';
import { GoldCrest } from '../components/GoldCrest';
import {
  FileText,
  RefreshCw,
  MessageSquare,
  Sparkles,
  UserCheck,
  Package,
  Check,
  Phone,
  ArrowRight,
  ShieldCheck,
  Clock,
  Send,
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultationWithService?: (serviceName: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onOpenConsultationWithService,
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('all');

  const services: ServiceItem[] = [
    {
      id: 'prescriptions',
      title: 'Prescription Services',
      tagline: 'Precision NHS & Private Prescription Dispensing',
      image: '/src/assets/images/services_prescription_care_1791453445352.jpg',
      description:
        'We dispense both NHS and private prescriptions with meticulous clinical accuracy. Every script is validated against existing regimens to identify potential contraindications, ensuring patient safety and peace of mind.',
      benefits: [
        'Electronic Prescription Service (EPS) integration for seamless GP transfer',
        'Direct dispensing of private specialist prescriptions from Harley Street and London clinics',
        'Rapid preparation with minimal waiting in our tranquil lounge',
        'Compliant cold-chain storage for temperature-sensitive biologicals',
      ],
      icon: 'FileText',
    },
    {
      id: 'repeat-prescriptions',
      title: 'Repeat Prescriptions',
      tagline: 'Effortless Recurring Medication Management',
      image: '/src/assets/images/repeat_prescriptions_1791454100645.jpg',
      description:
        'Never run out of essential maintenance medications. We liaise directly with your GP surgery to request, track, and assemble your repeat prescriptions before your current supplies deplete.',
      benefits: [
        'Proactive automated renewal reminders prior to running out',
        'Direct GP liaison eliminating paperwork and clinic phone queues',
        'Flexible collection options or scheduled courier delivery in Mayfair',
        'Regular regimen reviews to adjust with doctor prescription updates',
      ],
      icon: 'RefreshCw',
    },
    {
      id: 'medication-advice',
      title: 'Medication Advice',
      tagline: 'Private One-on-One Consultations with Registered Pharmacists',
      image: '/src/assets/images/medication_advice_1791454062329.jpg',
      description:
        'Have complete clarity regarding how, when, and why you take your medicines. Our pharmacists host private consultations to explain dosages, manage side-effects, and answer any treatment concerns.',
      benefits: [
        'Dedicated private consultation room ensuring absolute confidentiality',
        'Comprehensive New Medicine Service (NMS) support for newly prescribed treatments',
        'Guidance on avoiding food and supplement cross-interactions',
        'Direct advice on managing travel across international time zones',
      ],
      icon: 'MessageSquare',
    },
    {
      id: 'health-wellness',
      title: 'Health & Wellness Support',
      tagline: 'Curated Preventative Care & Nutritional Guidance',
      image: '/src/assets/images/health_wellness_1791454075713.jpg',
      description:
        'Elevate your daily vitality with professional healthcare advice. We stock reputable, premium wellness products, therapeutic supplements, and dermatological skincare.',
      benefits: [
        'Evidence-based nutritional and vitamin supplementation advice',
        'Premium European skincare and therapeutic dermatological lines',
        'Seasonal immunity, travel health, and vitality recommendations',
        'Lifestyle health markers assessment and preventative wellbeing strategies',
      ],
      icon: 'Sparkles',
    },
    {
      id: 'personalised-care',
      title: 'Personalised Pharmacy Care',
      tagline: 'Tailored Dosette Trays & Dedicated Patient Support',
      image: '/src/assets/images/personalised_care_1791454087709.jpg',
      description:
        'For individuals managing complex multiple daily prescriptions, we provide bespoke compliance packaging (blister dosette packs) clearly separated by time of day, ensuring compliance and simplicity.',
      benefits: [
        'Monitored dosage systems (MDS) organized by morning, noon, and night',
        'Dedicated liaison for caregivers, family members, or private nurses',
        'Personalized pharmacist point of contact for ongoing health continuity',
        'Discreet, bespoke presentation tailored to your lifestyle requirements',
      ],
      icon: 'UserCheck',
    },
    {
      id: 'general-support',
      title: 'General Pharmacy Services',
      tagline: 'Comprehensive Everyday Healthcare & First-Aid Essentials',
      image: '/src/assets/images/general_pharmacy_1791454111627.jpg',
      description:
        'From high-grade first-aid supplies to travel health diagnostics and minor ailments advice, our dispensary provides immediate over-the-counter access to trusted clinical guidance.',
      benefits: [
        'Pharmacy First advice for common acute health complaints without a GP appointment',
        'Curated international traveler medical essentials and jet-lag support',
        'Blood pressure checks and non-invasive health parameter screenings',
        'Trusted clinical-grade health diagnostics and testing kits',
      ],
      icon: 'Package',
    },
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileText':
        return <FileText className="w-6 h-6" />;
      case 'RefreshCw':
        return <RefreshCw className="w-6 h-6" />;
      case 'MessageSquare':
        return <MessageSquare className="w-6 h-6" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6" />;
      case 'UserCheck':
        return <UserCheck className="w-6 h-6" />;
      default:
        return <Package className="w-6 h-6" />;
    }
  };

  const filteredServices =
    selectedServiceId === 'all'
      ? services
      : services.filter((s) => s.id === selectedServiceId);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-[#140826] via-[#0f061e] to-[#0a0512] border-b border-[#d4af37]/20 text-center overflow-hidden">
        <div 
          aria-hidden="true" 
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#3a1b5c]/30 via-transparent to-transparent pointer-events-none" 
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1e0f34] border border-[#d4af37]/30 text-xs text-[#e8cf82]">
            <GoldCrest size={18} />
            <span className="uppercase tracking-[0.2em]">Comprehensive Healthcare</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#fbf8ed] tracking-tight leading-tight">
            Our Pharmacy Services
          </h1>

          <p className="text-base sm:text-lg text-[#d2c8ba] max-w-2xl mx-auto font-light leading-relaxed">
            Delivering bespoke prescription care, expert clinical counsel, and holistic wellness support in the center of Mayfair.
          </p>
        </div>
      </section>

      {/* Services Showcase Banner with Imagery */}
      <section className="py-12 bg-[#0c0517] border-b border-[#d4af37]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
                Clinical Rigour & Compassion
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf8ed]">
                Every Prescription Handled with Supreme Care
              </h2>
              <p className="text-sm sm:text-base text-[#b8ad9f] leading-relaxed">
                Whether you require recurring medication synchronization, an urgent specialist prescription filled, or discreet advice regarding a health issue, our registered pharmacists ensure complete privacy and professional expertise.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs text-[#e8cf82]">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
                  NHS & Private Registered
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#d4af37]" />
                  Prompt Dispensing Times
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-lg overflow-hidden border border-[#d4af37]/30 shadow-xl max-h-64">
                <img
                  src="/src/assets/images/services_prescription_care_1791453445352.jpg"
                  alt="Apothecary glassware and medicine at Rosewood Pharmacy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Filter Controls */}
      <section className="py-8 bg-[#0a0512] sticky top-20 z-30 border-b border-[#d4af37]/15 backdrop-blur-md bg-[#0a0512]/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs">
            <span className="text-[#8c8275] uppercase tracking-wider font-semibold mr-2 shrink-0">
              Filter:
            </span>
            <button
              onClick={() => setSelectedServiceId('all')}
              className={`px-3.5 py-1.5 rounded transition-all whitespace-nowrap font-medium ${
                selectedServiceId === 'all'
                  ? 'bg-[#d4af37] text-[#0a0512] font-semibold'
                  : 'bg-[#180a2c] text-[#d2c8ba] hover:text-white border border-[#d4af37]/20'
              }`}
            >
              All Services (6)
            </button>
            {services.map((s) => (
              <button
                key={s.id}
                onClick={() => setSelectedServiceId(s.id)}
                className={`px-3.5 py-1.5 rounded transition-all whitespace-nowrap font-medium ${
                  selectedServiceId === s.id
                    ? 'bg-[#d4af37] text-[#0a0512] font-semibold'
                    : 'bg-[#180a2c] text-[#d2c8ba] hover:text-white border border-[#d4af37]/20'
                }`}
              >
                {s.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services List */}
      <section className="py-16 lg:py-24 bg-[#0a0512]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                className="rounded-xl bg-[#140826]/75 hover:bg-[#1b0a33] border border-[#d4af37]/25 hover:border-[#d4af37]/60 transition-all duration-300 shadow-xl group flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {service.image && (
                    <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-[#1e0f34]">
                      <img
                        src={service.image}
                        alt={service.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#140826] via-[#140826]/30 to-transparent" />
                      <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-[#0a0512]/80 backdrop-blur-md border border-[#d4af37]/30 text-xs font-mono text-[#e8cf82]">
                        0{index + 1}. SERVICE
                      </div>
                      <div className="absolute -bottom-5 left-6 w-12 h-12 rounded-lg bg-[#24103d] border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] shadow-xl group-hover:scale-110 group-hover:bg-[#d4af37] group-hover:text-[#0a0512] transition-all">
                        {getIcon(service.icon)}
                      </div>
                    </div>
                  )}

                  <div className="p-7 sm:p-9 pt-8">
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#f5eed3] group-hover:text-[#e8cf82] transition-colors mb-2">
                      {service.title}
                    </h3>
                    <p className="text-xs uppercase tracking-wider text-[#d4af37] font-medium mb-4">
                      {service.tagline}
                    </p>
                    <p className="text-sm text-[#b8ad9f] leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="space-y-3 pt-4 border-t border-[#d4af37]/15">
                      <h4 className="text-xs uppercase tracking-widest text-[#e8cf82] font-semibold">
                        Key Patient Benefits
                      </h4>
                      <ul className="space-y-2 text-xs sm:text-sm text-[#cfc4b5]">
                        {service.benefits.map((benefit, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-7 sm:p-9 pt-0">
                  <div className="pt-6 border-t border-[#d4af37]/20 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                    <button
                      onClick={() => {
                        if (onOpenConsultationWithService) {
                          onOpenConsultationWithService(service.title);
                        } else {
                          onNavigate('contact');
                        }
                      }}
                      className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0a0512] bg-[#d4af37] hover:bg-[#e8cf82] transition-colors rounded text-center flex items-center justify-center gap-2"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Inquire for {service.title}</span>
                    </button>

                    <a
                      href="tel:+447351463843"
                      className="px-4 py-2 text-xs font-medium text-[#d4af37] hover:text-white border border-[#d4af37]/30 hover:border-[#d4af37] transition-colors rounded text-center flex items-center justify-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Pharmacist</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-[#140826] to-[#080310] border-t border-[#d4af37]/25 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <GoldCrest size={36} className="mx-auto" />
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#fbf8ed]">
            Need Pharmacy Assistance?
          </h2>
          <p className="text-sm sm:text-base text-[#c5baa9] leading-relaxed max-w-xl mx-auto">
            Our team is available Monday to Friday from 9:00 AM to 6:30 PM, and Saturday 10:00 AM to 5:00 PM for private prescription queries and healthcare counsel.
          </p>
          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+447351463843"
              className="w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#0a0512] bg-gradient-to-r from-[#e8cf82] via-[#d4af37] to-[#c59b27] hover:brightness-110 active:scale-95 transition-all rounded shadow-lg shadow-[#d4af37]/20 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#0a0512]" />
              <span>Call Us (+44 7351 463843)</span>
            </a>
            <button
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm font-medium tracking-wide text-[#fbf8ed] border border-[#d4af37]/60 hover:bg-[#d4af37]/10 active:scale-95 transition-all rounded inline-flex items-center justify-center gap-2"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4 text-[#d4af37]" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
