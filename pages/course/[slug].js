import { useRouter } from "next/router";
import coursesData from "../../data/courses.json";
import videosData from "../../data/videos.json";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { ArrowLeft } from "lucide-react";

export default function CoursePage() {
  const router = useRouter();
  const { slug } = router.query;

  const courses = coursesData.courses;
  const course = courses.find((c) => c.slug === slug);
  const courseVideos = videosData[slug]?.videos || [];

  // Auto-save current module
  const [current, setCurrent] = useState(0);

  // Load saved progress
  useEffect(() => {
    if (!slug) return;

    const savedProgress = localStorage.getItem(`progress-${slug}`);
    if (savedProgress !== null) {
      setCurrent(Number(savedProgress));
    } else {
      setCurrent(0);
    }
  }, [slug]);

  // Save progress every time "current" changes
  useEffect(() => {
    if (!slug) return;
    localStorage.setItem(`progress-${slug}`, current);
  }, [current, slug]);

  // BACK BUTTON
  const handleBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push("/courses");
    }
  };

  if (!router.isReady)
    return <p className="text-center mt-10">Loading...</p>;

  if (!course)
    return (
      <p className="text-center mt-10 text-red-500">Course not found!</p>
    );

  const video = courseVideos[current];

  return (
    <>
      <Header />

      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white p-3 md:p-6 max-w-7xl mx-auto">

        {/* BACK */}
        <div className="mb-4">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-purple-700 font-medium bg-purple-100 px-4 py-2 rounded-lg hover:bg-purple-200 transition"
          >
            <ArrowLeft size={20} /> Back
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-4">

          {/* VIDEO SECTION */}
          <div className="order-1 md:order-2 w-full bg-white rounded-xl shadow-md p-3 border border-purple-100 flex flex-col">

            <h3 className="text-md md:text-xl font-bold text-purple-700 mb-2">
              🎓 {video?.main_title || "Module"}
            </h3>

            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-sm">
              <img
                src={video?.url || "/placeholder.jpg"}
                alt={video?.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex justify-between mt-3 md:mt-4">
              <button
                disabled={current === 0}
                onClick={() => setCurrent(current - 1)}
                className="px-3 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 disabled:opacity-40 transition"
              >
                « Previous
              </button>

              <button
                disabled={current === courseVideos.length - 1}
                onClick={() => setCurrent(current + 1)}
                className="px-3 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 disabled:opacity-40 transition"
              >
                Next »
              </button>
            </div>
          </div>

          {/* PLAYLIST */}
          <div className="order-2 md:order-1 bg-white rounded-xl shadow-md w-full md:w-1/3 p-3 border border-purple-100">

            <h2 className="text-base md:text-lg font-semibold text-purple-700 mb-2">
              📚 {course.title} ({current + 1}/{courseVideos.length})
            </h2>

            <ul className="space-y-2 overflow-y-auto max-h-[70vh] scrollbar-thin scrollbar-thumb-purple-300 scrollbar-track-transparent">
              {courseVideos.map((v, i) => (
                <li
                  key={i}
                  onClick={() => {
                    setCurrent(i);
                    if (window.innerWidth < 768) {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                  className={`flex items-center justify-between cursor-pointer border p-2 rounded-md transition hover:bg-purple-50 ${
                    i === current
                      ? "bg-purple-100 border-purple-500"
                      : "border-gray-200"
                  }`}
                >
                  <span className="text-sm md:text-base font-medium text-gray-700">
                    🎬{course.title} {v.title}
                  </span>

                  <input
                    type="checkbox"
                    checked={i <= current}  // AUTO-SAVED COMPLETION
                    readOnly
                    className="accent-purple-600 w-4 h-4"
                  />
                </li>
              ))}
            </ul>

          </div>

        </div>
      </div>
    </>
  );
}
