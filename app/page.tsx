"use client";

import { Button } from "@/components/ui/button";
import { Film, Play, Camera, Instagram, Youtube, Facebook } from "lucide-react";
import { motion } from "framer-motion";
import ModalForm from "@/components/ModalForm";

const featuredVideos = [
  {
    thumbnail: "https://img.youtube.com/vi/xEG3hgNi8rU/hqdefault.jpg",
    video: "https://www.youtube.com/watch?v=xEG3hgNi8rU",
  },
  {
    thumbnail: "https://img.youtube.com/vi/zK7f4Wqq358/hqdefault.jpg",
    video: "https://www.youtube.com/watch?v=zK7f4Wqq358",
  },
  {
    thumbnail: "https://img.youtube.com/vi/zX2rT9e-2NM/hqdefault.jpg",
    video: "https://www.youtube.com/watch?v=zX2rT9e-2NM",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=2000&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center 38%",
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
            <h1 className="mt-[20px] text-5xl md:text-7xl font-bold mb-6 text-white">
              Your Dance, Our Lens
            </h1>
            <p className="text-xl md:text-4xl text-gray-200 mb-8">
              Perfectly Framed
            </p>
            <a href="#contact">
              <Button
                size="lg"
                className="mt-[50px] bg-white text-black hover:bg-gray-400 transition duration-300 rounded-[20px] outline-none"
              >
                Get in Touch
              </Button>
            </a>
          </motion.div>
        </div>

        <div className="absolute bottom-8 flex space-x-8 text-white z-10 animate__animated animate__fadeIn animate__delay-1s">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex space-x-8"
          >
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
          </motion.div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Featured Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredVideos.map((video, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg aspect-video"
              >
                <img
                  src={video.thumbnail}
                  alt={`Dance film ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    variant="outline"
                    className="text-white border-white hover:bg-white/20"
                    onClick={() => window.open(video.video, "_blank")}
                  >
                    Watch Video
                    <Play className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-black/30 py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Camera,
                title: "Cinematic Filming",
                desc: "Capturing stunning moments of social dance with top-tier cameras. From ground-level to the skies with drone shots for those breathtaking aerial perspectives.",
              },
              {
                icon: Film,
                title: "Creative Editing",
                desc: "Transforming raw footage into polished, narrative-driven masterpieces. Whether it's smooth transitions, special effects, or syncing with music—your dance story comes to life.",
              },
              {
                icon: Instagram,
                title: "Social Media Content",
                desc: "Engaging, short-form content tailored for social media. Perfect for showcasing the energy of your events in quick, captivating videos that grab attention and drive engagement.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300"
              >
                <service.icon className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Bring Your Dance to Life
          </h2>
          <p id="contact" className="text-gray-400 mb-8">
            Available for Bookings
          </p>

          <ModalForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400">
            © 2025 Special Dance Tv UK. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="https://www.instagram.com/specialdancetv/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.youtube.com/@specialdancetv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              YouTube
            </a>
            <a
              href="https://www.facebook.com/socialdancetvuk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
