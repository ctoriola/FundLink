import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import MobileNav from "@/components/mobile-nav"
import DesktopNav from "@/components/desktop-nav"

export default function HomePage() {
  return (
    <div>
      {/* Navigation */}
      <MobileNav currentPage="/" />
      <DesktopNav currentPage="/" />

      {/* Hero Section */}
      <section className="bg-[#a8b5a0] pt-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between py-20 gap-12">
          <div className="flex-1 max-w-lg text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight mb-4">
              Climate Action<br />
              Accelerator
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              FundLink is a non-profit organization dedicated to tackling climate change and energy transition through action acceleration, advocacy, policy development, strategic planning, and awareness initiatives for a sustainable future.
            </p>
            <p className="text-base md:text-lg text-gray-600 mb-8">
              RC. No.: 7155829
            </p>
            <a href="mailto:contact@fundlinkaid.org?subject=Interest in Joining FundLink Aid">
              <Button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 text-lg">JOIN US</Button>
            </a>
          </div>
          <div className="flex-1 flex justify-center lg:justify-end w-full">
            <div className="relative w-full max-w-md lg:max-w-none lg:w-96 h-64 md:h-80 lg:h-96">
              <Image
                src="/placeholder.svg?height=400&width=400&text=Climate+Action"
                alt="Climate action and sustainable development"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-[#e8e6d8] px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-12">Our Mission & Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-3xl font-semibold text-gray-800 mb-4">Mission</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To empower individuals, businesses, and governments to take action on climate change.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-3xl font-semibold text-gray-800 mb-4">Vision</h3>
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
            <div className="bg-[#f8f9fa] p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Climate Change Policy Advocacy</h3>
              <p className="text-gray-700">
                Advocating for strong climate policies at local, national, and international levels.
              </p>
            </div>
            <div className="bg-[#f8f9fa] p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Climate Action Fund</h3>
              <p className="text-gray-700">
                Funding innovative climate solutions and sustainable development projects.
              </p>
            </div>
            <div className="bg-[#f8f9fa] p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Climate Change Education Programs</h3>
              <p className="text-gray-700">
                Educating the public about climate change impacts and solutions.
              </p>
            </div>
            <div className="bg-[#f8f9fa] p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Carbon Credits</h3>
              <p className="text-gray-700">
                Implementing market-based mechanisms to reduce greenhouse gas emissions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics Section */}
      <section className="bg-[#a8b5a0] px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-16">Impact and Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-4xl font-bold text-gray-800 mb-2">100M+</h3>
              <p className="text-gray-700">Invested in climate solutions, energy transition and capacity building.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-4xl font-bold text-gray-800 mb-2">10K+</h3>
              <p className="text-gray-700">Policies, Programs and Initiatives advocated for and implemented.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-4xl font-bold text-gray-800 mb-2">Millions</h3>
              <p className="text-gray-700">Educated about climate change and sustainable practices.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-4xl font-bold text-gray-800 mb-2">Thousands</h3>
              <p className="text-gray-700">Communities impacted through our programs and initiatives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="bg-[#e8e6d8] px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-8">Get Involved</h2>
          <p className="text-xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join us in driving climate action. There are many ways to get involved, from policy sponsorship to partnership, donating, volunteering and advocating for change. Together, we can make a difference.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Policy Sponsorship</h3>
              <p className="text-gray-700">
                Support our policy development and advocacy initiatives.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Partnership</h3>
              <p className="text-gray-700">
                Collaborate with us on climate action projects and programs.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Volunteer</h3>
              <p className="text-gray-700">
                Contribute your time and expertise to our mission.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <a href="mailto:contact@fundlinkaid.org?subject=Get Involved with FundLink">
              <Button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 text-lg">Contact Us</Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
