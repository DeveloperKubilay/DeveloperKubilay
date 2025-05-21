import { Link } from 'react-router-dom'
import '../main.css' 
import { useState, useEffect } from 'react'

const CPanel = () => {
  const [showRickRoll, setShowRickRoll] = useState(false);

  const handleForgotPassword = (e) => {
    e.preventDefault();
    setShowRickRoll(true);
  }

  const handleInputChange = () => {
    setShowRickRoll(true);
  }
  
  // Set document title based on current state
  useEffect(() => {
    document.title = showRickRoll ? "Ne yapıyorsun" : "Login";
  }, [showRickRoll]);
  
  // Prevent escape key and scrolling when video is playing
  useEffect(() => {
    if (showRickRoll) {
      const handleKeyDown = (e) => {
        e.preventDefault();
        return false;
      };
      
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      
      // Request fullscreen when the video starts
      try {
        const elem = document.documentElement;
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /* Safari */
          elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
          elem.msRequestFullscreen();
        }
      } catch (err) {
        console.log('Fullscreen request failed');
      }
      
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [showRickRoll]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {!showRickRoll ? (
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
          <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">Control Panel Login</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-700">Username</label>
              <input 
                type="text" 
                id="username" 
                name="username" 
                placeholder="admin"
                required
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">Password</label>
              <input 
                type="password" 
                id="password" 
                name="password" 
                placeholder="Enter your password"
                required
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button type="submit" className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition duration-200">Login</button>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center">
                <input type="checkbox" id="remember" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                <label htmlFor="remember" className="ml-2 text-sm text-gray-600">Remember me</label>
              </div>
              <a href="#" onClick={handleForgotPassword} className="text-sm text-blue-600 hover:text-blue-800">Forgot Password?</a>
            </div>
          </form>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full h-screen absolute top-0 left-0 overflow-hidden" 
             style={{ userSelect: 'none', WebkitUserSelect: 'none', MozUserSelect: 'none', msUserSelect: 'none' }}>
          <div className="text-4xl font-bold text-white z-10 mb-8 select-none">Ne yapıyorsun</div>
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/rJApc2T54_o?autoplay=1&controls=0&mute=0&showinfo=0&fs=1&disablekb=1&loop=1&modestbranding=1&rel=0&start=10" 
            title="Rick Roll" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" 
            allowFullScreen
            className="absolute top-0 left-0 w-screen h-screen object-cover"
            style={{ pointerEvents: 'none', zIndex: 5 }}
          ></iframe>
          <div className="absolute top-0 left-0 w-full h-full bg-transparent z-20" 
               style={{ userSelect: 'none', WebkitUserSelect: 'none', MozUserSelect: 'none', msUserSelect: 'none' }}></div>
        </div>
      )}
    </div>
  )
}

export default CPanel
