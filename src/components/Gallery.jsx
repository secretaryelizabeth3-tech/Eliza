import React from 'react';
import './Gallery.css';

const images = [
  'https://static.wixstatic.com/media/ffc933_ae53db3ba1c44873b3e5e7220aa2b85f~mv2.jpg/v1/fill/w_313,h_313,q_75,enc_avif,quality_auto/ffc933_ae53db3ba1c44873b3e5e7220aa2b85f~mv2.jpg',
  'https://static.wixstatic.com/media/ffc933_f9ce3740939345009299d4bf85b35b5a~mv2.jpg/v1/fill/w_314,h_313,q_75,enc_avif,quality_auto/ffc933_f9ce3740939345009299d4bf85b35b5a~mv2.jpg',
  'https://static.wixstatic.com/media/ffc933_79cb45fb474a4f2bbb74a212fde8f74c~mv2.jpg/v1/fill/w_313,h_313,q_75,enc_avif,quality_auto/ffc933_79cb45fb474a4f2bbb74a212fde8f74c~mv2.jpg',
  'https://static.wixstatic.com/media/ffc933_b7b0c458a2bf439dbb52c566b0aa2147~mv2.jpg/v1/fill/w_313,h_313,q_75,enc_avif,quality_auto/ffc933_b7b0c458a2bf439dbb52c566b0aa2147~mv2.jpg',
  'https://static.wixstatic.com/media/ffc933_26027b472f7246f2bb73fbf8753048ee~mv2.jpg/v1/fill/w_314,h_313,q_75,enc_avif,quality_auto/ffc933_26027b472f7246f2bb73fbf8753048ee~mv2.jpg',
  'https://static.wixstatic.com/media/ffc933_17070f4a9c1941dda7a0458385e2c5ff~mv2.jpg/v1/fill/w_313,h_313,q_75,enc_avif,quality_auto/ffc933_17070f4a9c1941dda7a0458385e2c5ff~mv2.jpg',
  'https://static.wixstatic.com/media/ffc933_dc68de4edf6c4b7da34ce28fe2bb9ebd~mv2.jpg/v1/fill/w_313,h_313,q_75,enc_avif,quality_auto/ffc933_dc68de4edf6c4b7da34ce28fe2bb9ebd~mv2.jpg',
  'https://static.wixstatic.com/media/ffc933_d0eea5167a544a5a9bf902f4967e5cf7~mv2.jpg/v1/fill/w_314,h_313,q_75,enc_avif,quality_auto/ffc933_d0eea5167a544a5a9bf902f4967e5cf7~mv2.jpg',
  'https://static.wixstatic.com/media/ffc933_39de4431b7ee45be8852c4c1fc387c37~mv2.jpg/v1/fill/w_313,h_313,q_75,enc_avif,quality_auto/ffc933_39de4431b7ee45be8852c4c1fc387c37~mv2.jpg',
];

export default function Gallery({ onNavigate }) {
  return (
    <section className="gallery-section">
      <div className="container">
        <span className="chip">Club Rooms</span>
        <div className="gallery-header-row">
          <h2 className="gallery-title">CLUBHOUSE</h2>
          <button className="btn btn-ghost gallery-all-btn" onClick={() => onNavigate('rooms')}>
            View All Rooms →
          </button>
        </div>
      </div>
      <div className="gallery-scroll">
        {images.map((src, i) => (
          <div className="gallery-card" key={i} onClick={() => onNavigate('rooms')}>
            <img
              src={src} alt={`Room ${i + 1}`} loading="lazy"
              onError={e => { e.target.parentElement.style.display = 'none'; }}
            />
            <div className="gallery-card-overlay">
              <span>Room {String(i + 1).padStart(2, '0')}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
