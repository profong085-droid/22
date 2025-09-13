import { ProfileCard } from './components/ProfileCard';
import personImage from 'figma:asset/2025_04_11_01_24_IMG_7437.JPG';

export default function App() {
  const profileData = {
    name: "Haydon Duran",
    profession: "Entrepreneur", 
    image: personImage,
    dateOfBirth: "June 05, 2000",
    age: 25,
    bloodType: "AB+",
    zodiacSign: "♓ Pisces"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center p-4 overflow-hidden">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <h1 className="text-2xl text-white mb-2">Digital Profile Card</h1>
          <p className="text-gray-400 text-sm">Tap the card to reveal details</p>
        </div>
        
        <ProfileCard {...profileData} />
        
        <div className="text-center mt-8 text-gray-500 text-xs">
          <p>© 2024 Digital Identity</p>
        </div>
      </div>
    </div>
  );
}