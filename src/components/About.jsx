import { useState } from 'react'
import { FaGraduationCap, FaCode, FaRocket, FaGithub, FaFolderOpen, FaLaptopCode, FaAward } from 'react-icons/fa'

const About = () => {
  const [imageError, setImageError] = useState(false)

  const stats = [
    { icon: FaFolderOpen, label: 'Projects', value: '7+' },
    { icon: FaGithub, label: 'Repositories', value: '9+' },
    { icon: FaLaptopCode, label: 'Technologies', value: '4+' },
    { icon: FaAward, label: 'Years Learning', value: '3+' },
  ]

  const timeline = [
    {
      icon: FaGraduationCap,
      title: 'Bachelor of Degree in Computer Science',
      subtitle: 'Jimma University',
      year: '2026',
      color: 'primary',
    },
    {
      icon: FaCode,
      title: 'Software Development Projects',
      subtitle: 'Web Applications, Python Projects, AI Projects',
      year: '2024-Present',
      color: 'blue',
    },
    {
      icon: FaRocket,
      title: 'Future Goal',
      subtitle: 'Become a Professional Software Engineer',
      year: 'Ongoing',
      color: 'purple',
    },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">About Me</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get to know me better
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Profile Area */}
          <div className="space-y-6">
            <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                {/* Profile Photo */}
                <div className="relative mb-6 group">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary-500/30 group-hover:border-primary-500/50 transition-all duration-300 shadow-xl">
                    {!imageError ? (
                      <img
                        src="/profile.jpg"
                        alt="Ketema Bogale"
                        className="w-full h-full object-cover"
                        onError={() => setImageError(true)}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center">
                        <span className="text-6xl font-bold text-white">KB</span>
                      </div>
                    )}
                  </div>
                  <div className="absolute bottom-0 right-0 w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center shadow-lg">
                    <FaGraduationCap className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Name and Title */}
                <h3 className="text-3xl font-bold text-gray-100 mb-2">Ketema Bogale</h3>
                <p className="text-primary-400 font-medium text-lg mb-4">Computer Science Graduate</p>
              </div>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 backdrop-blur-lg rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-105 group"
                >
                  <stat.icon className="w-8 h-8 text-primary-400 mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-2xl font-bold text-gray-100 mb-1">{stat.value}</p>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* About Information */}
          <div className="space-y-6">
            <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-100 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center">
                  <FaRocket className="w-5 h-5 text-primary-400" />
                </div>
                My Journey
              </h3>

              <div className="space-y-6">
                {/* Journey Sections */}
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <FaGraduationCap className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-gray-100 font-semibold mb-1">Computer Science Graduate</h4>
                      <p className="text-gray-400 text-sm">Jimma University, Class of 2026</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <FaCode className="w-4 h-4 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-gray-100 font-semibold mb-1">Full Stack Development</h4>
                      <p className="text-gray-400 text-sm">Building modern web applications with React, Node.js, and more</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <FaLaptopCode className="w-4 h-4 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-gray-100 font-semibold mb-1">AI & Machine Learning</h4>
                      <p className="text-gray-400 text-sm">Exploring the intersection of software and artificial intelligence</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <FaAward className="w-4 h-4 text-orange-400" />
                    </div>
                    <div>
                      <h4 className="text-gray-100 font-semibold mb-1">Problem Solver</h4>
                      <p className="text-gray-400 text-sm">Passionate about solving real-world problems through software</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-100 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center">
                  <FaAward className="w-5 h-5 text-primary-400" />
                </div>
                Timeline
              </h3>

              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className="relative pl-8 pb-6 last:pb-0 group"
                  >
                    {/* Timeline Line */}
                    {index !== timeline.length - 1 && (
                      <div className="absolute left-3 top-8 bottom-0 w-0.5 bg-gray-700 group-hover:bg-primary-500/50 transition-colors duration-300"></div>
                    )}
                    
                    {/* Timeline Dot */}
                    <div className={`absolute left-0 top-1 w-6 h-6 rounded-full flex items-center justify-center ${
                      item.color === 'primary' ? 'bg-primary-500' :
                      item.color === 'blue' ? 'bg-blue-500' :
                      item.color === 'purple' ? 'bg-purple-500' : 'bg-gray-500'
                    }`}>
                      <item.icon className="w-3 h-3 text-white" />
                    </div>

                    {/* Timeline Content */}
                    <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-[1.02]">
                      <h4 className="text-gray-100 font-semibold mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm mb-2">{item.subtitle}</p>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        item.color === 'primary' ? 'bg-primary-500/20 text-primary-400' :
                        item.color === 'blue' ? 'bg-blue-500/20 text-blue-400' :
                        item.color === 'purple' ? 'bg-purple-500/20 text-purple-400' : 'bg-gray-500/20 text-gray-400'
                      }`}>
                        {item.year}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
