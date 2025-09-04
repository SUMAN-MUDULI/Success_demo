import Marquee from 'react-fast-marquee'


const books = [
{ id: 1, title: 'Exam Crackers 2025', img: '/books/book1.png' },
{ id: 2, title: 'Smart Study Guide', img: '/books/book2.png' },
{ id: 3, title: 'Competitive Mastery', img: '/books/book3.png' },
{ id: 4, title: 'Scholar Success Pack', img: '/books/book4.png' },
{ id: 5, title: 'Focus & Win', img: '/books/book5.png' },
]


export default function BookSlider(){
return (
<section className="py-10 bg-gradient-to-r from-blue-50 via-green-50 to-orange-50">
<div className="max-w-7xl mx-auto px-6">
<h3 className="text-2xl font-semibold text-center text-mantrrBlue mb-6">Top Selling Books</h3>
<Marquee pauseOnHover={true} gradient={false} speed={50} className="py-4">
{books.concat(books).map((b, i) => (
<div key={`${b.id}-${i}`} className="mx-4 w-48 flex-shrink-0">
<div className="bg-white rounded-xl shadow-md overflow-hidden p-4">
<img src={b.img} alt={b.title} className="w-full h-40 object-contain" />
<h4 className="mt-3 text-sm font-semibold text-gray-800 text-center">{b.title}</h4>
</div>
</div>
))}
</Marquee>
</div>
</section>
)
}