'use client'

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CheckCircle, Video, MapPin, Share2, ArrowLeft } from 'lucide-react'
import VideoTask from './tasks/VideoTask'
import LocationTask from './tasks/LocationTask'
import SocialProofTask from './tasks/SocialProofTask'

export default function BountyProcess() {
  const { id } = useParams()
  const [bounty, setBounty] = useState(null)
  const [taskCompleted, setTaskCompleted] = useState(false)
  const [rewards, setRewards] = useState(0)
  const [points, setPoints] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchBounty = async () => {
      setIsLoading(true)
      console.log(`Mock: Fetching bounty details for ID ${id}`)
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      switch (id) {
        case '1':
          setBounty({
            id: 1,
            name: 'Watch Product Video',
            description: 'Watch our new product launch video to earn rewards and learn about our latest innovations.',
            taskType: 'video',
            videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
          })
          break
        case '2':
          setBounty({
            id: 2,
            name: 'Verify Your Location',
            description: 'Confirm your current location to unlock location-based rewards and personalized offers.',
            taskType: 'location',
          })
          break
        case '3':
          setBounty({
            id: 3,
            name: 'Share on Social Media',
            description: 'Spread the word about our campaign on your favorite social media platform and earn bonus points!',
            taskType: 'social',
          })
          break
        default:
          setBounty(null)
      }
      setIsLoading(false)
    }

    fetchBounty()
  }, [id])

  const handleTaskCompletion = () => {
    setTaskCompleted(true)
    console.log('Mock: Task completed')
    setRewards(prevRewards => prevRewards + 100)
    setPoints(prevPoints => prevPoints + 50)
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: bounty.name,
        text: bounty.description,
        url: window.location.href,
      })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error))
    } else {
      alert('Share feature is not supported in your browser.')
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    )
  }

  if (!bounty) return <p className="text-center text-white text-xl">Bounty not found.</p>

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <a href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-6">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Bounties
        </a>
        <div className="bg-black/20 backdrop-blur-lg rounded-xl p-6 shadow-xl border border-white/20 mb-8 transition-all duration-300 hover:bg-black/30">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            {bounty.name}
          </h1>
          <p className="text-gray-300 mb-6">{bounty.description}</p>
          
          {!taskCompleted ? (
            <div className="space-y-6">
              {bounty.taskType === 'video' && (
                <VideoTask onComplete={handleTaskCompletion} videoUrl={bounty.videoUrl} />
              )}
              {bounty.taskType === 'location' && (
                <LocationTask onComplete={handleTaskCompletion} />
              )}
              {bounty.taskType === 'social' && (
                <SocialProofTask onComplete={handleTaskCompletion} />
              )}
            </div>
          ) : (
            <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 flex items-center animate-fade-in">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
              <p className="text-green-300 font-semibold">Task Completed! Reward will be credited shortly.</p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-black/20 backdrop-blur-lg rounded-xl p-6 shadow-xl border border-white/20 transition-all duration-300 hover:bg-black/30">
            <h2 className="text-xl font-semibold mb-2 text-blue-300">Rewards Earned</h2>
            <p className="text-3xl font-bold">INR {rewards}</p>
          </div>
          <div className="bg-black/20 backdrop-blur-lg rounded-xl p-6 shadow-xl border border-white/20 transition-all duration-300 hover:bg-black/30">
            <h2 className="text-xl font-semibold mb-2 text-purple-300">Points Gained</h2>
            <p className="text-3xl font-bold">{points}</p>
          </div>
        </div>

        <button 
          onClick={handleShare}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 flex items-center justify-center"
        >
          <Share2 className="w-5 h-5 mr-2" />
          Share this Bounty
        </button>
      </div>
    </div>
  )
}