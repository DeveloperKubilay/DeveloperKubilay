const SectionHeader = ({ subtitle, title }) => (
  <>
    <h2 className="text-center mb-2 mt-5 text-2xl text-gray-500 shadow-sm">{subtitle}</h2>
    <h1 className="text-center mt-5 text-5xl font-black shadow-md">{title}</h1>
  </>
);

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

const ProfileSection = () => {
  const socialLinks = [
    { 
      url: "#", 
      color: "bg-gray-700 hover:bg-blue-700", 
      icon: <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
    },
    { 
      url: "#", 
      color: "bg-gray-700 hover:bg-red-700", 
      icon: <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z" />
      </svg>
    }
  ];

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
        <p className="text-blue-400 font-medium">Software Developer</p>

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
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  // Feature card data
  const featuresData = [
    {
      emoji: "🎓",
      title: "Deneyim",
      content: "Yazılım geliştirme ve bulut teknolojileri alanında 5 yılı aşkın deneyime sahip olarak Yazılım ile uğraşıyorum.",
      skills: []
    },
    {
      emoji: "📈",
      title: "Beceriler",
      content: (
        <>
          <p className="mb-2">Kurumsal düzeyde projeler geliştirdim ve 100% otomasyonlu sistemler geliştirdim. Karşılaştığım karmaşık zorlukları aşmak için yenilikçi çözümler ürettim.</p>
          <p>5 yıllık nodejs deneyimim var, 4 yıllık linux deneyimim var. çok pratiğim olmasada py,cpp,java,rust ile ilgili temel bilgim var.</p>
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
      title: "Projeler",
      content: (
        <>
          <p className="mb-2">Son 1 yılda X kadar commit (güncelleme) attım ve Projelerimde git'i yeterince kullanıyorum.</p>
          <p>Oyun motoru, database, Yönetim panelleri, VDS yönetim panelleri, yapay zeka entegrasyonları ve dahasını geliştirdim.</p>
        </>
      ),
      skills: []
    },
    {
      emoji: "💡",
      title: "Sürekli Gelişim",
      content: "Her zaman meraklıyım ve sürekli öğreniyorum. Projelerimde Microsoft Azure, AWS, Firebase gibi sistemleri kullanıyorum. Ve kendi api keylerimi yapıyorum.",
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

const ExperienceCard = ({ imgSrc, title, description }) => (
  <div className="flex mt-10 w-2/3 m-auto shadow-lg rounded-lg p-6 transition-all hover:scale-105 hover:-translate-y-2">
    <div className="w-1/4 flex justify-center items-center">
      <img src={imgSrc} className="w-full rounded-full shadow-xl" alt={`${title} icon`} />
    </div>
    <div className="w-3/4 shadow-md rounded p-4 ml-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p>{description}</p>
    </div>
  </div>
);

function Body() {
  return (
    <>
      <SectionHeader subtitle="Giriş" title="Genel Bakış" />

      <div className="relative mt-12 w-4/5 mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 bg-[#0e0d0dc4] backdrop-blur-sm rounded-xl p-8">
          <ProfileSection />
          <ExperienceSection />
        </div>
      </div>

      <SectionHeader subtitle="Şimdiye Kadar Ne Okudum" title="Eğitim" />

      <h1 className="text-center mb-5 mt-10 text-5xl shadow-md">My Experience</h1>
      
      <ExperienceCard 
        imgSrc="#"
        title="İstatistikler"
        description="stats Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, beatae minima quisquam impedit molestias unde reiciendis ipsam expedita repudiandae illo asperiores delectus, natus harum ipsa libero ad repellat aut ducimus."
      />
    </>
  );
}

export default Body;
