import SectionHeader from "../utils/selectionHeader";
import { useTranslation } from "react-i18next";

const SkillTag = ({ name, color }) => {
  const colorClasses = {
    blue: "bg-blue-900/60 text-blue-300 border-blue-700/50",
    gray: "bg-gray-800 text-gray-300 border-gray-700",
    yellow: "bg-yellow-900/60 text-yellow-300 border-yellow-700/50",
    orange: "bg-orange-900/60 text-orange-300 border-orange-700/50",
    red: "bg-red-900/60 text-red-300 border-red-700/50",
  };
  
  return (
    <span className={`px-3 py-1 ${colorClasses[color]} rounded-full text-xs font-medium border transition-all hover:scale-110 hover:-translate-y-1`}>
      {name}
    </span>
  );
};

const FeatureCard = ({ emoji, title, children, skills = [] }) => (
  <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-xl border border-blue-900/30 transform transition-all hover:shadow-[0_4px_20px_rgba(59,130,246,0.2)] hover:border-blue-700/40 hover:scale-105 hover:-translate-y-1">
    <div className="flex items-center mb-3">
      <span className="text-2xl mr-2">{emoji}</span>
      <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">{title}</h2>
    </div>
    <div className="text-gray-300 ml-9">
      {children}
    </div>
    
    {skills.length > 0 && (
      <div className="mt-4 ml-9 flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <SkillTag key={index} name={skill.name} color={skill.color} />
        ))}
      </div>
    )}
  </div>
);

const ProfileSection = ({ githubData }) => {
  const socialLinks = [
    { 
      url: "https://github.com/DeveloperKubilay", 
      color: "bg-gray-700 hover:bg-blue-700", 
      icon: <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
    },
    { 
      url: "https://www.youtube.com/@valancess", 
      color: "bg-gray-700 hover:bg-red-700", 
      icon: <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z" />
      </svg>
    },
    { 
      url: "https://steamcommunity.com/id/valancess/", 
      color: "bg-gray-700 hover:bg-blue-900", 
      icon: <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.398-3.39 3.398-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z"/>
      </svg>
    }
  ];

  const currentYear = new Date().getFullYear();
  const displayYears = [currentYear, currentYear - 1, currentYear - 2]; 

  return (
    <div className="lg:w-1/3 flex flex-col items-center justify-center">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full blur-sm opacity-30 scale-110"></div>
        <img
          src="/images/W1.png"
          className="w-64 h-64 rounded-full object-cover border-4 border-gray-700 shadow-[0_0_15px_rgba(59,130,246,0.3)] transform transition-transform hover:scale-105 duration-300"
          alt="profile"
        />
      </div>

      <div className="mt-6 text-center">
        <h1 className="text-2xl font-bold text-white">Kubilay</h1>
        <p className="text-blue-400 font-medium hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 hover:animate-gradient-x transition-all duration-300">Software Developer</p>

        <div className="flex justify-center gap-3 mt-4">
          {socialLinks.map((link, index) => (
            <a 
              key={index}
              href={link.url} 
              className={`p-2 ${link.color} rounded-full transition-all hover:scale-110 hover:-translate-y-1`}
            >
              {link.icon}
            </a>
          ))}
        </div>

        <div className="mt-12 bg-gray-800/70 rounded-lg py-2 px-4 inline-block">
          <div className="text-sm font-medium text-blue-400 mb-1">GitHub Commits:</div>
          <div className="flex gap-4 justify-center">
            {displayYears.map(year => (
              <div key={year} className="flex items-center gap-1">
                <span className="text-gray-300">{year}:</span>
                <span className="text-white font-semibold">{githubData.commits?.[year] || 0}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const ExperienceSection = ({ commitsize = 0 }) => {
  const { t } = useTranslation();
  const featuresData = [
    {
      emoji: "🎓",
      title: t("experience"),
      content: t("experienceDescription", { years: (currentYear-2020) }),
      skills: []
    },
    {
      emoji: "📈",
      title: t("skills"),
      content: (
        <>
          <p className="mb-2">{t("skillsDescription1")}</p>
          <p>{t("skillsDescription2", { 
            nodeYears: (currentYear-2020), 
            linuxYears: (currentYear-2021) 
          })}</p>
        </>
      ),
      skills: [
        { name: "Node.js", color: "blue" },
        { name: "Linux", color: "gray" },
        { name: "Python", color: "yellow" },
        { name: "C++", color: "blue" },
        { name: "Java", color: "orange" },
        { name: "Rust", color: "red" }
      ]
    },
    {
      emoji: "🛠",
      title: t("projects_text"),
      content: (
        <>
          <p className="mb-2">{t("projectsDescription1", { commits: commitsize || "300~" })}</p>
          <p>{t("projectsDescription2")}</p>
        </>
      ),
      skills: []
    },
    {
      emoji: "💡",
      title: t("continuousDevelopment"),
      content: t("continuousDevelopmentDescription"),
      skills: [
        { name: "Azure", color: "blue" },
        { name: "AWS", color: "orange" },
        { name: "Firebase", color: "yellow" }
      ]
    }
  ];

  return (
    <div className="lg:w-2/3 flex flex-col space-y-6">
      {featuresData.map((feature, index) => (
        <FeatureCard
          key={index}
          emoji={feature.emoji}
          title={feature.title}
          skills={feature.skills}
        >
          {feature.content}
        </FeatureCard>
      ))}
    </div>
  );
};

function Body({githubData}) {
  const { t } = useTranslation();
  const commitsize = githubData.commits?.[currentYear] || 0;
  return (
    <>
      <SectionHeader subtitle={t("introduction")} title={t("overview")} />

      <div id="skills-section" className="relative mt-12 w-4/5 mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 bg-[#0e0d0dc4] backdrop-blur-sm rounded-xl p-8">
          <ProfileSection githubData={githubData} />
          <ExperienceSection commitsize={commitsize} />
        </div>
      </div>
    </>
  );
}

export default Body;
