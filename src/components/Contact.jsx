import { useState } from 'react'
import { FaGithub, FaLinkedin, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import { SiTelegram } from 'react-icons/si'
import Toast from './Toast'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState(null)

  const githubUrl = import.meta.env.VITE_GITHUB_URL || 'https://github.com'
  const telegramUrl = import.meta.env.VITE_TELEGRAM_URL || 'https://t.me/ketbogale'
  const telegramUsername = import.meta.env.VITE_TELEGRAM_USERNAME || 'ketbogale'
  const linkedinUrl = import.meta.env.VITE_LINKEDIN_URL || 'https://linkedin.com'
  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setToast({ message: 'Please fill in all fields', type: 'error' })
      setLoading(false)
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setToast({ message: 'Please enter a valid email address', type: 'error' })
      setLoading(false)
      return
    }

    if (formData.name.trim().length < 2) {
      setToast({ message: 'Name must be at least 2 characters', type: 'error' })
      setLoading(false)
      return
    }

    if (formData.message.trim().length < 10) {
      setToast({ message: 'Message must be at least 10 characters', type: 'error' })
      setLoading(false)
      return
    }

    try {
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        setToast({ message: 'Message sent successfully! I\'ll get back to you soon.', type: 'success' })
        setFormData({
          name: '',
          email: '',
          message: '',
        })
      } else {
        setToast({ message: data.message || 'Failed to send message', type: 'error' })
      }
    } catch (err) {
      setToast({ message: 'Failed to connect to server. Please try again later.', type: 'error' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Let's Work Together</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project, collaboration, or opportunity in mind? Feel free to reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300">
            <h3 className="text-2xl font-bold text-gray-100 mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2 font-medium text-sm">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-gray-100 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200 placeholder-gray-500"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 font-medium text-sm">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-gray-100 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200 placeholder-gray-500"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 font-medium text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-gray-100 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200 placeholder-gray-500 resize-none"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 disabled:from-gray-600 disabled:to-gray-600 disabled:cursor-not-allowed text-white rounded-xl transition-all duration-300 font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-primary-500/25 hover:scale-[1.02] active:scale-[0.98]"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-100 mb-6">Contact Information</h3>
              
              <div className="space-y-5">
                {/* Telegram */}
                <a
                  href={telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-primary-500 hover:bg-gray-800 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center group-hover:bg-primary-500/30 transition-colors duration-300">
                    <SiTelegram className="w-6 h-6 text-primary-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-gray-100 font-semibold mb-1">Telegram</h4>
                    <p className="text-gray-400 text-sm">@{telegramUsername}</p>
                  </div>
                  <svg className="w-5 h-5 text-gray-500 group-hover:text-primary-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>

                {/* GitHub */}
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-gray-500 hover:bg-gray-800 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="w-12 h-12 bg-gray-500/20 rounded-xl flex items-center justify-center group-hover:bg-gray-500/30 transition-colors duration-300">
                    <FaGithub className="w-6 h-6 text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-gray-100 font-semibold mb-1">GitHub</h4>
                    <p className="text-gray-400 text-sm">View my projects and contributions</p>
                  </div>
                  <svg className="w-5 h-5 text-gray-500 group-hover:text-gray-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-blue-500 hover:bg-gray-800 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
                    <FaLinkedin className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-gray-100 font-semibold mb-1">LinkedIn</h4>
                    <p className="text-gray-400 text-sm">Connect professionally</p>
                  </div>
                  <svg className="w-5 h-5 text-gray-500 group-hover:text-blue-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>

              </div>

              {/* Telegram CTA Button */}
              <a
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white rounded-xl transition-all duration-300 font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02] active:scale-[0.98]"
              >
                <SiTelegram className="w-5 h-5" />
                Chat on Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </section>
  )
}

export default Contact
