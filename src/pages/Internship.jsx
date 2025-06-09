import React from "react";
import "../assets/style.css";

const Internship = () => {
  return (
    <div className="internship-page pt-32 px-6 md:px-20">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-600 mb-4">
        <span className="text-blue-600">Technologies</span> &nbsp;»&nbsp;
        <span className="text-blue-600">Internship-Training-Program</span>{" "}
        &nbsp;»&nbsp;
        <span className="text-blue-600">Full Stack Developer</span>
      </div>

      {/* Main Heading */}
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
        Namrata Universal Internship Program
      </h1>

      {/* Subheading and Content (LEFT ALIGNED) */}
      <div className="mb-10 text-gray-700 max-w-5xl">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Best Internship Training Company in Noida.
        </h2>
        <p className="leading-relaxed">
          We provide certified training programs and are considered the best
          internship provider in Noida for Engineering students, Computer
          Science students, Computer Engineering/ Computer Science students,
          Information Technology students, MCA students, BCA students, B.Tech
          students, BE students, B.SC students, etc. Taking this course improves
          your chances of getting a job and makes you an attractive candidate.
        </p>
      </div>

      {/* Overview Section: Image + Description Side by Side */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-10">
        <div className="md:w-1/2">
          <img
            className="w-full max-w-sm mx-auto"
            src="https://namratauniversal.com/img/namrata-universal/std1.jpg"
            alt="Internship"
          />
        </div>
        <div className="md:w-1/2 text-gray-700 leading-relaxed">
          <p>
            There is no better internship company in Delhi NCR than Namrata
            Universal. We provide the best internship program for the youngsters
            who are from computer engineering background and want to make their
            career in Information Technology (IT) sector.
          </p>
          <p className="mt-3">
            Our internship program consists of IT services like digital
            marketing, social media, software development, web designing, mobile
            app designing, SEO (search engine optimization), etc. Namrata
            Universal is the platform where you can make your dreams true by
            establishing yourself in IT sector. After the internship you will be
            able to grab a job in your dream organization.
          </p>
        </div>
      </div>

      {/* Eligibility Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Eligibility to be an Intern at Namrata Universal
        </h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          Students skilled in Engineering, CS, CSE, MIS, MCA, BCA, B.Tech, BE,
          B.SC and MCA are welcome at Namrata Universal, the best internship
          company for students.
        </p>
        <p className="text-gray-700 leading-relaxed mb-3">
          As part of the Training Program, pass out students can enhance their
          skills. A good internship location for software developers.
        </p>
        <p className="text-gray-700 leading-relaxed mb-2">
          Namrata Universal, Top Internship company for:
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Engineering Student</li>
          <li>CSE Student / CS Student</li>
          <li>IT Student / Information Technology</li>
          <li>MCA Student / BCA Student</li>
          <li>B.Tech Student / BE Student / B.SC Student</li>
        </ul>
        <p className="mt-3 font-medium">
          Offers Vocational Program for following duration: Apply Now
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>3 Months</li>
          <li>6 Months</li>
        </ul>
      </div>

      {/* How IT Works Section */}
      <div className="text-center mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          How IT Works
        </h2>
        <p className="text-gray-600 mb-6">
          1,000+ Learning Hours | 120+ Computer Science, Management Courses |
          24/7 Access
        </p>

        {/* Horizontal Steps */}
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          <div className="flex flex-col items-center">
            <img
              src="https://namratauniversal.com/img/namrata-universal/Signup.png"
              alt="Signup"
              className="w-20 h-20 mb-2"
            />
            <p>Signup Online</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://namratauniversal.com/img/namrata-universal/course.png"
              alt="Choose Course"
              className="w-20 h-20 mb-2"
            />
            <p>Choose the Course</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://namratauniversal.com/img/namrata-universal/payment.png"
              alt="Payment"
              className="w-20 h-20 mb-2"
            />
            <p>Make Payment</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://namratauniversal.com/img/namrata-universal/complete-course.png"
              alt="Complete Course"
              className="w-20 h-20 mb-2"
            />
            <p>Complete Course</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://namratauniversal.com/img/namrata-universal/certificate-1.png"
              alt="Certificate"
              className="w-20 h-20 mb-2"
            />
            <p>Evaluation & Certification</p>
          </div>
        </div>

        <p className="text-gray-700 text-lg font-medium">
          Take one step ahead in your career with a certification from NAMRATA
          UNIVERSAL at NOIDA
        </p>
      </div>

      {/* Activities Section */}
      {/* Activities Section */}
      <div className="mb-20">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Activities at Namrata Universal
        </h2>

        <div className="flex flex-wrap justify-center gap-6 text-center text-gray-700">
          <div className="w-60">
            <img
              src="https://namratauniversal.com/img/namrata-universal/t11.jpg"
              alt="Faculty Development"
              className="w-full h-auto mb-2 rounded-lg shadow"
            />
            <p className="text-sm font-medium">
              Faculty Development Program. For more details kindly visit Namrata
              Universal
            </p>
          </div>

          <div className="w-60">
            <img
              src="https://namratauniversal.com/img/namrata-universal/112.png"
              alt="CEP"
              className="w-full h-auto mb-2 rounded-lg shadow"
            />
            <p className="text-sm font-medium">
              Continuing education programme for faculties / students / working
              professionals
            </p>
          </div>

          <div className="w-60">
            <img
              src="https://namratauniversal.com/img/namrata-universal/c11.png"
              alt="Training"
              className="w-full h-auto mb-2 rounded-lg shadow"
            />
            <p className="text-sm font-medium">
              Training and consultancy services for the industry
            </p>
          </div>

          <div className="w-60">
            <img
              src="https://namratauniversal.com/img/namrata-universal/sa11.png"
              alt="Incubation"
              className="w-full h-auto mb-2 rounded-lg shadow"
            />
            <p className="text-sm font-medium">
              Providing advice and support for technical incubation and
              entrepreneurial activities
            </p>
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

export default Internship;
