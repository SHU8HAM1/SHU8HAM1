import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        alert('Failed to send message. Please try again later.');
      }
    } catch (err) {
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">Contact Me</h2>
      {submitted ? (
        <div className="text-green-200 text-xl text-center py-16">
          Thank you for reaching out! I'll get back to you soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="bg-zinc-800 text-white px-6 py-4 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="bg-zinc-800 text-white px-6 py-4 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="bg-zinc-800 text-white px-6 py-4 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[180px]"
            value={form.message}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}
