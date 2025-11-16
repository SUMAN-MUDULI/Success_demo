const bookList = [
  {
    id: 1,
    title: "Mini Package",
    img: "/Mini.png",
    rating: 3.2,
    normalPrice: "₹999",
    promoPrice: "₹799",
    features: ["Affiliate Marketing", "Canva Mastery", "Lead Generation"],
    url: "https://successmantrr.com/plan-detail/mini",
  },
  {
    id: 2,
    title: "Marketing Package",
    img: "/Marketing.png",
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
    url: "https://successmantrr.com/plan-detail/marketing",
  },
  {
    id: 3,
    title: "Advance Package",
    img: "/Advance.png",
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
    url: "https://successmantrr.com/plan-detail/advance",
  },
  {
    id: 4,
    title: "Branding Package",
    img: "/Branding.png",
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
    url: "https://successmantrr.com/plan-detail/premium",
  },
  {
    id: 5,
    title: "Premium Package",
    img: "/Premium.png",
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
      "YouTube Mastery",
      "Reselling Mastery",
      "Sales Mastery",
      "Team Building",
      "Personal Branding",
      "Leadership Mastery",
      "High-Ticket Sales",
      "Advanced Funnel Building",
      "Complete Success Bundle",
    ],
    url: "https://successmantrr.com/plan-detail/branding",
  },
];


export function BookGrid({ onBookClick }) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center text-mantrrBlue mb-8">
          Explore Package
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {bookList.map((b) => (
            <div
              key={b.id}
              tabIndex={0}
              role="button"
              onClick={() => onBookClick?.(b)}
              onKeyDown={(e) => {
                if (e.key === "Enter") onBookClick?.(b);
              }}
              className="bg-white rounded-xl p-4 shadow hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400 card-focus"
            >
              {/* Image box */}
              <div className="h-40 flex items-center justify-center">
                {b.img ? (
                  <img
                    src={b.img}
                    alt={b.title}
                    className="object-contain h-full"
                  />
                ) : (
                  <div className="text-gray-400 text-sm">No Image</div>
                )}
              </div>

              {/* Title */}
              <h4 className="mt-3 text-sm font-semibold text-gray-800 text-center">
                {b.title}
              </h4>

              {/* Rating */}
              <div className="mt-2 flex items-center justify-center gap-2 text-sm">
                <span className="text-yellow-500">
                  {"⭐".repeat(Math.round(b.rating))}
                </span>
                <span className="text-gray-500">({b.rating.toFixed(1)})</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
