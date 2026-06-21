import Link from "next/link";

export default function NotFound() {
  return (
    <main className="site-shell narrow-shell">
      <nav className="site-nav" aria-label="Primary navigation">
        <Link href="/">Home</Link>
        <Link href="/issues">Issues</Link>
        <Link href="/topics">Topics</Link>
        <Link href="/collections">Collections</Link>
      </nav>

      <section className="empty-state">
        <p className="eyebrow">Not found</p>
        <h1>Nothing public is available here.</h1>
        <p className="lede">
          This page may be unpublished, private, hidden, or not part of the Level 1 public reading prototype.
        </p>
        <Link className="text-link" href="/">Return home</Link>
      </section>
    </main>
  );
}
