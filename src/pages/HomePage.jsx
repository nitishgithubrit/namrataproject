import React from "react";
import AboutSection from "../components/AboutSection";

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src={`${import.meta.env.BASE_URL}hero.mp4`}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Subtle dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/30 z-10"></div>

        {/* Animated Heading */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <h1
            className="text-gray-200 text-4xl md:text-6xl font-semibold text-center px-4 animate-glow-fade"
            style={{ transition: "color 0.3s ease" }}
          >
            Welcome to Namrata Universal
          </h1>
        </div>
      </section>

      {/* About Us */}

      <AboutSection />

      {/* Services */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center mb-14">
          <h2
            data-aos="fade-up"
            className="text-5xl font-extrabold tracking-tight text-gray-900 mb-4 drop-shadow-lg"
          >
            Services
          </h2>
          <p
            data-aos="fade-in"
            className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            Nationwide Service, Local Expertise Offer The Latest Software And
            Solutions To Our Customers!
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-4">
          {/* Repeat these service cards, same content but beautiful */}
          {[
            {
              img: "https://namratauniversal.com/img/web1.jpeg",
              alt: "Business Portal Development",
              title: "Business Portal Development",
              desc: "At Namrata Universal, we offer mobile-compliant Business Portal Development services leveraging a plethora of frameworks including Drupal, WordPress, Magento, AngularJS and much more.",
            },
            {
              img: "https://namratauniversal.com/img/mapd.jpeg",
              alt: "Mobile Application Development",
              title: "Mobile Application Development",
              desc: "We have designed and developed Android apps in categories like productivity, shopping, social messaging, gaming and entertainment, news and publishing, and more.",
            },
            {
              img: "https://namratauniversal.com/img/webd.jpeg",
              alt: "Website Development",
              title: "Website Development",
              desc: "We create websites that appeal to your sense of style, with intuitive layouts and navigation. We also ensure that your website is search engine friendly to attract customers and sales.",
            },
            {
              img: "https://namratauniversal.com/img/digital.png",
              alt: "Digital Marketing",
              title: "Digital Marketing",
              desc: "Digital marketing connects customers using the internet and various platforms such as Search Engines, Websites, Social Media, Email Marketing, Mobile apps, Text messaging, and Online promotions.",
            },
            {
              img: "https://namratauniversal.com/img/cuts.jpeg",
              alt: "Custom Software",
              title: "Custom Software",
              desc: "Custom software development is the process of designing, creating, deploying and maintaining software for specific users and functions. We offer quality and valuable price without sacrificing quality.",
            },
            {
              img: "https://namratauniversal.com/img/gd.jpeg",
              alt: "Graphic Designing",
              title: "Graphic Designing",
              desc: "Graphic design is the art of creating visual content. It is fundamental for brands to connect with their target audience effectively.",
            },
            {
              img: "https://namratauniversal.com/img/apd.jpeg",
              alt: "App Design",
              title: "App Design",
              desc: "Our experts cover the entire mobile app development cycle, including business analysis, UX/UI design, and development of your mobile application.",
            },
            {
              img: "https://namratauniversal.com/img/seo.png",
              alt: "SEO",
              title: "SEO",
              desc: "SEO stands for search engine optimization. Namrata Universal provides top SEO services to help your site rank higher on Google.",
            },
          ].map(({ img, alt, title, desc }, idx) => (
            <div
              key={idx}
              data-aos="zoom-in-up"
              data-aos-delay={idx * 100}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-500 cursor-pointer group"
            >
              <div className="overflow-hidden rounded-t-3xl">
                <img
                  src={img}
                  alt={alt}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-gray-900 group-hover:text-teal-600 transition-colors duration-300">
                  {title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call To Action Start */}
      <section
        className="bg-gradient-to-r from-teal-600 to-blue-700 text-white py-16"
        data-aos="zoom-in-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1500"
      >
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-pulse">
              Call to Action
            </h2>
            <p className="text-lg md:text-xl text-gray-100">
              We'd love to hear from you. Reach out to us for any queries or
              support.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-10">
            <a
              href="tel:8506922777"
              className="bg-white text-teal-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-teal-100 transition duration-300 transform hover:scale-105"
            >
              Call us @ 8506922777
            </a>
            <a
              href="tel:8506944777"
              className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-100 transition duration-300 transform hover:scale-105"
            >
              Call us @ 8506944777
            </a>
            <a
              href="tel:01203174973"
              className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-indigo-100 transition duration-300 transform hover:scale-105"
            >
              Call us @ 01203174973
            </a>
          </div>
        </div>
      </section>
      {/* Call To Action End */}

      {/* Counters Start */}
      <section
        className="bg-gray-900 text-white py-16"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {/* Staffs */}
            <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-teal-500/50 transition-transform transform hover:scale-105">
              <i className="ion-md-person text-4xl text-teal-400 mb-3"></i>
              <h2 className="text-3xl font-bold" data-count="56">
                56
              </h2>
              <p className="text-gray-300 mt-1">Our Staffs</p>
            </div>

            {/* Clients */}
            <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/50 transition-transform transform hover:scale-105">
              <i className="ion-md-people text-4xl text-blue-400 mb-3"></i>
              <h2 className="text-3xl font-bold" data-count="5200">
                5200
              </h2>
              <p className="text-gray-300 mt-1">Our Clients</p>
            </div>

            {/* Projects */}
            <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-green-500/50 transition-transform transform hover:scale-105">
              <i className="ion-md-checkmark text-4xl text-green-400 mb-3"></i>
              <h2 className="text-3xl font-bold" data-count="3811">
                3811
              </h2>
              <p className="text-gray-300 mt-1">Completed Projects</p>
            </div>

            {/* Support */}
            <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-pink-500/50 transition-transform transform hover:scale-105">
              <i className="ion-md-trending-up text-4xl text-pink-400 mb-3"></i>
              <h2 className="text-3xl font-bold">24×7</h2>
              <p className="text-gray-300 mt-1">Support</p>
            </div>
          </div>
        </div>
      </section>
      {/* Counters End */}

      {/* Main Team */}
      <div className="max-w-7xl mx-auto mb-16 px-4">
        <h3 className="text-3xl font-bold mb-6 text-center">
          Main Team of Namrata Universal
        </h3>
        <p className="max-w-4xl mx-auto text-center mb-10">
          Our main team comprises passionate individuals from various
          backgrounds. From creative designers to meticulous engineers and
          skilled marketers, we work together synergistically to deliver
          innovative solutions that exceed expectations.
        </p>

        <div className="flex flex-wrap justify-center gap-12">
          {/* Team Member Template */}
          {[
            {
              img: "https://namratauniversal.com/img/namrata-universal/Brajesh-Kumar-Jaiswal(CEO&FOUNDER).jpg",
              name: "Brajesh Kumar Jaiswal",
              title: "Co-Founder",
              socials: {
                x: "https://x.com/NamrataUni",
                facebook: "https://www.facebook.com/namratauniversal01/",
                linkedin: "https://www.linkedin.com/company/namrata-universal/",
                instagram: "https://www.instagram.com/namratauniversal/",
              },
            },
            {
              img: "https://namratauniversal.com/img/namrata-universal/Preeti(Co-Founder).jpg",
              name: "Preeti",
              title: "CEO & Founder",
              socials: {
                x: "https://x.com/NamrataUni",
                facebook: "https://www.facebook.com/namratauniversal01/",
                linkedin: "https://www.linkedin.com/company/namrata-universal/",
                instagram: "https://www.instagram.com/namratauniversal/",
              },
            },
            {
              img: "https://namratauniversal.com/img/namrata-universal/Saurabh-Mahawar(Co-Founder).jpg",
              name: "Saurabh Mahawar",
              title: "Co-Founder",
              socials: {
                x: "https://x.com/NamrataUni",
                facebook: "https://www.facebook.com/namratauniversal01/",
                linkedin: "https://www.linkedin.com/company/namrata-universal/",
                instagram: "https://www.instagram.com/namratauniversal/",
              },
            },
          ].map(({ img, name, title, socials }) => (
            <div
              key={name}
              className="w-64 bg-white rounded-lg shadow p-4 text-center"
            >
              <img
                src={img}
                alt={name}
                className="rounded-lg mb-3 w-full h-64 object-cover"
              />
              <div className="flex justify-center space-x-4 mb-2">
                {/* Social icons */}
                <a
                  href={socials.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  className="hover:text-indigo-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14.86 4.48 4.48 0 001.98-2.48 9.2 9.2 0 01-2.89 1.1 4.5 4.5 0 00-7.69 4.1A12.8 12.8 0 013 4.1a4.48 4.48 0 001.39 6 4.47 4.47 0 01-2.04-.56v.06a4.5 4.5 0 003.6 4.41 4.52 4.52 0 01-2.03.08 4.5 4.5 0 004.19 3.12 9.03 9.03 0 01-5.6 1.93A9.2 9.2 0 012 19.54a12.7 12.7 0 006.92 2.02c8.3 0 12.85-6.87 12.85-12.83 0-.2 0-.4-.02-.6A9.22 9.22 0 0023 3z" />
                  </svg>
                </a>
                <a
                  href={socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="hover:text-indigo-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.342v21.316C0 23.4.6 24 1.325 24h11.483v-9.294H9.691v-3.622h3.117V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.466.097 2.797.142v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.312h3.59l-.467 3.622h-3.123V24h6.116C23.4 24 24 23.4 24 22.658V1.342C24 .6 23.4 0 22.675 0z" />
                  </svg>
                </a>
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="hover:text-indigo-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5a2.5 2.5 0 11.001 5.001 2.5 2.5 0 01-.001-5.001zM4.75 8.75H7.25v11H4.75v-11zm7 0h2.46v1.5h.03c.34-.65 1.16-1.33 2.38-1.33 2.55 0 3.02 1.68 3.02 3.87v6.93h-2.5v-6.15c0-1.47-.03-3.36-2.05-3.36-2.05 0-2.36 1.6-2.36 3.25v6.26h-2.5v-11z" />
                  </svg>
                </a>
                <a
                  href={socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="hover:text-indigo-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm8.75 2.5a1.25 1.25 0 11-.001 2.501A1.25 1.25 0 0116.5 6zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" />
                  </svg>
                </a>
              </div>
              <div className="font-semibold">
                {name}
                <br />
                {title}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Testimonal */}

      {/* Reviews */}
      <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
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

          {/* Review 7 */}
          <div className="w-40 text-center">
            <img
              src="https://namratauniversal.com/img/review/Amit%20Tamang.jpg"
              alt="Amit Tamang"
              className="w-40 h-40 object-cover rounded-full shadow mx-auto"
            />
            <h4 className="mt-3 font-semibold text-lg">Amit Tamang</h4>
            <p className="text-sm text-gray-600">
              Consultant — Amit finds Namrata Universal’s approach
              client-focused and highly professional.
            </p>
          </div>
        </div>
      </div>

      {/* Our Clients */}
      <div className="max-w-7xl mx-auto px-4 mb-14 text-center">
        <h3 className="text-3xl font-bold mb-3">Our Clients</h3>
        <hr className="border-gray-400 w-24 mx-auto mb-6" />
        <div className="flex flex-wrap justify-center items-center gap-8">
          {[
            "https://namratauniversal.com/img/client-4.jpg",
            "https://namratauniversal.com/img/client-11.png",
            "https://namratauniversal.com/img/client-12.png",
            "https://namratauniversal.com/img/client-21.png",
            "https://namratauniversal.com/img/client-23.png",
            "https://namratauniversal.com/img/client-15.png",
            "https://namratauniversal.com/img/client-8.jpg",
          ].map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Client ${idx + 1}`}
              className="h-16 object-contain"
            />
          ))}
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
export default HomePage;
