import { useState } from 'react'
import { X, Share2 } from 'lucide-react'


export default function BookModal({ book, onClose }){
const [flipped, setFlipped] = useState(false)
if(!book) return null


// Update WA number below or use env var
const WA_NUMBER = process.env.NEXT_PUBLIC_WA_NUMBER || '918000000000'
const whatsappLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Hi, I want to buy the book ${book.title} from Success Mantrr. Please share purchase details.`)}`


return (
<div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
<div className="w-full max-w-3xl">
<div className="bg-white rounded-2xl overflow-hidden shadow-xl">
<div className="flex items-start justify-between p-4 border-b">
<div className="flex items-center gap-3">
<img src={book.img} alt={book.title} className="w-16 h-20 object-contain"/>
<div>
<h3 className="text-lg font-bold text-mantrrBlue">{book.title}</h3>
<p className="text-sm text-gray-500">Rating: {book.rating} ⭐</p>
</div>
</div>
<div className="flex items-center gap-2">
<button onClick={() => setFlipped(!flipped)} className="px-3 py-1 border rounded text-sm">Flip</button>
<button onClick={onClose} className="p-2 rounded hover:bg-gray-100"><X/></button>
</div>
</div>


<div className="p-6 flip-container">
<div className={`flip-card ${flipped ? 'is-flipped' : ''}`}>
{/* FRONT */}
<div className="flip-front">
<p className="text-gray-700">
Complete coverage of syllabus, practice questions, and concise revision notes — perfect for quick preparation.
</p>


<ul className="mt-4 list-disc pl-5 text-sm text-gray-600">
<li>Clear explanations with examples</li>
<li>Full practice sets & previous year questions</li>
<li>Shortcuts & tricks for fast solving</li>
</ul>


<div className="mt-6 flex gap-3">
<a href={whatsappLink} target="_blank" className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg shadow">Buy on WhatsApp</a>
<button onClick={() => { navigator.clipboard.writeText(whatsappLink); alert('WhatsApp link copied') }} className="px-4 py-2 border rounded">Copy Link</button>
</div>
</div>


{/* BACK */}
<div className="flip-back mt-2">
<h4 className="font-semibold text-mantrrBlue">Reviews & Benefits</h4>
<div className="mt-3 text-sm text-gray-600">
<p>⭐ 4.3 — Rated by thousands of students for clarity and results.</p>
<p className="mt-2">Benefits: Boosts accuracy, saves time with curated notes, and includes mini-mock tests.</p>
</div>


<div className="mt-4">
<h5 className="font-medium">Student Comments</h5>
<div className="mt-2 text-sm text-gray-600 italic">“Helped me improve my score dramatically.” — Aashish</div>
<div className="mt-2 text-sm text-gray-600 italic">“Best revision guide for last-minute prep.” — Priya</div>
</div>


<div className="mt-6">
<a href={whatsappLink} target="_blank" className="inline-block bg-orange-500 text-white px-4 py-2 rounded-lg shadow">Ask to Buy</a>
</div>
</div>
</div>
</div>


</div>
</div>
</div>
)
}