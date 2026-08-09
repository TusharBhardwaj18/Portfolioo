import React, { useState } from 'react';


function Contact() {
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult('Sending...');

    const formData = new FormData(e.target);
    formData.append('access_key', '712ad3ef-c524-4b5b-9666-540ea0199f7b');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult('Message sent successfully!✅');
        e.target.reset(); // Clear input fields
      } else {
        setResult(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setResult('Error submitting form. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
        <div className="text-center mt-10  md:mt-12">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-wider z-10 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
            CONTACT ME
          </h2>
        </div>
    <section className="min-h-screen flex items-center justify-center text-white py-12 px-4">
      <div className="w-full max-w-xl bg-cyan-300/10 p-8 rounded-2xl shadow-xl border-2 border-cyan-800/50 backdrop-blur-sm">
     
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xl font-bold mb-2 text-gray-200">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="w-full bg-[#525B56] text-white text-lg placeholder-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-600 transition-all"
            />
          </div>

          <div>
            <label className="block text-xl font-bold mb-2 text-gray-200">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your@email.com"
              required
              className="w-full bg-[#525B56] text-white text-lg placeholder-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-600 transition-all"
            />
          </div>
          <div>
            <label className="block text-xl font-bold mb-2 text-gray-200">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              placeholder="+1 (555) 1234 567"
              required
              className="w-full bg-[#525B56] text-white text-lg placeholder-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-600 transition-all"
            />
          </div>
          <div>
            <label className="block text-xl font-bold mb-2 text-gray-200">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              placeholder="Your message"
              required
              className="w-full bg-[#8A9893]/70 text-white text-lg placeholder-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-600 transition-all resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white text-xl font-bold py-3.5 px-6 rounded-xl transition-colors duration-200 shadow-md disabled:opacity-50"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>

          {result && (
            <p className="text-center text-sm font-medium text-gray-300 mt-2">
              {result}
            </p>
          )}
        </form>
      </div>
    </section>
    </div>
  )
}

export default Contact

