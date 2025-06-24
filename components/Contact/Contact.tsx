
import React, { useState }  from 'react';
import { ContactFormData } from '../../types';

interface ContactProps {
  email: string;
  linkedin: string;
  github: string;
  callToAction: string;
}

const Contact: React.FC<ContactProps> = ({ email, linkedin, github, callToAction }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(false);
    setSubmitError(null);
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        setSubmitError("Please fill in all fields.");
        return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
        setSubmitError("Please enter a valid email address.");
        return;
    }

    // Here you would typically send the form data to a backend API
    // For this example, we'll just simulate a successful submission.
    console.log('Form data submitted:', formData);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simulate success
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
    // Simulate error (uncomment to test error state)
    // setSubmitError("An error occurred. Please try again later.");
    // setIsSubmitted(false);
  };


  return (
    <section id="contact" className="py-16 sm:py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-center mb-8 text-light-text dark:text-dark-text">
          Contact Me
        </h2>
        <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          {callToAction}
        </p>

        <div className="max-w-3xl mx-auto bg-light-bg dark:bg-gray-700 p-8 rounded-xl shadow-2xl">
          {isSubmitted && (
            <div className="mb-6 p-4 bg-green-100 dark:bg-green-700 border border-green-400 dark:border-green-600 text-green-700 dark:text-green-100 rounded-md">
              Thank you for your message! I'll get back to you soon.
            </div>
          )}
          {submitError && (
            <div className="mb-6 p-4 bg-red-100 dark:bg-red-700 border border-red-400 dark:border-red-600 text-red-700 dark:text-red-100 rounded-md">
              {submitError}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-light-text dark:text-dark-text mb-1">Full Name</label>
              <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required 
                     className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-primary focus:border-primary dark:bg-gray-800 dark:text-white" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-light-text dark:text-dark-text mb-1">Email Address</label>
              <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required
                     className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-primary focus:border-primary dark:bg-gray-800 dark:text-white" />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-light-text dark:text-dark-text mb-1">Subject</label>
              <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange} required
                     className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-primary focus:border-primary dark:bg-gray-800 dark:text-white" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-light-text dark:text-dark-text mb-1">Message</label>
              <textarea name="message" id="message" rows={5} value={formData.message} onChange={handleChange} required
                        className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-primary focus:border-primary dark:bg-gray-800 dark:text-white"></textarea>
            </div>
            <div>
              <button type="submit" 
                      className="w-full bg-primary hover:bg-primary-hover text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
                Send Message
              </button>
            </div>
          </form>
          
          <div className="mt-12 text-center">
            <p className="text-light-text dark:text-dark-text mb-2">Or connect with me directly:</p>
            <div className="flex justify-center space-x-6">
              <a href={`mailto:${email}`} className="text-primary dark:text-blue-400 hover:underline">Email</a>
              <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-primary dark:text-blue-400 hover:underline">LinkedIn</a>
              <a href={github} target="_blank" rel="noopener noreferrer" className="text-primary dark:text-blue-400 hover:underline">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
    