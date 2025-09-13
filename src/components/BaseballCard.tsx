import { motion } from 'motion/react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface PlayerStats {
  battingAverage: string;
  homeRuns: number;
  rbi: number;
  gamesPlayed: number;
  position: string;
  team: string;
  years: string;
}

interface BaseballCardProps {
  playerName: string;
  playerImage: string;
  team: string;
  position: string;
  jerseyNumber: number;
  stats: PlayerStats;
  bio: string;
}

export function BaseballCard({
  playerName,
  playerImage,
  team,
  position,
  jerseyNumber,
  stats,
  bio
}: BaseballCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="perspective-1000 w-full max-w-[280px] mx-auto">
      <motion.div
        className="relative w-full h-[400px] cursor-pointer preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        onClick={handleCardClick}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <motion.div
          className="absolute inset-0 backface-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="w-full h-full bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-lg shadow-2xl border-4 border-white overflow-hidden">
            {/* Header with team logo area */}
            <div className="bg-white p-3 border-b-2 border-red-600">
              <div className="flex justify-between items-center">
                <div className="text-blue-800 text-xs uppercase tracking-wide">Baseball Card</div>
                <div className="text-blue-800 text-xs">#{jerseyNumber}</div>
              </div>
            </div>
            
            {/* Player Image */}
            <div className="relative h-48 bg-gradient-to-b from-green-400 to-green-600 flex items-end justify-center">
              <ImageWithFallback
                src={playerImage}
                alt={playerName}
                className="w-32 h-40 object-cover rounded-lg border-3 border-white shadow-lg mb-2"
              />
            </div>
            
            {/* Player Info */}
            <div className="bg-white p-4 text-center">
              <h2 className="text-blue-800 text-lg uppercase tracking-wide mb-1">{playerName}</h2>
              <div className="text-red-600 text-sm mb-2">{position} • {team}</div>
              <div className="bg-red-600 text-white text-xs py-1 px-3 rounded-full inline-block">
                TAP TO FLIP
              </div>
            </div>
            
            {/* Bottom border design */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-red-600 via-white to-blue-600"></div>
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
          <div className="w-full h-full bg-gradient-to-br from-red-600 via-red-700 to-red-800 rounded-lg shadow-2xl border-4 border-white overflow-hidden">
            {/* Header */}
            <div className="bg-white p-3 border-b-2 border-blue-600">
              <div className="text-center">
                <div className="text-red-800 text-sm uppercase tracking-wide">Player Stats</div>
                <div className="text-red-800 text-xs">{stats.years}</div>
              </div>
            </div>
            
            {/* Stats Grid */}
            <div className="p-4 space-y-3">
              <div className="bg-white rounded-lg p-3 shadow-inner">
                <h3 className="text-red-800 text-center text-sm mb-3 uppercase tracking-wide">Season Statistics</h3>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="text-center">
                    <div className="text-blue-800">BATTING AVG</div>
                    <div className="text-red-600 text-lg">{stats.battingAverage}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-blue-800">HOME RUNS</div>
                    <div className="text-red-600 text-lg">{stats.homeRuns}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-blue-800">RBI</div>
                    <div className="text-red-600 text-lg">{stats.rbi}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-blue-800">GAMES</div>
                    <div className="text-red-600 text-lg">{stats.gamesPlayed}</div>
                  </div>
                </div>
              </div>
              
              {/* Bio Section */}
              <div className="bg-white rounded-lg p-3 shadow-inner">
                <h4 className="text-red-800 text-center text-xs mb-2 uppercase tracking-wide">Player Bio</h4>
                <p className="text-blue-800 text-xs leading-relaxed text-center">{bio}</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-600 text-white text-xs py-1 px-3 rounded-full inline-block">
                  TAP TO FLIP BACK
                </div>
              </div>
            </div>
            
            {/* Bottom border design */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-600 via-white to-red-600"></div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}