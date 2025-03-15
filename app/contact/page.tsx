"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Youtube,
  Facebook,
  Instagram,
  AtSign,
} from "lucide-react";
import emailjs from "emailjs-com";

// FormContent component - extracted from ModalForm but without modal functionality
const FormContent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccessMessage("");

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

      if (!serviceId || !templateId || !userId) {
        setError("Missing EmailJS configuration.");
        return;
      }

      const result = await emailjs.send(
        serviceId,
        templateId,
        formData,
        userId
      );

      if (result.status === 200) {
        setSuccessMessage("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setError(`Failed to send message: ${result.text}`);
      }
    } catch (error: any) {
      console.error("Error sending message:", error);
      setError(`An error occurred while sending the message: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex flex-col space-y-2">
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full p-3 border border-gray-600 rounded-md outline-none focus:ring-2 focus:ring-gray-500 text-white bg-[#1c1c1c] placeholder-gray-400 transform-all duration-300"
          required
        />
      </div>

      <div className="flex flex-col space-y-2">
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="E-mail Address"
          className="w-full p-3 border border-gray-600 rounded-md outline-none focus:ring-2 focus:ring-gray-500 text-white bg-[#1c1c1c] placeholder-gray-400 transform duration-300"
          required
        />
      </div>

      <div className="flex flex-col space-y-2">
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="resize-none w-full p-3 border border-gray-600 rounded-md outline-none focus:ring-2 focus:ring-gray-500 text-white bg-[#1c1c1c] placeholder-gray-400 transform duration-300"
          rows={4}
          required
        />
      </div>

      {error && <div className="text-red-500 text-sm">{error}</div>}
      {successMessage && (
        <div className="text-green-500 text-sm">{successMessage}</div>
      )}

      <div className="flex justify-center space-x-4">
        <Button
          type="submit"
          disabled={isLoading}
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 bg-white text-black hover:bg-gray-400 transition duration-300 rounded-[20px] outline-none"
        >
          {isLoading ? "Sending..." : "Send Message"}
        </Button>
      </div>
    </form>
  );
};

export default function Contact() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[35vh] flex flex-col items-center justify-end overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=2000&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center 60%",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10">
              Let's create something amazing together
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-10 px-4 md:px-8 bg-black/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col items-center mt-7">
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-gray-400">specialdancetv@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <p className="text-gray-400">+44 739 407 9267</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="text-lg font-semibold">Location</h3>
                  <p className="text-gray-400">London, United Kingdom</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <AtSign className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="text-lg font-semibold">Follow Us!</h3>
                  <p className="text-gray-400">{""}</p>
                </div>
              </div>
              <div className="flex gap-6 justify-center">
                <a
                  href="https://www.instagram.com/specialdancetv/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition duration-300 transform hover:scale-110 animate__animated animate__fadeIn animate__delay-1s"
                >
                  <Instagram className="h-8 w-8" />
                </a>
                <a
                  href="https://www.youtube.com/@specialdancetv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition duration-300 transform hover:scale-110 animate__animated animate__fadeIn animate__delay-2s"
                >
                  <Youtube className="h-8 w-8" />
                </a>
                <a
                  href="https://www.facebook.com/socialdancetvuk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition duration-300 transform hover:scale-110 animate__animated animate__fadeIn animate__delay-3s"
                >
                  <Facebook className="h-8 w-8" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Message Me!</h2>
            <FormContent />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
