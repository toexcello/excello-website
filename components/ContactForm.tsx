import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useEffect } from 'react';

declare const grecaptcha: any;

export default function ContactForm() {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '';

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.async = true;
    document.body.appendChild(script);
  }, [siteKey]);

  const formik = useFormik({
    initialValues: { name: '', email: '', message: '', token: '' },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      message: Yup.string().required('Required'),
    }),
    onSubmit: async (values) => {
      const token = await grecaptcha.execute(siteKey, { action: 'submit' });
      values.token = token;

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      const data = await res.json();
      alert(data.message || 'Submitted!');
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4 max-w-xl mt-6">
      <input name="name" placeholder="Name" onChange={formik.handleChange} value={formik.values.name} className="w-full p-2 border rounded" />
      <input name="email" placeholder="Email" onChange={formik.handleChange} value={formik.values.email} className="w-full p-2 border rounded" />
      <textarea name="message" placeholder="Message" onChange={formik.handleChange} value={formik.values.message} className="w-full p-2 border rounded" />
      <button type="submit" className="bg-accent text-white px-4 py-2 rounded">Submit</button>
    </form>
  );
}
