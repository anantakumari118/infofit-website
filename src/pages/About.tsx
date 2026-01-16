import { motion } from "framer-motion";
import { FiArrowUpRight, FiUsers, FiAward, FiTarget, FiZap } from "react-icons/fi";
import { Link } from "react-router-dom";
import founderImage from "../assets/founder-anish.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const values = [
  {
    icon: FiZap,
    title: "Engineering Excellence",
    desc: "Built by engineers, for engineers. We prioritize technical depth and long-term maintainability.",
  },
  {
    icon: FiTarget,
    title: "Outcome-Driven",
    desc: "Every project is measured by business impact, not just technical delivery.",
  },
  {
    icon: FiUsers,
    title: "Partnership Mindset",
    desc: "We co-innovate with clients, treating their success as our success.",
  },
  {
    icon: FiAward,
    title: "Quality First",
    desc: "No shortcuts. Thoughtful engineering over quick fixes, every time.",
  },
];

const About = () => {
  return (
    <main className="bg-[#070915] text-white overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0b1026] via-[#0f1b3d] to-[#0b1026]">
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute -left-10 -top-16 h-64 w-64 rounded-full blur-3xl bg-blue-700/40" />
          <div className="absolute right-0 top-20 h-80 w-80 rounded-full blur-3xl bg-pink-600/30" />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-24 relative">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.9 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
              A new kind of technology consulting company.
            </h1>

            <p className="text-lg text-gray-200 max-w-2xl">
              We help businesses transform – from core to experience – to thrive
              in the marketplace of the future. With a unique blend of
              engineering DNA with experience DNA, we help businesses get to the
              future, faster.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= MISSION VISION ================= */}
      <section className="bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {[
              {
                label: "Our Mission",
                title: "Build technology people can rely on",
                desc: "Our mission is to help businesses grow with software that is practical, scalable and thoughtfully engineered. We bridge the gap between business needs and technology execution.",
              },
              {
                label: "Our Vision",
                title: "A future where technology feels empowering",
                desc: "We envision a world where businesses trust their technology and teams feel confident using it. Technology should enable growth, not hinder it.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="p-8 rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-slate-50 shadow-[0_16px_45px_-28px_rgba(15,23,42,0.4)]"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-indigo-600 mb-3">
                  {item.label}
                </p>
                <h3 className="text-3xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= OUR STORY ================= */}
      <section className="bg-gradient-to-br from-[#0f162f] via-[#0c122a] to-[#0f162f]">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-blue-300 mb-2">
                Our Story
              </p>
              <h2 className="text-4xl font-semibold leading-tight mb-6">
                From vision to a company trusted for delivery.
              </h2>
              <div className="space-y-4 text-gray-200">
                <p>
                  Founded in 2023, Infofit Software began with a clear intention
                  — to bridge the gap between business needs and technology
                  execution.
                </p>
                <p>
                  Today, we deliver web platforms, mobile applications and custom
                  systems for growing businesses across industries. We combine
                  startup agility with enterprise-grade discipline.
                </p>
                <p>
                  Our team brings decades of combined experience in building
                  scalable systems, modernizing legacy platforms, and delivering
                  customer-grade experiences.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "2023", label: "Founded" },
                { value: "50+", label: "Projects delivered" },
                { value: "20+", label: "Team members" },
                { value: "8+", label: "Industries served" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur"
                >
                  <p className="text-3xl font-semibold bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-300 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= FOUNDER ================= */}
      <section className="bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-indigo-100 to-blue-100 blur-2xl opacity-50" />
              <img
                src={founderImage}
                alt="Anish Singh"
                className="relative rounded-3xl w-full max-w-md shadow-xl grayscale hover:grayscale-0 transition duration-700"
              />
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-indigo-600 mb-2">
                Founder's Perspective
              </p>
              <h3 className="text-4xl font-semibold mb-6">
                Building technology people actually trust.
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                Founded by <strong>Anish Singh</strong>, Infofit Software focuses
                on clarity, ownership and long-term value creation. We believe
                technology should solve real problems, not create new ones.
              </p>

              <blockquote className="border-l-4 border-indigo-500 pl-6 italic text-gray-700 mb-4 text-lg">
                "Our responsibility doesn't end at delivery. It begins there."
              </blockquote>

              <p className="font-medium text-gray-900">— Anish Singh, Founder</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="bg-gradient-to-br from-[#0f162f] via-[#0c122a] to-[#0f162f]">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-blue-300 mb-2">
              Our Values
            </p>
            <h2 className="text-4xl font-semibold leading-tight">
              How we think at Infofit.
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  variants={fadeUp}
                  className="p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur"
                >
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center mb-4">
                    <Icon className="text-white text-xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{value.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-white">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-6 py-16"
        >
          <div className="rounded-3xl bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 text-white p-12 md:p-16 shadow-[0_30px_80px_-45px_rgba(56,189,248,0.75)] flex flex-col md:flex-row gap-10 md:items-center md:justify-between">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
                Ready to work with a team that takes ownership?
              </h2>
              <p className="text-white/85">
                Infofit Software partners with you to design, develop and
                deliver technology that creates real impact.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-indigo-700 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Start the conversation
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border border-white/60 text-white rounded-full font-semibold hover:bg-white/10 transition-all"
              >
                Explore our services
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default About;
