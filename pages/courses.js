import Header from "../components/Header";
import Footer from "../components/Footer";

const books = [
  {
    title: "MINI PACKAGE",
    price: "Rs. 799",
    features: ["Canva Mastery", "Lead Generation"],
    img: "/books/mini.png",
    waText: "Hi, I want to buy the MINI PACKAGE (Rs. 799).",
  },
  {
    title: "MARKETING PACKAGE",
    price: "Rs. 1599",
    features: ["Public Speaking", "Communication Skills", "Spoken English"],
    img: "/books/marketing.png",
    waText: "Hi, I want to buy the MARKETING PACKAGE (Rs. 1599).",
  },
  {
    title: "ADVANCE PACKAGE",
    price: "Rs. 3999",
    features: ["Instagram Mastery", "Reel Creation Mastery", "How to attract & influence"],
    img: "/books/advance.png",
    waText: "Hi, I want to buy the ADVANCE PACKAGE (Rs. 3999).",
  },
  {
    title: "BRANDING PACKAGE",
    price: "Rs. 5999",
    features: ["Facebook Ads Run", "How to send Email like professionals"],
    img: "/books/branding.png",
    waText: "Hi, I want to buy the BRANDING PACKAGE (Rs. 5999).",
  },
  {
    title: "PREMIUM PACKAGE",
    price: "Rs. 9999",
    features: ["Website Designing", "Finance"],
    img: "/books/premium.png",
    waText: "Hi, I want to buy the PREMIUM PACKAGE (Rs. 9999).",
  },
];

export default function Courses() {
  return (
    <>
      <Header />
      <main className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Our Book Packages
          </h2>
          <p className="mt-4 text-center text-gray-600">
            Choose a package and start your success journey today.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {books.map((book, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition p-6 flex flex-col items-center"
              >
                <img
                  src={book.img}
                  alt={book.title}
                  className="w-40 h-56 object-cover rounded-md"
                />
                <h3 className="mt-4 text-xl font-bold text-purple-700">
                  {book.title}
                </h3>
                <p className="mt-2 text-lg font-semibold text-gray-800">
                  {book.price}
                </p>
                <ul className="mt-4 text-gray-600 text-sm list-disc list-inside">
                  {book.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/918000000000?text=${encodeURIComponent(
                    book.waText
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-block bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700"
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
