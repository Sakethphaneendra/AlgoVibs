import React from "react";
import Card from "./Card.js";

export default function Lister({
  Checked1,
  Checked2,
  Checked3,
  Checked4,
  Checked5,
  Checked6,
  Checked7,
  Checked8,
  Checked9,
  Checked10,
  Checked11,
  Checked12,
  count,
  setcount,
  isDark, // <-- pass this prop from parent to toggle dark/light
}) {
  let counter = 0;
  for (let no = 0; no <= 12; no++) {
    let op = JSON.parse(localStorage.getItem("Checked" + `${no}`));
    if (op != null) {
      op = [...new Set(op)];
      for (let i = 0; i < op.length; i++) {
        if (
          (op[i] !== "," &&
            op[i] !== "/" &&
            op[i] !== '"' &&
            op[i] !== "[" &&
            op[i] !== "]" &&
            (op[i] < "a" || op[i] > "z") &&
            op[i] !== "\\" &&
            op[i] !== "+") ||
          op.length === 3
        ) {
          counter++;
        }
      }
    }
  }
  setcount(counter);

  const progress = Math.min(Math.round((count * 100) / 100), 100);

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-300 ${
        isDark ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Header */}
      <header className="py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          🏆 100 DSA Challenges
        </h1>
        <p
          className={`text-lg md:text-xl mt-3 font-medium ${
            isDark ? "text-gray-400" : "text-gray-500"
          }`}
        >
          Dream Big. Code Smart. Join the 1% Club ⚡👑
        </p>
      </header>

      {/* Progress Bar */}
      <div className="flex justify-center px-6">
        <div
          className={`w-full max-w-2xl rounded-xl h-7 shadow-inner ${
            isDark ? "bg-gray-700" : "bg-gray-200"
          }`}
        >
          <div
            className="h-7 rounded-xl bg-indigo-500 transition-all duration-500 ease-in-out flex items-center justify-end pr-3"
            style={{ width: `${progress}%` }}
          >
            <span className="text-x font-semibold text-white">
              {progress}%
            </span>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <main className="flex flex-wrap justify-center gap-6 mt-12 px-6">
       <Card qno={23} no={"12"} ans={Checked12} Checked={Checked12} name="Array and String" />
        <Card qno={5} no={"1"} ans={Checked1}  Checked={Checked1} name="Greedy" />
        <Card qno={13} no={"2"} ans={Checked2} Checked={Checked2} name="Dp" />
        <Card qno={7} no={"3"} ans={Checked3}  Checked={Checked3} name="Binary search" />
        <Card qno={5} no={"4"} ans={Checked12} Checked={Checked4} name="Heaps" />
        <Card qno={6} no={"5"} ans={Checked12} Checked={Checked5} name="Recursion" />
        <Card qno={8} no={"6"} ans={Checked12} Checked={Checked6} name="Linked List" />
        <Card qno={8} no={"7"} ans={Checked12} Checked={Checked7} name="Binary Tree" />
        <Card qno={6} no={"8"} ans={Checked12} Checked={Checked8} name="Binary Search Tree" />
        <Card qno={7} no={"9"}  ans={Checked12} Checked={Checked9} name="Stack and Queue" />
        <Card qno={6} no={"10"} ans={Checked12}  Checked={Checked10} name="Backtracking" />
        <Card qno={6} no={"11"} ans={Checked12}  Checked={Checked11} name="Graphs" />
      </main>

      {/* Footer */}
      <footer
        className={`mt-20 py-6 border-t text-center text-sm transition-colors duration-300 ${
          isDark
            ? "bg-gray-900 border-gray-700 text-gray-400"
            : "bg-white border-gray-200 text-gray-500"
        }`}
      >
        <span>
          🚀 Designed & Developed by{" "}
          <a
            href="https://www.linkedin.com/in/sakethphaneendra/"
            className={`font-medium transition-colors ${
              isDark
                ? "text-indigo-400 hover:text-pink-400"
                : "text-indigo-600 hover:text-pink-600"
            }`}
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
