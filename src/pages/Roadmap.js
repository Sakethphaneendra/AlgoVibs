import React from "react";

export default function Roadmap() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      
      {/* Header Section */}
      <header className="py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
          🚀 DSA Roadmap
        </h1>
        <p className="text-lg md:text-xl mt-3 text-gray-400">
          Your step-by-step guide to cracking DSA like a pro 🔥
        </p>
      </header>

      {/* Roadmap Content */}
      <main className="flex-1 px-6 md:px-20 lg:px-40 py-10">
        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-semibold text-indigo-400 mb-3">📌 Step 1: Basics</h2>
            <p className="text-gray-300">
              Start with <span className="text-pink-400 font-semibold">Arrays</span>, 
              <span className="text-pink-400 font-semibold"> Strings</span>, and 
              <span className="text-pink-400 font-semibold"> Hashing</span>. These build the foundation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-indigo-400 mb-3">📌 Step 2: Intermediate</h2>
            <p className="text-gray-300">
              Move on to <span className="text-pink-400 font-semibold">Linked Lists</span>, 
              <span className="text-pink-400 font-semibold"> Stacks</span>, 
              <span className="text-pink-400 font-semibold"> Queues</span>, and 
              <span className="text-pink-400 font-semibold"> Recursion</span>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-indigo-400 mb-3">📌 Step 3: Advanced</h2>
            <p className="text-gray-300">
              Learn <span className="text-pink-400 font-semibold">Trees</span>, 
              <span className="text-pink-400 font-semibold"> Graphs</span>, 
              <span className="text-pink-400 font-semibold"> Dynamic Programming</span>, and 
              <span className="text-pink-400 font-semibold"> Backtracking</span>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-indigo-400 mb-3">📌 Step 4: Expert</h2>
            <p className="text-gray-300">
              Finish with <span className="text-pink-400 font-semibold">Greedy Algorithms</span>, 
              <span className="text-pink-400 font-semibold"> Heaps</span>, and 
              <span className="text-pink-400 font-semibold"> Advanced Graphs</span>.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 py-6 border-t border-gray-700 text-center text-sm text-gray-400">
        <span>
          🚀 Designed & Developed by{" "}
          <a
            href="https://www.linkedin.com/in/sakethphaneendra/"
            className="font-medium text-indigo-400 hover:text-pink-400 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            @SakethPhaneendra
          </a>
        </span>
      </footer>
    </div>
  );
}
