import { useState, useEffect, useRef } from "react";
import SectionHeader from "../utils/selectionHeader.jsx";
import { useTranslation } from "react-i18next";

const CertificateCard = ({ icon, title, description, pdfPath, isActive, position, onMouseEnter, onMouseLeave }) => {
  const { t } = useTranslation();
  
  const openPdf = () => {
    if (isActive) {
      window.open(pdfPath, "_blank");
    }
  };

  let rotateY = 0;
  let scale = 1;
  let zIndex = 1;
  let opacity = 1;

  if (position === 'left') {
    rotateY = 45;
    scale = 0.85;
    opacity = 0.7;
  } else if (position === 'right') {
    rotateY = -45;
    scale = 0.85;
    opacity = 0.7;
  } else if (position === 'center') {
    zIndex = 10;
  } else {
    opacity = 0;
    scale = 0.7;
  }

  return (
    <div
      className={`certificate-card absolute transition-all duration-500 ease-in-out cursor-pointer select-none ${isActive ? 'active' : ''}`}
      style={{
        transform: `perspective(1000px) rotateY(${rotateY}deg) scale(${scale})`,
        zIndex,
        opacity,
        left: position === 'left' ? '30%' : position === 'center' ? '50%' : position === 'right' ? '70%' : '50%',
        marginLeft: position === 'left' ? '-175px' : position === 'center' ? '-175px' : position === 'right' ? '-175px' : '-175px',
      }}
      onClick={openPdf}
      onMouseEnter={() => isActive && onMouseEnter()}
      onMouseLeave={onMouseLeave}
    >
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-xl border border-blue-900/30 transform transition-all hover:shadow-[0_4px_20px_rgba(59,130,246,0.2)] hover:border-blue-700/40 hover:scale-105 w-[350px] h-[250px] flex flex-col items-center text-center">
        <div className="text-4xl mb-3">{icon}</div>
        <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent mb-2">
          {title}
        </h3>
        <p className="text-gray-300 text-sm mt-2">{description}</p>
        
        {isActive && (
          <div className="mt-4">
            <span className="text-blue-400 text-sm flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd"></path>
              </svg>
              {t("clickToViewCertificate")}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

function Certs() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const [startX, setStartX] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [dragVelocity, setDragVelocity] = useState(0);
  const [lastDragTime, setLastDragTime] = useState(0);
  const [lastDragX, setLastDragX] = useState(0);
  

  const certificates = [
     {
      icon: "🎤",
      title: t("certificates.publicSpeaking.title"),
      description: t("certificates.publicSpeaking.description"),
      pdfPath: "/certs/Topluluk_Önünde_Konuşma_ve_Etkili_Sunum_Teknikleri_Sertifika.pdf"
    },
    {
      icon: "🔍",
      title: t("certificates.api.title"),
      description: t("certificates.api.description"),
      pdfPath: "/certs/API_ve_API_Testi_Sertifika.pdf"
    },
    {
      icon: "💻",
      title: t("certificates.cpp.title"),
      description: t("certificates.cpp.description"),
      pdfPath: "/certs/C++_ile_Programlamaya_Giriş__Sertifika.pdf"
    },
    {
      icon: "🛡️",
      title: t("certificates.ddos.title"),
      description: t("certificates.ddos.description"),
      pdfPath: "/certs/DoS___DDos_Saldırıları_ve_Koruma_Sertifika.pdf"
    },
    {
      icon: "🌐",
      title: t("certificates.html5.title"),
      description: t("certificates.html5.description"),
      pdfPath: "/certs/HTML5_ile_Web_Geliştirme_Sertifika.pdf"
    },
    {
      icon: "🐧",
      title: t("certificates.linux.title"),
      description: t("certificates.linux.description"),
      pdfPath: "/certs/Siber_Güvenlikte_Linux_İşletim_Sistemleri_Sertifika.pdf"
    }
  ];


  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging && !isHovering) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [certificates.length, isDragging, isHovering]);


  const handleMouseDown = (e) => {
    setStartX(e.clientX);
    setLastDragX(e.clientX);
    setLastDragTime(Date.now());
    setIsDragging(true);
  };

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
    setLastDragX(e.touches[0].clientX);
    setLastDragTime(Date.now());
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    
    const now = Date.now();
    const timeDiff = now - lastDragTime;
    if (timeDiff > 0) {
      const velocity = (e.clientX - lastDragX) / timeDiff; 
      setDragVelocity(velocity);
      setLastDragX(e.clientX);
      setLastDragTime(now);
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    
    const now = Date.now();
    const timeDiff = now - lastDragTime;
    if (timeDiff > 0) {
      const velocity = (e.touches[0].clientX - lastDragX) / timeDiff; 
      setDragVelocity(velocity);
      setLastDragX(e.touches[0].clientX);
      setLastDragTime(now);
    }
  };

  const applyMomentum = () => {
    if (Math.abs(dragVelocity) > 0.5) { 
      if (dragVelocity > 0) {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + certificates.length) % certificates.length);
      } else {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length);
      }
    } else {

      const diffX = startX - lastDragX;
      if (Math.abs(diffX) > 20) {
        if (diffX > 0) {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length);
        } else {
          setCurrentIndex((prevIndex) => (prevIndex - 1 + certificates.length) % certificates.length);
        }
      }
    }
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    applyMomentum();
    setIsDragging(false);
    setDragVelocity(0);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    applyMomentum();
    setIsDragging(false);
    setDragVelocity(0);
  };

  // Hover handlers for the active card
  const handleCardMouseEnter = () => {
    setIsHovering(true);
  };

  const handleCardMouseLeave = () => {
    setIsHovering(false);
  };

  const getCardPosition = (index) => {
    const relativeIndex = (index - currentIndex + certificates.length) % certificates.length;
    
    if (relativeIndex === 0) return 'center';
    if (relativeIndex === 1 || relativeIndex === certificates.length - 1) return relativeIndex === 1 ? 'right' : 'left';
    
    return 'offscreen';
  };

  return (
    <>
      <SectionHeader subtitle={t("certificatesSubtitle")} title={t("certificatesTitle")} />

      <div className="relative mt-16 mb-16">
        <div 
          ref={carouselRef}
          className="certificate-carousel relative h-[350px] w-full flex justify-center items-center select-none"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={(e) => {
            handleMouseUp(e);
            setIsHovering(false);
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{
            cursor: isDragging ? 'grabbing' : 'grab',
            touchAction: 'pan-x'
          }}
        >
          {certificates.map((cert, index) => (
            <CertificateCard
              key={index}
              icon={cert.icon}
              title={cert.title}
              description={cert.description}
              pdfPath={cert.pdfPath}
              isActive={index === currentIndex}
              position={getCardPosition(index)}
              onMouseEnter={handleCardMouseEnter}
              onMouseLeave={handleCardMouseLeave}
            />
          ))}
        </div>

        <div className="flex justify-center mt-8">
          {certificates.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full mx-1.5 transition-all duration-300 ${
                index === currentIndex ? 'bg-blue-500 scale-125' : 'bg-gray-600 hover:bg-gray-500'
              }`}
              onClick={() => setCurrentIndex(index)}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            ></button>
          ))}
        </div>
      </div>
    </>
  );
}

export default Certs;
