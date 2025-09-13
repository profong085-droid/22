import { motion } from 'motion/react';
import { useState } from 'react';

interface ProfileCardProps {
  name: string;
  profession: string;
  image: string;
  dateOfBirth: string;
  age: number;
  bloodType: string;
  zodiacSign: string;
}

export function ProfileCard({
  name,
  profession,
  image,
  dateOfBirth,
  age,
  bloodType,
  zodiacSign
}: ProfileCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="perspective-1000 w-full max-w-[320px] mx-auto">
      <motion.div
        className="relative w-full h-[420px] cursor-pointer preserve-3d"
        animate={{ 
          rotateY: isFlipped ? 180 : 0,
          rotateX: -5,
          rotateZ: -3
        }}
        transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
        onClick={handleCardClick}
        style={{ transformStyle: "preserve-3d" }}
        whileHover={{ 
          scale: 1.05,
          rotateX: -2,
          rotateZ: -1
        }}
      >
        {/* Front Side */}
        <motion.div
          className="absolute inset-0 backface-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="w-full h-full bg-black/40 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 overflow-hidden relative">
            {/* Glassmorphism overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent"></div>
            
            {/* Background blur circles for depth */}
            <motion.div
              className="absolute top-20 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-20 left-10 w-24 h-24 bg-white/5 rounded-full blur-2xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Main Image */}
            <div className="flex items-center justify-center h-full p-8">
              <motion.div
                className="relative"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Glow effect behind image */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-3xl blur-xl"
                  animate={{
                    opacity: [0.3, 0.7, 0.3],
                    scale: [1.1, 1.3, 1.1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{ transform: "translate(-8px, -8px)" }}
                />
                
                {/* Main image */}
                <motion.img
                  src={image}
                  alt={name}
                  className="relative w-64 h-80 object-cover rounded-3xl border border-white/20 shadow-2xl"
                  animate={{
                    boxShadow: [
                      "0 20px 40px rgba(0,0,0,0.3), 0 0 30px rgba(255,255,255,0.1)",
                      "0 25px 50px rgba(0,0,0,0.4), 0 0 40px rgba(255,255,255,0.2)",
                      "0 20px 40px rgba(0,0,0,0.3), 0 0 30px rgba(255,255,255,0.1)"
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Interactive hint */}
                <motion.div
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm text-white text-xs px-4 py-2 rounded-full border border-white/20"
                  animate={{
                    y: [0, -3, 0],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  TAP TO REVEAL
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Back Side */}
        <motion.div
          className="absolute inset-0 backface-hidden"
          style={{ 
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          <div className="w-full h-full bg-black/40 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 overflow-hidden relative">
            {/* Glassmorphism overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent"></div>
            
            {/* Background elements */}
            <motion.div
              className="absolute top-16 left-8 w-20 h-20 bg-white/5 rounded-full blur-xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Content */}
            <div className="p-8 h-full flex flex-col justify-center">
              {/* Logo */}
              <motion.div
                className="text-center mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="w-16 h-16 mx-auto bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl flex items-center justify-center mb-4">
                  <div className="text-white text-2xl font-bold">Z</div>
                </div>
              </motion.div>
              
              {/* Name and Profession */}
              <motion.div
                className="text-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-white text-xl mb-1">{name}</h2>
                <p className="text-gray-300 text-sm">{profession}</p>
              </motion.div>
              
              {/* Details */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Date of Birth</span>
                  <span className="text-white text-sm">: {dateOfBirth}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Age</span>
                  <span className="text-white text-sm">: {age}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Blood</span>
                  <span className="text-white text-sm">: {bloodType}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Zodiac Sign</span>
                  <span className="text-white text-sm">: {zodiacSign}</span>
                </div>
              </motion.div>
              
              {/* Back hint */}
              <motion.div
                className="text-center mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <motion.div
                  className="bg-white/10 backdrop-blur-sm text-white text-xs px-4 py-2 rounded-full border border-white/20 inline-block"
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(255,255,255,0.1)",
                      "0 0 0 8px rgba(255,255,255,0)",
                      "0 0 0 0 rgba(255,255,255,0.1)"
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  TAP TO FLIP BACK
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}