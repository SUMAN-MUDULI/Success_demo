import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Header />
      <main className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Success Mantrr is dedicated to helping students and learners earn money 
            by selling books and resources. With up to 90% referral commissions, 
            we empower individuals to achieve both financial and personal growth.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
