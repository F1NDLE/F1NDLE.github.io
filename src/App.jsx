import { motion } from "framer-motion";
import { Smartphone, Code, Gamepad2, Cpu, User, Zap, Terminal, Heart, Link2 } from "lucide-react";

export default function App() {
  const sections = [
    {
      title: "Devices",
      icon: Smartphone,
      items: [
        "Samsung Galaxy Note 7 (flashed)",
        "POCO X4 GT (vendor boot customized)",
        "Redmi Note 12S (rooted)",
        "Pixel 7 Pro (rooted)",
        "iPhone 13 (pink edition)",
        "iPhone 15 (latest setup)"
      ]
    },
    {
      title: "Development",
      icon: Code,
      items: [
        "Scripts & automation tools",
        "Magisk/KernelSU module development",
        "Custom ROM flashing & maintenance",
        "System-level customizations"
      ]
    },
    {
      title: "Gaming",
      icon: Gamepad2,
      items: [
        "Call of Duty (Mobile & PC)",
        "Peacekeeper Elite (China version)",
        "Brawl Stars & Arena Breakout",
        "Valorant (Mobile & PC)",
        "Delta Force & CS2"
      ]
    },
    {
      title: "Systems",
      icon: Cpu,
      items: [
        "Phones: hyperOS (by greeshan), Evolution X (Pixel)",
        "iPhones: iOS 26 custom setups",
        "PC: Arch Linux (main workstation, Kernel 6.10)"
      ]
    },
    {
      title: "Credits",
      icon: Heart,
      items: [
        { text: "Magisk", url: "https://topjohnwu.github.io/Magisk/" },
        { text: "KernelSU", url: "https://kernelsu.org/" },
        { text: "APatch", url: "https://github.com/bmax121/APatch" },
        { text: "MALW.link", url: "https://malw.link" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-950 to-black text-gray-200 font-sans">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20"
          animate={{ scale: [1.1, 0.9, 1.1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-12">
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-6 p-4 bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl">
            <User className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-300 mb-4">
            F1NDLE
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            14-year-old developer & tech enthusiast exploring the boundaries of mobile systems and game development
          </p>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-gray-900/70 backdrop-blur-sm border border-purple-900/50 rounded-2xl p-8 shadow-xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-600/10 rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-600/10 rounded-tr-full" />
              
              <div className="relative z-10 mb-6 flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-500 rounded-2xl">
                <section.icon className="w-8 h-8 text-white" />
              </div>
              
              <h2 className="relative z-10 text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-300">
                {section.title}
              </h2>
              
              <ul className="relative z-10 space-y-3">
                {section.items.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + itemIndex * 0.05 }}
                    className="flex items-start pl-6 border-l-2 border-purple-500/50 py-1"
                  >
                    <Zap className="w-4 h-4 mr-2 mt-1 text-purple-400 flex-shrink-0" />
                    {typeof item === 'string' ? (
                      <span className="text-gray-300">{item}</span>
                    ) : (
                      <a 
                        href={item.url} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-300 hover:text-blue-100 transition-colors flex items-center group/link"
                      >
                        {item.text}
                        <Link2 className="w-3 h-3 ml-1 text-purple-400 group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="relative bg-gray-900/80 backdrop-blur border border-purple-900/50 rounded-2xl p-6 md:p-8 mb-16 overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-r from-purple-900 to-blue-900 flex items-center px-4 space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          
          <div className="relative z-10 pt-6">
            <div className="flex items-start mb-4">
              <Terminal className="w-6 h-6 text-purple-400 mt-1 mr-3 flex-shrink-0" />
              <div>
                <p className="text-purple-400">user@f1ndle-system:~$</p>
                <p className="text-green-400 mt-1">echo "System Status"</p>
              </div>
            </div>
            
            <div className="bg-gray-950 border border-purple-900/30 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <p className="text-green-400">Active Systems:</p>
              <p className="text-blue-300 ml-4">├── Mobile: HyperOS (POCO), EvolutionX (Pixel), iOS 26 (iPhones)</p>
              <p className="text-blue-300 ml-4">├── Desktop: Arch Linux (Kernel 6.10)</p>
              <p className="text-blue-300 ml-4">└── Development: React, Python, Bash, Magisk Modules</p>
              <p className="mt-3 text-yellow-300">// All systems operational at 98% efficiency //</p>
              <p className="mt-3 text-cyan-300">// Credits loaded: Magisk, KernelSU, APatch, MALW.link //</p>
            </div>
          </div>
        </motion.div>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center py-8 border-t border-purple-900/50"
        >
          <p className="text-gray-400 mb-4">
            Crafted with <span className="text-red-500">♥</span> in Arch Linux • System Uptime: 14 years
          </p>
          <p className="text-sm text-purple-300 mb-4">
            This website is built with React.js + Tailwind CSS. No external CSS files needed - all styling is done through utility classes.
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <motion.a
              href="https://github.com/F1NDLE"
              target="_blank"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-purple-900/50 hover:bg-purple-800/70 border border-purple-700 rounded-lg transition-colors"
            >
              GitHub
            </motion.a>
            <motion.a
              href="https://t.me/F1NDLE_cn"
              target="_blank"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-purple-900/50 hover:bg-purple-800/70 border border-purple-700 rounded-lg transition-colors"
            >
              Telegram
            </motion.a>
          </div>
        </motion.footer>
      </div>
    </div>
  );
      }
