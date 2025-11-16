import Header from "../components/Header";
import Footer from "../components/Footer";
import { Mail, Phone, MessageSquare, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(null);

  const WA_NUMBER = "918342991246";

  // validation
  const validate = () => {
    const e = {};
    const emailRx = /^\S+@\S+\.\S+$/;
    const phoneRx = /^(?:\+91)?[0-9]{10}$/;

    if (!form.name.trim()) e.name = "Full name is required";
    if (!emailRx.test(form.email)) e.email = "Enter valid email";
    if (!phoneRx.test(form.phone)) e.phone = "Enter 10-digit or +91 format";
    if (!form.message.trim()) e.message = "Message cannot be empty";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2500);
    return () => clearTimeout(t);
  }, [toast]);

  const submit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const text = `
📩 New Support Request
——————————————
👤 Name: ${form.name}
📧 Email: ${form.email}
📱 Phone: ${form.phone}

💬 Message: 
${form.message}
    `;

    setToast("Opening WhatsApp…");

    setTimeout(() => {
      window.open(
        `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`,
        "_blank"
      );
    }, 700);
  };

  return (
    <>
      <Header />

      {/* HERO */}
      <div className="relative bg-gradient-to-br from-purple-700 to-indigo-700 text-white pt-20 pb-28 overflow-hidden">
        {/* Animated Waves */}
        <div className="absolute inset-0">
          <svg className="absolute bottom-0 w-full " viewBox="0 0 1440 320">
            <path
              fill="rgba(255,255,255,0.12)"
              d="M0,192L80,176C160,160,320,128,480,144C640,160,800,224,960,218.7C1120,213,1280,139,1360,101.3L1440,64L1440,320L0,320Z"
            ></path>
          </svg>

          <svg className="absolute bottom-0 w-full " viewBox="0 0 1440 320">
            <path
              fill="rgba(255,255,255,0.18)"
              d="M0,256L80,240C160,224,320,192,480,176C640,160,800,160,960,176C1120,192,1280,224,1360,240L1440,256L1440,320L0,320Z"
            ></path>
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight animate-fadeIn">
            Get in Touch with{" "}
            <span className="text-yellow-300">Success Mantrr </span>
          </h1>
          <p className="mt-3 text-indigo-100 animate-slideUp">
            You Whether it’s about courses, packages or support – reach out
            anytime.
          </p>
        </div>
      </div>

      {/* MAIN */}
      <div className="max-w-6xl mx-auto px-4  -mt-16 relative z-20 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Form */}
          <form
            onSubmit={submit}
            className="md:col-span-2 bg-white/30 backdrop-blur-xl border border-white/30 rounded-2xl p-6 shadow-xl"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Send us a Message
            </h2>
            <p className="text-sm text-gray-700 mb-5">
              We usually reply in minutes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <input
                  id="fullName"
                  name="fullName"
                  className={`input ${errors.name && "ring-2 ring-red-400"}`}
                  placeholder="Full Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />

                {errors.name && <p className="err">{errors.name}</p>}
              </div>

              <div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={`input ${errors.email && "ring-2 ring-red-400"}`}
                  placeholder="Email Address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />

                {errors.email && <p className="err">{errors.email}</p>}
              </div>

              <div>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className={`input ${errors.phone && "ring-2 ring-red-400"}`}
                  placeholder="Phone Number (+91 or 10 digits)"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />

                {errors.phone && <p className="err">{errors.phone}</p>}
              </div>

              <div>
                <select
                  className="input rounded-xl"
                  value={form.prefer || "whatsapp"}
                  onChange={(e) => setForm({ ...form, prefer: e.target.value })}
                >
                  <option value="whatsapp">WhatsApp</option>
                  <option value="call">Call</option>
                  <option value="email">Email</option>
                </select>
              </div>
            </div>

            <div className="mt-4">
              <textarea
                id="message"
                name="message"
                rows="5"
                className={`input h-32 ${
                  errors.message && "ring-2 ring-red-400"
                }`}
                placeholder=" Write your message..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />

              {errors.message && <p className="err">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full mt-5 bg-purple-700 text-white py-3 rounded-xl font-semibold shadow hover:bg-purple-800 transition"
            >
              Send on WhatsApp
            </button>
          </form>

          {/* CONTACT CARDS */}
          <div className="space-y-6">
            <div className="backdrop-blur-md bg-white/25 p-6 rounded-2xl border border-white/30 shadow-lg animate-scaleIn">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-500 text-white flex items-center justify-center">
                  <MessageSquare size={26} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    WhatsApp Support
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Fastest replies in minutes
                  </p>
                  <a
                    href="https://wa.me/918342991246"
                    target="_blank"
                    className="text-green-600 font-medium text-sm inline-block mt-1"
                  >
                    Chat Now →
                  </a>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-md bg-white/25 p-6 rounded-2xl border border-white/30 shadow-lg animate-scaleIn">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500 text-white flex items-center justify-center">
                  <Phone size={26} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Call Support
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Speak directly with our team
                  </p>
                  <a
                    href="tel:+918342991246"
                    className="text-blue-600 font-medium text-sm inline-block mt-1"
                  >
                    Call Now →
                  </a>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-md bg-white/25 p-6 rounded-2xl border border-white/30 shadow-lg animate-scaleIn">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-600 text-white flex items-center justify-center">
                  <Mail size={26} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Email Support
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Best for long detailed help
                  </p>
                  <a
                    href="mailto:support@successmantrr.com"
                    className="text-purple-600 font-medium text-sm inline-block mt-1"
                  >
                    Email Now →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {/* Toast */}
      {toast && (
        <div className="toast">
          <span className="dot"></span> {toast}
          <button className="close" onClick={() => setToast(null)}>
            <X size={16} />
          </button>
        </div>
      )}
    </>
  );
}
