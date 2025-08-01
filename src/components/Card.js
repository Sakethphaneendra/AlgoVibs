  import React from "react";
  import { Link } from "react-router-dom";
  import { BookOpen, Timer, Award } from "lucide-react";

  export default function Card({ name, no, qno }) {
    let op = JSON.parse(localStorage.getItem("Checked" + `${no}`));
    let kk = 0;

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
          kk++;
        }
      }
    }

    let ans = op != null ? kk : 0;
    const progress = Math.round((ans * 100) / qno);

    // Difficulty
    let difficulty = "Easy";
    let color = "bg-green-500";
    if (qno > 8) {
      difficulty = "Hard";
      color = "bg-red-500";
    } else if (qno > 5) {
      difficulty = "Medium";
      color = "bg-yellow-500";
    }

    const estTime = `${Math.ceil(qno / 2)} hrs`;

    const descriptions = {
      "Array & String": "Efficiently manage and manipulate sequences of data.",
      Greedy: "Make optimal local choices to solve global problems.",
      "Dynamic Programming": "Break problems with overlapping subproblems.",
      "Binary Search": "Find elements fast in sorted data.",
      Heaps: "Retrieve min/max efficiently with priority queues.",
      Recursion: "Solve problems by calling smaller versions of themselves.",
      "Linked List": "Store sequential elements with flexible sizing.",
      "Binary Tree": "Organize data hierarchically for faster access.",
      BST: "Quick search, insert, and delete in sorted trees.",
      "Stack & Queue": "Use LIFO & FIFO structures for solving problems.",
      Backtracking: "Explore possibilities and backtrack when stuck.",
      Graphs: "Model networks with nodes and edges."
    };

    return (
      <Link to={name} className="w-[340px]">
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-6 hover:scale-105 hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] transition-all duration-300 h-[340px] flex flex-col justify-between border border-gray-700 relative overflow-hidden">
          
          {/* Decorative top bar */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

          {/* Title Section */}
          <div>
            <div className="flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-indigo-400" />
              <h2 className="text-xl font-bold text-white leading-snug">
                {name}
              </h2>
            </div>
            <p className="text-sm text-gray-400 mt-3 line-clamp-2">
              {descriptions[name] || "Master the essentials of this topic."}
            </p>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gray-700 my-4"></div>

          {/* Progress + Info */}
          <div>
            <div className="flex justify-between items-center">
              <span
                className={`px-3 py-1 text-xs font-medium rounded-full ${color}`}
              >
                {difficulty}
              </span>
              <div className="flex items-center gap-1 text-xs text-gray-400">
                <Timer className="w-4 h-4" />
                {estTime}
              </div>
            </div>

            <div className="mt-4">
              {ans === 0 ? (
                <p className="text-gray-500 italic text-sm">Not Started</p>
              ) : (
                <>
                  <div className="flex justify-between items-center text-xs mb-1">
                    <span className="text-gray-400">Progress</span>
                    <span className="font-semibold text-indigo-400">
                      {progress}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                    <div
                      className="h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full transition-all"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center mt-4 text-xs text-gray-400">
            <div className="flex items-center gap-1">
              <Award className="w-4 h-4 text-yellow-400" />
              <span>{qno} Qs</span>
            </div>
            {progress === 100 && (
              <span className="text-green-400 font-semibold">🎉 Completed</span>
            )}
          </div>
        </div>
      </Link>
    );
  }
