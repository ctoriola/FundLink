import { Button } from "@/components/ui/button"
import Link from "next/link"
import MobileNav from "@/components/mobile-nav"
import DesktopNav from "@/components/desktop-nav"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <MobileNav currentPage="/contact" />
      <DesktopNav currentPage="/contact" />

      {/* Contact Hero */}
      <section className="bg-[#e8e6d8] pt-20 px-6 py-20 relative overflow-hidden">
        {/* SVG Background Shape */}
        <svg className="absolute left-0 top-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path fill="#a8b5a0" fillOpacity="0.15" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
        </svg>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-8">Contact Us</h1>
          <p className="text-xl text-gray-700 mb-12 max-w-4xl mx-auto">
            Ready to make a difference? Get in touch with us to learn more about our work or explore partnership opportunities.
          </p>
        </div>
      </section>
      {/* SVG Wave Divider */}
      <div className="w-full overflow-hidden -mt-2" aria-hidden="true">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-12">
          <path d="M0,30 Q360,60 720,30 T1440,30 V60 H0 Z" fill="#fff" />
        </svg>
      </div>

      {/* Contact Form */}
      <section className="bg-white px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Get in touch</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Whether you're interested in partnering with us, learning about our projects, or exploring ways to get involved, we'd love to hear from you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-[#a8b5a0] rounded-full flex items-center justify-center mb-3">
                <span className="text-white text-xl">📍</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
              <p className="text-gray-700 text-sm">
                No.5, Kwaji Close, Maitama<br />Abuja, FCT, Nigeria
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-[#a8b5a0] rounded-full flex items-center justify-center mb-3">
                <span className="text-white text-xl">📞</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
              <p className="text-gray-700 text-sm">+2348056504237</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-[#a8b5a0] rounded-full flex items-center justify-center mb-3">
                <span className="text-white text-xl">✉️</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
              <a href="mailto:contact@fundlinkaid.org" className="text-[#a8b5a0] hover:text-gray-800 font-medium text-sm">
                contact@fundlinkaid.org
              </a>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-[#a8b5a0] rounded-full flex items-center justify-center mb-3">
                <span className="text-white text-xl">🕒</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">Office Hours</h3>
              <p className="text-gray-700 text-sm">
                Monday - Friday<br />8:00 AM - 6:00 PM WAT
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-[#4a4a52] px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Find Our Office</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Visit us at our headquarters in Maitama, Abuja. Our office is conveniently located in the heart of Nigeria's capital, 
              making it easy to reach for meetings, consultations, and partnership discussions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">📍 Office Location</h3>
              <p className="text-gray-700 mb-2">No.5, Kwaji Close</p>
              <p className="text-gray-700 mb-2">Maitama District</p>
              <p className="text-gray-700">Abuja, FCT, Nigeria</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">🕒 Visiting Hours</h3>
              <p className="text-gray-700 mb-2">Monday - Friday</p>
              <p className="text-gray-700 mb-2">8:00 AM - 6:00 PM</p>
              <p className="text-gray-700">West Africa Time (WAT)</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">🚗 Getting Here</h3>
              <p className="text-gray-700 mb-2">• 15 minutes from Nnamdi Azikiwe Airport</p>
              <p className="text-gray-700 mb-2">• 10 minutes from Abuja City Center</p>
              <p className="text-gray-700">• Accessible by public transport</p>
            </div>
          </div>
          
          <div className="h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5!2d7.4!3d9.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b3b3b3b3b3b%3A0x0!2zOcKwMDYnMDAuMCJOIDfCsDI0JzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="FundLink Aid International Office Location - No.5, Kwaji Close, Maitama, Abuja, FCT, Nigeria"
            ></iframe>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-300 text-lg">
              <strong>Need directions?</strong> Click on the map above to open Google Maps for turn-by-turn navigation.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
