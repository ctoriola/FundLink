import { Button } from "@/components/ui/button"
import Link from "next/link"
import MobileNav from "@/components/mobile-nav"
import DesktopNav from "@/components/desktop-nav"

export default function PartnershipPage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <MobileNav currentPage="/partnership" />
      <DesktopNav currentPage="/partnership" />

      {/* Partnership Hero */}
      <section className="bg-[#e8e6d8] pt-20 px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-8">Partnerships and Collaborations</h1>
          <p className="text-xl text-gray-700 mb-12 max-w-4xl mx-auto">
            Join us in building a sustainable future through strategic partnerships and collaborative initiatives across governments, businesses, and non-profit organizations.
          </p>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="bg-white px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-16 text-center">Our Partnership Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#e8e6d8] p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-[#a8b5a0] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Governments</h3>
              <p className="text-gray-700 mb-6">
                Collaborating with government ministries, departments and agencies on climate change and energy transition initiatives.
              </p>
              <Button className="bg-gray-800 hover:bg-gray-700 text-white">Learn More</Button>
            </div>

            <div className="bg-[#e8e6d8] p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-[#a8b5a0] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Businesses</h3>
              <p className="text-gray-700 mb-6">
                Partnering with businesses to implement sustainable practices and green technologies.
              </p>
              <Button className="bg-gray-800 hover:bg-gray-700 text-white">Learn More</Button>
            </div>

            <div className="bg-[#e8e6d8] p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-[#a8b5a0] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Non-Profit Organizations</h3>
              <p className="text-gray-700 mb-6">
                Working with non-profit organizations to raise awareness and support climate action initiatives.
              </p>
              <Button className="bg-gray-800 hover:bg-gray-700 text-white">Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="bg-[#e8e6d8] px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-16 text-center">Our Key Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">World Bank</h3>
              <p className="text-gray-700 mb-4">Programmatic Advisory Services in Governance and Global Practice</p>
              <p className="text-gray-700">Beneficial Ownership Implementation for Corporate Affairs Commission</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">MacArthur Foundation</h3>
              <p className="text-gray-700">Strategy and learning development from work on Nigeria</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Palladium</h3>
              <p className="text-gray-700 mb-4">Political Economy Analysis of Open Contracting Status in Nigeria</p>
              <p className="text-gray-700">Strategy Delivery of Open Contracting Advocacy at the Federal Level</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Federal Ministry of Science & Technology</h3>
              <p className="text-gray-700">Computer Time-Bomb Awareness Program</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Federal Ministry of Education</h3>
              <p className="text-gray-700">Public Private Partnership in Education Management Program</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Plateau State Government</h3>
              <p className="text-gray-700 mb-2">• Water Supply and Sanitation Policy</p>
              <p className="text-gray-700 mb-2">• Renewable Energy Policy and Strategy</p>
              <p className="text-gray-700 mb-2">• Monitoring and Evaluation Policy</p>
              <p className="text-gray-700">• Carbon Credit Committee Onboarding Program</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="bg-white px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-8">Why Partner With Us?</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#a8b5a0] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Proven Track Record</h3>
                    <p className="text-gray-700">
                      Over 100M+ invested in climate solutions and 10K+ policies and initiatives implemented.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#a8b5a0] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Leadership</h3>
                    <p className="text-gray-700">
                      Harvard-trained public policy experts and certified PMP professionals leading our initiatives.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#a8b5a0] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">International Recognition</h3>
                    <p className="text-gray-700">
                      Trusted by major international organizations including World Bank and MacArthur Foundation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#a8b5a0] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Comprehensive Solutions</h3>
                    <p className="text-gray-700">
                      From policy development to implementation, we provide end-to-end climate action solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96">
              <img
                src="/placeholder.svg?height=400&width=500&text=Partnership+Benefits"
                alt="Partnership benefits"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#a8b5a0] px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Ready to Partner With Us?</h2>
          <p className="text-xl text-gray-700 mb-8">
            Join our network of partners working together to create a sustainable future for Africa and beyond.
          </p>
          <a href="mailto:contact@fundlinkaid.org?subject=Partnership Inquiry">
            <Button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 text-lg">
              Get in Touch
            </Button>
          </a>
        </div>
      </section>
    </div>
  )
}
