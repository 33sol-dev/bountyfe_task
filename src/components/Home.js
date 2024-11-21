'use client'

import { useEffect, useState } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { DollarSign, Award, ArrowRight } from 'lucide-react'

export default function Home() {
  const [rewards, setRewards] = useState(0)
  const [points, setPoints] = useState(0)
  const [activeBounties, setActiveBounties] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 3000))
      console.log('Mock: Fetching user data')
      setRewards(1000)
      setPoints(500)
      setActiveBounties([
        { id: 1, name: 'Watch Product Video' },
        { id: 2, name: 'Verify Your Location' },
        { id: 3, name: 'Share on Social Media' },
      ])
      setIsLoading(false)
    }

    fetchData()
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-400  text-transparent bg-clip-text">
          <Typewriter
            words={['Hunt Bounty']}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text animate-gradient">
          Welcome to Bounty App
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-black/20 backdrop-blur-lg rounded-xl p-6 shadow-xl border border-white/20 transition-all duration-300 hover:bg-black/30 hover:border-blue-400/50">
            <div className="flex items-center mb-2">
              <DollarSign className="w-6 h-6" />
              <h2 className="text-xl font-semibold ml-2 text-blue-300">Total Rewards Earned</h2>
            </div>
            <p className="text-3xl font-bold">INR {rewards}</p>
          </div>
          <div className="bg-black/20 backdrop-blur-lg rounded-xl p-6 shadow-xl border border-white/20 transition-all duration-300 hover:bg-black/30 hover:border-purple-400/50">
            <div className="flex items-center mb-2">
              <Award className="w-6 h-6" />
              <h2 className="text-xl font-semibold ml-2 text-purple-300">Bounty Points</h2>
            </div>
            <p className="text-3xl font-bold">{points}</p>
          </div>
        </div>
        
        <div className="bg-black/20 backdrop-blur-lg rounded-xl p-6 shadow-xl border border-white/20 mb-8 transition-all duration-300 hover:bg-black/30">
          <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            Active Campaigns
          </h2>
          <ul className="space-y-4">
            {activeBounties.map((bounty) => (
              <li key={bounty.id}>
                <a 
                  href={`/bounty/${bounty.id}`} 
                  className="group flex items-center justify-between bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-lg p-4 text-white border border-white/10 hover:border-white/20"
                >
                  <span>{bounty.name}</span>
                  <ArrowRight className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-black/20 backdrop-blur-lg rounded-xl p-6 shadow-xl border border-white/20 transition-all duration-300 hover:bg-black/30">
          <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
            Install App
          </h2>
          <button 
            className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
            onClick={() => alert('App installation initiated!')}
          >
            Install Now
          </button>
        </div>
      </div>
    </div>
  )
}