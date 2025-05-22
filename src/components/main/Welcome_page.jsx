import React, { useState, useEffect, useRef } from 'react';

function Welcome_page() {
    const [old, setold] = useState(0);
    const [experience, setexperience] = useState(0);
    const [projects, setprojects] = useState(0);
    const dataFetchedRef = useRef(false);

    useEffect(() => {
        const setup = async () => {
            if (dataFetchedRef.current) return;
            dataFetchedRef.current = true;

            try {
                const response = await fetch('https://api.github.com/users/DeveloperKubilay');
                const data = await response.json();
                console.log('GitHub data:', data);
                setprojects(data.public_repos)
            } catch (error) {
                console.error('Error fetching GitHub data:', error);
            }


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
    }, []);


    const [hoveredItem, setHoveredItem] = useState(null);




    return (
        <div className="relative h-[93vh] w-full overflow-hidden">
            <img
                src="/images/W2.png"
                alt="Background"
                className="w-full h-full object-contain"
            />

            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center mt-16 text-white p-4">
                <h1 className="text-8xl font-bold mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    Merhaba, Ben <span className="text-blue-500 drop-shadow-[0_2px_5px_rgba(59,130,246,0.6)] hover-tremble">Kubilay</span>
                </h1>
                <h2 className="text-3xl text-gray-200 mb-2">Yazılım geliştiricisi</h2>
                <p className="text-gray-300 text-xl text-center mb-8">
                    Hadi bir proje daha pişirelimmmm!!! 🔥🔥🔥
                </p>

                <div className="flex gap-4 mt-2">
                    <a href="https://github.com/DeveloperKubilay"
                        className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-md transition-all duration-300 transform hover:scale-110">
                        Github
                    </a>
                    <a href="https://github.com/DeveloperKubilay?tab=repositories"
                        className="px-6 py-3 bg-blue-700 hover:bg-blue-600 rounded-md transition-all duration-300 transform hover:scale-110">
                        Projelere Bak
                    </a>
                </div>
            </div>

            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex justify-center gap-12 text-white w-full">
                <div
                    className={`flex items-center transition-all duration-300 ${hoveredItem && hoveredItem !== 'age' ? 'blur-sm opacity-100' : ''}`}
                    onMouseEnter={() => setHoveredItem('age')}
                    onMouseLeave={() => setHoveredItem(null)}
                >
                    <div className="text-7xl font-bold mr-2">{old}</div>
                    <div className="text-gray-300 text-3xl">yaş</div>
                </div>

                <div
                    className={`flex items-center transition-all duration-300 ${hoveredItem && hoveredItem !== 'experience' ? 'blur-sm opacity-100' : ''}`}
                    onMouseEnter={() => setHoveredItem('experience')}
                    onMouseLeave={() => setHoveredItem(null)}
                >
                    <div className="text-7xl font-bold mr-2">{experience}</div>
                    <div className="text-gray-300 text-3xl">Yıllık tecrübe</div>
                </div>

                <div
                    className={`flex items-center transition-all duration-300 ${hoveredItem && hoveredItem !== 'projects' ? 'blur-sm opacity-100' : ''}`}
                    onMouseEnter={() => setHoveredItem('projects')}
                    onMouseLeave={() => setHoveredItem(null)}
                >
                    <div className="text-7xl font-bold mr-2">{projects}</div>
                    <div className="text-gray-300 text-3xl">Çalıştığım proje</div>
                </div>
            </div>
        </div>
    )
}
export default Welcome_page;
