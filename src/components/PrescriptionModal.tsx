import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, Clock, Phone, AlertCircle } from 'lucide-react';
import { GoldCrest } from './GoldCrest';

interface PrescriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const PrescriptionModal: React.FC<PrescriptionModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'Prescription Services',
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    serviceType: defaultService,
    prescriptionDetails: '',
    urgentRequest: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setErrorMessage('Please provide your full name and a contact telephone number.');
      return;
    }
    setErrorMessage('');
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      serviceType: defaultService,
      prescriptionDetails: '',
      urgentRequest: false,
    });
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div 
        className="relative w-full max-w-xl bg-[#120822] border border-[#d4af37]/30 rounded-lg shadow-2xl p-6 sm:p-8 text-[#e8e0d5] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#b0a294] hover:text-white transition-colors p-1 rounded"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-5">
            <div className="w-16 h-16 rounded-full bg-[#d4af37]/15 border border-[#d4af37] flex items-center justify-center mx-auto text-[#d4af37]">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#f5eed3]">
              Inquiry Received
            </h3>
            <p className="text-sm text-[#c5baa9] max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-white">{formData.fullName}</strong>. Our Mayfair pharmacist team has been notified. We will review your request and contact you via telephone ({formData.phone}) promptly.
            </p>
            <div className="p-3.5 bg-[#1e0f34] border border-[#d4af37]/20 rounded text-xs text-[#d2c8ba] flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-[#d4af37]" />
              <span>For immediate urgent prescription dispensing, call: <strong>+44 7351 463843</strong></span>
            </div>
            <button
              onClick={handleReset}
              className="mt-4 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0a0512] bg-[#d4af37] hover:bg-[#e8cf82] transition-colors rounded"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <GoldCrest size={28} />
              <div>
                <h3 id="modal-title" className="font-serif text-xl sm:text-2xl font-bold text-[#f5eed3]">
                  Prescription & Healthcare Support
                </h3>
                <p className="text-xs text-[#d4af37]">Rosewood Pharmacy at Mayfair Dispensary</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#b8ad9f] mb-6 leading-relaxed">
              Submit your prescription inquiry or consultation request. A dedicated pharmacist will review your requirements with strict patient confidentiality.
            </p>

            {errorMessage && (
              <div className="mb-4 p-3 bg-red-950/60 border border-red-500/40 rounded flex items-center gap-2 text-xs text-red-200">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-[#c5baa9] mb-1">
                  Full Name <span className="text-[#d4af37]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Lady Eleanor Campbell / Mr. Charles Sterling"
                  className="w-full px-3.5 py-2.5 bg-[#0a0512] border border-[#d4af37]/30 rounded text-sm text-white placeholder-[#786b5d] focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#c5baa9] mb-1">
                    Phone Number <span className="text-[#d4af37]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+44 7..."
                    className="w-full px-3.5 py-2.5 bg-[#0a0512] border border-[#d4af37]/30 rounded text-sm text-white placeholder-[#786b5d] focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#c5baa9] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@domain.com"
                    className="w-full px-3.5 py-2.5 bg-[#0a0512] border border-[#d4af37]/30 rounded text-sm text-white placeholder-[#786b5d] focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#c5baa9] mb-1">
                  Service Required
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#0a0512] border border-[#d4af37]/30 rounded text-sm text-white focus:outline-none focus:border-[#d4af37]"
                >
                  <option value="Prescription Services">NHS & Private Prescription Dispensing</option>
                  <option value="Repeat Prescriptions">Repeat Prescription Management</option>
                  <option value="Medication Advice">Medication Consultation & Review</option>
                  <option value="Health & Wellness">Health & Wellness Support</option>
                  <option value="Personalised Pharmacy Care">Personalised Pharmacy Care & Packaging</option>
                  <option value="General Support">General Pharmacy Inquiries</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#c5baa9] mb-1">
                  Prescription or Health Notes (Optional & Confidential)
                </label>
                <textarea
                  rows={3}
                  value={formData.prescriptionDetails}
                  onChange={(e) => setFormData({ ...formData, prescriptionDetails: e.target.value })}
                  placeholder="Specify medication name, prescription token/code, or health query..."
                  className="w-full px-3.5 py-2.5 bg-[#0a0512] border border-[#d4af37]/30 rounded text-sm text-white placeholder-[#786b5d] focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="urgentCheck"
                  checked={formData.urgentRequest}
                  onChange={(e) => setFormData({ ...formData, urgentRequest: e.target.checked })}
                  className="rounded border-[#d4af37]/40 text-[#d4af37] focus:ring-0 bg-[#0a0512]"
                />
                <label htmlFor="urgentCheck" className="text-xs text-[#c5baa9] cursor-pointer">
                  Same-day Mayfair collection or urgent dispenser callback needed
                </label>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs text-[#8c8275]">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
                  Protected by UK Patient Privacy & GDPR
                </span>
                <a href="tel:+447351463843" className="text-[#e8cf82] hover:underline flex items-center gap-1">
                  <Phone className="w-3 h-3" />
                  +44 7351 463843
                </a>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 py-3 text-xs font-semibold uppercase tracking-wider text-[#0a0512] bg-gradient-to-r from-[#e8cf82] via-[#d4af37] to-[#c59b27] hover:brightness-110 active:scale-95 transition-all rounded font-sans"
              >
                {isSubmitting ? 'Submitting to Dispensary...' : 'Submit Request'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
