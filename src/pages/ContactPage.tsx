import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EndFooter from '../components/EndFooter';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, ChevronDown, ChevronUp, Users, HelpCircle, Globe, AlertTriangle, FileText } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Banner Section */}
      {/* <div className="relative bg-indigo-900 text-white overflow-hidden py-12">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

        <div className="relative container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-800 rounded-full px-4 py-1 mb-6 border border-indigo-600">
            <MessageSquare className="w-4 h-4 text-pink-400" />
            <span className="text-xs font-semibold tracking-widest uppercase text-indigo-200">Get In Touch</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Contact Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400">Team</span>
          </h1>
          <p className="text-lg md:text-xl text-indigo-200 max-w-2xl mx-auto font-light">
            Have questions about ICAMLR 2026? We're here to help you every step of the way.
          </p>
        </div>
      </div> */}

      {/* Contact Information & Form */}
      <div className="py-16 px-4 sm:px-6 lg:px-32">
        <div className="container mx-auto max-w-6xl">

          {/* Header */}
          <div className="text-center mb-12">
            <h2
              style={{ fontFamily: "'Manrope', sans-serif", color: '#2e376c' }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              We're Here to Help
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Have questions about the conference? Need assistance with registration or submissions?
              Our team is ready to help you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Contact Information */}
            <div className="space-y-8">

              {/* Conference Information */}
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 border border-indigo-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Conference Information</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">Venue</p>
                      <p className="text-gray-600">Crowne Plaza — St. Peter's Rome<br />Via Aurelia Antica, 415<br />Rome, Italy</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">Dates</p>
                      <p className="text-gray-600">July 28–30, 2026</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Get in Touch</h3>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Email</p>
                      <a href="mailto:info@icamlr2026.com" className="text-indigo-600 hover:text-indigo-800">
                        info@icamlr2026.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Phone</p>
                      <a href="tel:+39-06-12345678" className="text-indigo-600 hover:text-indigo-800">
                        +39 06 1234 5678
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Office Hours</p>
                      <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM CET</p>
                      <p className="text-gray-600">Sat - Sun: Emergency support only</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Send className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Send us a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="registration">Registration Inquiry</option>
                    <option value="abstract">Abstract Submission</option>
                    <option value="venue">Venue & Travel</option>
                    <option value="sponsorship">Sponsorship</option>
                    <option value="technical">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors resize-vertical"
                    placeholder="Please describe your inquiry in detail..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>



      {/* Support Team Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-32 bg-white">
        <div className="container mx-auto max-w-6xl">

          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h2
              style={{ fontFamily: "'Manrope', sans-serif", color: '#2e376c' }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Meet Our Support Team
            </h2>
            <p className="text-gray-600 text-lg">
              Our dedicated team is here to ensure your conference experience is exceptional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 text-center border border-blue-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Registration Support</h3>
              <p className="text-gray-600 text-sm mb-3">Questions about registration, payments, and confirmations</p>
              <a href="mailto:registration@icamlr2026.com" className="text-blue-600 hover:text-blue-800 font-medium">
                registration@icamlr2026.com
              </a>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 text-center border border-green-100">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Abstract Submissions</h3>
              <p className="text-gray-600 text-sm mb-3">Technical support for paper submissions and reviews</p>
              <a href="mailto:abstracts@icamlr2026.com" className="text-green-600 hover:text-green-800 font-medium">
                abstracts@icamlr2026.com
              </a>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-6 text-center border border-purple-100">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Sponsorship & Partnerships</h3>
              <p className="text-gray-600 text-sm mb-3">Partnership opportunities and sponsorship inquiries</p>
              <a href="mailto:sponsorship@icamlr2026.com" className="text-purple-600 hover:text-purple-800 font-medium">
                sponsorship@icamlr2026.com
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Emergency Contacts & Social Media */}
   
      {/* FAQ Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-32 bg-gray-50">
        <div className="container mx-auto max-w-4xl">

          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-6">
              <HelpCircle className="w-8 h-8 text-indigo-600" />
            </div>
            <h2
              style={{ fontFamily: "'Manrope', sans-serif", color: '#2e376c' }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg">
              Quick answers to common questions about ICAMLR 2026
            </p>
          </div>

          <div className="space-y-4">
            <FAQItem
              question="How do I register for the conference?"
              answer="You can register online through our registration page. Choose from different pass types including full conference access, student rates, and virtual participation options."
            />
            <FAQItem
              question="What is the deadline for abstract submission?"
              answer="The abstract submission deadline is March 15, 2026. All submissions will undergo a peer review process, and notifications will be sent by April 30, 2026."
            />
            {/* <FAQItem
              question="Are there accommodation options near the venue?"
              answer="Yes, the Crowne Plaza offers conference rates for attendees. Additionally, we have partnered with nearby hotels to provide discounted rates for conference participants."
            /> */}
            <FAQItem
              question="Will the conference be recorded?"
              answer="Keynote and plenary sessions will be recorded and made available to registered participants for 30 days after the conference. Workshop recordings will be available upon request."
            />
            <FAQItem
              question="What languages will be used?"
              answer="The primary language of the conference is English. Simultaneous translation services will be available for major sessions upon request."
            />
          </div>
        </div>
      </div>
      {/* <Footer />
      <EndFooter /> */}
      <EndFooter />
    </div>
  );
};

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-gray-800">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default ContactPage;