import React, { useState } from 'react';

interface ContactFormProps {
  idPrefix: string;
  onSuccess?: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ idPrefix, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    websiteType: '',
    message: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid.';
    }
    if (!formData.websiteType) newErrors.websiteType = 'Please select a website type.';
    if (!formData.message.trim()) newErrors.message = 'Message is required.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus('idle');

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mvgvdlqn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', websiteType: '', message: '' });
        setErrors({});
        if (onSuccess) {
          setTimeout(() => onSuccess(), 2000); // Give user time to see success message
        }
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="w-full mx-auto text-left space-y-6"
      noValidate
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor={`${idPrefix}-name`} className="block font-mono text-sm text-light-text-secondary dark:text-slate mb-2">Name</label>
          <input 
            type="text" 
            name="name" 
            id={`${idPrefix}-name`} 
            required 
            value={formData.name}
            onChange={handleChange}
            className={`w-full bg-light-card dark:bg-brand-card border rounded-md py-3 px-4 text-light-text-primary dark:text-lightest-slate focus:outline-none focus:ring-2 transition-all ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-light-border dark:border-lightest-navy/40 focus:ring-light-accent dark:focus:ring-brand-accent'}`}
            placeholder="Your Name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? `${idPrefix}-name-error` : undefined}
          />
          {errors.name && <p id={`${idPrefix}-name-error`} className="text-red-500 text-sm mt-1 font-mono">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor={`${idPrefix}-email`} className="block font-mono text-sm text-light-text-secondary dark:text-slate mb-2">Email</label>
          <input 
            type="email" 
            name="email" 
            id={`${idPrefix}-email`}
            required 
            value={formData.email}
            onChange={handleChange}
            className={`w-full bg-light-card dark:bg-brand-card border rounded-md py-3 px-4 text-light-text-primary dark:text-lightest-slate focus:outline-none focus:ring-2 transition-all ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-light-border dark:border-lightest-navy/40 focus:ring-light-accent dark:focus:ring-brand-accent'}`}
            placeholder="your.email@example.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? `${idPrefix}-email-error` : undefined}
          />
          {errors.email && <p id={`${idPrefix}-email-error`} className="text-red-500 text-sm mt-1 font-mono">{errors.email}</p>}
        </div>
      </div>
      
      <div>
          <label htmlFor={`${idPrefix}-websiteType`} className="block font-mono text-sm text-light-text-secondary dark:text-slate mb-2">Type of Website</label>
          <div className="relative">
            <select 
              name="websiteType" 
              id={`${idPrefix}-websiteType`} 
              required
              value={formData.websiteType}
              onChange={handleChange}
              className={`w-full bg-light-card dark:bg-brand-card border rounded-md py-3 px-4 text-light-text-primary dark:text-lightest-slate focus:outline-none focus:ring-2 transition-all appearance-none ${errors.websiteType ? 'border-red-500 focus:ring-red-500' : 'border-light-border dark:border-lightest-navy/40 focus:ring-light-accent dark:focus:ring-brand-accent'}`}
              aria-invalid={!!errors.websiteType}
              aria-describedby={errors.websiteType ? `${idPrefix}-websiteType-error` : undefined}
            >
              <option value="" disabled>Select a type...</option>
              <option value="Portfolio">Portfolio Website</option>
              <option value="Business">Business/Corporate Website</option>
              <option value="E-commerce">E-commerce Store</option>
              <option value="Blog">Blog/Magazine</option>
              <option value="Landing Page">Landing Page</option>
              <option value="Other">Other</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-light-text-secondary dark:text-slate">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
          {errors.websiteType && <p id={`${idPrefix}-websiteType-error`} className="text-red-500 text-sm mt-1 font-mono">{errors.websiteType}</p>}
      </div>

      <div>
        <label htmlFor={`${idPrefix}-message`} className="block font-mono text-sm text-light-text-secondary dark:text-slate mb-2">Comment</label>
        <textarea 
          name="message" 
          id={`${idPrefix}-message`}
          rows={4} 
          required
          value={formData.message}
          onChange={handleChange}
          className={`w-full bg-light-card dark:bg-brand-card border rounded-md py-3 px-4 text-light-text-primary dark:text-lightest-slate focus:outline-none focus:ring-2 transition-all ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-light-border dark:border-lightest-navy/40 focus:ring-light-accent dark:focus:ring-brand-accent'}`}
          placeholder="Tell me about your project..."
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? `${idPrefix}-message-error` : undefined}
        ></textarea>
        {errors.message && <p id={`${idPrefix}-message-error`} className="text-red-500 text-sm mt-1 font-mono">{errors.message}</p>}
      </div>
      
      <div className="text-center pt-4">
          <button 
            type="submit"
            disabled={isSubmitting}
            className="inline-block text-light-accent dark:text-brand-accent border border-light-accent dark:border-brand-accent rounded px-8 py-3 font-mono text-sm hover:bg-light-accent/10 dark:hover:bg-brand-accent/10 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
      </div>

      {submitStatus === 'success' && (
          <p className="mt-4 text-center text-green-500 dark:text-green-400 font-mono">
              Thank you! Your message has been sent successfully.
          </p>
      )}
      {submitStatus === 'error' && (
          <p className="mt-4 text-center text-red-500 dark:text-red-400 font-mono">
              Oops! Something went wrong. Please try again later.
          </p>
      )}
    </form>
  );
};
export default ContactForm;