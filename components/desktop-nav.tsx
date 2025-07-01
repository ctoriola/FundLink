import Link from "next/link";

interface DesktopNavProps {
  currentPage?: string;
}

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/leadership", label: "Leadership" },
  { href: "/projects", label: "Projects" },
  { href: "/events", label: "Events" },
  { href: "/partnership", label: "Partnership" },
  { href: "/contact", label: "Contact" },
];

const DesktopNav: React.FC<DesktopNavProps> = ({ currentPage }) => {
  return (
    <nav className="hidden md:flex w-full bg-white shadow-md py-4 px-8 items-center justify-between">
      <span className="font-bold text-xl">FundLink</span>
      <div className="flex gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={
              "text-gray-700 px-3 py-2 rounded transition " +
              (currentPage === link.href ? "bg-[#a8b5a0] text-white" : "hover:bg-gray-100")
            }
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default DesktopNav; 