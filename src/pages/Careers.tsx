import { motion } from "framer-motion";
import { FiArrowUpRight, FiMapPin, FiClock, FiBriefcase } from "react-icons/fi";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const jobs = [
  {
    title: "Frontend Developer (React)",
    type: "Full Time",
    location: "Remote",
    desc: "Work on modern UI using React, Tailwind and component-driven architecture. Build scalable, performant web applications.",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
  },
  {
    title: "Backend Developer (Node.js)",
    type: "Full Time",
    location: "Remote",
    desc: "Build scalable APIs and backend systems using Node.js and databases. Design microservices and cloud-native solutions.",
    skills: ["Node.js", "PostgreSQL", "AWS", "Docker"],
  },
  {
    title: "UI / UX Designer",
    type: "Contract",
    location: "Remote",
    desc: "Design intuitive user experiences and clean interfaces for web & mobile. Create design systems and user flows.",
    skills: ["Figma", "User Research", "Design Systems", "Prototyping"],
  },
  {
    title: "Mobile App Developer",
    type: "Full Time",
    location: "Remote",
    desc: "Develop Android & iOS apps with strong performance and UX focus. Work with React Native or native platforms.",
    skills: ["React Native", "iOS", "Android", "REST APIs"],
  },
  {
    title: "QA / Software Tester",
    type: "Part Time",
    location: "Remote",
    desc: "Ensure quality, performance and reliability across applications. Write test cases and automate testing.",
    skills: ["Testing", "Automation", "Jest", "Cypress"],
  },
  {
    title: "Intern – Software Development",
    type: "Internship",
    location: "Remote",
    desc: "Learn by building real-world projects with experienced developers. Gain hands-on experience in modern tech stacks.",
    skills: ["Learning", "Mentorship", "Real Projects", "Growth"],
  },
];

const benefits = [
  "Competitive salary & equity",
  "Remote-first culture",
  "Flexible working hours",
  "Learning & development budget",
  "Health & wellness benefits",
  "Team building events",
];

const Careers = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Here you would typically send the data to your backend
    // For now, we'll just show an alert
    alert('Thank you for your application! We will review your profile and get back to you soon.');
    form.reset();
  };

  return (
    <main className="bg-[#070915] text-white overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0b1026] via-[#0f1b3d] to-[#0b1026]">
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute -left-10 -top-16 h-64 w-64 rounded-full blur-3xl bg-blue-700/40" />
          <div className="absolute right-0 top-20 h-80 w-80 rounded-full blur-3xl bg-green-600/30" />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-24 relative">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.9 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
              Build your career with Infofit Software.
            </h1>

            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Join a growing tech startup where your ideas matter, your skills
              grow, and your work creates real impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-indigo-600 mb-2">
              Why join us
            </p>
            <h2 className="text-4xl font-semibold leading-tight mb-4">
              A culture of growth and impact.
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We invest in our people because they're our greatest asset.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="p-4 rounded-xl border border-gray-200 bg-gradient-to-br from-white to-slate-50"
              >
                <p className="text-gray-800 font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= OPEN POSITIONS ================= */}
      <section className="bg-gradient-to-br from-[#0f162f] via-[#0c122a] to-[#0f162f]">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
          >
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-blue-300 mb-2">
                Open positions
              </p>
              <h2 className="text-4xl font-semibold leading-tight">
                Current openings.
              </h2>
              <p className="mt-3 text-gray-200 max-w-2xl">
                We're always looking for talented individuals who share our
                passion for building great software.
              </p>
            </div>
            <a
              href="#apply"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 text-blue-200 font-medium hover:text-blue-100 transition-colors"
            >
              Apply now <FiArrowUpRight />
            </a>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {jobs.map((job) => (
              <motion.div
                key={job.title}
                variants={fadeUp}
                className="p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur hover:bg-white/10 transition"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{job.title}</h3>
                  <FiBriefcase className="text-blue-400" />
                </div>

                <div className="flex items-center gap-4 mb-3 text-sm text-gray-300">
                  <span className="flex items-center gap-1.5">
                    <FiClock /> {job.type}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FiMapPin /> {job.location}
                  </span>
                </div>

                <p className="text-gray-300 text-sm mb-4">{job.desc}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <a
                  href="#apply"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 text-blue-200 font-medium text-sm hover:text-blue-100 transition group-hover:gap-3"
                >
                  Apply now <FiArrowUpRight />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= APPLY FORM ================= */}
      <section id="apply" className="bg-white text-gray-900">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-6 py-20"
        >
          <div className="rounded-3xl bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100 p-12 shadow-xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-semibold mb-4">Apply for a position</h2>
              <p className="text-gray-600">
                Share your details and upload your resume. Our team will reach
                out if your profile matches.
              </p>
            </div>

            <form className="grid gap-5" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Full Name"
                className="border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                required
              />

              <input
                type="email"
                placeholder="Email Address"
                className="border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                required
              />

              <input
                type="text"
                placeholder="Position you are applying for"
                className="border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />

              <input
                type="file"
                className="border border-gray-300 px-4 py-3 rounded-xl bg-white focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                accept=".pdf,.doc,.docx"
                required
              />

              <button
                type="submit"
                className="mt-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-4 rounded-full font-semibold hover:opacity-90 transition shadow-lg"
              >
                Submit Application
              </button>
            </form>

            <p className="text-xs text-gray-500 mt-4 text-center">
              Accepted formats: PDF, DOC, DOCX
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default Careers;
