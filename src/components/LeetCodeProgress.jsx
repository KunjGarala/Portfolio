import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Doughnut } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import ContentLoader from 'react-content-loader'
ChartJS.register(ArcElement, Tooltip, Legend)

export default function LeetCodeProgress() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch("https://leetcode-stats-api.herokuapp.com/kunj_garala05")
      .then((response) => response.json())
      .then((data) => {
        setData(data)
        setIsLoading(false)
      })
      .catch((error) => {
        setError(error.message)
        setIsLoading(false)
      })
  }, [])


  
  if (error) return <div>Failed to load LeetCode data</div>
  if (isLoading) return (
    <div className="w-full h-[250px] md:h-[300px] flex items-center justify-center">
      <ContentLoader 
        viewBox="0 0 600 250" 
        height="100%"
        width="100%"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Title */}
        <rect x="20" y="20" rx="4" ry="4" width="200" height="20" /> 

        {/* Donut Chart Placeholder */}
        <circle cx="120" cy="120" r="70" />
        <circle cx="120" cy="120" r="40" fill="#f3f3f3" />

        {/* Total Problems Solved */}
        <rect x="250" y="80" rx="4" ry="4" width="200" height="20" />
        
        {/* Problem Stats */}
        <circle cx="260" cy="130" r="8" />
        <rect x="275" y="122" rx="3" ry="3" width="100" height="12" />

        <circle cx="260" cy="160" r="8" />
        <rect x="275" y="152" rx="3" ry="3" width="100" height="12" />

        <circle cx="260" cy="190" r="8" />
        <rect x="275" y="182" rx="3" ry="3" width="100" height="12" />
      </ContentLoader>
    </div>
  )

  const totalSolved = data?.totalSolved ?? 0
  const easySolved = data?.easySolved ?? 0
  const mediumSolved = data?.mediumSolved ?? 0
  const hardSolved = data?.hardSolved ?? 0

  const chartData = {
    labels: ["Easy", "Medium", "Hard"],
    datasets: [
      {
        data: [easySolved, mediumSolved, hardSolved],
        backgroundColor: ["#00b8a3", "#ffc01e", "#ff375f"],
        hoverBackgroundColor: ["#00a192", "#f0b400", "#ff1a47"],
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  }

  return (
    <div className="bg-card rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">My LeetCode Progress</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full h-64"
          >
            <Doughnut data={chartData} options={chartOptions} />
          </motion.div>
        </div>
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-4"
          >
            {totalSolved}
            <p className="md:inline md:ml-3">Total Problems Solved</p>
            
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg mb-2"
          >
          </motion.p>
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-2"
          >
            <li className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-[#00b8a3] mr-2"></span>
              Easy: {easySolved}
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-[#ffc01e] mr-2"></span>
              Medium: {mediumSolved}
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-[#ff375f] mr-2"></span>
              Hard: {hardSolved}
            </li>
          </motion.ul>
        </div>
      </div>
    </div>
  )
}

