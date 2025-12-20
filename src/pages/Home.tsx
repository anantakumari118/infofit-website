import teamWork from "../assets/team-work.jpg";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const Home = () => {
  return (
    <main className="bg-white text-gray-900 overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="bg-white">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.9 }}
          className="max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
              Building <span className="text-pink-600">Solutions</span>, <br />
              Shaping <span className="text-pink-600">Futures</span>
            </h1>

            <p className="mt-8 text-lg text-gray-600 max-w-xl">
              Infofit Software is a technology-driven startup delivering
              scalable IT solutions across web, mobile and digital platforms —
              helping businesses grow through innovation.
            </p>

            <div className="mt-12 flex gap-6">
              <a
                href="/services"
                className="px-8 py-4 bg-black text-white text-sm font-medium rounded-full hover:opacity-90"
              >
                What We Do
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-gray-300 text-sm font-medium rounded-full hover:border-black"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* RIGHT SIDE – WHAT WE DO */}
          <motion.div
            variants={fadeUp}
            transition={{ delay: 0.2, duration: 0.9 }}
            className="relative hidden md:block"
          >
            <div className="absolute inset-0 rounded-3xl rotate-[-4deg]
              bg-gradient-to-br from-pink-400 via-pink-500 to-pink-600 opacity-30" />

            <div className="relative rounded-3xl p-10 backdrop-blur-xl bg-white/40
              border border-white/60 shadow-2xl">
              <h3 className="text-3xl font-semibold">
                What <span className="text-pink-600">We Do</span>
              </h3>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  "Web Development",
                  "Mobile App Development",
                  "UI / UX Design",
                  "Custom Software Solutions",
                  "Startup Technology Support",
                  "Maintenance & Optimization",
                ].map((service) => (
                  <div
                    key={service}
                    className="rounded-xl px-4 py-3 bg-white/70 text-sm font-medium"
                  >
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl font-semibold">
              Why Choose <span className="text-pink-600">Us?</span>
            </h2>
            <p className="mt-3 text-gray-600 max-w-3xl mx-auto">
              We combine technology expertise, startup agility and a client-first
              mindset to deliver impactful digital solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* IMAGE */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden shadow-xl h-[400px]"
            >
              <img
                src={teamWork}
                alt="Infofit Software Team"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/45" />
              <div className="relative h-full flex flex-col justify-end p-7 text-white">
                <p className="text-sm opacity-80">Since 2017</p>
                <h3 className="text-3xl font-semibold mt-2">
                  Award-Winning <br /> Development Company
                </h3>
              </div>
            </motion.div>

            {/* CARDS */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-5"
            >
              {[
                "Strong Technical Foundation",
                "Skilled Professional Team",
                "Quality Assurance",
                "Transparent Collaboration",
              ].map((t) => (
                <motion.div
                  key={t}
                  variants={fadeUp}
                  transition={{ duration: 0.6 }}
                  className="border rounded-2xl p-5 bg-white/80 backdrop-blur-sm"
                >
                  <h4 className="font-semibold">{t}</h4>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-28 bg-gradient-to-b from-[#faf8f4] to-white">
        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-semibold">
              What Our <span className="text-pink-600">Clients Say</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Real feedback from businesses who trusted Infofit Software.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-10"
          >
            {[
              {
                text:
                  "Infofit Software delivered a custom solution that significantly improved our operational efficiency.",
                name: "Anuj Singh",
                role: "CEO, Rural Samriddhi",
              },
              {
                text:
                  "Their customized application transformed how we manage daily operations and added real business value.",
                name: "Dimitri Taller",
                role: "CEO, Ideal Transportation",
              },
              {
                text:
                  "They created a modern healthcare website with great attention to detail and usability.",
                name: "Dr. Okonkwo",
                role: "Head Doctor, Hope Physicians",
              },
            ].map((t) => (
              <motion.div
                key={t.name}
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                className="relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition"
              >
                <span className="absolute top-6 right-6 text-6xl text-pink-100">
                  “
                </span>
                <p className="text-gray-700 mb-8">{t.text}</p>
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-gradient-to-br from-pink-50 via-white to-pink-100">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="max-w-7xl mx-auto px-6"
        >
          <div className="rounded-3xl bg-white border border-pink-200 p-14
            flex flex-col md:flex-row items-center justify-between gap-12
            shadow-xl">
            <div className="max-w-xl">
              <h2 className="text-4xl font-semibold">
                Let’s build something{" "}
                <span className="text-pink-600">that actually matters</span>
              </h2>
              <p className="mt-5 text-gray-600">
                Infofit Software partners with you to design, develop and deliver
                technology that creates real impact.
              </p>
            </div>

            <div className="flex gap-4 flex-wrap">
              <a
                href="/contact"
                className="px-9 py-4 bg-pink-600 text-white rounded-full"
              >
                Start a Conversation
              </a>
              <a
                href="/services"
                className="px-9 py-4 border border-pink-300 rounded-full"
              >
                Explore Our Services
              </a>
            </div>
          </div>
        </motion.div>
      </section>

    </main>
  );
};

export default Home;
