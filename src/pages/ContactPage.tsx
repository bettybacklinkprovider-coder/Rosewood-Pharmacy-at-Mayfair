import React, { useState } from 'react';
import { PageId, OpeningHourDay } from '../types';
import { GoldCrest } from '../components/GoldCrest';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  ExternalLink,
  Edit2,
  Check,
  AlertCircle,
  ShieldCheck,
  Navigation,
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  // Contact form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Editable placeholder hours state (as requested)
  const [isEditingHours, setIsEditingHours] = useState(false);
  const [openingHours, setOpeningHours] = useState<OpeningHourDay[]>([
    { day: 'Monday', hours: '9:00 AM – 6:30 PM' },
    { day: 'Tuesday', hours: '9:00 AM – 6:30 PM' },
    { day: 'Wednesday', hours: '9:00 AM – 6:30 PM' },
    { day: 'Thursday', hours: '9:00 AM – 6:30 PM' },
    { day: 'Friday', hours: '9:00 AM – 6:30 PM' },
    { day: 'Saturday', hours: '10:00 AM – 5:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ]);

  const handleHourChange = (index: number, newHours: string) => {
    const updated = [...openingHours];
    updated[index].hours = newHours;
    setOpeningHours(updated);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setFormError('Please fill in all contact fields so we may attend to your inquiry.');
      return;
    }

    setFormError('');
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 700);
  };

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
            <span className="uppercase tracking-[0.2em]">Contact & Dispensary Visit</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#fbf8ed] tracking-tight leading-tight">
            Visit Rosewood Pharmacy <br />
            <span className="text-gold-gradient">at Mayfair</span>
          </h1>

          <p className="text-base sm:text-lg text-[#d2c8ba] max-w-2xl mx-auto font-light leading-relaxed">
            Conveniently located at 32 North Row. Connect with our dedicated healthcare team for prescription dispensing, medication advice, or consultation bookings.
          </p>
        </div>
      </section>

      {/* Main Content: Info & Contact Form */}
      <section className="py-20 lg:py-24 bg-[#0a0512]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Contact Information & Opening Hours */}
            <div className="lg:col-span-5 space-y-8">
              {/* Contact Information Card */}
              <div className="p-8 rounded-lg bg-[#140826]/70 border border-[#d4af37]/25 shadow-xl space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                    Dispensary Information
                  </span>
                  <h2 className="font-serif text-2xl font-bold text-[#f5eed3] mt-1">
                    Rosewood Pharmacy at Mayfair
                  </h2>
                </div>

                <div className="space-y-5 text-sm">
                  {/* Address */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded bg-[#22103a] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="text-[#f5eed3] block font-serif text-base">Address</strong>
                      <p className="text-[#c5baa9] mt-0.5">32 N Row, London W1K 6DD, United Kingdom</p>
                      <a
                        href="https://maps.google.com/?q=32+N+Row,+London+W1K+6DD,+United+Kingdom"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-[#e8cf82] hover:underline mt-1 font-medium"
                      >
                        <span>View directions in Google Maps</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded bg-[#22103a] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] shrink-0 mt-0.5">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="text-[#f5eed3] block font-serif text-base">Telephone</strong>
                      <p className="text-xs text-[#a89b8d] mt-0.5">Direct line to our dispensary desk:</p>
                      <a
                        href="tel:+447351463843"
                        className="text-base text-[#e8cf82] hover:text-white font-semibold transition-colors mt-0.5 inline-block"
                      >
                        +44 7351 463843
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded bg-[#22103a] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] shrink-0 mt-0.5">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="text-[#f5eed3] block font-serif text-base">Electronic Mail</strong>
                      <a
                        href="mailto:dispensary@rosewoodmayfair.co.uk"
                        className="text-sm text-[#c5baa9] hover:text-[#e8cf82] transition-colors mt-0.5 inline-block"
                      >
                        dispensary@rosewoodmayfair.co.uk
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#d4af37]/15 text-xs text-[#a09485] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span>Confidential NHS & Private Prescriptions Accepted</span>
                </div>
              </div>

              {/* Opening Hours Card with editable placeholder hours */}
              <div className="p-8 rounded-lg bg-[#140826]/70 border border-[#d4af37]/25 shadow-xl space-y-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-5 h-5 text-[#d4af37]" />
                    <h3 className="font-serif text-xl font-bold text-[#f5eed3]">Dispensary Hours</h3>
                  </div>

                  <button
                    onClick={() => setIsEditingHours(!isEditingHours)}
                    className="text-xs text-[#d4af37] hover:text-white flex items-center gap-1 px-2.5 py-1 rounded bg-[#22103a] border border-[#d4af37]/20 transition-colors"
                    title="Click to edit placeholder opening hours"
                  >
                    {isEditingHours ? (
                      <>
                        <Check className="w-3 h-3" />
                        <span>Done Editing</span>
                      </>
                    ) : (
                      <>
                        <Edit2 className="w-3 h-3" />
                        <span>Edit Hours</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-xs text-[#b8ad9f]">
                  {isEditingHours
                    ? 'You can customize the placeholder hours below to suit your operational schedule.'
                    : 'Our pharmacists are on duty throughout all dispensary hours for consultations.'}
                </p>

                <div className="space-y-2.5 pt-2">
                  {openingHours.map((item, idx) => (
                    <div
                      key={item.day}
                      className="flex items-center justify-between py-1.5 border-b border-[#d4af37]/10 text-xs sm:text-sm"
                    >
                      <span className="text-[#d2c8ba] font-medium w-28">{item.day}</span>
                      {isEditingHours ? (
                        <input
                          type="text"
                          value={item.hours}
                          onChange={(e) => handleHourChange(idx, e.target.value)}
                          className="px-2 py-1 bg-[#0a0512] border border-[#d4af37]/40 rounded text-xs text-white text-right w-44 focus:outline-none focus:border-[#d4af37]"
                        />
                      ) : (
                        <span
                          className={`${
                            item.hours === 'Closed' ? 'text-[#8c8275]' : 'text-[#f5eed3]'
                          } font-mono`}
                        >
                          {item.hours}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                <div className="pt-2 text-[11px] text-[#a89b8d] italic">
                  * Emergency out-of-hours advice: Please call NHS 111 or your local emergency provider.
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-lg bg-[#140826]/70 border border-[#d4af37]/25 shadow-2xl space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                    Inquire Online
                  </span>
                  <h2 className="font-serif text-3xl font-bold text-[#f5eed3] mt-1">
                    Send Us a Message
                  </h2>
                  <p className="text-sm text-[#b8ad9f] mt-2 leading-relaxed">
                    Please submit your inquiry below. Whether requesting repeat medication status, general healthcare advice, or a consultation slot, our Mayfair pharmacists respond promptly.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="py-12 text-center space-y-5 bg-[#0a0512]/60 rounded-lg p-6 border border-[#d4af37]/30">
                    <div className="w-16 h-16 rounded-full bg-[#d4af37]/15 border border-[#d4af37] flex items-center justify-center mx-auto text-[#d4af37]">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-[#f5eed3]">
                      Message Received
                    </h3>
                    <p className="text-sm text-[#c5baa9] max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-white">{formData.fullName}</strong>. Your message has been routed to our dispensary team. We will contact you at <strong className="text-[#e8cf82]">{formData.email}</strong> or <strong className="text-[#e8cf82]">{formData.phone}</strong> shortly.
                    </p>
                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({ fullName: '', email: '', phone: '', message: '' });
                      }}
                      className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0a0512] bg-[#d4af37] hover:bg-[#e8cf82] transition-colors rounded"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-5">
                    {formError && (
                      <div className="p-3 bg-red-950/60 border border-red-500/40 rounded flex items-center gap-2 text-xs text-red-200">
                        <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                        <span>{formError}</span>
                      </div>
                    )}

                    <div>
                      <label className="block text-xs font-medium text-[#c5baa9] mb-1.5">
                        Full Name <span className="text-[#d4af37]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Dr. Julian Vance"
                        className="w-full px-4 py-3 bg-[#0a0512] border border-[#d4af37]/30 rounded text-sm text-white placeholder-[#786b5d] focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-[#c5baa9] mb-1.5">
                          Email Address <span className="text-[#d4af37]">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="julian@example.co.uk"
                          className="w-full px-4 py-3 bg-[#0a0512] border border-[#d4af37]/30 rounded text-sm text-white placeholder-[#786b5d] focus:outline-none focus:border-[#d4af37]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-[#c5baa9] mb-1.5">
                          Phone Number <span className="text-[#d4af37]">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+44 7351 463843"
                          className="w-full px-4 py-3 bg-[#0a0512] border border-[#d4af37]/30 rounded text-sm text-white placeholder-[#786b5d] focus:outline-none focus:border-[#d4af37]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#c5baa9] mb-1.5">
                        Your Message or Clinical Query <span className="text-[#d4af37]">*</span>
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please describe your requirements, medication query, or preferred consultation time..."
                        className="w-full px-4 py-3 bg-[#0a0512] border border-[#d4af37]/30 rounded text-sm text-white placeholder-[#786b5d] focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>

                    <div className="text-xs text-[#8c8275] flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#d4af37] shrink-0" />
                      <span>All patient health communications are held in strict clinical confidentiality.</span>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 text-xs font-semibold uppercase tracking-wider text-[#0a0512] bg-gradient-to-r from-[#e8cf82] via-[#d4af37] to-[#c59b27] hover:brightness-110 active:scale-95 transition-all rounded shadow-lg shadow-[#d4af37]/15 flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? 'Transmitting Message...' : 'Submit Message'}</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Interactive Styled Map Section */}
      <section className="py-16 bg-[#0c0516] border-t border-[#d4af37]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              Mayfair Map & Access
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#fbf8ed]">
              How to Find Us
            </h2>
            <p className="text-xs sm:text-sm text-[#b8ad9f]">
              32 N Row, London W1K 6DD, United Kingdom · Between North Row and Oxford Street
            </p>
          </div>

          {/* Interactive Map Visual Area */}
          <div className="relative rounded-lg overflow-hidden border border-[#d4af37]/35 shadow-2xl bg-[#090412]">
            {/* Map Frame / Embedded Visual styling */}
            <div className="h-96 w-full relative flex items-center justify-center p-6 text-center bg-gradient-to-br from-[#120722] via-[#0b0414] to-[#1a0c2d]">
              {/* Map grid / coordinate graphic */}
              <div 
                aria-hidden="true" 
                className="absolute inset-0 opacity-15 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px]" 
              />
              
              <div className="relative z-10 max-w-lg p-6 bg-[#0e051a]/95 border border-[#d4af37]/40 rounded-lg shadow-2xl backdrop-blur-md space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#d4af37]/15 border border-[#d4af37] flex items-center justify-center mx-auto text-[#d4af37]">
                  <MapPin className="w-6 h-6 animate-bounce" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#f5eed3]">
                  Rosewood Pharmacy at Mayfair
                </h3>
                <p className="text-xs sm:text-sm text-[#cfc4b5] leading-relaxed">
                  32 N Row, London W1K 6DD, United Kingdom
                </p>
                <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-[#d4af37]">
                  <span>Marble Arch Station (3 min walk)</span>
                  <span>·</span>
                  <span>Bond Street Station (5 min walk)</span>
                </div>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href="https://maps.google.com/?q=32+N+Row,+London+W1K+6DD,+United+Kingdom"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0a0512] bg-[#d4af37] hover:bg-[#e8cf82] transition-colors rounded inline-flex items-center justify-center gap-2 shadow"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions</span>
                  </a>
                  <a
                    href="tel:+447351463843"
                    className="w-full sm:w-auto px-5 py-2.5 text-xs font-medium tracking-wide text-[#f5eed3] border border-[#d4af37]/50 hover:bg-[#d4af37]/10 transition-colors rounded inline-flex items-center justify-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Call +44 7351 463843</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section: "We’re Here to Help" */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-[#140826] to-[#080310] border-t border-[#d4af37]/25 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <GoldCrest size={38} className="mx-auto" />
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#fbf8ed]">
            We’re Here to Help
          </h2>
          <p className="text-sm sm:text-base text-[#c5baa9] leading-relaxed max-w-xl mx-auto">
            Our qualified pharmacists are prepared to assist you with medication queries, prescription fulfillment, and personalized healthcare advice.
          </p>
          <div className="pt-3">
            <a
              href="tel:+447351463843"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#0a0512] bg-gradient-to-r from-[#e8cf82] via-[#d4af37] to-[#c59b27] hover:brightness-110 active:scale-95 transition-all rounded shadow-lg shadow-[#d4af37]/20"
            >
              <Phone className="w-4 h-4 text-[#0a0512]" />
              <span>Call +44 7351 463843</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
