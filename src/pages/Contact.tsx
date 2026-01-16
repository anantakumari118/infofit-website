import { motion } from "framer-motion";
import { FiArrowUpRight, FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
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

const contactInfo = [
  {
    icon: FiMail,
    label: "Email",
    value: "info@infofitsoftware.com",
    link: "mailto:info@infofitsoftware.com",
  },
  {
    icon: FiPhone,
    label: "Phone",
    value: "+91-9205493889",
    link: "tel:+919205493889",
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: "Remote-first · Serving globally",
    link: null,
  },
];

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    // Here you would typically send the data to your backend
    // const formData = new FormData(form);
    // For now, we'll just show an alert
    alert('Thank you for your message! We will get back to you within 24-48 hours.');
    form.reset();
  };

  return (
    <main className="bg-[#070915] text-white overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0b1026] via-[#0f1b3d] to-[#0b1026]">
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute -left-10 -top-16 h-64 w-64 rounded-full blur-3xl bg-blue-700/40" />
          <div className="absolute right-0 top-20 h-80 w-80 rounded-full blur-3xl bg-cyan-600/30" />
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
              Let's talk about your next idea.
            </h1>

            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Whether you're planning a new product, need technical support, or
              just want to explore possibilities — we'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12"
          >
            {/* LEFT – INFO */}
            <motion.div variants={fadeUp}>
              <p className="text-sm uppercase tracking-[0.2em] text-indigo-600 mb-2">
                Contact information
              </p>
              <h2 className="text-4xl font-semibold mb-6">
                Get in touch with Infofit Software.
              </h2>

              <p className="text-gray-600 mb-10 leading-relaxed">
                We work closely with startups and businesses to design, develop
                and deliver technology that creates real impact. Drop us a
                message and our team will get back to you shortly.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <div key={info.label} className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-400 flex items-center justify-center flex-shrink-0">
                        <Icon className="text-white text-xl" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">
                          {info.label}
                        </p>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-gray-600 hover:text-indigo-600 transition"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-600">{info.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-10 p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100">
                <p className="font-semibold text-gray-900 mb-2">
                  💼 Work With Us
                </p>
                <p className="text-gray-600 text-sm">
                  For partnerships, projects & collaborations, reach out via
                  email or use the form.
                </p>
              </div>
            </motion.div>

            {/* RIGHT – FORM */}
            <motion.div variants={fadeUp} id="contact-form">
              <div className="rounded-3xl bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100 p-10 shadow-xl">
                <h3 className="text-2xl font-semibold mb-2">Send us a message</h3>
                <p className="text-gray-600 text-sm mb-8">
                  Fill out the form below and we'll get back to you within 24–48 hours.
                </p>

                <form className="grid gap-5" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="border border-gray-300 px-4 py-3 rounded-xl bg-white focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                    required
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="border border-gray-300 px-4 py-3 rounded-xl bg-white focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                    required
                  />

                  <input
                    type="text"
                    placeholder="Company (Optional)"
                    className="border border-gray-300 px-4 py-3 rounded-xl bg-white focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                  />

                  <textarea
                    placeholder="Tell us about your project or idea"
                    rows={5}
                    className="border border-gray-300 px-4 py-3 rounded-xl bg-white focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 resize-none"
                    required
                  />

                  <button
                    type="submit"
                    className="mt-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-4 rounded-full font-semibold hover:opacity-90 transition shadow-lg flex items-center justify-center gap-2"
                  >
                    <FiSend /> Send Message
                  </button>
                </form>

                <p className="text-xs text-gray-500 mt-4 text-center">
                  We usually respond within 24–48 hours.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-gradient-to-br from-[#0f162f] via-[#0c122a] to-[#0f162f]">
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
                Ready to start your project?
              </h2>
              <p className="text-white/85">
                Let's discuss how we can help bring your vision to life with
                modern technology and thoughtful design.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact-form"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-4 bg-white text-indigo-700 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Schedule a call
              </a>
              <Link
                to="/services"
                className="px-8 py-4 border border-white/60 text-white rounded-full font-semibold inline-flex items-center gap-2 hover:bg-white/10 transition-all"
              >
                Explore services <FiArrowUpRight />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default Contact;
