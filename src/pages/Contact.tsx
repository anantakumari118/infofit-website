const Contact = () => {
  return (
    <main className="bg-white text-gray-900">

      {/* ================= HERO ================= */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="uppercase text-sm tracking-wider text-pink-600 mb-4">
            Contact Us
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold mb-6">
            Let’s talk about your{" "}
            <span className="text-pink-600">next idea</span>
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether you’re planning a new product, need technical support,
            or just want to explore possibilities — we’d love to hear from you.
          </p>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="pb-28">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">

          {/* LEFT – INFO */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">
              Get in touch with Infofit Software
            </h2>

            <p className="text-gray-600 mb-8 leading-relaxed">
              We work closely with startups and businesses to design,
              develop and deliver technology that creates real impact.
              Drop us a message and our team will get back to you shortly.
            </p>

            <div className="space-y-6 text-sm">
              <div>
                <p className="font-medium">📍 Location</p>
                <p className="text-gray-600">
                  Remote-first · Serving globally
                </p>
              </div>

              <div>
                <p className="font-medium">📧 Email</p>
                <p className="text-gray-600">
                  info@infofitsoftware.com
                </p>
              </div>

              <div>
                <p className="font-medium">💼 Work With Us</p>
                <p className="text-gray-600">
                  For partnerships, projects & collaborations
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT – FORM */}
          <div className="bg-[#faf7f5] rounded-3xl p-10 shadow-lg">
            <h3 className="text-xl font-semibold mb-6">
              Send us a message
            </h3>

            <form className="grid gap-5">
              <input
                type="text"
                placeholder="Full Name"
                className="border border-gray-300 px-4 py-3 rounded-xl
                focus:outline-none focus:border-pink-500"
                required
              />

              <input
                type="email"
                placeholder="Email Address"
                className="border border-gray-300 px-4 py-3 rounded-xl
                focus:outline-none focus:border-pink-500"
                required
              />

              <textarea
                placeholder="Tell us about your project or idea"
                rows={5}
                className="border border-gray-300 px-4 py-3 rounded-xl
                focus:outline-none focus:border-pink-500"
                required
              />

              <button
                type="submit"
                className="mt-4 bg-pink-600 text-white py-4 rounded-full
                font-medium hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>

            <p className="text-xs text-gray-500 mt-4 text-center">
              We usually respond within 24–48 hours.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
};

export default Contact;
