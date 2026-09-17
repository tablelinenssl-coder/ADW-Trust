import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Send, CheckCircle2, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<Partial<Record<string, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [colomboTime, setColomboTime] = useState('');
  const [hanoverTime, setHanoverTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setColomboTime(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Colombo', hour: '2-digit', minute: '2-digit' }));
      setHanoverTime(now.toLocaleTimeString('en-US', { timeZone: 'Europe/Berlin', hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  const validate = (): boolean => {
    const err: Partial<Record<string, string>> = {};
    if (!formData.name.trim()) err.name = 'Please enter your name.';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      err.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim()) err.message = 'Please type your message.';
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/doreen.wissmann@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          Message: formData.message,
          _subject: `New Inquiry from ${formData.name} (ADW Trust Website)`,
          _replyto: formData.email,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        window.location.href = `mailto:doreen.wissmann@gmail.com?subject=${encodeURIComponent(
          `Inquiry from ${formData.name}`
        )}&body=${encodeURIComponent(`${formData.message}\n\nSender Email: ${formData.email}`)}`;
        setSubmitted(true);
      }
    } catch {
      window.location.href = `mailto:doreen.wissmann@gmail.com?subject=${encodeURIComponent(
        `Inquiry from ${formData.name}`
      )}&body=${encodeURIComponent(`${formData.message}\n\nSender Email: ${formData.email}`)}`;
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" aria-label="Contact ADW Trust">
      <div className="space-y-8 sm:space-y-12">
        
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-emerald">
            Direct Dialogue
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-brand-charcoal tracking-tight">
            Connect with Madam Doreen Wissmann
          </h2>
          <p className="text-xs sm:text-sm text-brand-muted font-light">
            Reach out directly via Email or send a message below to discuss our initiatives or explore partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email */}
            <a
              href="mailto:doreen.wissmann@gmail.com"
              className="p-4 sm:p-5 rounded-2xl bg-white border border-brand-border hover:border-brand-emerald/40 shadow-sm hover:shadow-md transition-all flex items-center gap-3.5 sm:gap-4 group block"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-brand-forest/10 text-brand-forest flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[10px] font-bold uppercase tracking-wider text-brand-forest">Personal Email</div>
                <div className="text-xs sm:text-sm font-bold text-brand-charcoal group-hover:text-brand-emerald transition-colors truncate">doreen.wissmann@gmail.com</div>
                <div className="text-[10px] sm:text-[11px] text-brand-muted">Direct inbox of Madam Doreen</div>
              </div>
            </a>

            {/* Clocks */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-brand-border shadow-sm space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-brand-charcoal">Colombo, Sri Lanka</div>
                    <div className="text-[10px] text-brand-muted">Hospital Distribution Hub</div>
                  </div>
                </div>
                {colomboTime && (
                  <div className="flex items-center gap-1 text-[10px] sm:text-[11px] font-mono font-bold text-brand-forest bg-brand-canvas px-2 sm:px-2.5 py-1 rounded-lg border border-brand-border shrink-0">
                    <Clock className="w-3 h-3 text-brand-emerald" />
                    <span>{colomboTime}</span>
                  </div>
                )}
              </div>

              <div className="flex items-start justify-between gap-2 pt-2 border-t border-brand-border">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-brand-charcoal">Hanover, Germany</div>
                    <div className="text-[10px] text-brand-muted">European Liaison Base</div>
                  </div>
                </div>
                {hanoverTime && (
                  <div className="flex items-center gap-1 text-[10px] sm:text-[11px] font-mono font-bold text-brand-forest bg-brand-canvas px-2 sm:px-2.5 py-1 rounded-lg border border-brand-border shrink-0">
                    <Clock className="w-3 h-3 text-brand-emerald" />
                    <span>{hanoverTime}</span>
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-brand-border shadow-md">
            {submitted ? (
              <div className="p-6 sm:p-8 text-center space-y-3 bg-brand-sage/40 rounded-2xl border border-brand-border">
                <div className="w-12 h-12 bg-brand-emerald/10 text-brand-emerald rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-serif font-bold text-brand-forest">Message Delivered</h3>
                <p className="text-xs text-brand-muted max-w-sm mx-auto">
                  Thank you for reaching out. Madam Doreen Wissmann will respond promptly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-2 px-5 py-2 rounded-full bg-brand-forest text-white text-xs font-bold hover:bg-brand-onyx active:scale-95 transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div>
                  <label className="block text-xs font-semibold text-brand-charcoal mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-3.5 py-2.5 text-base sm:text-sm rounded-xl border bg-brand-canvas focus:bg-white focus:ring-2 focus:ring-brand-emerald/15 outline-none transition-all ${
                      errors.name ? 'border-red-400' : 'border-brand-border focus:border-brand-emerald'
                    }`}
                  />
                  {errors.name && <p className="text-[11px] text-red-500 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-brand-charcoal mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-3.5 py-2.5 text-base sm:text-sm rounded-xl border bg-brand-canvas focus:bg-white focus:ring-2 focus:ring-brand-emerald/15 outline-none transition-all ${
                      errors.email ? 'border-red-400' : 'border-brand-border focus:border-brand-emerald'
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-brand-charcoal mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="How would you like to connect or support?..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-3.5 py-2.5 text-base sm:text-sm rounded-xl border bg-brand-canvas focus:bg-white focus:ring-2 focus:ring-brand-emerald/15 outline-none transition-all resize-none ${
                      errors.message ? 'border-red-400' : 'border-brand-border focus:border-brand-emerald'
                    }`}
                  />
                  {errors.message && <p className="text-[11px] text-red-500 mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full min-h-[44px] flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-brand-forest hover:bg-brand-onyx active:scale-98 text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{loading ? 'Sending...' : 'Send Direct Message'}</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
