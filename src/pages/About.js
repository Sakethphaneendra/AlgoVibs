import React from "react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      
      {/* Header Section */}
      <header className="py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
          👋 About This Project
        </h1>
        <p className="text-lg md:text-xl mt-3 text-gray-400">
          Practice DSA the smart way & level up your coding journey 🚀
        </p>
      </header>

      {/* About Content */}
      <main className="flex-1 px-6 md:px-20 lg:px-40 py-10">
        <div className="space-y-8 text-center">
          <p className="text-xl leading-relaxed text-gray-300">
            Welcome to the{" "}
            <span className="font-semibold text-pink-400">
              100 DSA Challenges
            </span>{" "}
            platform! This app is built to keep you consistent, motivated, and
            on track with mastering{" "}
            <span className="text-indigo-400 font-semibold">
              Data Structures & Algorithms
            </span>
            .
          </p>

          <div className="grid gap-6 md:grid-cols-3 mt-12">
            <div className="p-6 rounded-xl bg-gray-800 border border-gray-700 hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-indigo-400">💡 Track</h3>
              <p className="text-gray-300 mt-2">
                Stay on top of your daily coding grind & measure progress.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gray-800 border border-gray-700 hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-pink-400">⚡ Compete</h3>
              <p className="text-gray-300 mt-2">
                Challenge yourself daily & aim for the 1% coding club.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gray-800 border border-gray-700 hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-yellow-400">🌙 Themes</h3>
              <p className="text-gray-300 mt-2">
                Switch between Light & Dark mode for your coding vibs ✨
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 py-6 border-t border-gray-700 text-center text-sm text-gray-400">
        <span>
          ❤️ Made with passion by{" "}
          <a
            href="https://www.linkedin.com/in/sakethphaneendra/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-indigo-400 hover:text-pink-400 transition"
          >
            @SakethPhaneendra
          </a>
        </span>
      </footer>
    </div>
  );
}
