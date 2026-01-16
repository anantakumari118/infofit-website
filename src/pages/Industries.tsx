import { motion } from "framer-motion";
import { FiArrowUpRight, FiTrendingUp } from "react-icons/fi";
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

const industries = [
  {
    title: "Banking & Financial Services",
    desc: "Digital banking platforms, payment systems, and regulatory compliance solutions.",
    highlights: ["Core banking modernization", "Payment processing", "Risk & compliance"],
  },
  {
    title: "Healthcare & Life Sciences",
    desc: "Patient platforms, EHR systems, and healthcare analytics for better outcomes.",
    highlights: ["Patient portals", "Clinical systems", "Healthcare analytics"],
  },
  {
    title: "Manufacturing & Engineering",
    desc: "Industry 4.0 solutions, IoT integration, and supply chain optimization.",
    highlights: ["Smart manufacturing", "Supply chain", "Quality systems"],
  },
  {
    title: "Retail & Consumer Goods",
    desc: "E-commerce platforms, omnichannel experiences, and customer engagement.",
    highlights: ["Digital commerce", "Customer experience", "Inventory management"],
  },
  {
    title: "Energy & Utilities",
    desc: "Smart grid solutions, asset management, and sustainability platforms.",
    highlights: ["Smart grid", "Asset management", "Sustainability"],
  },
  {
    title: "Travel, Transport & Hospitality",
    desc: "Booking platforms, fleet management, and customer journey optimization.",
    highlights: ["Booking systems", "Fleet management", "Customer journeys"],
  },
  {
    title: "Hi-Tech & Services",
    desc: "SaaS platforms, product engineering, and cloud-native solutions.",
    highlights: ["SaaS platforms", "Product engineering", "Cloud-native"],
  },
  {
    title: "Insurance",
    desc: "Policy administration, claims processing, and digital insurance platforms.",
    highlights: ["Policy systems", "Claims automation", "Digital insurance"],
  },
];

const Industries = () => {
  return (
    <main className="bg-[#070915] text-white overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0b1026] via-[#0f1b3d] to-[#0b1026]">
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute -left-10 -top-16 h-64 w-64 rounded-full blur-3xl bg-blue-700/40" />
          <div className="absolute right-0 top-20 h-80 w-80 rounded-full blur-3xl bg-purple-600/30" />
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
              Sector depth with cross-industry innovation.
            </h1>

            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Specialized pods with domain SMEs, product owners, and solution
              architects driving measurable outcomes across industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= INDUSTRIES GRID ================= */}
      <section className="bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
          >
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-indigo-600 mb-2">
                Industries we serve
              </p>
              <h2 className="text-4xl font-semibold leading-tight">
                Domain expertise meets technology innovation.
              </h2>
              <p className="mt-3 text-gray-600 max-w-2xl">
                Deep industry knowledge combined with modern technology to solve
                complex business challenges.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-indigo-600 font-medium hover:text-indigo-700 transition-colors"
            >
              Discuss your industry <FiArrowUpRight />
            </Link>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {industries.map((industry) => (
              <motion.div
                key={industry.title}
                variants={fadeUp}
                className="p-6 rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-slate-50 shadow-[0_16px_45px_-28px_rgba(15,23,42,0.4)] hover:shadow-xl transition group"
              >
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-400 flex items-center justify-center mb-4">
                  <FiTrendingUp className="text-white" />
                </div>

                <h3 className="text-lg font-semibold mb-2">{industry.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{industry.desc}</p>

                <ul className="space-y-1.5 mb-4">
                  {industry.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="text-xs text-gray-500 flex items-center gap-2"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-indigo-600 font-medium text-sm opacity-0 group-hover:opacity-100 transition group-hover:gap-3"
                >
                  View solutions <FiArrowUpRight />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= VALUE PROPOSITION ================= */}
      <section className="bg-gradient-to-br from-[#0f162f] via-[#0c122a] to-[#0f162f]">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-blue-300 mb-2">
                Why industry focus matters
              </p>
              <h2 className="text-4xl font-semibold leading-tight mb-6">
                Deep domain knowledge accelerates value.
              </h2>
              <p className="text-gray-200 mb-6">
                Our industry-specific pods combine domain expertise with
                technology innovation to deliver solutions that understand your
                business context, regulatory requirements, and competitive
                landscape.
              </p>
              <ul className="space-y-3">
                {[
                  "Pre-built accelerators and industry frameworks",
                  "Regulatory compliance and security expertise",
                  "Proven patterns from similar transformations",
                  "Faster time-to-value with reduced risk",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-200">
                    <span className="h-6 w-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "8+", label: "Industries" },
                { value: "50+", label: "Domain experts" },
                { value: "100+", label: "Industry solutions" },
                { value: "24/7", label: "Support" },
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
                Ready to transform your industry?
              </h2>
              <p className="text-white/85">
                Let's discuss how our industry expertise can accelerate your
                digital transformation.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-indigo-700 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Talk to an expert
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border border-white/60 text-white rounded-full font-semibold hover:bg-white/10 transition-all"
              >
                Explore services
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default Industries;
