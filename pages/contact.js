import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Header />
       <section className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Side - Text */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Our Customer <br /> Support
          </h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat.
          </p>
          <button className="bg-red-500 text-white px-5 py-2 rounded-full shadow-md hover:bg-red-600 transition">
            Contact Us
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center mb-16">
          <img
            src="/customer-support.jpg"
            alt="Customer Support"
            className="max-w-md w-[100%]"
          />
        </div>
      </div>
    </section>
      <Footer />
    </>
  );
}
