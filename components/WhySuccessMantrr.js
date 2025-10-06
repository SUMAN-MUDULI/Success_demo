import { useEffect, useRef, useState } from "react";

export function WhySuccessMantrr() {
  const [fullscreen, setFullscreen] = useState(false);
  const playerRef = useRef(null);

  useEffect(() => {
    // Load YouTube API only once
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    }

    // Initialize player once API is ready
    const initPlayer = () => {
      if (!playerRef.current) {
        playerRef.current = new window.YT.Player("yt-player", {
          videoId: "o_4XYUFpCTk",
          playerVars: {
            autoplay: 0, // <-- Changed: Do NOT auto-play for better UX
            mute: 0,
            controls: 1, // <-- Show controls so user can play manually
            loop: 1,
            playlist: "o_4XYUFpCTk",
            rel: 0,
            modestbranding: 1,
          },
        });
      }
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      window.onYouTubeIframeAPIReady = initPlayer;
    }

    // ---------- SCROLL HANDLER FIX ----------
    // Pause video immediately on scroll
    const handleScroll = () => {
      if (playerRef.current && playerRef.current.pauseVideo) {
        playerRef.current.pauseVideo(); // <-- Immediately stop video on any scroll
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="py-16 bg-white relative">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-mantrrBlue">Why Success Mantrr?</h2>
        <p className="mt-4 text-gray-600 text-lg">
          Success Mantrr empowers students to build income streams by recommending
          books & courses. With{" "}
          <span className="font-semibold text-green-600">up to 90% commissions</span>,{" "}
          <span className="font-semibold text-mantrrBlue">same-day payouts</span>, and
          beginner-friendly tools, it’s the easiest way for learners to earn while growing
          knowledge.
        </p>
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
              No technical skills needed — share links easily.
            </p>
          </div>
        </div>

        <div className="mt-12 relative">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Watch Our Presentation
          </h3>

          <div
            className={`${
              fullscreen
                ? "fixed inset-0 z-50 bg-black flex items-center justify-center p-4"
                : "relative w-full pb-[56.25%] rounded-xl overflow-hidden shadow-lg"
            } transition-all duration-300`}
          >
            {/* Player container */}
            <div
              id="yt-player"
              className={fullscreen ? "w-full h-full" : "absolute top-0 left-0 w-full h-full"}
            ></div>

            {/* Expand / Close Button */}
            <button
              className={`absolute ${
                fullscreen ? "top-4 right-4" : "top-2 right-2"
              } bg-white bg-opacity-80 rounded p-2 shadow-lg z-50`}
              onClick={() => {
                setFullscreen(!fullscreen);
                // Play video when user clicks fullscreen
                if (playerRef.current && playerRef.current.playVideo) {
                  playerRef.current.playVideo(); // <-- Play only when user clicks
                }
              }}
            >
              {fullscreen ? "✕" : "[Full Screen]"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
