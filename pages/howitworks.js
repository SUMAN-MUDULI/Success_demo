import Header from "../components/Header";
import Footer from "../components/Footer";
import { PlayCircle, BookOpen, Activity } from "lucide-react";
import coursesData from "../data/courses.json";
import Link from "next/link";
import { useRouter } from "next/router";

export default function HowItWorks() {
  const router = useRouter();
  const courses = coursesData.courses; // important fix

  return (
    <div className="bg-gradient-to-b from-purple-50 to-white min-h-screen">
      <Header />

      <main className="py-10 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
        {/* Tabs */}
        <div className="flex justify-center items-center gap-12 border-b pb-3 mb-10">
          {/* Enrolled */}
          <button className="font-semibold text-purple-700 border-b-2 border-purple-700 pb-1 flex items-center gap-2">
            <BookOpen className="sm:hidden text-purple-700" size={22} />
            <span className="hidden sm:inline">
              Enrolled Courses ({courses.length})
            </span>
          </button>

          {/* Active */}
          <button
            onClick={() => router.push("/courses")}
            className="text-gray-500 hover:text-purple-600 transition flex items-center gap-2"
          >
            <Activity className="sm:hidden text-purple-600" size={22} />
            <span className="hidden sm:inline">
              Active Courses ({courses.length})
            </span>
          </button>
        </div>

        {/* Course Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <Link href={`/course/${course.slug}`} key={index}>
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden group relative text-center p-2 flex flex-col items-center justify-between border border-purple-100 hover:-translate-y-1">
                
                {/* Course Image */}
                <div className="relative w-full flex justify-center">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-72 object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Play Button */}
                <div className="mt-0 mb-2">
                  <div className="w-14 h-14 bg-white shadow-lg rounded-full flex items-center justify-center group-hover:bg-purple-100 transition">
                    <PlayCircle
                      size={60}
                      className="text-black opacity-90 group-hover:text-purple-700 transition"
                    />
                  </div>
                </div>

                {/* Course Title */}
                <h3 className="text-blue-800 font-bold text-lg mt-2">
                  {course.title}
                </h3>

                {/* Instructor Info */}
                <p className="text-sm text-gray-600 mt-1 flex items-center justify-center gap-1">
                  <span className="text-purple-700 font-bold text-lg">S</span> By{" "}
                  <span className="text-black font-medium">
                    Success Mantrr
                  </span>
                </p>

              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
