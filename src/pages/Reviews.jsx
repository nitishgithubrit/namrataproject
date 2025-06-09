import React from "react";

const Reviews = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-24 mb-12 text-center">
      <h3 className="text-3xl font-bold mb-6">Reviews</h3>
      <div className="flex flex-wrap justify-center gap-12 mb-6">
        {/* Review 1 */}
        <div className="w-40 text-center">
          <img
            src="https://namratauniversal.com/img/review/suraj.jpg"
            alt="Suraj"
            className="w-40 h-40 object-cover rounded-full shadow mx-auto"
          />
          <h4 className="mt-3 font-semibold text-lg">Suraj</h4>
          <p className="text-sm text-gray-600">
            Entrepreneur — Suraj shares his positive journey with Namrata
            Universal and its excellent support.
          </p>
        </div>

        {/* Review 2 */}
        <div className="w-40 text-center">
          <img
            src="https://namratauniversal.com/img/review/Somya%20Gupta.jpg"
            alt="Somya Gupta"
            className="w-40 h-40 object-cover rounded-full shadow mx-auto"
          />
          <h4 className="mt-3 font-semibold text-lg">Somya Gupta</h4>
          <p className="text-sm text-gray-600">
            Marketing Specialist — Somya appreciates the professional approach
            and growth opportunities here.
          </p>
        </div>

        {/* Review 3 */}
        <div className="w-40 text-center">
          <img
            src="https://namratauniversal.com/img/review/Mamta%20Rani.jpg"
            alt="Mamta Rani"
            className="w-40 h-40 object-cover rounded-full shadow mx-auto"
          />
          <h4 className="mt-3 font-semibold text-lg">Mamta Rani</h4>
          <p className="text-sm text-gray-600">
            Business Woman — Mamta values the empowering environment and
            remarkable services offered by Namrata Universal.
          </p>
        </div>

        {/* Review 4 */}
        <div className="w-40 text-center">
          <img
            src="https://namratauniversal.com/img/review/Kritee%20Dixit.jpg"
            alt="Kritee Dixit"
            className="w-40 h-40 object-cover rounded-full shadow mx-auto"
          />
          <h4 className="mt-3 font-semibold text-lg">Kritee Dixit</h4>
          <p className="text-sm text-gray-600">
            Designer — Kritee loves the creative freedom and collaborative
            spirit at Namrata Universal.
          </p>
        </div>

        {/* Review 5 */}
        <div className="w-40 text-center">
          <img
            src="https://namratauniversal.com/img/review/Prateek%20Jaiswal.jpg"
            alt="Prateek Jaiswal"
            className="w-40 h-40 object-cover rounded-full shadow mx-auto"
          />
          <h4 className="mt-3 font-semibold text-lg">Prateek Jaiswal</h4>
          <p className="text-sm text-gray-600">
            Engineer — Prateek appreciates the innovative solutions and
            supportive team culture.
          </p>
        </div>

        {/* Review 6 */}
        <div className="w-40 text-center">
          <img
            src="https://namratauniversal.com/img/review/Amit%20Tamang.jpg"
            alt="Amit Tamang"
            className="w-40 h-40 object-cover rounded-full shadow mx-auto"
          />
          <h4 className="mt-3 font-semibold text-lg">Amit Tamang</h4>
          <p className="text-sm text-gray-600">
            Consultant — Amit finds Namrata Universal’s approach client-focused
            and highly professional.
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
                Plot No-827 1st Floor Shalimar Garden Extension-1 Ghaziabad, UP
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
  );
};

export default Reviews;
