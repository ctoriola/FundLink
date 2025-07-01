import { Button } from "@/components/ui/button"
import Link from "next/link"
import { events } from "@/lib/data"
import MobileNav from "@/components/mobile-nav"
import DesktopNav from "@/components/desktop-nav"

export default function EventsPage() {
  const upcomingEvents = events.filter((event) => event.status === "upcoming")
  const pastEvents = events.filter((event) => event.status === "past")

  // Helper function for consistent date formatting
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const month = date.toLocaleDateString("en-US", { month: "short" }).toUpperCase()
    const day = date.getDate()
    const year = date.getFullYear()
    return { month, day, year }
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <MobileNav currentPage="/events" />
      <DesktopNav currentPage="/events" />

      {/* Events Hero */}
      <section className="bg-[#e8e6d8] pt-20 px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-8">Events</h1>
          <p className="text-xl text-gray-700 mb-12 max-w-4xl mx-auto">
            Join us at upcoming conferences, workshops, and community events focused on climate action and sustainable
            development.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-white px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Upcoming Events</h2>
          <div className="space-y-8">
            {upcomingEvents.map((event) => {
              const { month, day, year } = formatDate(event.date)
              return (
                <div key={event.id} className="bg-[#e8e6d8] p-8 rounded-lg">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/4">
                      <div className="bg-[#a8b5a0] p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-gray-800">{month}</div>
                        <div className="text-4xl font-bold text-gray-800">{day}</div>
                        <div className="text-sm text-gray-700">{year}</div>
                      </div>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-2xl font-semibold text-gray-800 mb-3">{event.title}</h3>
                      <p className="text-gray-700 mb-4">{event.shortDescription}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                        <span>📍 {event.location}</span>
                        <span>🕒 {event.time}</span>
                        <span>👥 {event.type.charAt(0).toUpperCase() + event.type.slice(1)}</span>
                      </div>
                      <Link href={`/events/${event.slug}`}>
                        <Button className="bg-gray-800 hover:bg-gray-700 text-white">Learn More</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Past Events - Single Row Format */}
      <section className="bg-[#e8e6d8] px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Past Events</h2>
          <div className="space-y-4">
            {pastEvents.map((event) => {
              const { month, day, year } = formatDate(event.date)
              return (
                <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row">
                    {/* Event Image */}
                    <div className="md:w-1/4 relative h-48 md:h-auto">
                      <img
                        src={event.images[0] || "/placeholder.svg?height=200&width=400&text=Past+Event"}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Event Details */}
                    <div className="md:w-3/4 p-6">
                      <div className="flex flex-col md:flex-row md:items-start gap-4">
                        {/* Date */}
                        <div className="md:w-1/5">
                          <div className="bg-[#a8b5a0] p-3 rounded-lg text-center">
                            <div className="text-lg font-bold text-gray-800">{month}</div>
                            <div className="text-2xl font-bold text-gray-800">{day}</div>
                            <div className="text-sm text-gray-700">{year}</div>
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="md:w-4/5">
                          <h3 className="text-xl font-semibold text-gray-800 mb-2">{event.title}</h3>
                          <p className="text-gray-700 mb-3 line-clamp-2">{event.shortDescription}</p>
                          
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                            <span>📍 {event.location}</span>
                            <span>🕒 {event.time}</span>
                            <span>👥 {event.type.charAt(0).toUpperCase() + event.type.slice(1)}</span>
                            {event.registered && (
                              <span>📊 {event.registered}/{event.capacity} attendees</span>
                            )}
                          </div>
                          
                          <Link href={`/events/${event.slug}`}>
                            <Button variant="outline" className="border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white">
                              View Details
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
