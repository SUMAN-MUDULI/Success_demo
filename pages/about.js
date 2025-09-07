import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
export default function About() {
  return (
    <>
      <Header />
      <main className="py-20 bg-gray-50">
        <div className="bg-white text-gray-800">
      {/* About Section */}
      <section className="container mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src="/About_First_image.jpg"
            alt="Student"
            className="rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-blue-600 mb-4">
            About Success Mantrr
          </h2>
          <p className="text-lg font-semibold text-gray-700 mb-2">
            Unleashing Your Potential Through Learning
          </p>
          <p className="text-gray-600 mb-4">
            Welcome to Success Mantrr, your gateway to unlocking a world of
            knowledge and personal growth. We believe that every individual
            possesses untapped potential, waiting to be unleashed through
            continuous learning and skill development.
          </p>

          <h3 className="text-xl font-bold text-blue-500 mb-2">Our Mission</h3>
          <p className="text-gray-600 mb-4">
            At Success Mantrr, our mission is to empower individuals from all
            walks of life to acquire valuable skills that pave the way for
            personal and professional success.
          </p>

          <h3 className="text-xl font-bold text-blue-500 mb-2">
            Join Us in Your Journey to Success
          </h3>
          <p className="text-gray-600">
            Whether you’re aiming to climb the corporate ladder, start your own
            business, or simply expand your horizons, our courses will equip you
            with the skills you need to achieve your dreams.
          </p>
        </motion.div>
      </section>

      {/* Vision Section */}
      <section className="bg-blue-50 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">
            Long-term Vision and Trajectory
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="flex justify-center"
            >
              <img
                src="/About_Second_image.webp"
                alt="Team"
                className="rounded-full shadow-xl border-8 border-white"
              />
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              {/* Mission */}
              <div>
                <h3 className="text-2xl font-semibold text-blue-500 mb-2">
                  Mission
                </h3>
                <p className="text-gray-600">
                  Bringing emerging leaders and experienced teachers on one
                  platform to generate productive results and create a win-win
                  situation for all.
                </p>
              </div>

              {/* Vision */}
              <div>
                <h3 className="text-2xl font-semibold text-blue-500 mb-2">
                  Vision
                </h3>
                <p className="text-gray-600">
                  Success Mantrr was founded with the vision to provide online
                  education and knowledge across industries that are dominating
                  the professional industry.
                </p>
              </div>

              {/* Values */}
              <div>
                <h3 className="text-2xl font-semibold text-blue-500 mb-2">
                  Values
                </h3>
                <p className="text-gray-600">
                  Success Mantrr envisions making a transformative change in the
                  lives of students through world-class faculty and interactive
                  sessions.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
      </main>
      <Footer />
    </>
  );
}
