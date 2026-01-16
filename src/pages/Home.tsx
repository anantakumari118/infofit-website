import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiCheckCircle,
  FiCode,
  FiSmartphone,
  FiLayers,
  FiTrendingUp,
  FiSettings,
  FiZap,
} from "react-icons/fi";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import teamWork from "../assets/team-work.jpg";

/* ---------------- animations ---------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

/* ---------------- data ---------------- */
const services = [
  {
    icon: FiCode,
    title: "Web & Application Development",
    desc: "Custom web applications, dashboards, and enterprise-grade systems built with modern technologies.",
    tag: "Full-stack expertise",
  },
  {
    icon: FiSmartphone,
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile applications for iOS and Android with seamless user experiences.",
    tag: "iOS & Android",
  },
  {
    icon: FiLayers,
    title: "UI / UX Design",
    desc: "User-centered design, modern interfaces, and conversion-focused experiences that drive engagement.",
    tag: "Design excellence",
  },
  {
    icon: FiTrendingUp,
    title: "Custom Software Solutions",
    desc: "Tailored business automation tools, internal platforms, and scalable custom products.",
    tag: "Business-focused",
  },
  {
    icon: FiZap,
    title: "Startup Technology Support",
    desc: "MVP development, product roadmaps, architecture planning, and scaling strategies for startups.",
    tag: "Startup-friendly",
  },
  {
    icon: FiSettings,
    title: "Maintenance & Optimization",
    desc: "Performance optimization, security updates, feature enhancements, and ongoing technical support.",
    tag: "Long-term partnership",
  },
];

const industries = [
  "Banking & Finance",
  "Healthcare",
  "Retail & E-Commerce",
  "Education",
  "Manufacturing",
  "Public & Enterprise",
];

const successStories = [
  {
    title: "Rural Samriddhi Dashboard",
    result:
      "Custom enterprise dashboard transformed operations management and data tracking for improved efficiency.",
    cta: "View project",
    link: "https://app.rsamriddhi.com/login",
  },
  {
    title: "Hope Physicians Website",
    result:
      "Professional healthcare website with modern design, accessibility, and trust-building features.",
    cta: "View project",
    link: "https://hopephysicians.com/",
  },
];

const stats = [
  {
    value: "50+",
    label: "Projects Delivered",
    tone: "from-blue-400 to-cyan-300",
  },
  { value: "20+", label: "Team Members", tone: "from-indigo-400 to-blue-300" },
  {
    value: "8+",
    label: "Industries Served",
    tone: "from-purple-400 to-pink-300",
  },
  { value: "2023", label: "Founded", tone: "from-fuchsia-400 to-rose-300" },
];

const values = [
  {
    name: "Engineering Excellence",
    quote:
      "Built by engineers, for engineers. We prioritize technical depth, clean code, and long-term maintainability.",
  },
  {
    name: "Startup Agility",
    quote:
      "Fast iteration, transparent communication, and flexible approaches tailored to growing businesses.",
  },
  {
    name: "Partnership Mindset",
    quote:
      "We treat your success as our success. Long-term relationships built on trust, quality, and results.",
  },
];

const CountUp = ({ value }: { value: string }) => {
  const target = parseInt(value.replace(/\D/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200; // ms
    const increment = Math.ceil(target / (duration / 16));

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      setCount(start);
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

/* ---------------- component ---------------- */
const Home = () => {
  return (
    <main className="bg-[#070915] text-white overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative bg-gradient-to-br from-[#0b1026] via-[#0f1b3d] to-[#0b1026] min-h-screen flex items-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-16 -top-20 h-72 w-72 rounded-full blur-3xl bg-blue-700/30" />
          <div className="absolute right-0 top-20 h-80 w-80 rounded-full blur-3xl bg-indigo-600/25" />
          <div className="absolute bottom-0 left-24 h-72 w-72 rounded-full blur-3xl bg-cyan-500/20" />
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-6 pb-20 relative w-full">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* left */}
            <motion.div variants={fadeUp} className="space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-medium leading-[1.15] tracking-tight">
                Building solutions for a
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">
                  digital-first future.
                </span>
              </h1>

              <p className="text-base md:text-lg text-gray-300 max-w-xl leading-relaxed">
                Infofit Software partners with organizations to design, build,
                and scale secure digital solutions across web, mobile, and
                enterprise platforms.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/services"
                  className="px-6 py-3 rounded-md bg-indigo-600 text-white font-medium inline-flex items-center gap-2 hover:bg-indigo-500 transition-all text-sm shadow-lg hover:shadow-xl"
                >
                  Explore services <FiArrowUpRight />
                </Link>
                <Link
                  to="/contact"
                  className="px-6 py-3 rounded-md border border-white/20 text-white font-medium inline-flex items-center gap-2 hover:border-white/40 hover:bg-white/5 transition-all text-sm"
                >
                  Talk to us
                </Link>
              </div>

              <div className="grid sm:grid-cols-3 gap-3 pt-4">
                {[
                  "Custom software solutions",
                  "Startup technology support",
                  "Long-term partnerships",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/3 border border-white/10"
                  >
                    <span className="h-5 w-5 rounded-full bg-indigo-500 flex items-center justify-center">
                      <FiCheckCircle className="text-white text-xs" />
                    </span>
                    <p className="text-xs text-gray-200">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* right */}
            <motion.div
              variants={fadeUp}
              transition={{ delay: 0.15 }}
              className="relative rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur-xl"
            >
              <p className="text-xs uppercase tracking-wider text-blue-200/60 font-medium mb-4">
                What we do
              </p>

              <div className="rounded-xl border border-white/10 bg-black/30 p-4 space-y-3">
                {[
                  "Web & Application Development",
                  "Mobile App Development",
                  "UI / UX Design & Branding",
                  "Custom Software Solutions",
                  "Startup Technology Support",
                  "Maintenance & Optimization",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2 rounded-md bg-white/5 p-2"
                  >
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <p className="text-xs text-gray-200">{item}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl p-3 border border-white/10 bg-white/5"
                  >
                    <p
                      className={`text-2xl font-semibold bg-gradient-to-r ${stat.tone} text-transparent bg-clip-text`}
                    >
                      {stat.value}
                    </p>
                    <p className="text-xs text-gray-300 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= TRUST ================= */}
      <section className="relative bg-gradient-to-b from-white via-slate-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* TOP CONTENT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid lg:grid-cols-2 gap-16 items-start"
          >
            {/* LEFT */}
            <div className="space-y-7">
              <p className="text-sm uppercase tracking-[0.3em] text-indigo-600 font-semibold">
                Trusted by organizations
              </p>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 leading-tight">
                Built for reliability.
                <br />
                Designed for scale.
              </h2>

              <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-xl">
                Infofit Software delivers technology solutions using structured
                engineering practices, security-first thinking, and delivery
                models designed for long-term growth.
              </p>

              {/* PRINCIPLES */}
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                {[
                  "Enterprise-grade delivery",
                  "Security-first architecture",
                  "Scalable system design",
                  "Long-term engagement focus",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-lg bg-white border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700"
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-indigo-600" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT – TRUST GRID */}
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Enterprise-ready solutions",
                  desc: "Systems designed with secure foundations, modular architecture, and scalability at the core.",
                },
                {
                  title: "Experienced delivery teams",
                  desc: "Engineers with hands-on experience delivering real-world products across industries.",
                },
                {
                  title: "Security & compliance focus",
                  desc: "Built with data protection, secure development practices, and compliance readiness.",
                },
                {
                  title: "Consulting-led partnerships",
                  desc: "We work as an extension of your technology team, not just a service vendor.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-gray-200 bg-white p-7 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-base font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* METRICS BAR */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 rounded-3xl bg-white border border-gray-200 px-8 py-8"
          >
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "8+", label: "Industries Served" },
              { value: "20+", label: "Team Members" },
              { value: "100%", label: "Client Commitment" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-3xl font-semibold text-indigo-600">
                  <CountUp value={item.value} />
                </p>

                <p className="text-sm text-gray-600 mt-1">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="relative bg-gradient-to-br from-[#0b1026] via-[#0f1b3d] to-[#0b1026] py-24 md:py-32">
        {/* subtle background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
          <div className="absolute right-0 bottom-20 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          {/* header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16"
          >
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.3em] text-blue-300 font-semibold mb-4">
                Our Services
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight mb-5">
                Technology services designed
                <br className="hidden md:block" />
                for business scale.
              </h2>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                We help organizations modernize systems, build digital products,
                and scale technology platforms using secure, reliable, and
                future-ready engineering practices.
              </p>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-blue-300 font-medium hover:text-blue-200 transition-colors"
            >
              View all services <FiArrowUpRight />
            </Link>
          </motion.div>

          {/* services grid */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  variants={fadeUp}
                  className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-8 transition-all hover:bg-white/10"
                >
                  {/* icon */}
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center mb-6">
                    <Icon className="text-white text-xl" />
                  </div>

                  {/* tag */}
                  <p className="text-xs uppercase tracking-wider text-blue-300 font-semibold mb-2">
                    {service.tag}
                  </p>

                  {/* title */}
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                    {service.title}
                  </h3>

                  {/* description */}
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  {/* link */}
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-sm font-medium text-blue-300 hover:text-blue-200 transition-colors group-hover:gap-3"
                  >
                    Learn more <FiArrowUpRight />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}
      <section className="relative bg-gradient-to-br from-[#0f162f] via-[#0b122a] to-[#0f162f] py-24 md:py-32">
        {/* subtle glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-10 top-1/4 h-72 w-72 rounded-full bg-blue-600/15 blur-3xl" />
          <div className="absolute right-10 bottom-1/4 h-80 w-80 rounded-full bg-indigo-500/15 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          {/* header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16"
          >
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.3em] text-blue-300 font-semibold mb-4">
                Industries
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight mb-5">
                Industry-focused digital solutions
              </h2>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                We work across industries to deliver secure, scalable, and
                future-ready technology solutions aligned with business needs.
              </p>
            </div>

            <Link
              to="/industries"
              className="inline-flex items-center gap-2 text-blue-300 font-medium hover:text-blue-200 transition-colors"
            >
              View all industries <FiArrowUpRight />
            </Link>
          </motion.div>

          {/* industries grid */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                name: "Banking & Finance",
                desc: "Secure platforms, digital banking systems, and data-driven financial solutions.",
              },
              {
                name: "Healthcare",
                desc: "Compliant healthcare systems, patient platforms, and digital care solutions.",
              },
              {
                name: "Retail & E-Commerce",
                desc: "Scalable commerce platforms, customer engagement tools, and analytics-driven growth.",
              },
              {
                name: "Education",
                desc: "Digital learning platforms, management systems, and student engagement solutions.",
              },
              {
                name: "Manufacturing",
                desc: "Automation systems, operational dashboards, and Industry 4.0 solutions.",
              },
              {
                name: "Public & Enterprise",
                desc: "Large-scale platforms, internal systems, and secure enterprise applications.",
              },
            ].map((industry) => (
              <motion.div
                key={industry.name}
                variants={fadeUp}
                className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-8 transition-all hover:bg-white/10"
              >
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                  {industry.name}
                </h3>

                <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6">
                  {industry.desc}
                </p>

                <Link
                  to="/industries"
                  className="inline-flex items-center gap-2 text-sm font-medium text-blue-300 hover:text-blue-200 transition-colors group-hover:gap-3"
                >
                  View solutions <FiArrowUpRight />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="relative bg-gradient-to-br from-[#0f162f] via-[#0c122a] to-[#0f162f] py-24 md:py-32">
        {/* subtle background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/4 top-1/3 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />
          <div className="absolute right-1/4 bottom-1/3 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          {/* header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-3xl mb-20"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-blue-300 font-semibold mb-4">
              Our Values
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight mb-5">
              Principles that guide
              <br className="hidden md:block" />
              how we work.
            </h2>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              Our values shape decisions, partnerships, and delivery standards
              across every engagement.
            </p>
          </motion.div>

          {/* values list */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-12"
          >
            {[
              {
                title: "Engineering Discipline",
                desc: "We prioritize system integrity, clean architecture, and long-term maintainability over short-term gains.",
              },
              {
                title: "Client-Centric Thinking",
                desc: "Every solution is designed with a deep understanding of business context, risks, and outcomes.",
              },
              {
                title: "Responsible Delivery",
                desc: "We take ownership of quality, timelines, and security with accountability at every stage.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="space-y-4"
              >
                {/* divider */}
                <div className="h-px w-12 bg-gradient-to-r from-blue-400 to-cyan-300" />

                <h3 className="text-xl md:text-2xl font-medium text-white">
                  {item.title}
                </h3>

                <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative bg-white py-28 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500"
          >
            {/* subtle overlay for calm tone */}
            <div className="absolute inset-0 bg-black/10" />

            <div className="relative p-12 md:p-16 lg:p-20 flex flex-col md:flex-row gap-12 md:items-center md:justify-between text-white">
              {/* left content */}
              <div className="max-w-2xl space-y-4">
                <p className="text-sm uppercase tracking-[0.3em] text-white/80 font-semibold">
                  Let’s work together
                </p>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
                  Partner with a team
                  <br className="hidden md:block" />
                  that builds for the long term.
                </h2>

                <p className="text-base md:text-lg text-white/90 leading-relaxed">
                  We collaborate with organizations to design, build, and scale
                  technology platforms that deliver measurable business
                  outcomes.
                </p>
              </div>

              {/* actions */}
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-white text-indigo-700 rounded-md font-medium hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
                >
                  Start a conversation
                </Link>

                <Link
                  to="/services"
                  className="px-8 py-4 border border-white/70 text-white rounded-md font-medium hover:bg-white/10 transition-all"
                >
                  Explore our services
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Home;
