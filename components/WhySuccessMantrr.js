export function WhySuccessMantrr() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-mantrrBlue">
          Why Success Mantrr?
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          Success Mantrr empowers students to build income streams by simply
          recommending books & courses. With{" "}
          <span className="font-semibold text-green-600">up to 90% commissions</span>,{" "}
          <span className="font-semibold text-mantrrBlue">same-day payouts</span>, 
          and beginner-friendly tools, it’s the easiest way for learners to
          earn while growing knowledge.
        </p>

        {/* Features Grid */}
        <div className="mt-10 grid sm:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition">
            <h4 className="font-semibold text-green-600">High Commissions</h4>
            <p className="mt-2 text-sm text-gray-600">
              Earn up to 90% when your referral purchases.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition">
            <h4 className="font-semibold text-mantrrBlue">Same-day Payouts</h4>
            <p className="mt-2 text-sm text-gray-600">
              Fast transfers keep your earnings liquid.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition">
            <h4 className="font-semibold text-orange-500">Beginner Friendly</h4>
            <p className="mt-2 text-sm text-gray-600">
              Share links on WhatsApp, Instagram or your page — no technical
              skills needed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
