import React from "react";

const Skills = () => {
  const frontEndTech = [
    { name: "HTML5", level: 90 },
    { name: "CSS", level: 85 },
    { name: "jQuery", level: 75 },
    { name: "JavaScript", level: 95 },
    { name: "React", level: 90 },
    { name: "React Native", level: 80 },
    { name: "Angular", level: 70 },
    { name: "Flutter", level: 65 },
    { name: "NPM", level: 85 },
    { name: "Ionic", level: 60 },
    { name: "Bootstrap", level: 80 },
    { name: "Meteor", level: 50 },
  ];

  const backEndTech = [
    { name: "PHP", level: 80 },
    { name: "Laravel", level: 75 },
    { name: "MySQL", level: 90 },
    { name: "Python", level: 85 },
    { name: "Java", level: 80 },
    { name: "Django", level: 70 },
    { name: "MongoDB", level: 75 },
    { name: "Apache", level: 65 },
    { name: "NGINX", level: 60 },
    { name: "Docker", level: 70 },
    { name: "Postman", level: 75 },
    { name: "Jira", level: 80 },
    { name: "Ruby", level: 55 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 pt-28 mb-20">
      <h2 className="text-3xl font-bold text-center mb-12">
        Best Web Development Technologies to Use By Our Team
      </h2>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Frontend Technologies */}
        <div className="md:w-1/2">
          <h3 className="text-2xl font-semibold mb-6 text-left">
            Front End Technologies
          </h3>
          <div className="space-y-4">
            {frontEndTech.map(({ name, level }) => (
              <div key={name}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{name}</span>
                  <span className="text-sm text-gray-600">{level}%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-3">
                  <div
                    className="bg-blue-600 h-3 rounded-full"
                    style={{ width: `${level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Backend Technologies */}
        <div className="md:w-1/2">
          <h3 className="text-2xl font-semibold mb-6 text-left">
            Back End Technologies
          </h3>
          <div className="space-y-4">
            {backEndTech.map(({ name, level }) => (
              <div key={name}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{name}</span>
                  <span className="text-sm text-gray-600">{level}%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-3">
                  <div
                    className="bg-green-600 h-3 rounded-full"
                    style={{ width: `${level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
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

export default Skills;
