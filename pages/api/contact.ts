export default async function handler(req, res) {
    const { token, name, email, message } = req.body;
  
    const secret = process.env.RECAPTCHA_SECRET_KEY;
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`;
  
    const response = await fetch(verifyUrl, { method: 'POST' });
    const data = await response.json();
  
    if (!data.success) {
      return res.status(400).json({ message: 'reCAPTCHA failed' });
    }
  
    // Your email/send/store logic here
    return res.status(200).json({ message: 'Message received!' });
  }
  