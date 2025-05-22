import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "../utils/i18n";

function App() {
    const { i18n } = useTranslation();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    
    const flags = {
        tr: (
            <svg className="w-6 h-4 mr-2 rounded-sm" viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg">
                <rect fill="#E30A17" width="30" height="20"/>
                <circle fill="#FFFFFF" cx="10" cy="10" r="5"/>
                <circle fill="#E30A17" cx="11.5" cy="10" r="4"/>
                <path fill="#FFFFFF" d="M17,7 L18,9.5 L21,9.5 L18.5,11 L19.5,13.5 L17,12 L14.5,13.5 L15.5,11 L13,9.5 L16,9.5 Z"/>
            </svg>
        ),
        en: (
            <svg className="w-6 h-4 mr-2 rounded-sm" viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg">
                <rect fill="#00247D" width="30" height="20"/>
                <path d="M0,0 L30,20 M30,0 L0,20" stroke="#FFFFFF" strokeWidth="3"/>
                <path d="M15,0 L15,20 M0,10 L30,10" stroke="#FFFFFF" strokeWidth="5"/>
                <path d="M15,0 L15,20 M0,10 L30,10" stroke="#CF142B" strokeWidth="3"/>
                <path d="M0,0 L30,20 M30,0 L0,20" stroke="#CF142B" strokeWidth="2"/>
            </svg>
        )
    };
    

    const languages = [
        { code: 'tr', countryCode: 'TR', name: 'Türkçe' },
        { code: 'en', countryCode: 'EN', name: 'English' }
    ];
    

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };
        
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    
    const handleLanguageSelect = (langCode) => {
        changeLanguage(langCode);
        setDropdownOpen(false);
    };
    

    const navItems = {
        projects: i18n.language === 'tr' ? 'Projelerim' : 'My Projects',
        skills: i18n.language === 'tr' ? 'Yeteneklerim' : 'My Skills',
        contact: i18n.language === 'tr' ? 'İletişim' : 'Contact'
    };
    

    const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];
    
    return (
        <nav className="w-full z-50 absolute top-0 text-gray-400 shadow-lg">
            <div className="container mx-auto py-4 px-6 flex justify-end">
                <div className="flex flex-wrap justify-center gap-1 sm:gap-2 items-center">
                    <a href="https://github.com/DeveloperKubilay?tab=repositories" className="relative px-3 py-2 font-medium hover:text-blue-600 group transition-colors duration-300 ease-in-out">
                        <span>{navItems.projects}</span>
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                    </a>
                    <a href="#" className="relative px-3 py-2 font-medium hover:text-blue-600 group transition-colors duration-300 ease-in-out">
                        <span>{navItems.skills}</span>
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                    </a>
                    <a href="#" className="relative px-3 py-2 font-medium hover:text-blue-600 group transition-colors duration-300 ease-in-out">
                        <span>{navItems.contact}</span>
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                    </a>

                    <div className="relative" ref={dropdownRef}>
                        <button 
                            onClick={() => setDropdownOpen(!dropdownOpen)} 
                            className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 hover:shadow-md flex items-center"
                        >
                            {flags[currentLanguage.code]}
                            <span className="font-medium">{currentLanguage.countryCode}</span>
                            <span className="mx-1">|</span>
                            <span>{currentLanguage.name}</span>
                            <svg 
                                className={`w-4 h-4 ml-1 transition-transform duration-200 ${dropdownOpen ? 'transform rotate-180' : ''}`} 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24" 
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        
                        {dropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 text-gray-800">
                                {languages.map(language => (
                                    <button
                                        key={language.code}
                                        onClick={() => handleLanguageSelect(language.code)}
                                        className={`flex items-center w-full text-left px-4 py-2 hover:bg-blue-400 ${language.code === i18n.language ? 'bg-blue-200 font-medium' : ''}`}
                                    >
                                        {flags[language.code]}
                                        <span className="font-medium">{language.countryCode}</span>
                                        <span className="mx-1">|</span>
                                        <span>{language.name}</span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default App