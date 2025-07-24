import React, { useState } from "react";
import axios from "axios";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // ✅ Correct fallback URL
    const apiUrl = import.meta.env.VITE_API_URL || "https://prjct2-1.onrender.com";

    console.log("📤 Sending to:", `${apiUrl}/contact`);
    console.log("📦 Payload:", form);

    try {
      const response = await axios.post(`${apiUrl}/contact`, form);

      if (response.status === 201 || response.status === 200) {
        alert("✅ Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        console.error("⚠️ Unexpected response:", response);
        alert("❌ Unexpected response from server.");
      }
    } catch (error) {
      console.error("❌ Failed to send message:", error.response || error.message);
      alert("❌ Failed to send message. Please check your internet or try again later.");
    }

    setLoading(false);
  };

  return (
    <div className="pt-28 px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto animate-fade-in">
      <h2 className="text-4xl font-extrabold text-indigo-700 text-center mb-8 animate-slide-up">
        Let's Connect 💬
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white bg-opacity-90 backdrop-blur p-8 rounded-3xl shadow-xl border border-indigo-100 animate-slide-up"
      >
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 transition shadow-sm"
        />

        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 transition shadow-sm"
        />

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows={5}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 transition shadow-sm"
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className={`w-full ${
            loading ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700"
          } text-white py-3 rounded-xl shadow-lg transition duration-300 transform hover:-translate-y-0.5 hover:scale-105`}
        >
          {loading ? "Sending..." : "🚀 Send Message"}
        </button>
      </form>
    </div>
  );
}

export default Contact;
