import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ContentLoader from "react-content-loader";
import { Brain } from "lucide-react";
ChartJS.register(ArcElement, Tooltip, Legend);

const LeetCodeProgress = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://leetcode-api-faisalshohag.vercel.app/kunj_garala05")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (error)
    return (
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-2xl p-8 border border-gray-700 text-red-400">
        Failed to load LeetCode data
      </div>
    );

  if (isLoading)
    return (
      <div className="w-full h-[250px] md:h-[300px] flex items-center justify-center">
        <ContentLoader
          viewBox="0 0 600 250"
          height="100%"
          width="100%"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
          preserveAspectRatio="xMidYMid meet"
        >
          <rect x="20" y="20" rx="4" ry="4" width="200" height="20" />
          <circle cx="120" cy="120" r="70" />
          <circle cx="120" cy="120" r="40" fill="#f3f3f3" />
          <rect x="250" y="80" rx="4" ry="4" width="200" height="20" />
          <circle cx="260" cy="130" r="8" />
          <rect x="275" y="122" rx="3" ry="3" width="100" height="12" />
          <circle cx="260" cy="160" r="8" />
          <rect x="275" y="152" rx="3" ry="3" width="100" height="12" />
          <circle cx="260" cy="190" r="8" />
          <rect x="275" y="182" rx="3" ry="3" width="100" height="12" />
        </ContentLoader>
      </div>
    );

  const totalSolved = data?.totalSolved ?? 0;
  const easySolved = data?.easySolved ?? 0;
  const mediumSolved = data?.mediumSolved ?? 0;
  const hardSolved = data?.hardSolved ?? 0;

  const chartData = {
    labels: ["Easy", "Medium", "Hard"],
    datasets: [
      {
        data: [easySolved, mediumSolved, hardSolved],
        backgroundColor: ["#00b8a3", "#ffc01e", "#ff375f"],
        hoverBackgroundColor: ["#00a192", "#f0b400", "#ff1a47"],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-2xl p-8 border border-gray-700">
      <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
        <Brain className="text-blue-400" />
        My LeetCode Progress
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full h-64"
          >
            <Doughnut data={chartData} options={chartOptions} />
          </motion.div>
        </div>

        <div className="flex flex-col justify-center space-y-6">
          <div className="text-center md:text-left">
            <div className="text-5xl font-bold text-white mb-2">
              {totalSolved}
            </div>
            <p className="text-xl text-gray-300">Total Problems Solved</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
              <span className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-[#00b8a3]"></div>
                <span className="text-gray-300 text-lg">Easy</span>
              </span>
              <span className="text-white font-bold text-lg">{easySolved}</span>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
              <span className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-[#ffc01e]"></div>
                <span className="text-gray-300 text-lg">Medium</span>
              </span>
              <span className="text-white font-bold text-lg">{mediumSolved}</span>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
              <span className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-[#ff375f]"></div>
                <span className="text-gray-300 text-lg">Hard</span>
              </span>
              <span className="text-white font-bold text-lg">{hardSolved}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-6 space-x-8">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#00b8a3]"></div>
          <span className="text-gray-400">Easy</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ffc01e]"></div>
          <span className="text-gray-400">Medium</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff375f]"></div>
          <span className="text-gray-400">Hard</span>
        </div>
      </div>
    </div>
  );
};

export default LeetCodeProgress;