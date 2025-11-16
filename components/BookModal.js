import { X, ArrowLeft } from "lucide-react";
import { useRouter } from "next/router";

export default function BookModal({ book, onClose }) {
  const router = useRouter();
  if (!book) return null;

  const WA_NUMBER = process.env.NEXT_PUBLIC_WA_NUMBER || "8342991246";

  // Slug Generator (courses ke liye)
  const toSlug = (str) =>
    str.toLowerCase().replace(/ /g, "-").replace(/[^a-z0-9-]/g, "");

  // WhatsApp Message
  const whatsappLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    book.waText
  )}`;

  // Back Button
  const handleBack = () => {
    if (window.history.length > 1) router.back();
    else router.push("/courses");
  };

  // Feature click → modal close + redirect
  const handleFeatureClick = (courseName) => {
    const slug = toSlug(courseName);
    onClose(); // modal close
    setTimeout(() => {
      router.push(`/course/${slug}`);
    }, 200); // chota delay for smooth closing animation
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center p-2 sm:p-4 animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl relative overflow-y-auto max-h-[90vh] transform transition-all animate-scaleIn">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black"
        >
          <X size={26} />
        </button>

        {/* Back Button */}
        <button
          onClick={handleBack}
          className="absolute top-4 left-4 text-gray-600 hover:text-black flex items-center gap-1"
        >
          <ArrowLeft size={22} /> Back
        </button>

        <div className="p-5 space-y-6">

          {/* IMAGE & TITLE */}
          <div className="flex flex-col items-center text-center">
            <img
              src={book.img}
              alt={book.title}
              className="w-36 h-48 object-contain drop-shadow-md animate-pop"
            />

            <h3 className="mt-3 text-lg sm:text-xl font-bold text-gray-800">
              {book.title}
            </h3>

            <p className="text-sm text-gray-600 mt-1">
              Rating: {book.rating}{" "}
              <span className="text-yellow-500">
                {"⭐".repeat(Math.round(book.rating))}
              </span>
            </p>

            <p className="text-gray-500 text-lg line-through">
              Direct Price: {book.normalPrice}
            </p>

            <p className="text-xl font-bold text-green-600 mt-1">
              With Promo Code: {book.promoPrice}
            </p>

            <span className="text-sm text-gray-600 mt-1">
              Use Promo Code <strong>Click</strong> Buy on WhatsApp
            </span>
          </div>

          {/* FEATURES → CLICKABLE COURSE LIST */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-2 text-center sm:text-left">
              Included Courses:
            </h4>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700 text-sm">
              {book.features?.map((f, i) => (
                <li
                  key={i}
                  onClick={() => handleFeatureClick(f)}
                  className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg shadow-sm cursor-pointer hover:bg-purple-100 hover:text-purple-700 transition"
                >
                  <span className="text-green-600 font-bold">✓</span> {f}
                </li>
              ))}
            </ul>
          </div>

          {/* BUTTON */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-block bg-green-500 hover:bg-green-600 text-white font-medium px-5 py-3 rounded-lg text-center shadow"
            >
              Buy on WhatsApp
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
