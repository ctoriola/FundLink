import Link from "next/link"
import Image from "next/image"
import MobileNav from "@/components/mobile-nav"
import DesktopNav from "@/components/desktop-nav"

export default function LeadershipPage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <MobileNav currentPage="/leadership" />
      <DesktopNav currentPage="/leadership" />

      {/* Leadership Hero */}
      <section className="bg-[#e8e6d8] pt-20 px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-8">Leading Drivers Of Change</h1>
          <p className="text-xl text-gray-700 mb-12 max-w-4xl mx-auto">
            Meet the dedicated team of experts and visionaries driving climate action and sustainable development across Africa.
          </p>
        </div>
      </section>

      {/* Executive Leadership */}
      <section className="bg-white px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-16 text-center">Executive Leadership</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-[#f8f9fa] p-8 md:p-12 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="relative w-full md:w-48 h-48 flex-shrink-0 mx-auto md:mx-0">
                  <img
                    src="/placeholder.svg?height=200&width=200&text=David+Wuyep"
                    alt="ENGR. DAVID JAAFARU WUYEP"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">ENGR. DAVID JAAFARU WUYEP</h3>
                  <p className="text-[#a8b5a0] font-medium mb-4 text-lg">Executive Director</p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    David Jaafaru Wuyep, PMP, is a seasoned professional with over two decades of expertise in climate change, renewable energy, and WASH. As Executive Director of Fundlink Aid International, he leads impactful climate resilience initiatives, including the Nigerian Climate Assembly.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    A Harvard-trained public policy expert and certified PMP, he has developed pioneering renewable energy and WASH policies, secured international funding for sustainable projects, and fostered public-private partnerships.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    David's leadership has driven transformative outcomes, including Nigeria's first state Monitoring & Evaluation Policy and National WASH Fund, advancing sustainable development and improving lives across communities.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#f8f9fa] p-8 md:p-12 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="relative w-full md:w-48 h-48 flex-shrink-0 mx-auto md:mx-0">
                  <img
                    src="/placeholder.svg?height=200&width=200&text=Yop+Rwang"
                    alt="YOP RWANG PAM"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">YOP RWANG PAM</h3>
                  <p className="text-[#a8b5a0] font-medium mb-4 text-lg">Global Development Professional</p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Yop Rwang Pam is a Global Development Professional and a highly experienced strategist with expertise in governance, transparency, and social impact initiatives. She has led programs across Africa, Europe, North America and Latin America, leveraging qualitative research and user-centered design to optimize grassroots-focused projects.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    In Nigeria she was instrumental to the World Bank and OGP efforts at updating Nigeria's beneficial ownership register and advancing open contracting reforms. Yop has managed high-impact initiatives, including media development for accountability, global open knowledge hubs, civic-tech platform redesign, as well as advocacy for transparency in governance.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    A skilled facilitator and communicator, she excels in fostering partnerships, capacity-building, and delivering sustainable solutions to improve governance and civic engagement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Values */}
      <section className="bg-[#a8b5a0] px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-16 text-center">Leadership Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Expertise</h3>
              <p className="text-gray-700">
                Our leaders bring decades of combined experience in climate change, policy development, and sustainable development.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Innovation</h3>
              <p className="text-gray-700">
                We embrace innovative approaches and cutting-edge solutions to address complex climate challenges.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Impact</h3>
              <p className="text-gray-700">
                Our leadership is driven by measurable impact and transformative outcomes for communities across Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="bg-white px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-16 text-center">Key Leadership Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#f8f9fa] p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Policy Development</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Nigerian Climate Assembly</li>
                <li>• National Community Development Policy</li>
                <li>• Plateau Renewable Energy Policy and Strategy</li>
                <li>• Plateau State Monitoring and Evaluation Policy</li>
              </ul>
            </div>
            <div className="bg-[#f8f9fa] p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">International Partnerships</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• World Bank Programmatic Advisory Services</li>
                <li>• MacArthur Foundation Strategy Development</li>
                <li>• Palladium Open Contracting Advocacy</li>
                <li>• Federal Ministry Collaborations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
