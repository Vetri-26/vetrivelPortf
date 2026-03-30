import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Send, Loader2, CheckCircle2, XCircle } from 'lucide-react';

// ─── EmailJS Config ──────────────────────────────────────────────────────────
// Replace these with your actual values from https://dashboard.emailjs.com
const EMAILJS_SERVICE_ID = 'service_7t94f38';   // ⚠️ Replace with service_xxxxxxx from EmailJS dashboard → Email Services
const EMAILJS_TEMPLATE_ID = 'template_7ljw2qm';  // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY = 'vwj-o3dTcphHiVIg0';   // e.g. 'AbCdEf1234567890'
// ─────────────────────────────────────────────────────────────────────────────

const inputClass =
  'bg-[#0d1120] border border-[#4F494B] focus:border-[#FB2900] outline-none ' +
  'text-[#e5e5e5] placeholder-[#555] rounded-sm px-4 py-3 font-mono text-sm ' +
  'transition-colors duration-200 w-full';

const Contact = () => {
  const formRef = useRef(null);

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;

    setStatus('sending');

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      // Open browser DevTools (F12) → Console to see the exact reason
      console.error('EmailJS error text :', err?.text);
      console.error('EmailJS error status:', err?.status);
      console.error('EmailJS full error  :', err);
      setStatus('error');
    }
  };

  const isSending = status === 'sending';

  return (
    <div className="animate-in fade-in zoom-in-95 duration-300">

      {/* Section Header */}
      <div className="mb-8 border-b border-[#4F494B] pb-4">
        <h2 className="text-2xl font-bold font-mono tracking-widest text-[#e5e5e5] uppercase flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#FB2900]" />
          Network Uplink
        </h2>
        <p className="text-[#a0a0a0] mt-2 font-mono text-xs uppercase tracking-widest">
          Establish secure transmission
        </p>
      </div>

      {/* Form Card */}
      <div className="bg-[#080B14] rounded-xl border border-[#4F494B] p-6 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.5)] max-w-2xl">
        <form ref={formRef} className="space-y-6" onSubmit={handleSubmit} noValidate>

          {/* Name */}
          <div className="flex flex-col gap-2">
            <label className="text-[#808080] font-mono text-xs tracking-widest uppercase">
              Identifier (Name)
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter ID..."
              required
              disabled={isSending}
              className={inputClass}
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-[#808080] font-mono text-xs tracking-widest uppercase">
              Comms Node (Email)
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter Address..."
              required
              disabled={isSending}
              className={inputClass}
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label className="text-[#808080] font-mono text-xs tracking-widest uppercase">
              Payload (Message)
            </label>
            <textarea
              rows={4}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Enter Payload Data..."
              required
              disabled={isSending}
              className={`${inputClass} resize-none`}
            />
          </div>

          {/* Status Feedback */}
          {status === 'success' && (
            <div className="flex items-center gap-2 text-green-400 font-mono text-xs uppercase tracking-widest">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              Transmission successful — message received.
            </div>
          )}
          {status === 'error' && (
            <div className="flex items-center gap-2 text-[#E00005] font-mono text-xs uppercase tracking-widest">
              <XCircle className="w-4 h-4 shrink-0" />
              Transmission failed — please retry.
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSending}
            className="w-full sm:w-auto bg-[#4F494B] hover:bg-[#E00005] disabled:opacity-50 disabled:cursor-not-allowed text-[#FB2900] hover:text-black border border-[#FB2900]/50 hover:border-[#E00005] px-8 py-3 rounded-none font-mono text-sm uppercase tracking-widest font-bold transition-all duration-300 flex items-center justify-center gap-3"
          >
            {isSending ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Transmitting...
              </>
            ) : (
              <>
                Transmit Data <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      </div>

      {/* Social Links */}
      <div className="mt-8 flex gap-6 text-[#808080] font-mono text-xs tracking-widest uppercase">
        <a href="https://github.com/Vetri-26" className="hover:text-[#E00005] transition-colors border-b border-transparent hover:border-[#E00005]">GitHub</a>
        <a href="https://www.linkedin.com/in/vetrivel-a-8206b032b" className="hover:text-[#E00005] transition-colors border-b border-transparent hover:border-[#E00005]">LinkedIn</a>
      </div>
    </div>
  );
};

export default Contact;
