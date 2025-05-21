function App() {
    return (
        <nav className="w-full z-50 absolute top-0 text-gray-400 shadow-lg">
            <div className="container mx-auto py-4 px-6 flex justify-end">
                <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
                    <a href="#" className="relative px-3 py-2 font-medium hover:text-blue-600 group transition-colors duration-300 ease-in-out">
                        <span>Projelerim</span>
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                    </a>
                    <a href="#" className="relative px-3 py-2 font-medium hover:text-blue-600 group transition-colors duration-300 ease-in-out">
                        <span>Yeteneklerim</span>
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                    </a>
                    <a href="#" className="relative px-3 py-2 font-medium hover:text-blue-600 group transition-colors duration-300 ease-in-out">
                        <span>İletişim</span>
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                    </a>
                    <a href="#" className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 hover:shadow-md">
                        Dil değiştir
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default App