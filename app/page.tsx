"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import MobileNav from "@/components/mobile-nav"
import DesktopNav from "@/components/desktop-nav"
import { useState, useEffect } from "react"
import { LightBulbIcon, EyeIcon, AcademicCapIcon, CurrencyDollarIcon, BookOpenIcon, ChartBarIcon } from '@heroicons/react/24/solid'

export default function HomePage() {
  const [animatedStats, setAnimatedStats] = useState({
    invested: 0,
    policies: 0,
    educated: 0,
    communities: 0
  })
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Animate stats when they come into view
          animateStats()
        }
      })
    }, { threshold: 0.5 })

    const statsSection = document.getElementById('stats-section')
    if (statsSection) {
      observer.observe(statsSection)
    }

    return () => observer.disconnect()
  }, [isClient])

  const animateStats = () => {
    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    let currentStep = 0
    const interval = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      setAnimatedStats({
        invested: Math.floor(100 * progress),
        policies: Math.floor(10 * progress),
        educated: Math.floor(progress * 100),
        communities: Math.floor(progress * 100)
      })

      if (currentStep >= steps) {
        clearInterval(interval)
        setAnimatedStats({
          invested: 100,
          policies: 10,
          educated: 100,
          communities: 100
        })
      }
    }, stepDuration)
  }

  return (
    <div>
      {/* Navigation */}
      <MobileNav currentPage="/" />
      <DesktopNav currentPage="/" />

      {/* Hero Section */}
      <section className="bg-[#a8b5a0] pt-20 px-6 relative overflow-hidden">
        {/* SVG Background Shape */}
        <svg className="absolute left-0 top-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path fill="#e8e6d8" fillOpacity="0.4" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
        </svg>
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between py-20 gap-12">
          <div className="flex-1 max-w-lg text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight mb-4 animate-fade-in">
              Climate Action<br />
              Accelerator
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed animate-fade-in-delay">
              FundLink is a non-profit organization dedicated to tackling climate change and energy transition through action acceleration, advocacy, policy development, strategic planning, and awareness initiatives for a sustainable future.
            </p>
            <p className="text-base md:text-lg text-gray-600 mb-8 animate-fade-in-delay-2">
              RC. No.: 7155829
            </p>
            <a href="mailto:contact@fundlinkaid.org?subject=Interest in Joining FundLink Aid">
              <Button className="relative bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl focus:ring-4 focus:ring-[#a8b5a0]/50 animate-fade-in-delay-3 shadow-lg hover:shadow-green-200/60 overflow-hidden">
                <span className="relative z-10">JOIN US</span>
                <span className="absolute inset-0 rounded-lg pointer-events-none animate-glow" />
              </Button>
            </a>
          </div>
          <div className="flex-1 flex justify-center lg:justify-end w-full">
            <div className="relative w-full max-w-md lg:max-w-none lg:w-96 h-64 md:h-80 lg:h-96 group">
              <Image
                src="/placeholder.svg?height=400&width=400&text=Climate+Action"
                alt="Climate action and sustainable development"
                fill
                className="object-cover rounded-lg transition-transform duration-500 group-hover:scale-105 animate-bounce-slow"
                priority
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* SVG Wave Divider */}
      <div className="w-full overflow-hidden -mt-2" aria-hidden="true">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-12">
          <path d="M0,30 Q360,60 720,30 T1440,30 V60 H0 Z" fill="#e8e6d8" />
        </svg>
      </div>

      {/* Mission & Vision Section */}
      <section className="bg-[#e8e6d8] px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-12">Our Mission & Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer group">
              <LightBulbIcon className="h-10 w-10 text-[#a8b5a0] mb-4 mx-auto" />
              <h3 className="text-3xl font-semibold text-gray-800 mb-4 group-hover:text-[#a8b5a0] transition-colors duration-300">Mission</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To empower individuals, businesses, and governments to take action on climate change.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer group">
              <EyeIcon className="h-10 w-10 text-[#a8b5a0] mb-4 mx-auto" />
              <h3 className="text-3xl font-semibold text-gray-800 mb-4 group-hover:text-[#a8b5a0] transition-colors duration-300">Vision</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To build a world where climate change is addressed effectively and sustainably.
              </p>
            </div>
          </div>
          
          <p className="text-xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
            Together, we can create a cleaner and equitable future for all.
          </p>
        </div>
      </section>

      {/* Key Initiatives Section */}
      <section className="bg-white px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-800 mb-12 text-center">Key Initiatives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#f8f9fa] p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer group">
              <ChartBarIcon className="h-8 w-8 text-[#a8b5a0] mb-3 mx-auto" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-[#a8b5a0] transition-colors duration-300">Climate Change Policy Advocacy</h3>
              <p className="text-gray-700">
                Advocating for strong climate policies at local, national, and international levels.
              </p>
            </div>
            <div className="bg-[#f8f9fa] p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer group">
              <CurrencyDollarIcon className="h-8 w-8 text-[#a8b5a0] mb-3 mx-auto" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-[#a8b5a0] transition-colors duration-300">Climate Action Fund</h3>
              <p className="text-gray-700">
                Funding innovative climate solutions and sustainable development projects.
              </p>
            </div>
            <div className="bg-[#f8f9fa] p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer group">
              <BookOpenIcon className="h-8 w-8 text-[#a8b5a0] mb-3 mx-auto" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-[#a8b5a0] transition-colors duration-300">Climate Change Education Programs</h3>
              <p className="text-gray-700">
                Educating the public about climate change impacts and solutions.
              </p>
            </div>
            <div className="bg-[#f8f9fa] p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer group">
              <AcademicCapIcon className="h-8 w-8 text-[#a8b5a0] mb-3 mx-auto" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-[#a8b5a0] transition-colors duration-300">Carbon Credits</h3>
              <p className="text-gray-700">
                Implementing market-based mechanisms to reduce greenhouse gas emissions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics Section */}
      <section id="stats-section" className="bg-[#a8b5a0] px-6 py-20 relative overflow-hidden">
        {/* SVG Dots Pattern Overlay */}
        <svg className="absolute right-0 top-0 w-64 h-64 opacity-20 z-0" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" fill="#e8e6d8" />
            </pattern>
          </defs>
          <rect width="200" height="200" fill="url(#dots)" />
        </svg>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-16">Impact and Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <CurrencyDollarIcon className="h-10 w-10 text-[#a8b5a0] mb-3 mx-auto" />
              <h3 className="text-4xl font-bold text-gray-800 mb-2">
                {isClient ? `${animatedStats.invested}M+` : '100M+'}
              </h3>
              <p className="text-gray-700">Invested in climate solutions, energy transition and capacity building.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <ChartBarIcon className="h-10 w-10 text-[#a8b5a0] mb-3 mx-auto" />
              <h3 className="text-4xl font-bold text-gray-800 mb-2">
                {isClient ? `${animatedStats.policies}K+` : '10K+'}
              </h3>
              <p className="text-gray-700">Policies, Programs and Initiatives advocated for and implemented.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <BookOpenIcon className="h-10 w-10 text-[#a8b5a0] mb-3 mx-auto" />
              <h3 className="text-4xl font-bold text-gray-800 mb-2">Millions</h3>
              <p className="text-gray-700">Educated about climate change and sustainable practices.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <AcademicCapIcon className="h-10 w-10 text-[#a8b5a0] mb-3 mx-auto" />
              <h3 className="text-4xl font-bold text-gray-800 mb-2">Thousands</h3>
              <p className="text-gray-700">Communities impacted through our programs and initiatives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SVG Wave Divider */}
      <div className="w-full overflow-hidden -mb-2" aria-hidden="true">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-12">
          <path d="M0,30 Q360,0 720,30 T1440,30 V60 H0 Z" fill="#e8e6d8" />
        </svg>
      </div>

      {/* Get Involved Section */}
      <section className="bg-[#e8e6d8] px-6 py-28">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-10 tracking-tight">Get Involved</h2>
          <p className="text-xl md:text-2xl text-gray-700 mb-16 max-w-3xl mx-auto leading-relaxed font-medium">
            Join us in driving climate action. There are many ways to get involved, from policy sponsorship to partnership, donating, volunteering and advocating for change. <span className="text-[#a8b5a0] font-semibold">Together, we can make a difference.</span>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer group">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-[#a8b5a0] transition-colors duration-300">Policy Sponsorship</h3>
              <p className="text-gray-700">
                Support our policy development and advocacy initiatives.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer group">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-[#a8b5a0] transition-colors duration-300">Partnership</h3>
              <p className="text-gray-700">
                Collaborate with us on climate action projects and programs.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer group">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-[#a8b5a0] transition-colors duration-300">Volunteer</h3>
              <p className="text-gray-700">
                Contribute your time and expertise to our mission.
              </p>
            </div>
          </div>
          <div className="mt-28">
            <a href="mailto:contact@fundlinkaid.org?subject=Get Involved with FundLink">
              <Button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                Contact Us
              </Button>
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fadeIn 0.8s ease-out 0.2s both;
        }
        
        .animate-fade-in-delay-2 {
          animation: fadeIn 0.8s ease-out 0.4s both;
        }
        
        .animate-fade-in-delay-3 {
          animation: fadeIn 0.8s ease-out 0.6s both;
        }
        
        .animate-bounce-slow {
          animation: bounceSlow 3s ease-in-out infinite;
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 0 0 #a8b5a0; }
          50% { box-shadow: 0 0 16px 4px #a8b5a0; }
        }
        .animate-glow {
          animation: glow 2s infinite alternate;
        }
      `}</style>
    </div>
  )
}
