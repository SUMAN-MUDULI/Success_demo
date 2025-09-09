import Head from 'next/head'
import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BookSlider from '../components/BookSlider'
import { WhySuccessMantrr } from '../components/WhySuccessMantrr'
import { BookGrid } from '../components/BookGrid'
import BookModal from '../components/BookModal'


export default function Home(){
const [selectedBook, setSelectedBook] = useState(null)
return (
<div>
<Head>
<title>Smart Savings by Success Mantrr</title>
<meta name="description" content="Sell books & earn up to 90% commission — Student friendly affiliate platform" />
</Head>


<Header />


<main>
{/* HERO */}
<section id="home" className="bg-gradient-to-r from-blue-50 via-green-50 to-orange-50 py-20">
<div className="max-w-6xl mx-auto px-6 text-center">
<h1 className="text-4xl md:text-5xl font-extrabold text-mantrrBlue">Sell package & Earn <span className="text-green-600">Up to 90% Commission</span></h1>
<p className="mt-4 text-gray-700 max-w-2xl mx-auto">Recommend trusted package & courses. Beginner friendly — same-day payouts.</p>
<div className="mt-6 flex items-center justify-center gap-4">
<a href="https://wa.me/917684953285?text=Hi%20I%20want%20to%20start%20earning%20with%20Success%20Mantrr" target="_blank" className="bg-green-600 text-white px-6 py-3 rounded-lg shadow">Start Now</a>
<a href="https://youtu.be/o_4XYUFpCTk?si=DrF8jjTHmbjMdijM" className="border border-mantrrBlue text-mantrrBlue px-6 py-3 rounded-lg">Learn How It Works</a>
</div>
</div>
</section>


<BookSlider />
<WhySuccessMantrr />
<BookGrid onBookClick={setSelectedBook}   />
<BookModal book={selectedBook} onClose={() => setSelectedBook(null)} />
</main>
<section id="contact" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
          <p className="mt-4 text-gray-600">
            Reach us on WhatsApp for quick support and opportunities.
          </p>
          <a
            href="https://wa.me/917684953285?text=Hi%20I%20want%20to%20know%20more%20about%20SuccessMantrr"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700"
          >
            Message on WhatsApp
          </a>
        </div>
      </section>

<Footer />
</div>
)}