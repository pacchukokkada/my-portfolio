import React, { useState } from 'react';
import { Github, Linkedin, Award, Phone, Mail, Server, Database, Code, Terminal, ExternalLink, Briefcase, Calendar, Building } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');

  const workExperience = [
    {
      company: "Numocity Technologies Pvt Ltd",
      position: "Software Engineer - Backend",
      location: "Bengaluru, Karnataka",
      period: "Jan 2022 - Present",
      description: "Building scalable and robust backend systems for EV charging infrastructure SaaS.",
      achievements: [
        "Designed, developed, and deployed scalable RESTful APIs using Node.js, Express.js, and Python FastAPI for high-traffic services, handling 10K+ daily API calls with 99.9% uptime.",
        "Integrated multiple payment gateways to enable secure, seamless transactions, processing ₹50L+ worth of monthly transactions with zero payment failures.",
        "Rotated as a Site Reliability Engineer (SRE), monitoring production systems and resolving critical issues, reducing incident resolution time by 40%.",
        "Optimized legacy API performance, reducing response times by 60% (500ms → 200ms) and improving reliability.",
        "Owned and maintained two microservice repositories, including code reviews, merges, and issue resolution, reviewing 200+ pull requests and mentoring junior engineers.",
        "Managed relational and non-relational databases (PostgreSQL, MySQL, MongoDB), supporting 1M+ records with zero data-loss incidents.",
        "Implemented Redis for caching, session handling, and mutex locking, improving cache hit ratio by 35% and reducing database load significantly.",
        "Built asynchronous processing pipelines and inter-service communication using RabbitMQ, handling 1K+ background tasks per hour.",
        "Containerized applications using Docker to streamline development and deployment.",
        "Collaborated with DevOps, frontend, and product teams to deliver business-critical features.",
        "Awarded 'Standout Performer' for reducing downtime by 30% during critical releases and driving successful project delivery."
      ],
      tech: ["Node.js", "Express.js", "Python", "FastAPI", "MongoDB", "Azure", "AWS", "PostgreSQL", "Redis", "Docker", "Payment Gateways"]
    },
  ];

   const awards = [
    {
      title: "Stand Out Performer",
      organization: "Numocity Technologies Pvt Ltd.",
      year: "2024",
      description: "Recognised for consistently exceeding expectations, delivering impactful results, and demonstrating exceptional dedication and teamwork"
    }
  ];
  const skills = {
    languages: ["JavaScript", "Python", "SQL", "TypeScript"],
    frameworks: ["Node.js", "Express", "FastAPI", "NestJS", "React"],
    databases: ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
    tools: ["Docker", "Azure", "AWS", "Git", "RabbitMQ",]
  };

  const education = [
    {
      degree: "Master of Computer Applications",
      school: "NMAM Institute of Technology, Nitte",
      year: "2021 - 2023",
      cgpa: "9.5/10"
    },
    {
      degree: "Bachelor of Computer Applications.",
      school: "Sri Dharmasthala Manjunatheshwara college, Ujire",
      year: "2018 - 2021",
      cgpa: "8.7/10",
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-sm z-50 border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Prashanth K
          </h1>
          <div className="flex gap-6">
            {['about', 'awards', 'experience', 'skills', 'contact'].map(section => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`capitalize transition-colors ${activeSection === section ? 'text-cyan-400' : 'text-slate-300 hover:text-white'
                  }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-6 mb-6">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
              <Server size={64} className="text-white" />
            </div>
            <div>
              <h2 className="text-5xl font-bold mb-2">Backend Developer</h2>
              <p className="text-xl text-slate-300 mb-2">Building robust and scalable server-side solutions</p>
              <p className="text-lg text-cyan-400">SWE -Backend @ Numcocity Technologies Pvt Ltd.</p>
            </div>
          </div>
          <div className="flex gap-4 mt-8">
            <a href="https://github.com/pacchukokkada" target="_blank" className="flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg transition-colors">
              <Github size={20} />
              GitHub
            </a>
            <a href="http://www.linkedin.com/in/prashanth-kokkada-01b471201" target="_blank" className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors">
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a href="mailto:prashantm406@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors">
              <Mail size={20} />
              Email
            </a>
            <a href="https://drive.google.com/file/d/17Zf5LBlw2V55BuPiMz_LkQ6JeAtHCLkS/view?usp=drive_link" target="_blank" className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors">
              <ExternalLink size={20} />
              Resume
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      {activeSection === 'about' && (
        <section className="py-20 px-6 bg-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Code className="text-cyan-400" />
              About Me
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 bg-slate-900/50 p-8 rounded-xl border border-slate-700">
                <h4 className="text-xl font-semibold mb-4 text-cyan-400">Professional Summary</h4>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Backend Engineer with over 2 years of experience in building scalable and reliable backend systems for EV charging platforms.
                  Skilled in Node.js, Express.js, and Python FastAPI for developing RESTful APIs and microservices. Experienced in integrating payment gateways, managing databases, and improving API performance.
                  Worked in a fast-paced startup environment, collaborating closely with DevOps and product teams to deliver features quickly and efficiently.
                  Familiar with Docker, CI/CD, and cloud deployments.
                  Recognized for improving uptime and ensuring smooth project deliveries.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  Specialized in designing RESTful APIs, microservices, and distributed systems.
                  Passionate about writing clean, maintainable code, following best practices, and implementing thorough unit testing.
                  A strong team player, always eager to explore new technologies and solve challenging engineering problems.
                </p>
              </div>
              <div className="bg-slate-900/50 p-8 rounded-xl border border-slate-700">
                <h4 className="text-xl font-semibold mb-4 text-cyan-400">Education</h4>
                {education.map((edu, idx) => (
                  <div key={idx} className="mb-4">
                    <h5 className="font-semibold text-white">{edu.degree}</h5>
                    <p className="text-slate-300 text-sm">{edu.school}</p>
                    <p className="text-slate-400 text-sm">{edu.year}</p>
                    <p className="text-cyan-400 text-sm mt-2 font-semibold">CGPA: {edu.cgpa}</p>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
 {/* Awards Section */}
      {activeSection === 'awards' && (
        <section className="py-20 px-6 bg-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Award className="text-cyan-400" />
              Awards & Recognition
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {awards.map((award, idx) => (
                <div key={idx} className="bg-slate-900/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-400 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Award size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-white mb-1">{award.title}</h4>
                      <p className="text-cyan-400 text-sm mb-2">{award.organization} • {award.year}</p>
                      <p className="text-slate-300">{award.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Experience Section */}
      {activeSection === 'experience' && (
        <section className="py-20 px-6 bg-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Briefcase className="text-cyan-400" />
              Work Experience
            </h3>
            <div className="space-y-8">
              {workExperience.map((job, idx) => (
                <div key={idx} className="bg-slate-900/50 p-8 rounded-xl border border-slate-700 hover:border-cyan-400 transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-2xl font-semibold text-white mb-1">{job.position}</h4>
                      <div className="flex items-center gap-2 text-cyan-400 mb-2">
                        <Building size={18} />
                        <span className="text-lg">{job.company}</span>
                      </div>
                      <div className="flex items-center gap-4 text-slate-400 text-sm">
                        <span className="flex items-center gap-1">
                          <Calendar size={16} />
                          {job.period}
                        </span>
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-300 mb-4">{job.description}</p>
                  <div className="mb-4">
                    <h5 className="text-sm font-semibold text-cyan-400 mb-2">Key Achievements:</h5>
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-300">
                          <span className="text-cyan-400 mt-1">▸</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {job.tech.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-slate-800 rounded text-sm border border-slate-600">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Projects Section */}
      {activeSection === 'projects' && (
        <section className="py-20 px-6 bg-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Database className="text-cyan-400" />
              Key Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, idx) => (
                <div key={idx} className="bg-slate-900/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-400 transition-all">
                  <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                  <p className="text-sm text-cyan-400 mb-3 flex items-center gap-1">
                    <Building size={14} />
                    {project.company}
                  </p>
                  <p className="text-slate-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded text-sm border border-cyan-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Skills Section */}
      {activeSection === 'skills' && (
        <section className="py-20 px-6 bg-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Terminal className="text-cyan-400" />
              Technical Skills
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="bg-slate-900/50 p-6 rounded-xl border border-slate-700">
                  <h4 className="text-xl font-semibold mb-4 text-cyan-400 capitalize">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map(skill => (
                      <span key={skill} className="px-4 py-2 bg-slate-800 rounded-lg text-sm border border-slate-600 hover:border-cyan-400 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      {activeSection === 'contact' && (
        <section className="py-20 px-6 bg-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Mail className="text-cyan-400" />
              Get In Touch
            </h3>
            <div className="bg-slate-900/50 p-12 rounded-xl border border-slate-700 max-w-2xl mx-auto text-center">
              <p className="text-xl text-slate-300 mb-8">
                Interested in working together or discussing opportunities? Feel free to reach out!
              </p>
              <div className="flex flex-col gap-4 items-center">
                 <a href="mailto:prashantm406@gmail.com" className="flex items-center gap-3 px-8 py-4 bg-cyan-500 hover:bg-cyan-600 rounded-lg transition-colors text-lg w-full max-w-md justify-center">
                  <Mail size={24} />
                  prashantm406@gmail.com
                </a>
                <a href="tel:+1234567890" className="flex items-center gap-3 px-8 py-4 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors text-lg w-full max-w-md justify-center">
                  <Phone size={24} />
                  +91 9353192583
                </a>
                <a href="tel:+0987654321" className="flex items-center gap-3 px-8 py-4 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors text-lg w-full max-w-md justify-center">
                  <Phone size={24} />
                  +91 9740584631
                </a>
                <div className="flex gap-4 mt-4">
                  <a href="https://github.com/pacchukokkada" target="_blank" className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
                    <Github size={24} />
                  </a>
                  <a href="http://www.linkedin.com/in/prashanth-kokkada-01b471201" target="_blank" className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
<p>© 2025 Prashanth | Built with React, Tailwind CSS & ❤️</p>
        </div>
      </footer>
    </div>
  );
}