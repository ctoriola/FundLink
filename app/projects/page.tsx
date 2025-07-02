import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { projects } from "@/lib/data"
import MobileNav from "@/components/mobile-nav"
import DesktopNav from "@/components/desktop-nav"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <MobileNav currentPage="/projects" />
      <DesktopNav currentPage="/projects" />

      {/* Projects Hero */}
      <section className="bg-[#e8e6d8] pt-20 px-6 py-20 relative overflow-hidden">
        {/* SVG Background Shape */}
        <svg className="absolute left-0 top-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path fill="#a8b5a0" fillOpacity="0.15" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
        </svg>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-8">Our Projects</h1>
          <p className="text-xl text-gray-700 mb-12 max-w-4xl mx-auto">
            Discover our ongoing climate initiatives and sustainable development projects across Africa.
          </p>
        </div>
      </section>
      {/* SVG Wave Divider */}
      <div className="w-full overflow-hidden -mt-2" aria-hidden="true">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-12">
          <path d="M0,30 Q360,60 720,30 T1440,30 V60 H0 Z" fill="#fff" />
        </svg>
      </div>

      {/* Project Categories */}
      <section className="bg-white px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-gray-800">Climate Projects</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Support and showcase ongoing climate acceleration initiatives across Africa, focusing on renewable
                energy, carbon reduction, and environmental restoration.
              </p>
              <Button className="bg-gray-800 hover:bg-gray-700 text-white">View All Climate Projects</Button>
            </div>
            <div className="relative h-64">
              <Image
                src="/placeholder.svg?height=300&width=500&text=Climate+Projects"
                alt="Climate projects"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="relative h-64 order-2 lg:order-1">
              <Image
                src="/placeholder.svg?height=300&width=500&text=Policy+Support"
                alt="Policy support"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="space-y-8 order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-800">Policy Support</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Assist governments in developing effective environmental policies through research, consultation, and
                capacity building programs.
              </p>
              <Button className="bg-gray-800 hover:bg-gray-700 text-white">Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-[#e8e6d8] px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-800 mb-16 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={project.images[0] || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.shortDescription}</p>
                  <Link href={`/projects/${project.slug}`}>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
