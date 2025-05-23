import SectionHeader from "../utils/selectionHeader.jsx";
import { useTranslation } from "react-i18next";

const HobbyCard = ({ title, image, description, icon, hoursPlayed, t }) => (
  <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 sm:p-6 rounded-xl border border-blue-900/30 transform transition-all hover:shadow-[0_4px_20px_rgba(59,130,246,0.2)] hover:border-blue-700/40 hover:scale-105 hover:-translate-y-1 relative">
    <div className="flex flex-col items-center text-center">
      <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">{icon}</div>
      <img
        src={image}
        alt={title}
        className="w-full h-32 sm:h-40 object-cover rounded-lg mb-3 sm:mb-4 opacity-80 hover:opacity-100 transition-opacity"
      />
      <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent mb-2">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-gray-300">{description}</p>
    </div>

    {hoursPlayed !== undefined && (
      <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-blue-900/80 text-blue-200 text-xs font-medium py-1 px-2 sm:px-2.5 rounded-full border border-blue-700 flex items-center">
        <svg
          className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
            clipRule="evenodd"
          ></path>
        </svg>
        {hoursPlayed}+ {t("hours")}
      </div>
    )}
  </div>
);

function Body() {
  const { t } = useTranslation();

  const hobbies = [
    {
      title: t("hobbies.bannerlord.title"),
      image: "/images/hobies/bannerlord.jpg",
      icon: "⚔️",
      description: t("hobbies.bannerlord.description"),
      hoursPlayed: 1400,
    },
    {
      title: t("hobbies.chess.title"),
      image: "/images/hobies/chess.png",
      icon: "♟️",
      description: t("hobbies.chess.description"),
      hoursPlayed: undefined,
    },
    {
      title: t("hobbies.citiesSkylines.title"),
      image: "/images/hobies/cities-skylines.webp",
      icon: "🏙️",
      description: t("hobbies.citiesSkylines.description"),
      hoursPlayed: 177,
    },
  ];

  return (
    <>
      <SectionHeader
        subtitle={t("hobbiesSubtitle")}
        title={t("hobbiesTitle")}
      />

      <div className="relative mt-8 sm:mt-12 w-11/12 sm:w-4/5 mx-auto mb-16 px-2 sm:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {hobbies.map((hobby, index) => (
            <HobbyCard
              key={index}
              title={hobby.title}
              image={hobby.image}
              icon={hobby.icon}
              description={hobby.description}
              hoursPlayed={hobby.hoursPlayed}
              t={t}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Body;
