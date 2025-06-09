import React, { useState } from "react";
import { FaChevronRight, FaChevronLeft, FaPlus, FaMinus } from "react-icons/fa";

const faqData = [
  {
    question: "Brief content about Social Media",
    answer:
      "Social media involves sharing content across platforms like Facebook, Instagram, and Twitter to engage users and promote products or services.",
  },
  {
    question: "Brief content about mobile content",
    answer:
      "Mobile content refers to information or media formatted specifically for mobile devices such as smartphones and tablets.",
  },
  {
    question: "Brief content about Email content",
    answer:
      "Email content includes promotional messages sent directly to a user's inbox, often used for updates, sales, or product launches.",
  },
  {
    question: "Brief content about social engine optimaization?",
    answer:
      "Search Engine Optimization (SEO) increases your website’s visibility on search engines through keyword optimization, backlinks, and high-quality content.",
  },
  {
    question: "What is hosting? Will I need it?",
    answer:
      "Hosting is where your website files are stored and made accessible on the internet. Yes, you'll need hosting to make your site live.",
  },
  {
    question: "How long does SEO take?",
    answer:
      "SEO is a long-term strategy and typically takes 3 to 6 months to see noticeable results.",
  },
  {
    question: "How much experience do you have?",
    answer:
      "Our team has several years of experience helping clients grow digitally using the latest tools and strategies.",
  },
  {
    question: "Would my company benefit from digital marketing?",
    answer:
      "Absolutely. Digital marketing helps you reach a wider audience, increase brand awareness, and boost sales through various online strategies.",
  },
];

const imageData = [
  {
    url: "https://namratauniversal.com/img/namrata-universal/seo-card.png",
    text: "SEO includes all the activities that creates high quality content and improves the quantity and quality of your website with high ranking on search engine results page. It also increases the amount of organic traffic to your website.",
  },
  {
    url: "https://namratauniversal.com/img/namrata-universal/paid-adv.png",
    text: "Paid advertising is an online marketing method in which the companies or marketers pay to ad space, website or social media platform to attract more customers towards their products or services. Search paid has only few types such as PPC ads etc. responsive ads, display ads, inbox ads, remarketing, Google shopping, etc.",
  },
  {
    url: "https://namratauniversal.com/img/namrata-universal/smm.png",
    text: "Social media marketing uses social media platform such as Facebooks, twitter, YouTube, LinkedIn and Instagram for promoting your content, product or service, building brand awareness and visibility, building fan or followers and driving traffic to your website.",
  },
  {
    url: "https://namratauniversal.com/img/namrata-universal/content.png",
    text: "Content marketing is a marketing strategy for planning, creating, distributing, sharing and publishing relevant content using podcasts, video, social media, websites and other digital devices. This approach establishes the expertise and builds a relationship between customers and your business and also builds a sense of community around your brand. Content marketing is the best way to give growth to your business.",
  },
  {
    url: "https://namratauniversal.com/img/namrata-universal/email.png",
    text: "Email marketing is when you send a commercial email message to your 'email subscribers' contacts who have signed up to your email list and given express permission to receive email communications from you. promotes brand awareness, and keeps your business top of mind when it's time to buy what you sell.",
  },
  {
    url: "https://namratauniversal.com/img/namrata-universal/mobile.png",
    text: "Mobile marketing is any advertising activity that promotes products and services via mobile devices, such as tablets and smartphones. It makes use of features of modern mobile technology, including location services, to tailor marketing campaigns based on an individual's locationmarketing strategy",
  },
  {
    url: "https://namratauniversal.com/img/namrata-universal/video.png",
    text: "An effective way of digital marketing that assists a business to promote its products or services brand. Video marketing is a powerful tool to spread awareness among the people using different types of videos. These videos are played on social media platforms like YouTube, Instagram, LinkedIn, Facebook, etc. that helps in generating leads, increasing website traffic and boosting sales.",
  },
  {
    url: "https://namratauniversal.com/img/namrata-universal/audio.png",
    text: "business, brand, products or services. Audio marketing assists brands enhance campaign messaging beyond the screen. With its different kind of audio marketing which consists of radio advertising, podcast, music playing apps, audio books, free audio learning sources, promotional interviews. Audio marketing is a great idea to achieve a variety of business objectives like increasing brand awareness, driving. website traffic, generating leads, increasing",
  },
  {
    url: "https://namratauniversal.com/img/namrata-universal/affm.png",
    text: "An advertising strategy in which the affiliate earns commission for promoting your products or services for your company. Amazon and any other online shopping websites are the best examples of affiliate marketing as they take commission for promoting your product brand by providing link, images and the description of your products or services on their websites.",
  },
  {
    url: "https://namratauniversal.com/img/namrata-universal/imm.png",
    text: "A tool to communicate with people using real time text and content rich message through a specific software application and this is the fastest growing technology used in the field of digital marketing. The businesses use instant messaging to communicate with each other, project collaboration, and improved customer support.",
  },
  {
    url: "https://namratauniversal.com/img/namrata-universal/inf.png",
    text: "Influencer marketing is another form of digital marketing in which the promotion of the brand is done by the influencers or celebrities, (an individual who is dedicated to the social platform and has a lot of followers on social media platforms.",
  },
  {
    url: "https://namratauniversal.com/img/namrata-universal/vrm.png",
    text: "Virtual reality marketing is the use of three dimensional device to attract the customer and also to connect with them. Instead of reading content on the screen the customers interact with virtual persona. virtual reality marketing helps the businesses to interact with the customers in effective way because virtual reality devices help the businesses to show their products in three dimensional prospects.",
  },
];

const DigitalMarketing = () => {
  const [faqOpen, setFaqOpen] = useState(null);
  const [start, setStart] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const nextSlide = () => {
    setStart((prev) => (prev + 3) % imageData.length);
  };

  const prevSlide = () => {
    setStart((prev) => (prev - 3 + imageData.length) % imageData.length);
  };

  return (
    <div style={{ paddingTop: "72px", overflowX: "hidden" }}>
      <div style={{ width: "100%", overflow: "hidden" }}>
        <img
          src="https://namratauniversal.com/img/namrata-universal/digibanner.jpeg"
          alt="Banner"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </div>

      {/* Main Heading */}
      <div className="max-w-7xl mx-auto px-4 mt-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center">
          Best Digital Marketing Services in Delhi
        </h1>

        {/* Why Digital Marketing is Important Section */}
        <div className="mt-6 text-gray-700 text-lg leading-relaxed">
          <h2 className="text-2xl font-semibold mb-2">
            Why digital marketing is important?
          </h2>
          <p>
            Digital marketing has been the need of every business as it helps
            them in promoting brand of their products and services. The digital
            marketing is very important for enhancing sales. Through digital
            marketing, you can reach your target audience at local and global
            level. It also helps you increasing brand awareness, the various
            content types are also available in digital marketing to showcase
            your online brand that helps you attract the customers makes them to
            understand the products with the ease. It helps you to increase
            brand engagement by sharing blog post or a paid ad click. Digital
            marketing helps you in maintaining brand reputation, increasing in
            brand awareness for both large and small sized businesses, competing
            with large corporations, converting the website visitors into paid
            customers and tracking and taking action. Digital marketing
            strategies are cost effective, affordable and faster that assists
            you in establishing long term relationship with your customers.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-10 flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="md:flex-1">
          <h2 className="text-3xl font-semibold mb-4">Digital Marketing</h2>
          <p className="text-gray-700 leading-relaxed">
            Digital marketing also known as online marketing refers to all the
            online activities that boost the growth and development of the
            business using digital channels. Digital marketing can be in any
            form such as online video, display ads, search engine marketing,
            paid social ads and social media posts. Digital marketing is a vast
            platform that attracts customers via email, content marketing,
            search platform, social media and many more. Website marketing,
            pay-per-click advertising, content marketing, email marketing social
            media marketing, affiliate marketing, video marketing and SMS
            messaging are the form of digital marketing. Being digital
            marketers, we help all types of businesses in promoting the product
            and services brand and also assist them to stay in touch with their
            customers and boost sales in this challenging time. We also offer
            our customers the best services in their budget by adding credits to
            their account.
          </p>
        </div>
        <div className="md:flex-shrink-0">
          <img
            src="https://namratauniversal.com/img/namrata-universal/digital-marketing-1.png"
            alt="Digital Marketing Visual"
            style={{
              width: "240px",
              height: "auto",
              objectFit: "contain",
              borderRadius: "0.5rem",
            }}
          />
        </div>
      </div>

      {/* Definition Section */}
      <div className="max-w-7xl mx-auto px-4 mt-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Definition of Digital Marketing and Online Marketing
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Digital Marketing */}
          <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">
              Digital Marketing
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Digital marketing is the way of advertising and selling the
              products through social media platforms using internet to promote
              brands and interact with the potential customers. In other words,
              digital marketing refers to all the efforts to promote products
              and services through digital channels like social media, SEO,
              emails and mobile apps. Digital marketing involves all the
              electronic devices such as computer, laptop, tablet and mobile.
              <br />
              <br />
              Online marketing uses a variety of digital online and electronic
              means to deliver the messages in the form of an image, a piece of
              text or a video.
            </p>
          </div>

          {/* Right: Online Marketing */}
          <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
            <h3 className="text-2xl font-semibold mb-4 text-green-700">
              Online Marketing
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Online marketing is a subset of digital marketing that consists of
              finding marketing strategies to promote products and services on
              the internet. In other words, online marketing refers to the
              message in the form of a piece of text, video or audio delivered
              through the digital, online and electronic devices via internet.
              Online marketing is also known as internet marketing. Online
              marketing is suitable for all kinds of businesses.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Types of Digital Marketing
        </h2>
        <p className="text-gray-700 text-center mb-10">
          Digital marketing has several different types, and each type assists
          you in enhancing your sales and reaching a wider audience.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Each type listed below as a card or box */}
          <div className="bg-white shadow-md p-6 rounded-xl">
            <h3 className="font-semibold text-xl mb-2">
              Search Engine Optimization (SEO)
            </h3>
            <p className="text-gray-700">
              SEO is the act of creating content in such a way that search
              engines rank your page high. It increases your brand visibility.
            </p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-xl">
            <h3 className="font-semibold text-xl mb-2">Pay Per Click (PPC)</h3>
            <p className="text-gray-700">
              PPC is a paid ad that appears on top of the search results,
              helping you rank quickly and attract traffic.
            </p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-xl">
            <h3 className="font-semibold text-xl mb-2">
              Social Media Marketing
            </h3>
            <p className="text-gray-700">
              Reach new customers through platforms like Facebook, Instagram,
              LinkedIn by creating engaging posts and content.
            </p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-xl">
            <h3 className="font-semibold text-xl mb-2">Content Marketing</h3>
            <p className="text-gray-700">
              Publishing valuable content like blogs helps connect with
              audiences, answer questions, and drive leads.
            </p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-xl">
            <h3 className="font-semibold text-xl mb-2">Email Marketing</h3>
            <p className="text-gray-700">
              Email marketing helps inform customers about offers and updates
              while building long-term loyalty.
            </p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-xl">
            <h3 className="font-semibold text-xl mb-2">Mobile Marketing</h3>
            <p className="text-gray-700">
              Mobile marketing targets users through smartphones, where they
              spend the majority of their time.
            </p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-xl">
            <h3 className="font-semibold text-xl mb-2">Video Marketing</h3>
            <p className="text-gray-700">
              Videos are a powerful way to engage users and convey your brand’s
              message effectively.
            </p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-xl">
            <h3 className="font-semibold text-xl mb-2">Audio Marketing</h3>
            <p className="text-gray-700">
              Audio content via podcasts, radio, or calls lets brands connect
              with users personally and generate leads.
            </p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-xl">
            <h3 className="font-semibold text-xl mb-2">Affiliate Marketing</h3>
            <p className="text-gray-700">
              Promote your product through affiliates who share your link and
              help boost traffic and sales.
            </p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-xl">
            <h3 className="font-semibold text-xl mb-2">
              Instant Message Marketing
            </h3>
            <p className="text-gray-700">
              Use messaging apps to send quick content directly to individuals
              or small groups for fast interaction.
            </p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-xl">
            <h3 className="font-semibold text-xl mb-2">Influencer Marketing</h3>
            <p className="text-gray-700">
              Leverage social media influencers to promote products and increase
              reach to a targeted audience.
            </p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-xl">
            <h3 className="font-semibold text-xl mb-2">
              Virtual Reality Marketing
            </h3>
            <p className="text-gray-700">
              Use 3D and immersive virtual technologies to engage users and
              create interactive product experiences.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="mt-10 flex items-center justify-between">
          <button onClick={prevSlide} aria-label="Previous Slide">
            <FaChevronLeft size={24} />
          </button>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full mx-4">
            {imageData.slice(start, start + 3).map((item, index) => (
              <div
                key={index}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={item.url}
                  alt="digital-type"
                  className="rounded-lg w-full"
                />
                {hoveredIndex === index && (
                  <div className="absolute inset-0 bg-black bg-opacity-80 text-white p-4 text-sm flex items-center justify-center text-center rounded-lg transition-opacity duration-300">
                    {item.text}
                  </div>
                )}
              </div>
            ))}
          </div>
          <button onClick={nextSlide} aria-label="Next Slide">
            <FaChevronRight size={24} />
          </button>
        </div>

        <div className="max-w-5xl mx-auto px-4 mt-16">
          <h2 className="text-3xl font-bold text-center mb-6 text-[#1e293b]">
            How to Gain Google’s Trust for Digital Marketing?
          </h2>
          <p className="text-gray-700 mb-4 text-justify">
            Google is the world’s top search engine that ranks websites based on
            the quality and relevance of their content. Earning Google's trust
            is essential for getting your site to the top of search results.
            Here's how to do it:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>Create high quality content frequently</li>
            <li>Don’t neglect outdated content</li>
            <li>Avoid errors on your websites</li>
            <li>Repair broken links</li>
            <li>Get more links (backlinks)</li>
            <li>Ensure that your website is secure (HTTPS)</li>
            <li>Always follow Google’s guidelines</li>
            <li>Be active on social media platforms</li>
            <li>Encourage positive user reviews</li>
            <li>Your website must have clear contact information</li>
          </ul>
        </div>

        <div className="max-w-5xl mx-auto px-4 mt-16">
          <h2 className="text-3xl font-bold text-center mb-6 text-[#1e293b]">
            What Skills Are Needed in Digital Marketing?
          </h2>
          <p className="text-gray-700 mb-4 text-justify">
            Digital marketing is an evolving field that combines creativity with
            data-driven decision-making. To be a successful digital marketer,
            one must master various tools and techniques. Below are the most
            important skills:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>
              Expertise in SEO (Search Engine Optimization) and SEM (Search
              Engine Marketing)
            </li>
            <li>Ability to analyze and clean data for meaningful insights</li>
            <li>High-quality content creation skills</li>
            <li>
              Excellent communication for building relationships with clients
              and customers
            </li>
            <li>
              Basic design skills using tools like Adobe Suite, Canva, Inkscape,
              etc.
            </li>
            <li>
              Understanding of various platforms: social media, email, websites,
              etc.
            </li>
            <li>Quick adaptability and continuous learning mindset</li>
            <li>Teamwork and client-centric approach</li>
          </ul>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center gap-6 mt-16">
          {/* Image on left */}
          <img
            src="https://namratauniversal.com/img/namrata-universal/2-1.png"
            alt="Digital marketing illustration"
            className="w-40 h-auto rounded-md shadow-md"
          />

          {/* Text on right */}
          <div className="md:flex-1">
            <h3 className="text-2xl font-bold mb-3 text-[#1e293b]">Digital</h3>
            <p className="text-gray-700 text-justify">
              Hesitating between two subject lines? Not sure what content your
              audience will react best to? A/B testing is one way to find out —
              and a great way to optimize your campaigns. Test different email
              subject line formulas, content formats and CTAs. See which ones
              get the best engagement and stick with the approach.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-16">Frequently Ask</h2>
        <div className="mt-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border-b py-3 cursor-pointer"
              onClick={() => setFaqOpen(faqOpen === index ? null : index)}
            >
              <div className="flex justify-between items-center">
                <h4 className="font-medium text-gray-800">{item.question}</h4>
                {faqOpen === index ? <FaMinus /> : <FaPlus />}
              </div>
              {faqOpen === index && (
                <p className="mt-2 text-gray-600">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}

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

export default DigitalMarketing;
