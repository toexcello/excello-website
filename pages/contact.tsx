import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <div className="bg-neutral min-h-screen text-text">
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-semibold">Contact Us</h1>
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}