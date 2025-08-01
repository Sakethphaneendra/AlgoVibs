import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, Circle, Sparkles } from "lucide-react";

export default function Questions({
  no,
  name,
  qlist,
  Checked,
  setChecked,
  qstate,
  setqstate,
  mode,
}) {
  useEffect(() => {
    let strs = localStorage.getItem("Checked" + `${no}`);
    if (strs == null) return;
    let item2 = [];

    for (let i = 0; i < strs.length; i++) {
      if (strs[i] === "+") {
        item2.push(strs[i] + strs[i + 1] + strs[i + 2]);
        i += 3;
      } else if (
        strs[i] !== "," &&
        strs[i] !== "/" &&
        strs[i] !== '"' &&
        strs[i] !== "[" &&
        strs[i] !== "]" &&
        (strs[i] < "a" || strs[i] > "z") &&
        strs[i] !== "\\" &&
        strs[i] !== "+" &&
        strs[i] !== "0"
      ) {
        item2.push(strs[i]);
      }
    }

    setChecked(item2);
    localStorage.setItem("Checked" + `${no}`, JSON.stringify(item2));
  }, []);

  const handlechange = (id) => {
    if (checkID(id)) {
      const newList = Checked.filter((idt) => idt !== id);
      setChecked(newList);
      localStorage.setItem("Checked" + `${no}`, JSON.stringify(newList));
    } else {
      setChecked([...Checked, id]);
      localStorage.setItem("Checked" + `${no}`, JSON.stringify([...Checked, id]));
    }
  };

  const checkID = (ele) => Checked?.includes(ele);

  const handleID = (str) => {
    let ans = str.split("");
    ans.reverse();
    ans.pop();
    ans.reverse();
    ans.join("");
    return ans;
  };

  const isDark = mode === "dark";

  return (
    <div
      className={`min-h-screen flex flex-col justify-between px-6 py-10 transition-colors duration-300 ${
        isDark ? "bg-gray-900 text-gray-100" : "bg-white text-gray-800"
      }`}
    >
      {/* Header */}
      <div>
        <div className="flex justify-center items-center gap-3 mb-10">
          <Sparkles
            className={`w-8 h-8 ${
              isDark ? "text-indigo-400" : "text-indigo-600"
            } animate-pulse`}
          />
          <h1
            className={`text-3xl md:text-4xl font-bold tracking-wide ${
              isDark ? "text-indigo-300" : "text-indigo-700"
            }`}
          >
            {name} Problems
          </h1>
        </div>

        {/* Breadcrumb */}
        <div
          className={`flex justify-center text-sm mb-6 ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          <Link
            className={`hover:underline ${
              isDark ? "hover:text-indigo-400" : "hover:text-indigo-600"
            }`}
            to="/"
          >
            Topics
          </Link>
          <span className="mx-2">/</span>
          <span
            className={isDark ? "text-gray-300" : "text-gray-800 font-medium"}
          >
            {name}
          </span>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table
            className={`w-full max-w-5xl mx-auto border rounded-lg text-sm md:text-base transition-all ${
              isDark ? "border-gray-700" : "border-gray-300"
            }`}
          >
            <thead
              className={`text-left uppercase text-xs font-semibold ${
                isDark
                  ? "bg-gray-800 text-indigo-300"
                  : "bg-gray-100 text-indigo-700"
              }`}
            >
              <tr>
                <th className="px-4 py-3">ID</th>
                <th className="px-4 py-3">Question</th>
                <th className="px-4 py-3 text-center">Status</th>
                <th className="px-4 py-3 text-center">Done</th>
              </tr>
            </thead>
            <tbody>
  {qlist.map((ele, idx) => (
    <tr
      key={idx}
      className={`transition-colors ${
        checkID(ele.ID)
          ? isDark
            ? "bg-green-900 hover:bg-green-800"
            : "bg-green-100 hover:bg-green-200"
          : idx % 2 === 0
          ? isDark
            ? "bg-gray-900 hover:bg-gray-800"
            : "bg-white hover:bg-gray-50"
          : isDark
          ? "bg-gray-800 hover:bg-gray-700"
          : "bg-gray-50 hover:bg-gray-100"
      }`}
    >
      <td
        className={`px-4 py-3 font-medium text-center ${
          isDark ? "text-white" : "text-gray-800"
        }`}
      >
        {ele.ID[0] === "+" ? handleID(ele.ID) : ele.ID}
      </td>
      <td
        className={`px-4 py-3 ${
          isDark ? "text-white" : "text-gray-800"
        }`}
      >
        <Link
          target="_blank"
          to={ele.link}
          className={`font-medium ${
            isDark
              ? "text-indigo-300 hover:text-pink-400"
              : "text-indigo-700 hover:text-pink-600"
          } transition-colors`}
        >
          {ele.Q}
        </Link>
      </td>
      <td
        className={`px-4 py-3 text-center ${
          isDark ? "text-white" : "text-gray-800"
        }`}
      >
        {checkID(ele.ID) ? (
          <CheckCircle
            className={`w-5 h-5 mx-auto ${
              isDark ? "text-green-400" : "text-green-600"
            }`}
          />
        ) : (
          <Circle
            className={`w-5 h-5 mx-auto ${
              isDark ? "text-gray-400" : "text-gray-500"
            }`}
          />
        )}
      </td>
      <td
        className={`px-4 py-3 text-center ${
          isDark ? "text-white" : "text-gray-800"
        }`}
      >
        <input
          type="checkbox"
          onChange={() => handlechange(ele.ID)}
          checked={checkID(ele.ID)}
          className={`w-4 h-4 cursor-pointer ${
            isDark ? "accent-indigo-500" : "accent-indigo-600"
          }`}
        />
      </td>
    </tr>
  ))}
</tbody>

          </table>
        </div>
      </div>

      {/* Footer */}
      <footer
        className={`mt-20 py-6 border-t text-center text-sm transition-colors ${
          isDark
            ? "bg-gray-900 border-gray-700 text-gray-400"
            : "bg-gray-50 border-gray-200 text-gray-500"
        }`}
      >
        <span>
          🚀 Designed & Developed by{" "}
          <a
            href="https://www.linkedin.com/in/sakethphaneendra/"
            className={`font-medium transition-colors ${
              isDark ? "text-indigo-400 hover:text-pink-400" : "text-indigo-600 hover:text-pink-600"
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
