import SectionHeader from "../utils/selectionHeader.jsx";
import { useTranslation } from "react-i18next";

function Body() {
    const { t } = useTranslation();

    return (
        <>
            <SectionHeader subtitle={t('contactSubtitle', 'İletişime geçin')} title={t('contactTitle', 'İletişim')} />
            
            <div className="relative mt-8 w-4/5 max-w-2xl mx-auto mb-16">
                <div className="border-gradient p-[3px] rounded-lg shadow-lg">
                    <div className="bg-black p-5 rounded-lg shadow-lg h-full w-full">                    
                        <div className="bg-gray-900 rounded-md p-3 flex items-center justify-between">
                            <a 
                                href="mailto:mail@kubidev.com" 
                                className="text-white hover:text-blue-400 transition-colors flex items-center"
                            >
                                <svg className="w-5 h-5 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                </svg>
                                <span className="font-medium">mail@kubidev.com</span>
                            </a>
                            
                            <button 
                                onClick={() => {
                                    navigator.clipboard.writeText("mail@kubidev.com");
                                }}
                                className="text-gray-400 hover:text-blue-400 transition-colors"
                                title={t('copyEmail', 'E-posta adresini kopyala')}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                                </svg>
                            </button>
                        </div>
                        
                        <div className="mt-3 flex justify-center space-x-4">
                            <a href="https://github.com/DeveloperKubilay" className="p-2 bg-gray-900 hover:bg-gray-800 rounded-md transition-all transform hover:scale-105">
                                <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </a>
                            <a href="https://www.youtube.com/@valancess" className="p-2 bg-gray-900 hover:bg-gray-800 rounded-md transition-all transform hover:scale-105">
                                <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z" />
                                </svg>
                            </a>
                            <a href="https://steamcommunity.com/id/valancess/" className="p-2 bg-gray-900 hover:bg-gray-800 rounded-md transition-all transform hover:scale-105">
                                <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.398-3.39 3.398-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            <style jsx>{`
                .border-gradient {
                    background: linear-gradient(
                        45deg,
                        #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #8b00ff
                    );
                    background-size: 400% 400%;
                    animation: gradient 15s ease infinite;
                    border-radius: 0.5rem;
                }
                
                @keyframes gradient {
                    0% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                    100% {
                        background-position: 0% 50%;
                    }
                }
            `}</style>
        </>
    );
}

export default Body;
