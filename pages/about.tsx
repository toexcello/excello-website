import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="bg-neutral min-h-screen text-text">
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-semibold">About Us</h1>
        <p className="mt-4">We provide expert IT consulting and enterprise solutions tailored for your business.</p>
      </main>
      <Footer />
    </div>
  );
}