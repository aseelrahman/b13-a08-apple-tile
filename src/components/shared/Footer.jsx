import Link from "next/link";
import Image from "next/image";

const FOOTER_LINKS = [
  {
    heading: "Product",
    links: [
      { label: "Home", href: "/" },
      { label: "All Tiles", href: "/tiles" },
      { label: "My Profile", href: "/profile" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-separator bg-background/70 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Logo + tagline */}
          <div className="col-span-2 flex flex-col gap-3 md:col-span-1">
            <Image
              src="/logo.png"
              height={50}
              width={50}
              alt="Logo"
              className="object-cover h-auto w-auto"
            />
            <p className="text-sm text-muted-foreground">
              Discover and organize tiles, all in one place.
            </p>
          </div>

          {/* Link columns */}
          {FOOTER_LINKS.map((section) => (
            <div key={section.heading} className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold">{section.heading}</h3>
              <ul className="flex flex-col gap-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-separator pt-6 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {year} Tessera. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              YouTube
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Facebook
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;