import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BookModal from "../components/BookModal";

const books = [
  {
    title: "MINI PACKAGE",
    rating: 3.2,
    normalPrice: "₹999",
    promoPrice: "₹799",
    features: ["Affiliate Marketing", "Canva Mastery", "Lead Generation"],
    img: "/Mini.png",
    waText: "Hi, I want to buy the MINI PACKAGE (Rs. 799).",
  },
  {
    title: "MARKETING PACKAGE",
    rating: 4.1,
    normalPrice: "₹1499",
    promoPrice: "₹1199",
    features: [
      "Affiliate Marketing",
      "Canva Mastery",
      "Lead Generation",
      "Communication Skills",
      "Public Speaking",
      "Spoken English",
    ],
    img: "/Marketing.png",
    waText: "Hi, I want to buy the MARKETING PACKAGE (Rs. 1599).",
  },
  {
    title: "ADVANCE PACKAGE",
   rating: 4.5,
    normalPrice: "₹3499",
    promoPrice: "₹2999",
    features: [
        "Affiliate Marketing",
      "Canva Mastery",
      "Lead Generation",
      "Communication Skills",
      "Public Speaking",
      "Spoken English",
      "Instagram Mastery",
      "Reels Mastery",
      "Attraction Marketing",
      "Facebook Ads",
      "Email Marketing",
    ],
    img: "/Advance.png",
    waText: "Hi, I want to buy the ADVANCE PACKAGE (Rs. 3999).",
  },
  {
    title: "BRANDING PACKAGE",
 rating: 4.3,
     normalPrice: "₹5799",
    promoPrice: "₹4999",
    features: [
          "Affiliate Marketing",
      "Canva Mastery",
      "Lead Generation",
      "Communication Skills",
      "Public Speaking",
      "Spoken English",
      "Instagram Mastery",
      "Reels Mastery",
      "Attraction Marketing",
      "Facebook Ads",
      "Email Marketing",
      "All Advance Modules",
      "Reselling Mastery",
      "Entrepreneurship Basics",
      "Team Building",
    ],
    img: "/Branding.png",
    waText: "Hi, I want to buy the BRANDING PACKAGE (Rs. 5999).",
  },
  {
    title: "PREMIUM PACKAGE",
 rating: 4.9,
      normalPrice: "₹9999",
    promoPrice: "₹8999",
    features: [  "Affiliate Marketing",
      "Canva Mastery",
      "Lead Generation",
      "Communication Skills",
      "Public Speaking",
      "Spoken English",
      "Instagram Mastery",
      "Reels Mastery",
      "Attraction Marketing",
      "Facebook Ads",
      "Email Marketing",
      "All Advance Modules",
      "Reselling Mastery",
      "Entrepreneurship Basics",
      "Team Building",
      "Personal Branding",
      "Leadership Mastery",
      "High-Ticket Sales",
      "Advanced Funnel Building",
      "Complete Success Bundle",
    ],
    img: "/Premium.png",
    waText: "Hi, I want to buy the PREMIUM PACKAGE (Rs. 9999).",
  },
];

export default function Courses() {
  const [selectedBook, setSelectedBook] = useState(null);

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

          <div className="mt-1 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {books.map((book, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition p-6 flex flex-col items-center"
              >
                <img
                  src={book.img}
                  alt={book.title}
                  className="w-50 h-86 object-cover rounded-md"
                />
                <h3 className="mt-4 text-xl font-bold text-purple-700">
                  {book.title}
                </h3>
                <p className="mt-1 text-2xl font-semibold text-gray-800">
                  {book.price}
                </p>
                <ul className="mt-3 text-gray-600 text-md list-disc list-inside">
                  {book.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
                <button
                  onClick={() => setSelectedBook(book)}
                  className="mt-6 inline-block bg-purple-600 text-white px-12 py-2 rounded-lg hover:bg-purple-700"
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Modal */}
      {selectedBook && (
        <BookModal book={selectedBook} onClose={() => setSelectedBook(null)} />
      )}

      <Footer />
    </>
  );
}
