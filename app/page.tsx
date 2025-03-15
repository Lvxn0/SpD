"use client";

import { Button } from "@/components/ui/button";
import { Film, Play, Camera, Instagram, Youtube, Facebook } from "lucide-react";
import { motion } from "framer-motion";
import ModalForm from "@/components/ModalForm";
import Socials from "@/components/Socials";

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
              "url('https://images.unsplash.com/photo-1604954055722-7f80571fbfc3?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxfHx2aWRlb3MlMkMlMjBzYWxzYXxlbnwwfHx8fDE2OTM4ODI4MTl8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=2036&h=1168')",
            backgroundSize: "cover",
            backgroundPosition: "center 20%",
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
            <h1 className="mt-[20px] text-3xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 text-white px-4">
              Discover the World of Social Dance
            </h1>
            <p className="text-lg sm:text-xl md:text-4xl text-gray-200 mb-6 md:mb-8 px-4">
              Capturing the Rhythm and Energy of Latin Dance Festivals
            </p>
            <a href="#contact">
              <ModalForm />
            </a>
          </motion.div>
        </div>

        <Socials />
      </section>

      {/* Welcome */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
            <div className="w-full md:w-1/2">
              <img
                className="w-full rounded-lg"
                src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwzfHx2aWRlb3MlMkMlMjBkYW5jZXxlbnwwfHx8fDE2OTM4ODI4MTl8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=861&h=602"
              />
            </div>
            <div className="flex flex-col justify-start w-full md:w-1/2">
              <h1 className="text-xl font-bold mt-0 md:mt-5 mb-8 text-gray-500">
                First of All
              </h1>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold mb-3 text-white">
                  Welcome to Special Dance Tv
                </h1>
                <p className="text-lg md:text-xl text-gray-200">
                  Experience the energy and excitement of salsa, bachata, cha
                  cha, and kizomba dance festivals through our high-quality
                  video recordings. We also offer aerial drone videos and photos
                  to capture the festival atmosphere from unique perspectives.
                  Join us as we bring the world of dance to your screen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
            <div className="flex flex-col justify-start w-full md:w-1/2 order-2 md:order-1">
              <h1 className="text-xl font-bold mt-0 md:mt-5 mb-8 text-gray-500">
                Not to Mention
              </h1>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold mb-3 text-white">
                  Capturing the Magic of Latin Dance Festivals
                </h1>
                <p className="text-lg md:text-xl text-gray-200">
                  Immerse yourself in the vibrant world of salsa, bachata, cha
                  cha, and kizomba dance through our expertly recorded videos.
                  Our team captures the best moments at Latin dance festivals,
                  showcasing the talent and excitement of dancers from around
                  the world. With aerial drone footage and stunning photography,
                  we bring the festival experience to life. From festival
                  promotions to special events, we create captivating videos
                  that celebrate the joy of dance.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <img
                className="w-full rounded-lg"
                src="https://images.unsplash.com/photo-1504609813442-a8924e83f76e?auto=format&fit=crop&w=861&h=602"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 md:px-8 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
            <div className="w-full md:w-1/2">
              <img
                className="w-full rounded-lg"
                src="https://images.unsplash.com/photo-1574446615002-35ec8a8f0da2?auto=format&fit=crop&w=861&h=699"
              />
            </div>
            <div className="flex flex-col justify-start w-full md:w-1/2">
              <h1 className="text-xl font-bold mt-5 mb-8 text-gray-500">
                And Let's Not Forget{" "}
              </h1>
              <div>
                <h1 className="text-3xl font-bold mb-3 text-white">
                  Unforgettable Memories for Every Occasion{" "}
                </h1>
                <p className="text-xl text-gray-200">
                  Make your weddings, baptisms, and other special events truly
                  memorable with our fun intro videos. We specialize in creating
                  captivating and personalized videos that capture the essence
                  of your celebration. Whether you want to relive the joy of
                  your wedding day or create a unique keepsake for a baptism,
                  our team will bring your vision to life. Let us add a touch of
                  magic to your special moments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-12 text-center">
            Featured Work
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
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
      <section className="bg-black/30 py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-12 text-center">
            Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
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
      <footer className="border-t border-white/10 py-6 md:py-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-center md:text-left">
            © 2025 Special Dance Tv. All rights reserved.
          </p>
          <div className="flex space-x-4 md:space-x-6">
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
