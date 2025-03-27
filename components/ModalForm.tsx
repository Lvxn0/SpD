import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const ModalForm: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const toggleModal = () => setIsOpen(!isOpen);

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
      console.log("Form Data being sent to EmailJS:", formData);

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
      } else {
        setError(`Failed to send message: ${result.text}`);
      }

      setFormData({ name: "", email: "", message: "" });
      toggleModal();
    } catch (error: any) {
      console.error("Error sending message:", error);
      setError(`An error occurred while sending the message: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button
        onClick={toggleModal}
        size="lg"
        className="bg-primary text-primary-foreground hover:bg-gray-400 transition duration-300 rounded-[20px] outline-none"
      >
        Get in Touch
      </Button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="bg-[#151515] p-8 rounded-lg max-w-md w-full shadow-lg relative"
          >
            <button
              type="button"
              onClick={toggleModal}
              className="absolute top-3 right-3 text-white text-2xl font-bold hover:text-gray-400"
              aria-label="Close Modal"
            >
              ×
            </button>

            <h2 className="text-2xl font-semibold text-white mb-6">
              Message Me!
            </h2>

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
          </motion.div>
        </div>
      )}
    </>
  );
};

export default ModalForm;
