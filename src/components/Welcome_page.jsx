import React, { useState, useEffect, useCallback } from 'react';
import { useTranslation } from "react-i18next";


const StatItem = ({ value, label, itemName, hoveredItem, onMouseEnter, onMouseLeave }) => (
    <div
        className={`flex items-center transition-all duration-300 ${hoveredItem && hoveredItem !== itemName ? 'blur-sm opacity-100' : ''}`}
        onMouseEnter={() => onMouseEnter(itemName)}
        onMouseLeave={onMouseLeave}
    >
        <div className="text-7xl font-bold mr-2">{value}</div>
        <div className="text-gray-300 text-3xl">{label}</div>
    </div>
);

function Welcome_page({ githubData }) {
    const [old, setold] = useState(0);
    const [experience, setexperience] = useState(0);
    const [projects, setprojects] = useState(0);
    const [hoveredItem, setHoveredItem] = useState(null);
    const { t, i18n } = useTranslation();
    
    useEffect(() => {
        
        const setup = async () => {
            if (githubData) setprojects(githubData.main?.public_repos);
            
            const currentDate = new Date();
            const currentYear = currentDate.getFullYear();
            const birthDate = new Date('2007-09-21');
            let age = currentYear - birthDate.getFullYear();

            const hasBirthdayPassed =
                currentDate.getMonth() > birthDate.getMonth() ||
                (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() >= birthDate.getDate());

            if (!hasBirthdayPassed) age--;

            setold(age);
            setexperience(currentYear - 2020);
        };

        setup();
    }, [githubData, i18n.language]);

    const getStats = useCallback(() => [
        { name: 'age', value: old, label: t('age') },
        { name: 'experience', value: experience, label: t('experience') },
        { name: 'projects', value: projects, label: t('working_on_projects') }
    ], [old, experience, projects, t]);
    
    const stats = getStats();


    return (
        <div className="relative h-[93vh] w-full overflow-hidden">
            <img
                src="/images/W2.png"
                alt="Background"
                className="w-full h-full object-contain"
            />

            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute bottom-2/4 left-1/3 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center mt-16 text-white p-4">
                <h1 className="text-8xl font-bold mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    <span className="bg-gradient-to-r from-blue-500 via-cyan-400 via-purple-500 via-pink-500 to-indigo-600 text-transparent bg-clip-text animate-gradient-x">
                        {t('greeting')}
                    </span>{' '}
                    <span className="text-blue-500 drop-shadow-[0_2px_5px_rgba(59,130,246,0.6)] hover-tremble">
                        {t('name')}
                    </span>
                </h1>
                <h2 className="text-3xl text-gray-200 mb-2">{t('role')}</h2>
                <p className="text-gray-300 text-xl text-center mb-8">
                    {t('tagline')}
                </p>

                <div className="flex gap-4 mt-2">
                    <a href="https://github.com/DeveloperKubilay"
                        className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-md transition-all duration-300 transform hover:scale-110">
                        {t('github')}
                    </a>
                    <a href="https://github.com/DeveloperKubilay?tab=repositories"
                        className="px-6 py-3 bg-blue-700 hover:bg-blue-600 rounded-md transition-all duration-300 transform hover:scale-110">
                        {t('viewProjects')}
                    </a>
                </div>
            </div>

            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex justify-center gap-12 text-white w-full">
                {stats.map((stat) => (
                    <StatItem
                        key={stat.name}
                        value={stat.value}
                        label={stat.label}
                        itemName={stat.name}
                        hoveredItem={hoveredItem}
                        onMouseEnter={setHoveredItem}
                        onMouseLeave={() => setHoveredItem(null)}
                    />
                ))}
            </div>
        </div>
    )
}
export default Welcome_page;
