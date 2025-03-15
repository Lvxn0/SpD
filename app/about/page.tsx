"use client";

import { motion } from "framer-motion";
import { Instagram, Youtube, Facebook, Film, Camera } from "lucide-react";
import ModalForm from "@/components/ModalForm";
import Socials from "@/components/socials";

export default function About() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex flex-col items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1545959570-a94084071b5d?auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
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
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              The Story Behind Special Dance TV
            </p>
          </motion.div>
        </div>
        <Socials />
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
              <p className="text-gray-300 text-lg mb-6">
                Social Dance Tv UK is a leading brand in producing media and
                video content for the dance community. Our team travels to Latin
                dance festivals worldwide, capturing the essence of the dances
                and sharing them with dancers and enthusiasts everywhere.
              </p>
              <p className="text-gray-300 text-lg">
                {" "}
                We specialize in recording salsa, bachata, cha cha, and kizomba,
                as well as aerial drone videos and photos. Join us on this
                exciting journey and let us bring the world of dance to you.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxfHx2aWRlb3MlMkMlMjBkYW5jZXxlbnwwfHx8fDE2OTM4ODI4MTl8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=984&h=577"
                alt="Our story"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black/30 py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Our Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Passion for Dance",
                desc: "We are driven by our love for dance, and we strive to capture the energy and excitement of every performance.",
              },
              {
                title: "Quality Productions",
                desc: "We are committed to delivering high-quality videos and media content that showcase the beauty and skill of social dance.",
              },
              {
                title: "Global Reach",
                desc: "We aim to connect dancers from all around the world by sharing our videos on popular social media platforms.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="text-center p-6 py-10 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}

      {/* Connect With Us */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Connect With Us{" "}
          </h2>

          <ModalForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400">
            © 2025 Special Dance Tv. All rights reserved.
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
