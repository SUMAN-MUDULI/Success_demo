export default function Footer(){
return (
<footer className="bg-gray-900 text-gray-300 mt-20">
<div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">
<div>
<img src="/logo.svg" alt="logo" className="w-12 h-12" />
<p className="mt-4 text-sm text-gray-400">Cultivating Skills, Transforming Lives – Success Mantrr: Your Partner In Personal And Professional Growth</p>
</div>


<div>
<h3 className="text-white font-semibold mb-3">Quick links</h3>
<ul className="space-y-2 text-sm">
<li><a href="#about" className="hover:text-white">About us</a></li>
<li><a href="#plan" className="hover:text-white">Plan</a></li>
<li><a href="#contact" className="hover:text-white">Contact Us</a></li>
<li><a href="#plan-browser" className="hover:text-white">Plan Browser</a></li>
<li><a href="#presentation-video" className="hover:text-white">Presentation Video</a></li>
</ul>
</div>


<div>
<h3 className="text-white font-semibold mb-3">Imp Links</h3>
<ul className="space-y-2 text-sm">
<li><a href="#privacy" className="hover:text-white">Privacy Policy</a></li>
<li><a href="#terms" className="hover:text-white">Terms & Conditions</a></li>
<li><a href="#refund" className="hover:text-white">Cancel & Refund Policy</a></li>
<li><a href="#login" className="hover:text-white">Login</a></li>
</ul>
</div>


<div>
<h3 className="text-white font-semibold mb-3">Our Address</h3>
<p className="text-sm">(+91) 8342991246</p>
<p className="text-sm">odisha, India</p>
<p className="text-sm mt-2"><a href="mailto:SmartSavingsbySuccessMantrr@gmail.com" className="hover:text-white">SmartSavingsbySuccessMantrr@gmail.com</a></p>
</div>
</div>


<div className="border-t border-gray-800 mt-10 py-6 text-center text-sm text-gray-500">© {new Date().getFullYear()} Success Mantrr. All rights reserved.</div>
</footer>
)
}