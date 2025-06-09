import React from "react";

const ContactUs = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-white via-gray-50 to-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-teal-600 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Have a question about our IT services or need help with your
            project? Fill out the form below — we’d love to hear from you.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Form */}
          <div
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <form method="POST" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 w-full"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 w-full"
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 w-full"
                required
              />
              <textarea
                name="msg"
                rows="5"
                placeholder="Your Message"
                className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 w-full resize-none"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-teal-600 text-white py-3 px-8 rounded-xl shadow-md hover:bg-teal-700 transition duration-300 w-full text-lg font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Map */}
          <div
            className="h-[400px] md:h-full w-full rounded-2xl overflow-hidden shadow-lg border border-gray-200"
            data-aos="fade-left"
            data-aos-duration="1200"
          >
            <iframe
              title="Namrata Universal Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14014.622574712055!2d77.31568352663892!3d28.58010151762359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd61ade68320b6847!2sNamrata%20Universal!5e0!3m2!1sen!2sin!4v1627379160707!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        {/* Footer Start */}
        <footer className="bg-gray-900 text-white pt-16 pb-10 font-poppins">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
              {/* About Us */}
              <div className="transition-transform duration-300 hover:scale-105">
                <h4 className="text-xl font-semibold mb-6 text-teal-400">
                  About Us
                </h4>
                <ul className="space-y-2 text-sm">
                  {[
                    { name: "Home", url: "/" },
                    { name: "About us", url: "/about" },
                    { name: "Contact Us", url: "/contact" },
                    { name: "Client", url: "/client" },
                    { name: "Portfolio", url: "/portfolio" },
                    { name: "Pricing", url: "/pricing" },
                    { name: "Service", url: "/service" },
                    { name: "Team", url: "/team" },
                    { name: "Skill", url: "/skill" },
                  ].map((link, idx) => (
                    <li key={idx}>
                      <a
                        href={`https://namratauniversal.com${link.url}`}
                        className="hover:text-teal-300 transition duration-300"
                      >
                        → {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Useful Links */}
              <div className="transition-transform duration-300 hover:scale-105">
                <h4 className="text-xl font-semibold mb-6 text-teal-400">
                  Useful Links
                </h4>
                <ul className="space-y-2 text-sm">
                  {[
                    { name: "Technology", url: "/technologies" },
                    { name: "Digital Marketing", url: "/digital-marketing" },
                    { name: "SEO Service", url: "/seo" },
                    {
                      name: "Privacy Policy",
                      url: "/application/views/privacy.php",
                    },
                    {
                      name: "Terms & Conditions",
                      url: "/application/views/terms & cond.php",
                    },
                    {
                      name: "Refund Policy",
                      url: "/application/views/refund-policy.php",
                    },
                  ].map((link, idx) => (
                    <li key={idx}>
                      <a
                        href={`https://namratauniversal.com${link.url}`}
                        className="hover:text-teal-300 transition duration-300"
                      >
                        → {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div className="transition-transform duration-300 hover:scale-105">
                <h4 className="text-xl font-semibold mb-6 text-teal-400">
                  Contact Us
                </h4>
                <p>
                  <strong>Head Office:</strong>
                  <br />
                  3C, A1 Sector 10, Noida
                  <br />
                  Uttar Pradesh, India
                </p>
                <p className="mt-4">
                  <strong>New Branch Office:</strong>
                  <br />
                  2nd floor plot no.-64 Block-F, Sector-8 Noida
                  <br />
                  Uttar Pradesh, India
                </p>
                <p className="mt-4">
                  <strong>Branch Office:</strong>
                  <br />
                  Plot No-827 1st Floor Shalimar Garden Extension-1 Ghaziabad,
                  UP
                </p>
                <p className="mt-4">
                  <strong>Phone:</strong>
                  <a
                    href="tel:8506922777"
                    className="text-teal-400 ml-1 hover:underline"
                  >
                    +91 8506922777
                  </a>
                  ,
                  <a
                    href="tel:8506944777"
                    className="text-teal-400 ml-1 hover:underline"
                  >
                    +91 8506944777
                  </a>
                </p>
                <p>
                  <strong>Landline:</strong>{" "}
                  <a
                    href="tel:01203174973"
                    className="text-teal-400 hover:underline"
                  >
                    01203174973
                  </a>
                </p>

                <div className="flex space-x-4 mt-5 text-xl">
                  <a
                    href="https://twitter.com/NamrataUni"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition"
                  >
                    <i className="ion-logo-twitter"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/namratauniversal01/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition"
                  >
                    <i className="ion-logo-facebook"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/namrata-universal/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500 transition"
                  >
                    <i className="ion-logo-linkedin"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/namratauniversal/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-500 transition"
                  >
                    <i className="ion-logo-instagram"></i>
                  </a>
                </div>
              </div>

              {/* Newsletter */}
              <div className="transition-transform duration-300 hover:scale-105">
                <h4 className="text-xl font-semibold mb-6 text-teal-400">
                  Subscription
                </h4>
                <p>
                  <strong>Join Our Newsletter</strong>
                </p>
                <div className="mt-3">
                  <script src="https://apis.google.com/js/platform.js"></script>
                  <div
                    className="g-ytsubscribe"
                    data-channelid="UCGXSQ12i8BZW1D-rDlAKDCQ"
                    data-layout="full"
                    data-count="hidden"
                  ></div>
                </div>
                <p className="mt-4">
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:info@namratauniversal.com"
                    className="text-teal-400 hover:underline"
                  >
                    info@namratauniversal.com
                  </a>
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:namratauniversal@gmail.com"
                    className="text-teal-400 hover:underline"
                  >
                    namratauniversal@gmail.com
                  </a>
                </p>
                <a
                  href="http://namratauniversal.com/application/views/payment.php"
                  className="inline-block mt-5 px-5 py-2 bg-teal-500 hover:bg-teal-600 transition duration-300 rounded shadow-md"
                >
                  PAY NOW!
                </a>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="border-t border-gray-700 pt-6 text-sm flex flex-col md:flex-row justify-between items-center gap-2">
              <p>
                &copy; 2025{" "}
                <a
                  href="https://namratauniversal.com/"
                  className="text-teal-400 hover:underline"
                >
                  Namrata Universal
                </a>
                . All Rights Reserved.
              </p>
              <p>
                Designed by{" "}
                <a
                  href="https://namratauniversal.com/"
                  className="text-teal-400 hover:underline"
                >
                  Nitish Kumar
                </a>
              </p>
            </div>
          </div>
        </footer>
        {/* Footer End */}
      </div>
    </section>
  );
};

export default ContactUs;
