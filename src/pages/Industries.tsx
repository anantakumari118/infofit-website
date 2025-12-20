const Industries = () => {
  const industries = [
    {
      title: "Banking & Finance",
      desc: "Secure, scalable digital solutions for financial operations, dashboards, analytics and process automation.",
    },
    {
      title: "Healthcare",
      desc: "Patient-focused platforms, hospital websites and healthcare systems built with reliability and compliance in mind.",
    },
    {
      title: "Retail & E-Commerce",
      desc: "Modern e-commerce platforms, inventory systems and customer experience solutions for growing brands.",
    },
    {
      title: "Education",
      desc: "E-learning platforms, educational websites and digital tools supporting modern learning experiences.",
    },
    {
      title: "Manufacturing",
      desc: "Internal tools, workflow automation and data-driven systems that improve operational efficiency.",
    },
    {
      title: "Public & Enterprise Solutions",
      desc: "Scalable enterprise-grade systems designed to support large organizations and complex operations.",
    },
  ];

  return (
    <main className="bg-white text-gray-900">

      {/* ================= HERO ================= */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="uppercase text-sm tracking-wider text-pink-600 mb-4">
            Industries
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
            Industries <span className="text-pink-600">We Serve</span>
          </h1>

          <p className="text-gray-600 max-w-3xl mx-auto">
            We work across multiple industries, helping businesses leverage
            technology to improve operations, enhance user experiences and
            achieve long-term growth.
          </p>
        </div>
      </section>

      {/* ================= INDUSTRY GRID ================= */}
      <section className="py-24 bg-[#faf7f5]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

          {industries.map((industry) => (
            <div
              key={industry.title}
              className="bg-white border border-gray-200 rounded-2xl p-8
              hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-4">
                {industry.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {industry.desc}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="rounded-3xl bg-black text-white p-14
            flex flex-col md:flex-row items-center justify-between gap-10"
          >
            <div className="max-w-xl">
              <h2 className="text-3xl font-semibold mb-4">
                Industry-specific solutions,
                <br /> built with clarity and scale
              </h2>

              <p className="text-gray-300">
                No matter your industry, Infofit Software designs and delivers
                technology that adapts to your business needs and future goals.
              </p>
            </div>

            <div className="flex gap-4">
              <a
                href="/contact"
                className="px-8 py-4 bg-pink-600 rounded-full
                text-sm font-medium hover:opacity-90"
              >
                Talk to Us
              </a>

              <a
                href="/services"
                className="px-8 py-4 border border-gray-600 rounded-full
                text-sm font-medium hover:border-white"
              >
                View Services
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Industries;
