import { X } from "lucide-react";

export default function BookModal({ book, onClose }) {
  if (!book) return null;

  // WhatsApp Number
  const WA_NUMBER = process.env.NEXT_PUBLIC_WA_NUMBER || "7684953285";

  const whatsappLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    `Hi, I want to buy the ${book.title} from Success Mantrr. Please share details.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center p-2 sm:p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl relative overflow-y-auto max-h-[90vh] animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black"
        >
          <X size={26} />
        </button>

        {/* Content */}
        <div className="p-5 space-y-6">
          {/* Image + Title */}
          <div className="flex flex-col items-center text-center">
            <img
              src={book.img}
              alt={book.title}
              className="w-36 h-48 object-contain drop-shadow-md"
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
            </p>{" "}
            <span className="text-sm text-gray-600 mt-1">
              Use Promo Code <strong>Click</strong> Buy on WhatsApp
            </span>
          </div>

          {/* Features */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-2 text-center sm:text-left">
              What’s Inside:
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700 text-sm">
              {book.features && book.features.length > 0 ? (
                book.features.map((f, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg shadow-sm"
                  >
                    <span className="text-green-600">✓</span> {f}
                  </li>
                ))
              ) : (
                <li className="text-gray-400 italic">No features listed</li>
              )}
            </ul>
          </div>

          {/* Buttons */}
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
