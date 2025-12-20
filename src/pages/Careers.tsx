import { motion } from "framer-motion";

const jobs = [
  {
    title: "Frontend Developer (React)",
    type: "Full Time · Remote",
    desc: "Work on modern UI using React, Tailwind and component-driven architecture.",
  },
  {
    title: "Backend Developer (Node.js)",
    type: "Full Time · Remote",
    desc: "Build scalable APIs and backend systems using Node.js and databases.",
  },
  {
    title: "UI / UX Designer",
    type: "Contract · Remote",
    desc: "Design intuitive user experiences and clean interfaces for web & mobile.",
  },
  {
    title: "Mobile App Developer",
    type: "Full Time · Remote",
    desc: "Develop Android & iOS apps with strong performance and UX focus.",
  },
  {
    title: "QA / Software Tester",
    type: "Part Time · Remote",
    desc: "Ensure quality, performance and reliability across applications.",
  },
  {
    title: "Intern – Software Development",
    type: "Internship · Remote",
    desc: "Learn by building real-world projects with experienced developers.",
  },
];

const Careers = () => {
  return (
    <main className="bg-white text-gray-900">

      {/* ================= HERO ================= */}
      <section className="py-28 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto px-6 text-center"
        >
          <p className="uppercase text-sm tracking-wider text-pink-600 mb-4">
            Careers
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold mb-6">
            Build your career with{" "}
            <span className="text-pink-600">Infofit Software</span>
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Join a growing tech startup where your ideas matter,
            your skills grow, and your work creates real impact.
          </p>
        </motion.div>
      </section>

      {/* ================= OPEN POSITIONS ================= */}
      <section className="py-24 bg-[#faf7f5]">
        <div className="max-w-6xl mx-auto px-6">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold mb-12 text-center"
          >
            Current Openings
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {jobs.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-2">
                  {job.title}
                </h3>

                <p className="text-sm text-pink-600 mb-3">
                  {job.type}
                </p>

                <p className="text-gray-600 text-sm mb-6">
                  {job.desc}
                </p>

                <a
                  href="#apply"
                  className="inline-block text-sm font-medium
                  text-pink-600 hover:underline"
                >
                  Apply Now →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= APPLY FORM ================= */}
      <section id="apply" className="py-28 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-6"
        >
          <div className="bg-[#faf7f5] rounded-3xl p-12 shadow-xl">
            <h2 className="text-3xl font-semibold mb-4 text-center">
              Apply for a position
            </h2>

            <p className="text-gray-600 text-center mb-10">
              Share your details and upload your resume.
              Our team will reach out if your profile matches.
            </p>

            <form className="grid gap-6">
              <input
                type="text"
                placeholder="Full Name"
                className="border border-gray-300 px-4 py-3 rounded-xl
                focus:outline-none focus:border-pink-500"
                required
              />

              <input
                type="email"
                placeholder="Email Address"
                className="border border-gray-300 px-4 py-3 rounded-xl
                focus:outline-none focus:border-pink-500"
                required
              />

              <input
                type="text"
                placeholder="Position you are applying for"
                className="border border-gray-300 px-4 py-3 rounded-xl
                focus:outline-none focus:border-pink-500"
              />

              <input
                type="file"
                className="border border-gray-300 px-4 py-3 rounded-xl
                bg-white"
                accept=".pdf,.doc,.docx"
                required
              />

              <button
                type="submit"
                className="mt-4 bg-pink-600 text-white py-4 rounded-full
                font-medium hover:opacity-90 transition"
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
