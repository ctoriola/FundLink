import Image from "next/image"
import Link from "next/link"
import MobileNav from "@/components/mobile-nav"
import DesktopNav from "@/components/desktop-nav"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <MobileNav currentPage="/about" />
      <DesktopNav currentPage="/about" />

      {/* About Hero */}
      <section className="bg-[#e8e6d8] pt-20 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
                About
                <br />
                FundLink
              </h1>
              <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
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
            <div className="relative h-96 lg:h-full">
              <Image
                src="/placeholder.svg?height=600&width=500&text=About+FundLink"
                alt="About FundLink Aid International"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-800 mb-12 text-center">Our Mission and Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-[#a8b5a0] p-12 rounded-lg">
              <h3 className="text-4xl font-bold text-gray-800 mb-6">Mission</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To empower individuals, businesses, and governments to take action on climate change.
              </p>
            </div>
            <div className="bg-[#e8e6d8] p-12 rounded-lg">
              <h3 className="text-4xl font-bold text-gray-800 mb-6">Vision</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To build a world where climate change is addressed effectively and sustainably.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Thought Leadership */}
      <section className="bg-[#e8e6d8] px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-800 mb-16 text-center">Thought Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Research and Analysis</h3>
              <p className="text-gray-700">
                Conducting cutting-edge research on climate change solutions and sustainable development practices.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Publications and Reports</h3>
              <p className="text-gray-700">
                Publishing comprehensive reports and articles on climate change issues and policy recommendations.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Conferences and Events</h3>
              <p className="text-gray-700">
                Hosting and participating in climate change conferences, workshops, and knowledge-sharing events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships and Collaborations */}
      <section className="bg-white px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-800 mb-16 text-center">Partnerships and Collaborations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#f8f9fa] p-8 rounded-lg shadow-md">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">1</h3>
              <h4 className="text-2xl font-semibold text-gray-800 mb-4">Governments</h4>
              <p className="text-gray-700">
                Collaborating with government ministries, departments and agencies on climate change and energy transition initiatives.
              </p>
            </div>
            <div className="bg-[#f8f9fa] p-8 rounded-lg shadow-md">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">2</h3>
              <h4 className="text-2xl font-semibold text-gray-800 mb-4">Businesses</h4>
              <p className="text-gray-700">
                Partnering with businesses to implement sustainable practices and green technologies.
              </p>
            </div>
            <div className="bg-[#f8f9fa] p-8 rounded-lg shadow-md">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">3</h3>
              <h4 className="text-2xl font-semibold text-gray-800 mb-4">Non-Profit Organizations</h4>
              <p className="text-gray-700">
                Working with non-profit organizations to raise awareness and support climate action initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact and Achievements */}
      <section className="bg-[#a8b5a0] px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-800 mb-16 text-center">Impact and Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Convening Nigerian Climate Assembly</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">National Community Development Policy</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Plateau Water Supply and Sanitation Policy</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Plateau Renewable Energy Policy and Strategy</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Plateau State Monitoring and Evaluation Policy</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Nasarawa State Rural Solar Electrification Program</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Plateau Carbon Credit Committee Onboarding Program</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Plateau Energy Transition Strategy: From Brown to Green</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Reboot: Africa-wide Strategy for Improved Partnerships and Revenue</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Palladium: Political Economy Analysis of Open Contracting Status in Nigeria</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Palladium: Strategy Delivery of Open Contracting Advocacy at the Federal Level</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">World Bank: Programmatic Advisory Services in Governance and Global Practice</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">World Bank: Beneficial Ownership Implementation for Corporate Affairs Commission</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Federal Ministry of Science & Technology Computer Time-Bomb Awareness Program</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">MacArthur Foundation, Nigeria: Strategy and learning development from work on Nigeria</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Federal Ministry of Education Public Private Partnership in Education Management Program</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
