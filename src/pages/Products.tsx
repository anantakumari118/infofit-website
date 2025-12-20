import { motion } from "framer-motion";

const products = [
  {
    name: "Livia’s Braids",
    category: "Beauty & Lifestyle",
    description:
      "A modern, responsive website built for a premium braiding salon with strong brand identity and smooth user experience.",
    tech: ["React", "UI/UX", "Responsive Design"],
    link: "https://liviasbraids.com/",
  },
  {
    name: "Hope Physicians",
    category: "Healthcare",
    description:
      "A professional healthcare website designed to represent hospital services clearly while ensuring accessibility and trust.",
    tech: ["Web Design", "Healthcare UX", "SEO"],
    link: "https://hopephysicians.com/",
  },
  {
    name: "Beauty Go Beyond",
    category: "E-Commerce",
    description:
      "An elegant beauty-focused website designed to showcase products, branding, and customer engagement.",
    tech: ["Frontend", "Brand UI", "Performance"],
    link: "https://beautygobeyond.com/",
  },
  {
    name: "Rural Samriddhi Dashboard",
    category: "Enterprise Application",
    description:
      "A custom professional dashboard for managing operations, data tracking, and internal workflows — similar to Jira-style systems.",
    tech: ["Web App", "Dashboard", "Custom Software"],
    link: "https://app.rsamriddhi.com/login",
  },
];

const Products = () => {
  return (
    <main className="bg-white text-gray-900">

      {/* ================= HERO ================= */}
      <section className="py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-6 text-center"
        >
          <p className="uppercase tracking-wider text-sm text-pink-600 mb-4">
            Our Work
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold mb-6">
            Products & Projects that{" "}
            <span className="text-pink-600">create real impact</span>
          </h1>

          <p className="text-gray-600 max-w-3xl mx-auto">
            A selection of platforms, websites and custom applications we’ve
            designed and developed for businesses across industries.
          </p>
        </motion.div>
      </section>

      {/* ================= PRODUCTS GRID ================= */}
      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10">

            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-white border border-gray-200 rounded-3xl p-8
                shadow-sm hover:shadow-xl transition"
              >
                {/* Category */}
                <span className="inline-block mb-4 text-xs font-medium
                  px-3 py-1 rounded-full bg-pink-50 text-pink-600">
                  {product.category}
                </span>

                {/* Title */}
                <h3 className="text-2xl font-semibold mb-3">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {product.tech.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-3 py-1 rounded-full
                      border border-gray-300 text-gray-600"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-pink-600
                  font-medium group-hover:gap-3 transition"
                >
                  View Project
                  <span className="text-lg">→</span>
                </a>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-[32px] bg-black text-white p-14
            flex flex-col md:flex-row items-center justify-between gap-10"
          >
            <div>
              <h2 className="text-3xl font-semibold mb-4">
                Have a product idea in mind?
              </h2>
              <p className="text-gray-300 max-w-xl">
                Let’s turn your idea into a powerful digital product — designed,
                built and scaled with clarity and purpose.
              </p>
            </div>

            <a
              href="/contact"
              className="px-8 py-4 bg-pink-600 rounded-full
              font-medium hover:opacity-90 transition"
            >
              Start a Conversation
            </a>
          </motion.div>
        </div>
      </section>

    </main>
  );
};

export default Products;
