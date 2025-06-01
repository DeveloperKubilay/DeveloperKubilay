import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "../utils/i18n";

function App() {
    const { t, i18n } = useTranslation();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const audioRef = useRef(new Audio("/musics/Hit_road_jack.mp3"));
    const dropdownRef = useRef(null);
    const desktopDropdownRef = useRef(null);
    const mobileDropdownRef = useRef(null);
    
    useEffect(() => {
        audioRef.current.volume = 0.5;
        
        return () => {
            audioRef.current.pause();
        };
    }, []);
    
    const togglePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };
    

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
        ),
        ar: (
            <svg className="w-6 h-4 mr-2 rounded-sm" viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg">
                <rect fill="#006233" width="30" height="20"/>
                <path d="M15,5 L15,15 M10,10 L20,10" stroke="#FFFFFF" strokeWidth="2"/>
                <path d="M21,7 A 10 10 0 1 0 21,13 A 10 10 0 1 0 21,7" fill="#006233" stroke="#FFFFFF" strokeWidth="1"/>
            </svg>
        ),
        de: (
            <svg className="w-6 h-4 mr-2 rounded-sm" viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg">
                <rect fill="#000000" width="30" height="20"/>
                <rect fill="#FF0000" width="30" height="13.33" y="6.67"/>
                <rect fill="#FFCC00" width="30" height="6.67" y="13.33"/>
            </svg>
        ),
        es: (
            <svg className="w-6 h-4 mr-2 rounded-sm" viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg">
                <rect fill="#AA151B" width="30" height="20"/>
                <rect fill="#F1BF00" width="30" height="10" y="5"/>
            </svg>
        ),
        fr: (
            <svg className="w-6 h-4 mr-2 rounded-sm" viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg">
                <rect fill="#002395" width="10" height="20"/>
                <rect fill="#FFFFFF" width="10" height="20" x="10"/>
                <rect fill="#ED2939" width="10" height="20" x="20"/>
            </svg>
        ),
        ja: (
            <svg className="w-6 h-4 mr-2 rounded-sm" viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg">
                <rect fill="#FFFFFF" width="30" height="20"/>
                <circle fill="#BC002D" cx="15" cy="10" r="6"/>
            </svg>
        ),
        ru: (
            <svg className="w-6 h-4 mr-2 rounded-sm" viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg">
                <rect fill="#FFFFFF" width="30" height="20"/>
                <rect fill="#0039A6" width="30" height="13.33" y="6.67"/>
                <rect fill="#D52B1E" width="30" height="6.67" y="13.33"/>
            </svg>
        ),
        zh: (
            <svg className="w-6 h-4 mr-2 rounded-sm" viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg">
                <rect fill="#DE2910" width="30" height="20"/>
                <path fill="#FFDE00" d="M5,5 L6.5,8.5 L10,9 L6.5,10.5 L5,14 L3.5,10.5 L0,9 L3.5,8.5 Z"/>
                <path fill="#FFDE00" d="M12,2 L12.5,3.5 L14,4 L12.5,4.5 L12,6 L11.5,4.5 L10,4 L11.5,3.5 Z"/>
                <path fill="#FFDE00" d="M14,5 L14.5,6.5 L16,7 L14.5,7.5 L14,9 L13.5,7.5 L12,7 L13.5,6.5 Z"/>
                <path fill="#FFDE00" d="M12,9 L12.5,10.5 L14,11 L12.5,11.5 L12,13 L11.5,11.5 L10,11 L11.5,10.5 Z"/>
                <path fill="#FFDE00" d="M14,12 L14.5,13.5 L16,14 L14.5,14.5 L14,16 L13.5,14.5 L12,14 L13.5,13.5 Z"/>
            </svg>
        )
    };
    

    const languages = [
        { code: 'tr', countryCode: 'TR', name: 'Türkçe' },
        { code: 'en', countryCode: 'EN', name: 'English' },
        { code: 'ar', countryCode: 'AR', name: 'العربية' },
        { code: 'de', countryCode: 'DE', name: 'Deutsch' },
        { code: 'es', countryCode: 'ES', name: 'Español' },
        { code: 'fr', countryCode: 'FR', name: 'Français' },
        { code: 'ja', countryCode: 'JA', name: '日本語' },
        { code: 'ru', countryCode: 'RU', name: 'Русский' },
        { code: 'zh', countryCode: 'ZH', name: '中文' }
    ];
    

    useEffect(() => {
        const handleClickOutside = (event) => {
            // Check for desktop dropdown
            if (dropdownOpen && 
                desktopDropdownRef.current && 
                !desktopDropdownRef.current.contains(event.target) &&
                mobileDropdownRef.current &&
                !mobileDropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };
        
        // Use mousedown for better response
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownOpen]);  // Add dropdownOpen as dependency
    
    const handleLanguageSelect = (langCode) => {
        changeLanguage(langCode);
        setDropdownOpen(false);
        setMobileMenuOpen(false);
    };
    
    const navItems = {
        skills: t('skills'),
        projects: t('projects_text'),
        certificates: t('certificatesTitle'),
        contact: t('contact')
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuOpen(false);
        }
    };

    const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];
    
    return (
        <nav className="w-full z-50 absolute top-0 text-gray-400 shadow-lg">
            <div className="container mx-auto py-4 px-6 flex justify-between items-center">
                <div className="self-center">
                    <div className="flex items-center sm:-ml-14">
                        <button 
                            onClick={togglePlayPause} 
                            className="flex items-center justify-center p-2 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/50 hover:-translate-y-0.5 border border-blue-400/30 transform-gpu text-sm"
                            title={isPlaying ? t('pauseMusic') : t('playMusic')}
                        >
                            {isPlaying ? (
                                <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 00-1 1v2a1 1 0 001 1h6a1 1 0 001-1V9a1 1 0 00-1-1H7z" clipRule="evenodd"></path>
                                </svg>
                            ) : (
                                <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                                </svg>
                            )}
                            <span className="font-medium hidden sm:inline">{isPlaying ? t('pauseMusic') : t('playMusic')}</span>
                        </button>
                    </div>
                </div>
                
                {/* Desktop Navigation Menu */}
                <div className="hidden md:flex flex-wrap justify-center gap-1 sm:gap-2 items-center">
                    <button onClick={() => scrollToSection('skills-section')} className="relative px-3 py-2 font-medium hover:text-blue-600 group transition-colors duration-300 ease-in-out">
                        <span>{navItems.skills}</span>
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                    </button>
                    <button onClick={() => scrollToSection('certificates-section')} className="relative px-3 py-2 font-medium hover:text-blue-600 group transition-colors duration-300 ease-in-out">
                        <span>{navItems.certificates}</span>
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                    </button>
                    <button onClick={() => scrollToSection('projects-section')} className="relative px-3 py-2 font-medium hover:text-blue-600 group transition-colors duration-300 ease-in-out">
                        <span>{navItems.projects}</span>
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                    </button>
                    <button onClick={() => scrollToSection('contact-section')} className="relative px-3 py-2 font-medium hover:text-blue-600 group transition-colors duration-300 ease-in-out">
                        <span>{navItems.contact}</span>
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                    </button>

                    <div className="relative" ref={desktopDropdownRef}>
                        <button 
                            onClick={() => setDropdownOpen(!dropdownOpen)} 
                            className="dropdown-toggle ml-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 hover:shadow-md flex items-center"
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
                                        data-language-option={language.code}
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
                
                {/* Mobile menu button */}
                <div className="flex md:hidden items-center space-x-3">
                    <div className="relative" ref={mobileDropdownRef}>
                        <button 
                            onClick={() => setDropdownOpen(!dropdownOpen)} 
                            className="dropdown-toggle px-3 py-1 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 hover:shadow-md flex items-center"
                        >
                            {flags[currentLanguage.code]}
                            <span className="font-medium ml-1">{currentLanguage.countryCode}</span>
                        </button>
                        
                        {dropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 text-gray-800">
                                {languages.map(language => (
                                    <button
                                        key={language.code}
                                        onClick={() => handleLanguageSelect(language.code)}
                                        data-language-option={language.code}
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
                    
                    <button 
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="p-2 rounded-md bg-gray-800 focus:outline-none"
                    >
                        {mobileMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
            
            {/* Mobile menu dropdown */}
            <div className={`md:hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 invisible'} overflow-hidden bg-gray-900/95 backdrop-blur-sm`}>
                <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
                    <button 
                        onClick={() => scrollToSection('skills-section')} 
                        className="w-full text-left px-4 py-2 hover:bg-gray-800 rounded-md"
                    >
                        {navItems.skills}
                    </button>
                    <button 
                        onClick={() => scrollToSection('certificates-section')} 
                        className="w-full text-left px-4 py-2 hover:bg-gray-800 rounded-md"
                    >
                        {navItems.certificates}
                    </button>
                    <button 
                        onClick={() => scrollToSection('projects-section')} 
                        className="w-full text-left px-4 py-2 hover:bg-gray-800 rounded-md"
                    >
                        {navItems.projects}
                    </button>
                    <button 
                        onClick={() => scrollToSection('contact-section')} 
                        className="w-full text-left px-4 py-2 hover:bg-gray-800 rounded-md"
                    >
                        {navItems.contact}
                    </button>
                </div>
            </div>
        </nav>    );}export default App;