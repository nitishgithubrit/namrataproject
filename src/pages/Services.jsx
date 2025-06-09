import React, { useState } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "E-commerce Website",
    image:
      "https://namratauniversal.com/img/namrata-universal/ecommerce-website.webp",
    quote:
      "The strength to change what I can, the inability to accept what I can't and the incapacity to tell the difference.",
    description: `An ecommerce website is an online platform for buying and selling products or services. It allows customers to shop from the comfort of their own home, anytime and anywhere. Ecommerce website generally contains a catalog of products, shopping cart functionality, payment processing options, customer support systems, and more.

Namrata Universal, as an ecommerce website development company, understands that the success of your business relies on the quality of the customer’s experience. If you are also seeking for a place for getting designed and developed ecommerce website, you are highly recommended to give us chance to serve you as we will give you the best service.`,
    features: [
      "Attractive design",
      "100% security with multiple payment mode on your website",
      "Enhance customer service",
      "Easy to use",
    ],
    bannerImage:
      "https://namratauniversal.com/img/namrata-universal/e-commerce-website.png",
  },
  {
    id: 2,
    title: "Informative Website",
    image:
      "https://namratauniversal.com/img/namrata-universal/informative-website-banner.webp",
    quote:
      "Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.",
    description: `Informative website can be defined as an online tool designed to provide users with valuable information related to a certain topic. It typically contains articles, videos and other resources that are intended to educate its audience about the chosen subject matter.

Namrata Universal is dedicated to creating informative websites that reach the highest standards of usability, functionality, and modern design. Our team of experienced professionals is committed to delivering the best possible product for our clients. We strive to keep up with the latest trends in web development so that your website stands out from the competition. The high quality content in your informative website will lead to traffic on your website or blog, and increase engagement and social share as well.`,
    features: [
      "Well written",
      "Visually appealing",
      "Get website with relevant and accurate content",
      "Reliable and trustworthy website",
    ],
  },
  {
    id: 3,
    title: "Dynamic Website",
    image:
      "https://namratauniversal.com/img/namrata-universal/dynamic-website-banner.webp",
    quote:
      "Dad buried in landslide! Jubilant throngs fill streets! Stunned father inconsolable - demands recount!",
    description: `A dynamic website runs on server-side software and can be easily modified without the need for manual coding or editing. Dynamic websites are powered by programming languages such as JavaScript, PHP, ASP.NET and Ruby.

The development team of Namrata Universal consists of experienced software engineers who specialize in building dynamic websites. We use the latest technologies to ensure that our clients’ code is optimized for performance, scalability, and security. Our company develops dynamic websites using the latest technologies and innovative ideas.`,
    features: [
      "User friendly navigation",
      "Responsive design",
      "Easy customization",
      "Safety and security",
    ],
  },
  {
    id: 4,
    title: "Static Website",
    image:
      "https://namratauniversal.com/img/namrata-universal/static-website-banner.webp",
    quote:
      "Dad buried in landslide! Jubilant throngs fill streets! Stunned father inconsolable - demands recount!",
    description: `A static website, also referred to as a "flat" website, is one that does not change or update its content very often. It is typically made up of HTML pages that are created by the webmaster and stored on a server for public viewing.

Namrata Universal, being a leading static website design and development company, creates custom solutions that meet our clients' unique needs. With our advanced proprietary tools and experienced staff, you can rest assured that your project will be completed quickly and efficiently, meeting all of your requirements.`,
    features: [
      "Safe and secure static website with high quality content",
      "Clear and well structured layout",
      "Specific solution",
    ],
  },
];

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  return (
    <div className="w-full">
      <img
        src="https://namratauniversal.com/img/namrata-universal/it-service.webp"
        alt="IT Services Banner"
        className="w-full h-auto object-cover"
      />

      <div className="text-center my-10 px-4">
        <h1 className="text-4xl font-bold text-[#1e293b] mb-4">
          Complete IT Solutions Services
        </h1>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Nationwide Service, Local Expertise Offer The Latest Software And
          Solutions To Our Customers!
        </p>
      </div>

      <div className="text-center mb-10 px-4">
        <h2 className="text-3xl font-semibold text-[#1e293b]">
          Website Designing & Development
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-[#1e293b]">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                {service.quote}
              </p>
              <button
                onClick={() => setActiveService(service)}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      {activeService && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-start justify-center overflow-auto pt-10 px-4">
          <div className="bg-white w-full max-w-4xl p-6 rounded-lg relative">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-xl font-bold"
              onClick={() => setActiveService(null)}
              aria-label="Close Modal"
            >
              &times;
            </button>
            <img
              src={activeService.image}
              alt={activeService.title}
              className="w-full h-64 object-cover rounded"
            />
            <h2 className="text-2xl font-bold text-[#1e293b] mt-4">
              {activeService.title}
            </h2>
            <p className="text-gray-700 mt-2 text-justify">
              {activeService.description}
            </p>
            <ul className="list-disc list-inside mt-4 ml-4 space-y-1 text-gray-700">
              {activeService.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            {activeService.bannerImage && (
              <img
                src={activeService.bannerImage}
                alt="Service banner"
                className="w-full h-auto mt-4 rounded"
              />
            )}
            <div className="text-center mt-6">
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}

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
    </div>
  );
};

export default Services;
