import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Services() {
  return (
    <div className="bg-neutral min-h-screen text-text">
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-semibold">Our Services</h1>
        <ul className="list-disc mt-4 ml-6">
          <li>IT Consulting</li>
          <li>Software Development</li>
          <li>Support & Services</li>
          <li>Resource Augmentation</li>
        </ul>
      </main>
      <Footer />
    </div>
  );
}