import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getProjectBySlug } from "@/lib/data"
import { notFound } from "next/navigation"
import MobileNav from "@/components/mobile-nav"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  const statusColors = {
    active: "bg-green-100 text-green-800",
    completed: "bg-blue-100 text-blue-800",
    planning: "bg-yellow-100 text-yellow-800",
  }

  const categoryColors = {
    "renewable-energy": "bg-purple-100 text-purple-800",
    "water-management": "bg-blue-100 text-blue-800",
    "forest-conservation": "bg-green-100 text-green-800",
    "climate-education": "bg-orange-100 text-orange-800",
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <MobileNav currentPage="/projects" />

      {/* Breadcrumb */}
      <section className="bg-[#e8e6d8] pt-20 px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <nav className="text-sm text-gray-600 mb-4">
            <Link href="/" className="hover:text-gray-800">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/projects" className="hover:text-gray-800">
              Projects
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800">{project.title}</span>
          </nav>
        </div>
      </section>

      {/* Project Hero */}
      <section className="bg-[#e8e6d8] px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex gap-3 mb-6">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[project.status]}`}>
                  {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                </span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${categoryColors[project.category]}`}>
                  {project.category.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">{project.title}</h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">{project.fullDescription}</p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Location</h3>
                  <p className="text-gray-700">{project.location}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Budget</h3>
                  <p className="text-gray-700">{project.budget}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Start Date</h3>
                  <p className="text-gray-700">{new Date(project.startDate).toLocaleDateString()}</p>
                </div>
                {project.endDate && (
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">End Date</h3>
                    <p className="text-gray-700">{new Date(project.endDate).toLocaleDateString()}</p>
                  </div>
                )}
              </div>

              <a href={`mailto:hi@fundlinkaid.org?subject=Interest in ${project.title}`}>
                <Button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3">Get Involved</Button>
              </a>
            </div>

            <div className="relative h-96">
              <Image
                src={project.images[0] || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
