import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-[800px] flex-col items-center justify-center px-5 py-24 text-center">
      <p className="text-[12.5px] font-mono font-medium uppercase tracking-[0.12em] text-amber-dark">404</p>
      <h1 className="mt-4 text-[clamp(30px,4vw,48px)]">That page isn&apos;t here.</h1>
      <p className="mt-4 max-w-[48ch] text-[17px] text-ink-2">The link may be old. Start from the home page, or call +91 92780 72150 and we will guide you.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn btn-teal">
          Home
        </Link>
        <Link href="/contact" className="btn btn-amber">
          Book Appointment
        </Link>
      </div>
    </section>
  );
}
