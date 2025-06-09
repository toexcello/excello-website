import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-neutral min-h-screen text-text">
      <Header />
      <main className="p-8">
        <h1 className="text-4xl font-bold text-primary">Welcome to Excello.io</h1>
        <p className="mt-4">Your partner in IT consulting, software, and support.</p>
      </main>
      <Footer />
    </div>
  );
}