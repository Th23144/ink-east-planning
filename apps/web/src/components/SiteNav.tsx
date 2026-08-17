import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/articles", label: "Articles" },
  { href: "/search", label: "Search" },
  { href: "/issues", label: "Issues" },
  { href: "/topics", label: "Topics" },
  { href: "/collections", label: "Collections" },
  { href: "/shop", label: "Spatial Flow Shop" }
] as const;

export function SiteNav() {
  return (
    <nav className="site-nav" aria-label="Primary navigation">
      {navItems.map((item) => (
        <Link href={item.href} key={item.href}>{item.label}</Link>
      ))}
    </nav>
  );
}
