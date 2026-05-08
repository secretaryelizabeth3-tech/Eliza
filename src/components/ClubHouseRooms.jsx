import React from 'react';
import './ClubHouseRooms.css';

const rooms = [
  {
    id: 'classroom',
    name: 'The Classroom',
    subtitle: 'Where Discipline is the Lesson',
    desc: 'Step into The Classroom, a space designed for those who never quite learned their lessons. Here, misbehavior is met with swift correction, and naughty students get exactly what they deserve.',
    img: 'https://fetishreels.com/assets/global/rooms/the-classroom.jpg',
  },
  {
    id: 'wrestling',
    name: 'Wrestling Room',
    subtitle: 'Where Strength Meets Seduction',
    desc: 'Mixed Wrestling at Pandora\'s Box NY: premier destination for mixed wrestling, offering strength meets seduction in a fully equipped space.',
    img: 'https://fetishreels.com/assets/global/rooms/wrestling-room.jpg',
  },
  {
    id: 'shibari',
    name: 'Shibari Room',
    subtitle: 'Full-Body Bondage & Suspension',
    desc: 'Enter the tranquil realm of our Shibari Room — promoting serenity for safe full-body bondage and suspension in a beautifully curated space.',
    img: 'https://fetishreels.com/assets/global/rooms/shibari-room.jpg',
  },
  {
    id: 'medical',
    name: 'Medical Chamber',
    subtitle: 'Inspired by Fritz Lang\'s Metropolis',
    desc: 'Beneath the spider-like chrome chandeliers, within the puckered walls — the Medical Chamber was designed for clinical precision and complete control.',
    img: 'https://fetishreels.com/assets/global/rooms/medical-chamber.jpg',
  },
  {
    id: 'boudoir',
    name: 'Pink Boudoir',
    subtitle: 'Feminisation & Cross-Dressing',
    desc: 'In the Pink Boudoir you will find an abundance of corsets, garter belts, stockings, petticoats, fishnets, mini skirts, stilettos, boots, wigs and more.',
    img: 'https://fetishreels.com/assets/global/rooms/pink-budoir.jpg',
  },
  {
    id: 'torture',
    name: 'Chinese Torture',
    subtitle: 'Instruments of Exquisite Pain',
    desc: 'Tremble as you behold instruments of pain. As you crawl before your Master, your eyes attempting to focus upon the lantern-lit chamber.',
    img: 'https://fetishreels.com/assets/global/rooms/room_101.jpg',
  },
  {
    id: 'sanctum',
    name: 'The Sanctum',
    subtitle: 'Sixteenth Century Church Replica',
    desc: 'The Spanish Inquisition inspired this replica of a sixteenth century church. Its stone walls and archways serve as the perfect setting for an hour or more of sacred submission.',
    img: 'https://fetishreels.com/assets/global/rooms/media/sanc-001.jpg',
  },
  {
    id: 'ming',
    name: 'Ming Palace',
    subtitle: 'Twelfth Century Chinese Warlord',
    desc: 'Travel back in time to the palace of a Chinese Warlord. The room is resplendent with silk fabrics, oriental rugs, gold ornaments and an atmosphere of absolute power.',
    img: 'https://fetishreels.com/assets/global/rooms/ming-palace.jpg',
  },
];

export default function ClubHouseRooms({ onNavigate }) {
  return (
    <div className="rooms-page">
      <div className="rooms-hero">
        <div className="container">
          <span className="chip">ClubHouse</span>
          <h1 className="rooms-title">OUR<br /><span>ROOMS</span></h1>
          <p className="rooms-sub">Eight distinct spaces. Each crafted for a different fantasy.</p>
        </div>
      </div>

      <div className="container">
        <div className="rooms-grid">
          {rooms.map((room, i) => (
            <div className="room-card" key={room.id}>
              <div className="room-img-wrap">
                <img
                  src={room.img}
                  alt={room.name}
                  loading="lazy"
                  onError={e => { e.target.src = 'https://via.placeholder.com/400x260/111118/7c3aed?text=Room'; }}
                />
                <span className="room-number">{String(i + 1).padStart(2,'0')}</span>
              </div>
              <div className="room-body">
                <p className="room-subtitle">{room.subtitle}</p>
                <h3 className="room-name">{room.name}</h3>
                <p className="room-desc">{room.desc}</p>
                <button
                  className="btn btn-primary room-btn"
                  onClick={() => onNavigate('reservation')}
                >
                  Book This Room
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
