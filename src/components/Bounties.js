'use client'

import React, { useEffect, useState } from 'react'
import { ArrowRight, Clock, CheckCircle, XCircle } from 'lucide-react'

export default function Bounties() {
  const [activeBounties, setActiveBounties] = useState([])
  const [claimedBounties, setClaimedBounties] = useState([])
  const [expiredBounties, setExpiredBounties] = useState([])

  useEffect(() => {
    const fetchBounties = async () => {
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      setActiveBounties([
        { id: 1, name: 'Watch Product Video' },
        { id: 2, name: 'Verify Your Location' },
      ])
      setClaimedBounties([
        { id: 3, name: 'Complete Profile' },
      ])
      setExpiredBounties([
        { id: 4, name: 'Refer a Friend' },
      ])
    }

    fetchBounties()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text animate-gradient">
          Bounties
        </h1>

        <BountySection title="Active Bounties" bounties={activeBounties} icon={<Clock className="w-6 h-6 text-blue-400" />} />
        <BountySection title="Claimed Bounties" bounties={claimedBounties} icon={<CheckCircle className="w-6 h-6 text-green-400" />} />
        <BountySection title="Expired Bounties" bounties={expiredBounties} icon={<XCircle className="w-6 h-6 text-red-400" />} />
      </div>
    </div>
  )
}

function BountySection({ title, bounties, icon }) {
  return (
    <div className="bg-black/20 backdrop-blur-lg rounded-xl p-6 shadow-xl border border-white/20 mb-8 transition-all duration-300 hover:bg-black/30">
      <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text flex items-center">
        {icon}
        <span className="ml-2">{title}</span>
      </h2>
      {bounties.length > 0 ? (
        <ul className="space-y-4">
          {bounties.map((bounty) => (
            <li key={bounty.id}>
              <a 
                href={`/bounty/${bounty.id}`}
                className="group flex items-center justify-between bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-lg p-4 text-white border border-white/10 hover:border-white/20"
              >
                <span>{bounty.name}</span>
                <ArrowRight className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </li>
            //corrected
          ))}
        </ul>
      ) : (
        <p className="text-gray-400">No bounties available.</p>
      )}
    </div>
  )
}