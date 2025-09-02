import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (err) {
      alert("Failed to send message. Please try again later.");
    }
    setLoading(false);
  };

  return (
    <div className="w-full max-w-3xl mx-auto pt-20 pb-5">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
        Contact Me
      </h2>
      {submitted ? (
        <div className="flex flex-col items-center justify-center text-green-200 text-xl text-center py-16 gap-4">
          <svg
            className="w-14 h-14 text-green-400 mb-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
          Thank you for reaching out! I&apos;ll get back to you soon.
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
            disabled={loading}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="bg-zinc-800 text-white px-6 py-4 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={form.email}
            onChange={handleChange}
            required
            disabled={loading}
          />
          <input
            type="text"
            name="subject"
            placeholder="Your Subject"
            className="bg-zinc-800 text-white px-6 py-4 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={form.subject}
            onChange={handleChange}
            required
            disabled={loading}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="bg-zinc-800 text-white px-6 py-4 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[160px]"
            value={form.message}
            onChange={handleChange}
            required
            disabled={loading}
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors flex items-center justify-center gap-2"
            disabled={loading}
          >
            {loading ? (
              <svg
                className="animate-spin h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      )}
    </div>
  );
}
