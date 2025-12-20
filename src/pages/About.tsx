import { motion } from "framer-motion";
import founderImage from "../assets/founder-anish.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <main className="bg-white text-gray-900 overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="py-32">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto px-6"
        >
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight max-w-4xl">
            We don’t just build software. <br />
            We build <span className="text-pink-600">confidence</span> in technology.
          </h1>

          <p className="mt-8 text-lg text-gray-600 max-w-2xl">
            Infofit Software is a technology company focused on designing,
            engineering and delivering digital solutions that actually work —
            for people, businesses and long-term growth.
          </p>
        </motion.div>
      </section>

      {/* ================= MISSION / VISION ================= */}
      <section className="py-24 bg-[#faf7f5]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          {[{
            label: "Our Mission",
            title: "Build technology people can rely on",
            desc:
              "Our mission is to help businesses grow with software that is practical, scalable and thoughtfully engineered.",
          },
          {
            label: "Our Vision",
            title: "A future where technology feels empowering",
            desc:
              "We envision a world where businesses trust their technology and teams feel confident using it.",
          }].map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="rounded-3xl p-10 bg-white/70 backdrop-blur-xl border border-white shadow-lg"
            >
              <p className="text-sm uppercase tracking-wide text-pink-600 mb-4">
                {item.label}
              </p>
              <h3 className="text-3xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ================= OUR STORY ================= */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm uppercase tracking-wide text-pink-600 mb-4">
              Our Story
            </p>
            <h2 className="text-4xl font-semibold">
              From vision to a company trusted for delivery
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6 text-gray-600 leading-relaxed"
          >
            <p>
              Founded in 2023, Infofit Software began with a clear intention —
              to bridge the gap between business needs and technology execution.
            </p>
            <p>
              Today, we deliver web platforms, mobile applications and custom
              systems for growing businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= FOUNDER ================= */}
      <section className="py-28 bg-[#faf7f5]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-3xl bg-pink-100 blur-2xl opacity-50" />

            <img
              src={founderImage}
              alt="Anish Singh"
              className="
                relative rounded-3xl w-full max-w-md shadow-xl
                grayscale hover:grayscale-0
                transition duration-700 ease-in-out
                hover:scale-[1.02]
              "
            />
          </motion.div>

          {/* CONTENT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-sm uppercase tracking-wide text-pink-600 mb-4">
              Founder’s Perspective
            </p>
            <h3 className="text-4xl font-semibold mb-6">
              Building technology people actually trust
            </h3>

            <p className="text-gray-600 leading-relaxed mb-6">
              Founded by <strong>Anish Singh</strong>, Infofit Software focuses on
              clarity, ownership and long-term value creation.
            </p>

            <blockquote className="border-l-4 border-pink-500 pl-4 italic text-gray-700">
              “Our responsibility doesn’t end at delivery. It begins there.”
            </blockquote>

            <p className="mt-4 font-medium">
              — Anish Singh, Founder
            </p>
          </motion.div>

        </div>
      </section>

      {/* ================= THINKING CARDS ================= */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-semibold mb-14">
            How we think at <span className="text-pink-600">Infofit</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Built by Engineers",
              "Logic over Assumptions",
              "Long-Term Partnerships",
              "No Shortcut Culture",
            ].map((title, i) => (
              <motion.div
                key={title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="rounded-2xl border border-gray-200 p-6 hover:shadow-md transition"
              >
                <h4 className="text-lg font-semibold mb-2">{title}</h4>
                <p className="text-sm text-gray-600">
                  Thoughtful engineering over shortcuts.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-32">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            Ready to work with a team that <span className="text-pink-600">takes ownership</span>?
          </h2>

          <p className="text-gray-600 mb-10">
            Infofit Software partners with you to design, develop and deliver
            technology that creates real impact.
          </p>

          <a
            href="/contact"
            className="inline-block px-10 py-4 rounded-full bg-black text-white font-medium hover:opacity-90"
          >
            Start the Conversation
          </a>
        </motion.div>
      </section>

    </main>
  );
};

export default About;
