import { skills } from '../data/skills'

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="section-container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon
            return (
              <div
                key={index}
                className="bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg group"
              >
                <div className="text-4xl mb-4 text-[#D64E1E] group-hover:text-[#B8421A] group-hover:scale-110 transition-all duration-300">
                  <IconComponent />
                </div>
                <h3 className="text-lg font-semibold text-gray-100">
                  {skill.name}
                </h3>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
