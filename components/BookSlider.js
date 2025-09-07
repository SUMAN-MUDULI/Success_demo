import Marquee from "react-fast-marquee";

const books = [
  { id: 1, title: "Exam Crackers 2025", img: "https://successmantrr.com/backend/img/course/16321411841703840289.png" },
  { id: 2, title: "Smart Study Guide", img: "https://successmantrr.com/backend/img/course/18136170091703840311.png" },
  { id: 3, title: "Competitive Mastery", img: "https://successmantrr.com/backend/img/course/21007687821703840354.png" },
  { id: 4, title: "Scholar Success Pack", img: "https://successmantrr.com/backend/img/course/15177398631703850848.png" },
  { id: 5, title: "Focus & Win", img: "https://successmantrr.com/backend/img/course/9392038781703840406.png" },
  { id: 6, title: "Affiliate Marketing", img: "https://successmantrr.com/backend/img/course/20515898441703840424.png" },
  { id: 7, title: "Lead Generation", img: "https://successmantrr.com/backend/img/course/4980935531703840445.png" },
  { id: 8, title: "Canva Mastery", img: "https://successmantrr.com/backend/img/course/8509702511703840464.png" },
  { id: 9, title: "Public Speaking", img: "https://successmantrr.com/backend/img/course/3524789841703840479.png" },
  { id: 10, title: "Communication Skills", img: "https://successmantrr.com/backend/img/course/19460153541703840498.png" },
  { id: 11, title: "Spoken English", img: "https://successmantrr.com/backend/img/course/16209249611703840518.png" },
  { id: 12, title: "Instagram Mastery", img: "https://successmantrr.com/backend/img/course/10368749281703840538.png" },
  { id: 13, title: "Reels Mastery", img: "https://successmantrr.com/backend/img/course/11543411361703840561.png" },
  { id: 14, title: "Attraction Marketing", img: "https://successmantrr.com/backend/img/course/11798987431703840598.png" },
  { id: 15, title: "Facebook Ads Run", img: "https://successmantrr.com/backend/img/course/4982091051721771552.png" },
  { id: 16, title: "Email Marketing", img: "https://successmantrr.com/backend/img/course/3377646411721781640.png" },
  { id: 17, title: "Reselling Mastery", img: "https://successmantrr.com/backend/img/course/18923978501722774813.png" },
];

export default function BookSlider() {
  return (
    <section className=" bg-gradient-to-r from-blue-50 via-green-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <h3 className="text-2xl font-semibold text-center text-mantrrBlue mb-6">
          Top Selling Books
        </h3>

        {/* Scrolling Slider */}
        <Marquee pauseOnHover={true} gradient={false} speed={50} className="py-2">
          {books.concat(books).map((b, i) => (
            <div key={`${b.id}-${i}`} className="mx-4 w-88 flex-shrink-0">
              <div className="bg-white rounded-xl shadow-md overflow-hidden p-4 hover:shadow-lg transition">
                <img
                  src={b.img}
                  alt={b.title}
                  className="w-full h-40 object-contain"
                />
                <h4 className="mt-3 text-sm font-semibold text-gray-800 text-center">
                  {b.title}
                </h4>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
