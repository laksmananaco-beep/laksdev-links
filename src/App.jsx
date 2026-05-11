import { motion } from "framer-motion";
import { useState } from "react";

import {
  FaInstagram,
  FaWhatsapp,
  FaGithub,
  FaTiktok,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

import profile from "./assets/profile.jpg";

const projects = [
  {
    title: "Personal Branding",
    desc: "Modern portfolio website",
    icon: "🚀",
    url: "https://personal-branding-peach.vercel.app/",
  },

  {
    title: "LaksCoffee",
    desc: "Coffee shop landing page",
    icon: "☕",
    url: "https://lakscoffee.vercel.app/",
  },

  {
    title: "EduSmart",
    desc: "Modern school website",
    icon: "🏫",
    url: "https://edusmart-murex.vercel.app/",
  },
];

export default function App() {

  const [openProject, setOpenProject] = useState(false);

  return (
    <div className="min-h-screen bg-[#050816] text-white px-6 py-16 flex justify-center">

      <div className="w-full max-w-md">

        {/* PROFILE */}
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >

          {/* FOTO */}
          <div className="relative w-36 h-36 mx-auto mb-6">

            <div className="absolute inset-0 bg-cyan-400 blur-3xl opacity-30 rounded-full"></div>

            <img
              src={profile}
              alt="profile"
              className="relative w-full h-full rounded-full object-cover border-4 border-cyan-400"
            />
          </div>

          {/* NAMA */}
          <h1 className="text-5xl font-black mb-3">
            Laks<span className="text-cyan-400">Dev</span>
          </h1>

          {/* DESC */}
          <p className="text-gray-400 leading-relaxed">
            Web Developer • UI/UX • Tech Enthusiast
          </p>

        </motion.div>

       {/* SOCIAL MEDIA */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4 }}
  className="flex flex-wrap justify-center gap-4 mb-14"
>

  {/* FACEBOOK */}
  <a
    href="https://www.facebook.com/laksmana.laksmana.94043626/"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white/5 border border-white/10 hover:border-cyan-400 hover:scale-110 hover:-translate-y-1 transition duration-300 p-4 rounded-2xl text-xl"
  >
    <FaFacebookF />
  </a>

  {/* INSTAGRAM */}
  <a
    href="https://www.instagram.com/laks08/"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white/5 border border-white/10 hover:border-cyan-400 hover:scale-110 hover:-translate-y-1 transition duration-300 p-4 rounded-2xl text-xl"
  >
    <FaInstagram />
  </a>

  {/* LINKEDIN */}
  <a
    href="https://linkedin.com"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white/5 border border-white/10 hover:border-cyan-400 hover:scale-110 hover:-translate-y-1 transition duration-300 p-4 rounded-2xl text-xl"
  >
    <FaLinkedinIn />
  </a>

  {/* TIKTOK */}
  <a
    href="https://www.tiktok.com/@laksmana03"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white/5 border border-white/10 hover:border-cyan-400 hover:scale-110 hover:-translate-y-1 transition duration-300 p-4 rounded-2xl text-xl"
  >
    <FaTiktok />
  </a>

  {/* WHATSAPP */}
  <a
    href="https://wa.me/6283156623206"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white/5 border border-white/10 hover:border-cyan-400 hover:scale-110 hover:-translate-y-1 transition duration-300 p-4 rounded-2xl text-xl"
  >
    <FaWhatsapp />
  </a>

</motion.div>
{/* PROJECT */}
<div className="mt-10">

  {/* BUTTON */}
  <button
    onClick={() => setOpenProject(!openProject)}
    className="w-full bg-white/5 border border-white/10 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/10 rounded-3xl p-6 flex items-center justify-between transition duration-300"
  >

    <div className="flex items-center gap-4">

      <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 flex items-center justify-center text-2xl">
        📁
      </div>

      <div className="text-left">
        <h2 className="text-2xl font-bold">
          Projects
        </h2>

        <p className="text-gray-400 text-sm">
          View all landing page projects
        </p>
      </div>

    </div>

    <span className="text-2xl">
      {openProject ? "−" : "+"}
    </span>

  </button>

 {/* CONTENT */}
{openProject && (

  <motion.div
    initial={{ opacity: 0, height: 0 }}
    animate={{ opacity: 1, height: "auto" }}
    exit={{ opacity: 0, height: 0 }}
    transition={{
      duration: 0.4,
    }}
    className="space-y-5 mt-6 overflow-hidden"
  >

    {projects.map((link, index) => (

      <motion.a
        key={index}
        href={link.url}
        target="_blank"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: index * 0.15,
          duration: 0.5,
        }}
        whileHover={{
          scale: 1.03,
          y: -5,
        }}
        className="flex items-center gap-5 bg-white/5 border border-white/10 hover:border-cyan-400 rounded-3xl p-6 transition duration-300 hover:shadow-2xl hover:shadow-cyan-500/10"
      >

        {/* ICON */}
        <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 flex items-center justify-center text-2xl">
          {link.icon}
        </div>

        {/* TEXT */}
        <div>
          <h3 className="text-xl font-semibold">
            {link.title}
          </h3>

          <p className="text-gray-400 text-sm mt-1">
            {link.desc}
          </p>
        </div>

      </motion.a>

    ))}

  </motion.div>
)}

</div>

      </div>
    </div>
  );
}
