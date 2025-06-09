import React from "react";

const SEO = () => {
  return (
    <div className="w-full">
      {/* Adjust this div to give space for navbar (e.g., 64px height navbar) */}
      <div className="pt-16">
        {/* Banner Image: fixed height, covers width, starts below navbar */}
        <img
          src="https://namratauniversal.com/img/namrata-universal/BANNER4.jpg"
          alt="SEO Banner"
          className="w-full h-[400px] object-cover"
        />
      </div>
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#1e293b] mt-8 mb-10 max-w-6xl mx-auto px-4">
        Namrata Universal - Search engine optimization (SEO)
      </h1>

      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-8">
        {/* Left Vertical SEO Topic List */}
        <nav
          className="w-full md:w-1/4 bg-gray-100 p-6 rounded-lg shadow-md
            sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto"
        >
          <h2 className="text-xl font-semibold text-[#1e293b] mb-6">
            INTRODUCTION
          </h2>
          <ul className="space-y-3 text-gray-700 list-disc list-inside text-sm">
            <li>How to become an SEO expert?</li>
            <li>SEO 101</li>
            <li>How Search Engines Work</li>
            <li>CRAWLING</li>
            <li>Indexing</li>
            <li>Ranking</li>
            <li>Keyword Research</li>
            <li>On-Page SEO</li>
            <li>TECHNICAL SEO</li>
            <li>How websites work</li>
            <li>How search engines understand websites</li>
            <li>How users interact with websites</li>
          </ul>
        </nav>

        {/* Right Main SEO Content */}
        <main className="w-full md:w-3/4 text-gray-700">
          {/* Intro Text */}
          <section className="mb-10">
            <p>
              Search Engine Optimization is a set of technical and content
              practices that improve the quality of your website to increase the
              visibility on the search engine like Google when people search for
              products or services related to your business. SEO meets the
              user’s search needs by creating relevant, effective and
              high-quality content and giving the best possible user experience.
              It increases top rank of your website. SEO activities take place
              both on-page SEO and off-page SEO.
            </p>
            <p className="mt-4 font-semibold">
              SEO includes the following components:
            </p>
            <ul className="list-disc list-inside mt-2 ml-4">
              <li>Link building</li>
              <li>Technical Optimization</li>
              <li>Keyword research</li>
              <li>Content creation and optimization</li>
            </ul>
          </section>

          {/* How SEO Works */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
              How does SEO work?
            </h2>
            <p>
              SEO is basically aimed at increasing the number of visitors to the
              company’s website which results in leading more customers and more
              revenue. SEO works by creating reliable and high-quality content.
              After that, the website’s content is optimized, keyword research
              is conducted and inbound links are earned to enhance the content’s
              ranking and visibility of a website on search engines like Google,
              Bing and many more.
            </p>
            <p className="mt-4">
              The SEO result takes effect on SERP (Search Engine Results Page)
              once the webpage has been crawled and indexed by the search
              engine. SEO takes months to fully materialize.
            </p>
            <p className="mt-4">
              Search engines like Google crawl pages on the web using bots,
              visiting several sites and gathering information about those pages
              and putting them in an index. The index is equivalent to a big
              library where you can find exactly what you are seeking for at
              that time.
            </p>
            <p className="mt-4">
              Search engines like Google, and Bing use bots to analyze billions
              of pages in their index and show relevant results specific to the
              users’ query. SEO is such a marketing tragedy that helps you
              understand what your website users want so that you can implement
              that knowledge across your website and social media properties.
            </p>
          </section>

          {/* Importance of SEO */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
              What is the importance of SEO?
            </h2>
            <p>
              The aim of SEO is to understand the user’s online search so that
              high-quality content can be created to satisfy their needs. It
              also helps to create a website where the search engine can find
              out the index and understand its content. SEO is very important in
              the following ways.
            </p>

            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>
                SEO improves the user experience and a website’s usability.
              </li>
              <li>
                It improves the visibility of your website on the search engine.
              </li>
              <li>
                SEO understands the need of the customers using search query
                data, SERP analysis and analytic data and AI insight.
              </li>
              <li>SEO is relatively cheap and very effective.</li>
              <li>
                SEO helps establish long-term equity for your brand because a
                good ranking and favorable placement to boost your brand
                profile.
              </li>
              <li>SEO helps you to gain the trust of potential customers.</li>
              <li>
                SEO increases the web traffic on your website which results in
                enhancing the number of visitors to your page each day.
              </li>
            </ul>
          </section>

          {/* SEO Library */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
              Namrata Universal’s SEO Library
            </h2>
            <p>
              Namrata Universal offers detailed SEO insights for various search
              engines:
            </p>
            <ul className="list-disc list-inside mt-2 ml-4">
              <li>Google SEO</li>
              <li>Google Algorithm Updates</li>
              <li>Google Search Console</li>
              <li>Bing SEO</li>
            </ul>
          </section>

          {/* SEO Basics */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
              The basics of search engine optimization
            </h2>
            <p>
              If you really want to be expert in search engine optimization
              (SEO). Then you must know all the aspects of SEO. First of all,
              you must have knowledge of the basics of SEO that are the
              important fundamentals for SEO. You can’t do SEO without these
              basics.
            </p>
            <ul className="list-disc list-inside mt-4 ml-4 space-y-2">
              <li>
                <strong>Keyword research:</strong> Determine the keywords that
                you want to rank for and use them in your website's content and
                Meta tags.
              </li>
              <li>
                <strong>On-page optimization:</strong> Ensure that your website
                is properly optimized with keywords in the title tags, Meta
                descriptions, header tags, and content.
              </li>
              <li>
                <strong>Content creation:</strong> Develop high-quality,
                original, and relevant content that provides value to your
                target audience and includes your target keywords.
              </li>
              <strong>Link building:</strong> Obtain high-quality links from
              other relevant and authoritative websites to your website. This
              helps improve your website's credibility and search engine
              ranking.
              <li>
                <strong>Site structure:</strong> Make sure your website has a
                logical and easy-to-understand structure, with a clear hierarchy
                of pages and a sitemap.
              </li>
              <li>
                <strong>Technical optimization:</strong> Ensure that your
                website is technically sound and meets the technical
                requirements of search engines, such as fast loading speeds,
                mobile responsiveness, and security.
              </li>
              <li>
                <strong>Analytics and tracking:</strong> Use tools like Google
                Analytics to track your website's traffic, user behavior, and
                conversion rates, and adjust your SEO strategy accordingly.
              </li>
            </ul>
          </section>

          {/* SEO Infographic */}
          <section className="mb-10">
            <img
              src="https://namratauniversal.com/img/namrata-universal/seo_need.png"
              alt="SEO Need"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </section>

          {/* Final Note */}
          <p className="text-justify leading-relaxed">
            These are the basic building blocks of an effective SEO strategy,
            but SEO is an ongoing process that requires constant analysis and
            updates.
          </p>
        </main>
      </div>

      {/* Footer */}
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

export default SEO;
