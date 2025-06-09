import React from "react";
import { useLocation } from "react-router-dom";

const AboutSection = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <section className="bg-white pt-28 px-6">
      {/* Video Section - Only visible on About Page */}
      {!isHomePage && (
        <div className="w-full overflow-hidden">
          <video
            src="https://namratauniversal.com/video/video1.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto max-w-none"
          />
        </div>
      )}

      {/* About Us Heading & Paragraph */}
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h2 className="text-4xl font-bold mb-4" data-aos="flip-up">
          About Us
        </h2>
        <p className="text-lg text-gray-700" data-aos="fade-up">
          At Namrata Universal We Deliver With Focus On Quality, Integrity And
          Long Term Relation. We have experienced professionals who understand
          that IT services is changing, and are true partners who care about
          your success.
        </p>
      </div>

      {/* Detailed About Content */}

      <img
        src="https://namratauniversal.com/img/about.jpg"
        alt="About Us"
        className="w-full h-[400px] object-cover mb-12"
      />
      <div className="max-w-5xl mx-auto text-gray-800 text-lg space-y-6 px-4">
        <h3 className="text-2xl font-semibold" data-aos="flip-left">
          Welcome to the World of Namrata Universal
        </h3>
        <p data-aos="fade-up">
          Trusted by the world's best organizations, for 12 years and running,
          it has been delivering smiles to hundreds of IT advisors, developers,
          users, and business owners. Easy solutions for all difficult IT
          problems to ensure high availability. Our biggest strength is our
          Global Reach. Our ability to cater to any business segments & needs.
          Our experience enables us create unique products. High volume of our
          work makes us provide value added services with wallet friendly
          charges. Strong ground support and extensive network keeps us always a
          step ahead. We are always on Toes and this attitude has given us a
          strong presence in Indian Subcontinent.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Our Story */}
          <div data-aos="fade-right">
            <img
              src="https://namratauniversal.com/img/about-story.jpg"
              alt="Our Story"
              className="w-full rounded-lg shadow"
            />
            <h3 className="text-xl font-bold mt-4" data-aos="flip-up">
              Our Story
            </h3>
            <p className="mt-2" data-aos="fade-up">
              Namrata Group has been serving clients in diverse fields for over
              14 years through Namrata Health Care Pvt. Ltd, Namrata Wellness,
              Namrata Store, Sylister Health Care Pvt. Ltd and Jingle Holiday
              Bazar Pvt. Ltd. Our objective is to take the business of our
              customers forward through our products and services. The Namrata
              Universal is the complete IT Solution Company and we welcome you
              to the world of Namrata Universal.
            </p>
          </div>

          {/* Our Goal */}
          <div data-aos="fade-left">
            <img
              src="https://namratauniversal.com/img/about-goal.jpg"
              alt="Our Goal"
              className="w-full rounded-lg shadow"
            />
            <h3 className="text-xl font-bold mt-4" data-aos="flip-up">
              Our Goal
            </h3>
            <p className="mt-2" data-aos="fade-up">
              Improve Efficiency And Provide Better Experience By Our IT
              Solutions! Trusted by the world's best organizations, for 11 years
              and running, it has been delivering smiles to hundreds of IT
              advisors, developers, users, and business owners. Easy solutions
              for all difficult IT problems to ensure high availability. Like
              Specific, Measurable, Achievable, Realistic, Time-bound.
            </p>
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

export default AboutSection;
