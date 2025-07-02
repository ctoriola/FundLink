"use client"
import Image from "next/image"
import Link from "next/link"
import MobileNav from "@/components/mobile-nav"
import DesktopNav from "@/components/desktop-nav"
import { useState, useEffect } from "react"
import { LightBulbIcon, EyeIcon, DocumentTextIcon, UsersIcon, AcademicCapIcon } from '@heroicons/react/24/solid'

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('mission')
  const [isVisible, setIsVisible] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <MobileNav currentPage="/about" />
      <DesktopNav currentPage="/about" />

      {/* About Hero */}
      <section className="bg-[#e8e6d8] pt-20 px-6 py-20 relative overflow-hidden">
        {/* SVG Background Shape */}
        <svg className="absolute left-0 top-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path fill="#a8b5a0" fillOpacity="0.15" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
        </svg>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <h1 className={`text-4xl md:text-6xl font-bold text-gray-800 transition-all duration-1000 ${isClient && isVisible ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0'}`}>
                About
                <br />
                FundLink
              </h1>
              <div className={`space-y-6 text-gray-700 leading-relaxed text-lg transition-all duration-1000 delay-300 ${isClient && isVisible ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0'}`}>
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Who We Are</h2>
                <p>
                  FundLink is a dynamic team of experts in climate change, finance, policy, and strategy. We're passionate about creating a sustainable future for all. FundLink Aid International was founded two years ago by a group of development and climate enthusiasts who recognized the need for a bridge organization dedicated to accelerating impact at sub-national levels across African communities.
                </p>
                <p>
                  We are growing into a thriving nonprofit, serving institutions, philanthropies and governments.
                </p>
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">What We Do</h2>
                <p>
                  With an expertise in environmental policy, sustainability, and financial modeling, we work with governments, businesses, and communities to develop impactful solutions for a more sustainable future.
                </p>
              </div>
            </div>
            <div className={`relative h-96 lg:h-full transition-all duration-1000 delay-500 ${isClient && isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="group">
                <Image
                  src="/placeholder.svg?height=600&width=500&text=About+FundLink"
                  alt="About FundLink Aid International"
                  fill
                  className="object-cover rounded-lg transition-transform duration-500 group-hover:scale-105 animate-bounce-slow"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SVG Wave Divider */}
      <div className="w-full overflow-hidden -mt-2" aria-hidden="true">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-12">
          <path d="M0,30 Q360,60 720,30 T1440,30 V60 H0 Z" fill="#fff" />
        </svg>
      </div>

      {/* Mission & Vision */}
      <section className="bg-white px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-800 mb-12 text-center">Our Mission and Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div 
              className={`bg-[#a8b5a0] p-12 rounded-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer group ${isClient && activeTab === 'mission' ? 'ring-4 ring-[#a8b5a0] ring-opacity-50' : ''}`}
              onClick={() => setActiveTab('mission')}
            >
              <LightBulbIcon className="h-10 w-10 text-white mb-4 mx-auto" />
              <h3 className="text-4xl font-bold text-gray-800 mb-6 group-hover:text-white transition-colors duration-300">Mission</h3>
              <p className="text-gray-700 text-lg leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                To empower individuals, businesses, and governments to take action on climate change.
              </p>
            </div>
            <div 
              className={`bg-[#e8e6d8] p-12 rounded-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer group ${isClient && activeTab === 'vision' ? 'ring-4 ring-[#e8e6d8] ring-opacity-50' : ''}`}
              onClick={() => setActiveTab('vision')}
            >
              <EyeIcon className="h-10 w-10 text-[#a8b5a0] mb-4 mx-auto" />
              <h3 className="text-4xl font-bold text-gray-800 mb-6 group-hover:text-gray-700 transition-colors duration-300">Vision</h3>
              <p className="text-gray-700 text-lg leading-relaxed group-hover:text-gray-600 transition-colors duration-300">
                To build a world where climate change is addressed effectively and sustainably.
              </p>
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

      {/* Thought Leadership */}
      <section className="bg-[#e8e6d8] px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-800 mb-16 text-center">Thought Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer group">
              <LightBulbIcon className="h-8 w-8 text-[#a8b5a0] mb-3 mx-auto" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-[#a8b5a0] transition-colors duration-300">Research and Analysis</h3>
              <p className="text-gray-700">
                Conducting cutting-edge research on climate change solutions and sustainable development practices.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer group">
              <DocumentTextIcon className="h-8 w-8 text-[#a8b5a0] mb-3 mx-auto" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-[#a8b5a0] transition-colors duration-300">Publications and Reports</h3>
              <p className="text-gray-700">
                Publishing comprehensive reports and articles on climate change issues and policy recommendations.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer group">
              <UsersIcon className="h-8 w-8 text-[#a8b5a0] mb-3 mx-auto" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-[#a8b5a0] transition-colors duration-300">Conferences and Events</h3>
              <p className="text-gray-700">
                Hosting and participating in climate change conferences, workshops, and knowledge-sharing events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SVG Wave Divider */}
      <div className="w-full overflow-hidden -mt-2" aria-hidden="true">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-12">
          <path d="M0,30 Q360,60 720,30 T1440,30 V60 H0 Z" fill="#fff" />
        </svg>
      </div>

      {/* Partnerships and Collaborations */}
      <section className="bg-white px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-800 mb-16 text-center">Partnerships and Collaborations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#f8f9fa] p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer group">
              <AcademicCapIcon className="h-8 w-8 text-[#a8b5a0] mb-3 mx-auto" />
              <h3 className="text-3xl font-bold text-gray-800 mb-4 group-hover:text-[#a8b5a0] transition-colors duration-300">1</h3>
              <h4 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-[#a8b5a0] transition-colors duration-300">Governments</h4>
              <p className="text-gray-700">
                Collaborating with government ministries, departments and agencies on climate change and energy transition initiatives.
              </p>
            </div>
            <div className="bg-[#f8f9fa] p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer group">
              <UsersIcon className="h-8 w-8 text-[#a8b5a0] mb-3 mx-auto" />
              <h3 className="text-3xl font-bold text-gray-800 mb-4 group-hover:text-[#a8b5a0] transition-colors duration-300">2</h3>
              <h4 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-[#a8b5a0] transition-colors duration-300">Businesses</h4>
              <p className="text-gray-700">
                Partnering with businesses to implement sustainable practices and green technologies.
              </p>
            </div>
            <div className="bg-[#f8f9fa] p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer group">
              <LightBulbIcon className="h-8 w-8 text-[#a8b5a0] mb-3 mx-auto" />
              <h3 className="text-3xl font-bold text-gray-800 mb-4 group-hover:text-[#a8b5a0] transition-colors duration-300">3</h3>
              <h4 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-[#a8b5a0] transition-colors duration-300">Non-Profit Organizations</h4>
              <p className="text-gray-700">
                Working with non-profit organizations to raise awareness and support climate action initiatives.
              </p>
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

      {/* Impact and Achievements */}
      <section className="bg-[#a8b5a0] px-6 py-20 relative overflow-hidden">
        {/* SVG Dots Pattern Overlay */}
        <svg className="absolute right-0 top-0 w-64 h-64 opacity-20 z-0" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" fill="#e8e6d8" />
            </pattern>
          </defs>
          <rect width="200" height="200" fill="url(#dots)" />
        </svg>
        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-800 mb-16 text-center">Impact and Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer group">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-[#a8b5a0] transition-colors duration-300">Convening Nigerian Climate Assembly</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer group">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-[#a8b5a0] transition-colors duration-300">National Community Development Policy</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer group">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-[#a8b5a0] transition-colors duration-300">Plateau Water Supply and Sanitation Policy</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer group">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-[#a8b5a0] transition-colors duration-300">Plateau Renewable Energy Policy and Strategy</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer group">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-[#a8b5a0] transition-colors duration-300">Plateau State Monitoring and Evaluation Policy</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer group">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-[#a8b5a0] transition-colors duration-300">Nasarawa State Rural Solar Electrification Program</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer group">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-[#a8b5a0] transition-colors duration-300">Plateau Carbon Credit Committee Onboarding Program</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer group">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-[#a8b5a0] transition-colors duration-300">Plateau Energy Transition Strategy: From Brown to Green</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer group">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-[#a8b5a0] transition-colors duration-300">Reboot: Africa-wide Strategy for Improved Partnerships and Revenue</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer group">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-[#a8b5a0] transition-colors duration-300">Palladium: Political Economy Analysis of Open Contracting Status in Nigeria</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer group">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-[#a8b5a0] transition-colors duration-300">Palladium: Strategy Delivery of Open Contracting Advocacy at the Federal Level</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer group">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-[#a8b5a0] transition-colors duration-300">World Bank: Programmatic Advisory Services in Governance and Global Practice</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer group">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-[#a8b5a0] transition-colors duration-300">World Bank: Beneficial Ownership Implementation for Corporate Affairs Commission</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer group">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-[#a8b5a0] transition-colors duration-300">Federal Ministry of Science & Technology Computer Time-Bomb Awareness Program</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer group">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-[#a8b5a0] transition-colors duration-300">MacArthur Foundation, Nigeria: Strategy and learning development from work on Nigeria</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer group">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-[#a8b5a0] transition-colors duration-300">Federal Ministry of Education Public Private Partnership in Education Management Program</h3>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-bounce-slow {
          animation: bounceSlow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
