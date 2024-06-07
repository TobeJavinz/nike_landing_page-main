import React from "react";
import Footer from "./Footer";

const Aboutus = () => {
  return (
    <main className="relative">
      <div className="relative w-full h-80">
        <img
          className="w-full h-80 object-cover object-left"
          src="src/assets/images/company.png"
          alt="Company"
        />
        <div className="absolute top-0 left-0 w-full h-80 bg-blue-900 bg-opacity-80 flex items-center justify-center">
          <div className="text-center p-6">
            <h1 className="text-4xl text-white font-bold mb-5">
              Merryl's Vision and Mission
            </h1>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container mt-20">
        <div className="flex flex-1 flex-col">
          <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold text-blue-900">
            Mission
          </h2>
          <p className="mt-4 info-text">
            At Merryl's Consumer Goods Trading, our mission is to provide
            high-quality consumer goods that enhance the daily lives of our
            customers. We are dedicated to offering a diverse range of products
            that meet the evolving needs and preferences of individuals and
            families. Through a commitment to excellence, innovation, and
            customer satisfaction, we strive to be a trusted provider of goods
            that bring joy, convenience, and value to our customers. We aim to
            build lasting relationships with our stakeholders, uphold ethical
            business practices, and contribute positively to the communities we
            operate in.
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
        <div className="flex flex-1 flex-col">
          <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold mt-20 text-blue-900">
            Vision
          </h2>
          <p className="mt-4 info-text">
            Merryl's Consumer Goods Trading vision is to redefine the consumer
            goods industry by becoming the preferred destination for
            high-quality products that enrich and simplify the lives of our
            customers. We aspire to be recognized as a symbol of innovation,
            reliability, and customer satisfaction, setting the standard for
            excellence in product offerings and service delivery. By fostering a
            culture of continuous improvement, sustainability, and community
            engagement, we aim to create lasting value for our customers,
            employees, and partners while making a positive impact on the world
            around us. Our ultimate goal is to be a driving force of positive
            change, inspiring a brighter future for all.
          </p>
        </div>
      </div>

      <section className="bg-blue-900  padding-x padding-t pb-4 mt-20">
        <Footer />
      </section>
    </main>
  );
};

export default Aboutus;
