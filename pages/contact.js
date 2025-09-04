import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Header />
      <main className="py-20 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
          <p className="mt-4 text-gray-600">
            Have questions? Get in touch with us today.
          </p>
          <div className="mt-8 space-y-4">
            <p className="text-lg text-gray-700">
              📍 Lucknow, India
            </p>
            <p className="text-lg text-gray-700">
              📞 (+91) 7684953285
            </p>
            <p className="text-lg text-gray-700">
              📧 SmartSavingsbySuccessMantrr@gmail.com
            </p>
            <a
              href="https://wa.me/918000000000?text=Hi%20I%20want%20to%20connect%20with%20SuccessMantrr"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
