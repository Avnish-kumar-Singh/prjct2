// import React, { useState } from "react";
// import axios from "axios";

// function Contact() {
//   const [form, setForm] = useState({ name: "", email: "", message: "" });

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await axios.post("http://localhost:5000/contact", form);
//     alert("Message sent!");
//     setForm({ name: "", email: "", message: "" });
//   };

//   return (
//     <div className="pt-28 px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto animate-fly-in">
//       <h2 className="text-4xl font-extrabold text-indigo-700 text-center mb-8 animate-slide-up">
//         Let's Connect 💬
//       </h2>

//       <form
//         onSubmit={handleSubmit}
//         className="space-y-6 bg-white bg-opacity-90 backdrop-blur p-8 rounded-3xl shadow-xl border border-indigo-100 animate-fly-in"
//       >
//         <input
//           name="name"
//           value={form.name}
//           onChange={handleChange}
//           placeholder="Your Name"
//           required
//           className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 transition shadow-sm animate-fly-in"
//         />

//         <input
//           name="email"
//           type="email"
//           value={form.email}
//           onChange={handleChange}
//           placeholder="Your Email"
//           required
//           className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 transition shadow-sm animate-fly-in"
//         />

//         <textarea
//           name="message"
//           value={form.message}
//           onChange={handleChange}
//           placeholder="Your Message"
//           rows={5}
//           required
//           className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 transition shadow-sm animate-fly-in"
//         ></textarea>

//         <button
//           type="submit"
//           className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl shadow-lg transition duration-300 transform hover:-translate-y-0.5 hover:scale-105 animate-fly-in"
//         >
//           🚀 Send Message
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Contact;
import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
}, { timestamps: true });

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
