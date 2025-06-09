import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-primary text-white p-4">
      <nav className="flex justify-between">
        <span className="font-bold text-xl">Excello.io</span>
        <div className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}