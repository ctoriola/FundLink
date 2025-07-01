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
      <section className="bg-[#e8e6d8] pt-20 px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-8">Contact Us</h1>
          <p className="text-xl text-gray-700 mb-12 max-w-4xl mx-auto">
            Ready to make a difference? Get in touch with us to learn more about our work or explore partnership
            opportunities.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-white px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Get in touch</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Whether you're interested in partnering with us, learning about our projects, or exploring ways to get
                involved, we'd love to hear from you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#a8b5a0] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
                    <p className="text-gray-700">
                      No.5, Kwaji Close, Maitama
                      <br />
                      Abuja, FCT, Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#a8b5a0] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                    <p className="text-gray-700">+2348056504237</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#a8b5a0] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                    <a href="mailto:contact@fundlinkaid.org" className="text-[#a8b5a0] hover:text-gray-800 font-medium">
                      contact@fundlinkaid.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#a8b5a0] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">🕒</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Office Hours</h3>
                    <p className="text-gray-700">
                      Monday - Friday
                      <br />
                      8:00 AM - 6:00 PM WAT
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#f8f9fa] p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#a8b5a0] focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#a8b5a0] focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#a8b5a0] focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#a8b5a0] focus:border-transparent"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="project">Project Information</option>
                    <option value="volunteer">Volunteer Opportunities</option>
                    <option value="donation">Donation Information</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#a8b5a0] focus:border-transparent"
                    placeholder="Tell us how we can help you..."
                    required
                  ></textarea>
                </div>

                <Button type="submit" className="w-full bg-[#a8b5a0] hover:bg-[#8fa08a] text-gray-800 font-semibold py-3">
                  Send Message
                </Button>
              </form>
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
