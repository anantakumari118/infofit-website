import { motion } from "framer-motion";
import { FiArrowUpRight, FiExternalLink, FiCode, FiHeart, FiShoppingBag, FiBriefcase } from "react-icons/fi";
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

const products = [
  {
    name: "Livia's Braids",
    category: "Beauty & Lifestyle",
    icon: FiHeart,
    description:
      "A modern, responsive website built for a premium braiding salon with strong brand identity and smooth user experience.",
    tech: ["React", "UI/UX", "Responsive Design"],
    link: "https://liviasbraids.com/",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    name: "Hope Physicians",
    category: "Healthcare",
    icon: FiBriefcase,
    description:
      "A professional healthcare website designed to represent hospital services clearly while ensuring accessibility and trust.",
    tech: ["Web Design", "Healthcare UX", "SEO"],
    link: "https://hopephysicians.com/",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Beauty Go Beyond",
    category: "E-Commerce",
    icon: FiShoppingBag,
    description:
      "An elegant beauty-focused website designed to showcase products, branding, and customer engagement.",
    tech: ["Frontend", "Brand UI", "Performance"],
    link: "https://beautygobeyond.com/",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "Rural Samriddhi Dashboard",
    category: "Enterprise Application",
    icon: FiCode,
    description:
      "A custom professional dashboard for managing operations, data tracking, and internal workflows — similar to Jira-style systems.",
    tech: ["Web App", "Dashboard", "Custom Software"],
    link: "https://app.rsamriddhi.com/login",
    gradient: "from-indigo-500 to-blue-500",
  },
];

const Products = () => {
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
              Products & Projects that create real impact.
            </h1>

            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              A selection of platforms, websites and custom applications we've
              designed and developed for businesses across industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= PRODUCTS GRID ================= */}
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
                Portfolio
              </p>
              <h2 className="text-4xl font-semibold leading-tight">
                Delivering value at scale.
              </h2>
              <p className="mt-3 text-gray-600 max-w-2xl">
                Real-world solutions built with modern technology, thoughtful
                design, and measurable business impact.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-indigo-600 font-medium hover:text-indigo-700 transition-colors"
            >
              Start your project <FiArrowUpRight />
            </Link>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <motion.div
                  key={product.name}
                  variants={fadeUp}
                  className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-white to-slate-50 shadow-[0_25px_60px_-35px_rgba(15,23,42,0.35)] hover:shadow-xl transition"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-transparent opacity-0 group-hover:opacity-100 transition" />
                  <div className="relative p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`h-12 w-12 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center`}
                      >
                        <Icon className="text-white text-xl" />
                      </div>
                      <span className="text-xs uppercase tracking-[0.25em] text-indigo-500">
                        {product.category}
                      </span>
                    </div>

                    <h3 className="text-2xl font-semibold mb-3">{product.name}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {product.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {product.tech.map((item) => (
                        <span
                          key={item}
                          className="text-xs px-3 py-1 rounded-full border border-gray-300 text-gray-600 bg-white"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-indigo-600 font-medium group-hover:gap-3 transition"
                    >
                      View Project <FiExternalLink />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="bg-gradient-to-br from-[#0f162f] via-[#0c122a] to-[#0f162f]">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { value: "50+", label: "Projects delivered", tone: "from-blue-400 to-cyan-300" },
              { value: "8+", label: "Industries served", tone: "from-indigo-400 to-blue-300" },
              { value: "100%", label: "Client satisfaction", tone: "from-purple-400 to-pink-300" },
              { value: "24/7", label: "Support available", tone: "from-fuchsia-400 to-rose-300" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur"
              >
                <p
                  className={`text-3xl font-semibold bg-gradient-to-r ${stat.tone} text-transparent bg-clip-text`}
                >
                  {stat.value}
                </p>
                <p className="text-sm text-gray-300 mt-1">{stat.label}</p>
              </div>
            ))}
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
                Have a product idea in mind?
              </h2>
              <p className="text-white/85">
                Let's turn your idea into a powerful digital product — designed,
                built and scaled with clarity and purpose.
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

export default Products;
