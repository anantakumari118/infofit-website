import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const Services = () => {
  return (
    <main className="bg-white text-gray-900 overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="py-28 bg-white">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-6 text-center"
        >
          <p className="uppercase text-sm tracking-wider text-pink-600 mb-4">
            Our Services
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
            Building technology that{" "}
            <span className="text-pink-600">
              actually moves businesses forward
            </span>
          </h1>

          <p className="text-gray-600 max-w-3xl mx-auto">
            We partner with startups and businesses to design, develop and
            deliver scalable digital solutions — with clarity, quality and
            long-term impact.
          </p>
        </motion.div>
      </section>

      {/* ================= WHAT WE OFFER ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-semibold">What We Offer</h2>
            <div className="w-16 h-1 bg-pink-600 mx-auto mt-4" />
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              From web and mobile development to custom solutions, we provide
              comprehensive services to meet your technology needs.
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
                title: "Web & Application Development",
                points: [
                  "Custom web applications & dashboards",
                  "Enterprise-grade architecture",
                  "API & third-party integrations",
                  "Secure & scalable systems",
                ],
              },
              {
                title: "Mobile App Development",
                points: [
                  "Android & iOS applications",
                  "Cross-platform solutions",
                  "Backend & cloud integration",
                  "App store deployment support",
                ],
              },
              {
                title: "UI / UX Design",
                points: [
                  "User research & wireframing",
                  "Modern UI systems",
                  "Brand-aligned design",
                  "Conversion-focused UX",
                ],
              },
              {
                title: "Custom Software Solutions",
                points: [
                  "Business automation tools",
                  "Internal systems & platforms",
                  "Scalable custom products",
                  "Long-term maintainability",
                ],
              },
              {
                title: "Startup Technology Support",
                points: [
                  "MVP development",
                  "Product & tech roadmap",
                  "Architecture planning",
                  "Scaling & optimization",
                ],
              },
              {
                title: "Maintenance & Optimization",
                points: [
                  "Performance optimization",
                  "Security updates",
                  "Feature enhancements",
                  "Ongoing technical support",
                ],
              },
            ].map((service) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                className="
                  bg-white/70 backdrop-blur-xl
                  border border-gray-200 rounded-2xl p-8
                  shadow-sm hover:shadow-xl
                  transition
                "
              >
                <h3 className="text-xl font-semibold mb-4">
                  {service.title}
                </h3>

                <ul className="space-y-2 text-sm text-gray-600">
                  {service.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="text-pink-600">✔</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-24 bg-[#faf7f5]">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-semibold mb-4">
              Our Development Process
            </h2>
            <div className="w-16 h-1 bg-pink-600 mx-auto mb-10" />
            <p className="text-gray-600 max-w-2xl mx-auto mb-16">
              A transparent, collaborative process designed to deliver clarity,
              quality and predictable outcomes.
            </p>
          </motion.div>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-pink-200" />

            {[
              {
                step: "1",
                title: "Discovery & Requirements",
                desc: "Understanding your business goals and project needs.",
              },
              {
                step: "2",
                title: "Planning & Design",
                desc: "Designing the right architecture and user experience.",
              },
              {
                step: "3",
                title: "Development",
                desc: "Building with modern technologies and best practices.",
              },
              {
                step: "4",
                title: "Testing & QA",
                desc: "Ensuring quality, performance and reliability.",
              },
              {
                step: "5",
                title: "Deployment",
                desc: "Smooth launch into production environments.",
              },
              {
                step: "6",
                title: "Support & Maintenance",
                desc: "Continuous support and ongoing improvements.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`flex items-center mb-12 ${
                  i % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div className="w-1/2 px-6">
                  <div className="bg-white rounded-xl p-6 shadow">
                    <h4 className="font-semibold mb-2">
                      {item.step}. {item.title}
                    </h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>

                <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8
                  bg-pink-600 text-white rounded-full flex items-center
                  justify-center text-sm font-medium">
                  {item.step}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-white">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-6"
        >
          <div className="bg-black rounded-[32px] p-14 text-white
            flex flex-col md:flex-row items-center justify-between gap-10">

            <div>
              <h2 className="text-3xl font-semibold mb-4">
                Let’s build something that{" "}
                <span className="text-pink-500">actually matters</span>
              </h2>
              <p className="text-gray-300 max-w-xl">
                Infofit Software partners with you to design, develop and deliver
                technology that creates measurable, real-world impact.
              </p>
            </div>

            <div className="flex gap-4">
              <a
                href="/contact"
                className="px-8 py-4 bg-pink-600 rounded-full
                text-sm font-medium hover:opacity-90"
              >
                Start a Conversation
              </a>
              <a
                href="/about"
                className="px-8 py-4 border border-gray-600 rounded-full
                text-sm font-medium hover:border-white"
              >
                About Us
              </a>
            </div>

          </div>
        </motion.div>
      </section>

    </main>
  );
};

export default Services;
