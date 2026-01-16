import { motion } from "framer-motion";
import { FiArrowUpRight, FiCheckCircle, FiCode, FiCloud, FiShield, FiSmartphone, FiLayers, FiTrendingUp } from "react-icons/fi";
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

const services = [
  {
    icon: FiCloud,
    title: "Cloud & Infrastructure",
    desc: "Architect secure, multi-cloud foundations and resilient platforms with zero-trust controls.",
    tag: "CloudXperienz delivery",
    capabilities: [
      "Multi-cloud migration & landing zones",
      "Container orchestration & serverless",
      "Infrastructure as code & automation",
      "Cost optimization & FinOps",
    ],
  },
  {
    icon: FiCode,
    title: "Data, AI & Analytics",
    desc: "Modern data platforms, AI copilots, and applied intelligence at scale.",
    tag: "Agentic AI ready",
    capabilities: [
      "Data mesh & lakehouse architecture",
      "MLOps & AI model deployment",
      "Real-time analytics & BI",
      "Governance & data quality",
    ],
  },
  {
    icon: FiLayers,
    title: "Digital Engineering",
    desc: "Product engineering, API-led modernization, and composable tech stacks.",
    tag: "Engineering DNA",
    capabilities: [
      "Full-stack product development",
      "API-first architecture & microservices",
      "Legacy modernization & refactoring",
      "DevOps & CI/CD pipelines",
    ],
  },
  {
    icon: FiSmartphone,
    title: "Customer Success",
    desc: "Digital experiences, marketing automation, and omnichannel service journeys.",
    tag: "Experience DNA",
    capabilities: [
      "Customer experience platforms",
      "E-commerce & digital commerce",
      "Marketing automation & personalization",
      "Omnichannel integration",
    ],
  },
  {
    icon: FiTrendingUp,
    title: "Enterprise Applications",
    desc: "SAP, Salesforce, Microsoft, Oracle, and industry cloud stacks.",
    tag: "Partner certified",
    capabilities: [
      "ERP & CRM implementations",
      "Low-code & no-code platforms",
      "Integration & API management",
      "Application modernization",
    ],
  },
  {
    icon: FiShield,
    title: "Cybersecurity",
    desc: "Zero-trust controls, threat detection, and regulated compliance.",
    tag: "Secure by design",
    capabilities: [
      "Identity & access management",
      "Security operations & SOC",
      "Compliance & risk management",
      "Security architecture & assessment",
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Discovery & Strategy",
    desc: "Understanding business goals, technical constraints, and success metrics.",
  },
  {
    step: "02",
    title: "Architecture & Design",
    desc: "Designing scalable, secure architectures aligned with industry best practices.",
  },
  {
    step: "03",
    title: "Development & Integration",
    desc: "Building with modern tech stacks, agile delivery, and continuous integration.",
  },
  {
    step: "04",
    title: "Testing & Quality",
    desc: "Automated testing, performance validation, and security hardening.",
  },
  {
    step: "05",
    title: "Deployment & Launch",
    desc: "Zero-downtime deployments, monitoring, and production readiness.",
  },
  {
    step: "06",
    title: "Optimization & Support",
    desc: "Continuous improvement, performance tuning, and 24/7 support.",
  },
];

const Services = () => {
  return (
    <main className="bg-[#070915] text-white overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0b1026] via-[#0f1b3d] to-[#0b1026]">
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute -left-10 -top-16 h-64 w-64 rounded-full blur-3xl bg-blue-700/40" />
          <div className="absolute right-0 top-20 h-80 w-80 rounded-full blur-3xl bg-indigo-600/30" />
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
              From core modernization to experience reinvention.
            </h1>

            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Engineered platforms, applied AI, and customer-grade experiences
              delivered with industry playbooks and partner accelerators.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
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
                Capabilities
              </p>
              <h2 className="text-4xl font-semibold leading-tight">
                Comprehensive service portfolio.
              </h2>
              <p className="mt-3 text-gray-600 max-w-2xl">
                End-to-end capabilities from infrastructure to customer
                experience, powered by engineering excellence.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-indigo-600 font-medium hover:text-indigo-700 transition-colors"
            >
              Discuss your needs <FiArrowUpRight />
            </Link>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  variants={fadeUp}
                  className="p-6 rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-slate-50 shadow-[0_16px_45px_-28px_rgba(15,23,42,0.4)] hover:shadow-xl transition"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-400 flex items-center justify-center">
                      <Icon className="text-white text-xl" />
                    </div>
                    <span className="text-xs uppercase tracking-[0.25em] text-indigo-500">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{service.desc}</p>

                  <ul className="space-y-2 mb-4">
                    {service.capabilities.map((cap) => (
                      <li key={cap} className="flex items-start gap-2 text-sm text-gray-600">
                        <FiCheckCircle className="text-indigo-500 mt-0.5 flex-shrink-0" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-indigo-600 font-medium text-sm hover:text-indigo-700 transition-colors group-hover:gap-3"
                  >
                    Learn more <FiArrowUpRight />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="bg-gradient-to-br from-[#0f162f] via-[#0c122a] to-[#0f162f]">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-blue-300 mb-2">
              Delivery methodology
            </p>
            <h2 className="text-4xl font-semibold leading-tight mb-4">
              Proven process, predictable outcomes.
            </h2>
            <p className="text-gray-200 max-w-2xl mx-auto">
              Agile delivery with disciplined governance, outcome-linked
              engagement models, and continuous value delivery.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((item, i) => (
              <motion.div
                key={item.step}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
                    <span className="text-white font-semibold">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
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
                Ready to transform your technology stack?
              </h2>
              <p className="text-white/85">
                Let's discuss how our services can accelerate your digital
                transformation journey.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-indigo-700 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Start a conversation
              </Link>
              <Link
                to="/industries"
                className="px-8 py-4 border border-white/60 text-white rounded-full font-semibold hover:bg-white/10 transition-all"
              >
                Explore industries
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default Services;
