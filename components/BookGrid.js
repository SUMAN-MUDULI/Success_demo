const bookList = [
{ id: 1, title: 'Exam Crackers 2025', img: '/books/book1.png', rating: 4.2 },
{ id: 2, title: 'Smart Study Guide', img: '/books/book2.png', rating: 4.1 },
{ id: 3, title: 'Competitive Mastery', img: '/books/book3.png', rating: 4.5 },
{ id: 4, title: 'Scholar Success Pack', img: '/books/book4.png', rating: 4.0 },
{ id: 5, title: 'Focus & Win', img: '/books/book5.png', rating: 4.3 },
]


export function BookGrid({ onBookClick }){
return (
<section className="py-16 bg-gray-50">
<div className="max-w-7xl mx-auto px-6">
<h3 className="text-3xl font-bold text-center text-mantrrBlue mb-8">Explore Books</h3>
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
{bookList.map(b => (
<div key={b.id} tabIndex={0} role="button" onClick={() => onBookClick(b)} onKeyDown={(e)=>{ if(e.key==='Enter') onBookClick(b)}} className="bg-white rounded-xl p-4 shadow hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition cursor-pointer card-focus">
<div className="h-40 flex items-center justify-center">
{b.img ? <img src={b.img} alt={b.title} className="object-contain h-full"/> : <div className="img-placeholder">No Image</div>}
</div>
<h4 className="mt-3 text-sm font-semibold text-gray-800 text-center">{b.title}</h4>
<div className="mt-2 flex items-center justify-center gap-2 text-sm text-yellow-500">{'⭐'.repeat(Math.round(b.rating))} <span className="text-gray-500 ml-2">({b.rating})</span></div>
</div>
))}
</div>
</div>
</section>
)
}