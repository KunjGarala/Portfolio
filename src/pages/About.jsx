import src from "../assets/kunjgarala.jpg";
import charusat from "../assets/charusat.jpeg";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-black to-purple-900 text-transparent bg-clip-text">
        About Me
      </h1>

      <div className="grid md:grid-cols-2 gap-12 place-items-center mb-16">
        <div className="text-center">
          <img
            src={src}
            alt="Kunj Garala"
            className="rounded-2xl max-h-96 shadow-lg"
          />
          <p className="pb-4 mt-4 font-sans font-semibold text-3xl md:text-4xl bg-gradient-to-r from-black to-purple-900 text-transparent bg-clip-text">
            Kunj Garala
          </p>
        </div>

        <div className="space-y-6">
          <p className="text-xl leading-relaxed">
            I’m Kunj Garala, a software developer with expertise in JavaScript
            and React.js. I am passionate about building engaging and
            user-friendly applications, as demonstrated by projects like my
            Spotify Clone, a web-based music player that allows users to
            seamlessly browse and play music. With a strong focus on frontend
            development, UI/UX, and interactive web experiences, I aim to push
            the boundaries of web applications through continuous learning and
            innovation.
          </p>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="pb-4 text-2xl md:text-3xl font-bold mb-8 text-center bg-gradient-to-r from-black to-purple-900 text-transparent bg-clip-text">
          Education Journey
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="bg-gradient-to-r from-black to-purple-900 h-20"></div>
            <div className="p-8">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
                <div className="w-28 h-28 -mt-20 relative hover:scale-105 transition-transform duration-300">
                  <img
                    src={charusat}
                    alt="CHARUSAT University"
                    className="absolute w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
                  />
                </div>
                <div className="text-center sm:text-left flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    CHARUSAT University
                  </h3>
                  <p className="text-lg font-medium text-purple-900 mb-2">
                    B.Tech in Computer Engineering
                  </p>
                  <p className="text-gray-600">2023 - 2027</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
