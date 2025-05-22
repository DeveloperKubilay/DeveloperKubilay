function App() {
    return (
        <>
            <h1 className="text-center mb-2 mt-5 text-2xl text-gray-500 shadow-sm">Giriş</h1>
            <h1 className="text-center mt-5 text-5xl font-black shadow-md">Genel Bakış</h1>
            
            <div className="flex mt-4 w-2/3 m-auto shadow-lg rounded-lg p-6">
                <div className="w-1/4 flex justify-center items-center">
                    <img
                        src="/images/W1.png"
                        className="w-72 h-72 rounded-full border-4 border-blue-500 shadow-[0_0_25px_10px_rgba(147,197,253,0.5)] object-cover p-2"
                        alt="profile"
                    />
                </div>
                <div className="w-3/4 shadow-md rounded p-4 ml-4">
                    <div className="mb-3">
                        <h2 className="text-xl font-bold">🎓 Deneyim</h2>
                        <p>Yazılım geliştirme ve bulut teknolojileri alanında 5 yılı aşkın deneyime sahip olarak Yazılım ile uğraşıyorum.</p>
                    </div>
                    <div className="mb-3">
                        <h2 className="text-xl font-bold">📈 Beceriler</h2>
                        <p>Kurumsal düzeyde projeler geliştirdim ve 100% otomasyonlu sistemler geliştirdim. Karşılaştığım karmaşık zorlukları aşmak için yenilikçi çözümler ürettim.</p>
                        <p>5 yıllık nodejs deneyimim var, 4 yıllık linux deneyimim var. çok pratiğim olmasada py,cpp,java,rust ile ilgili temel bilgim var.</p>
                    </div>
                    <div className="mb-3">
                        <h2 className="text-xl font-bold">🛠 Projeler</h2>
                        <p>Son 1 yılda X kadar commit (güncelleme) attım ve Projelerimde git'i yeterince kullanıyorum.</p>
                        <p>oyun motoru, database, Yönetim panelleri, Vds yönetim panelleri, yapay zeka entegrasyonları ve dahasını geliştirdim</p>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">💡 Sürekli Gelişim</h2>
                        <p>Her zaman meraklıyım ve sürekli öğreniyorum. Projelerimde Microsoft Azure, AWS, Firebase gibi sistemleri kullanıyorum. Ve kendi api keylerimi yapıyorum.</p>
                    </div>
                </div>
            </div>

            <div className="w-full md:w-3/4 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all hover:shadow-xl">
  {/* Header */}
  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white">
    <h1 className="text-2xl font-bold">Profesyonel Profil</h1>
  </div>

  {/* Content with grid layout */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
    {/* Experience */}
    <div className="col-span-1 md:col-span-2 bg-blue-50 dark:bg-gray-700 rounded-lg p-5 border-l-4 border-blue-500 transition-all hover:shadow-md">
      <div className="flex items-center mb-3">
        <span className="text-blue-500 text-2xl mr-3">🎓</span>
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">Deneyim</h2>
      </div>
      <p className="text-gray-700 dark:text-gray-200">
        Yazılım geliştirme ve bulut teknolojileri alanında 5 yılı aşkın deneyime sahip olarak Yazılım ile uğraşıyorum.
      </p>
    </div>

    {/* Skills */}
    <div className="bg-purple-50 dark:bg-gray-700 rounded-lg p-5 border-l-4 border-purple-500 transition-all hover:shadow-md">
      <div className="flex items-center mb-3">
        <span className="text-purple-500 text-2xl mr-3">📈</span>
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">Beceriler</h2>
      </div>
      <p className="text-gray-700 dark:text-gray-200 mb-3">
        Kurumsal düzeyde projeler geliştirdim ve 100% otomasyonlu sistemler geliştirdim. Karşılaştığım karmaşık zorlukları aşmak için yenilikçi çözümler ürettim.
      </p>
      <div className="mt-4">
        <div className="flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded text-sm">Node.js (5 yıl)</span>
          <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded text-sm">Linux (4 yıl)</span>
          <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded text-sm">Python</span>
          <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded text-sm">C++</span>
          <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded text-sm">Java</span>
          <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded text-sm">Rust</span>
        </div>
      </div>
    </div>

    {/* Projects */}
    <div className="bg-green-50 dark:bg-gray-700 rounded-lg p-5 border-l-4 border-green-500 transition-all hover:shadow-md">
      <div className="flex items-center mb-3">
        <span className="text-green-500 text-2xl mr-3">🛠</span>
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">Projeler</h2>
      </div>
      <p className="text-gray-700 dark:text-gray-200 mb-2">
        Son 1 yılda X kadar commit (güncelleme) attım ve Projelerimde git'i yeterince kullanıyorum.
      </p>
      <p className="text-gray-700 dark:text-gray-200">
        <span className="font-medium">Geliştirdiğim projeler:</span>
      </p>
      <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-200">
        <li>Oyun motoru</li>
        <li>Database</li>
        <li>Yönetim panelleri</li>
        <li>VDS yönetim panelleri</li>
        <li>Yapay zeka entegrasyonları</li>
      </ul>
    </div>

    {/* Continuous Development */}
    <div className="bg-amber-50 dark:bg-gray-700 rounded-lg p-5 border-l-4 border-amber-500 transition-all hover:shadow-md">
      <div className="flex items-center mb-3">
        <span className="text-amber-500 text-2xl mr-3">💡</span>
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">Sürekli Gelişim</h2>
      </div>
      <p className="text-gray-700 dark:text-gray-200 mb-3">
        Her zaman meraklıyım ve sürekli öğreniyorum. Projelerimde Microsoft Azure, AWS, Firebase gibi sistemleri kullanıyorum. Ve kendi API keylerimi yapıyorum.
      </p>
      <div className="flex flex-wrap gap-2 mt-4">
        <span className="px-2 py-1 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-100 rounded text-sm flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"/></svg>
          Azure
        </span>
        <span className="px-2 py-1 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-100 rounded text-sm flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"/></svg>
          AWS
        </span>
        <span className="px-2 py-1 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-100 rounded text-sm flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"/></svg>
          Firebase
        </span>
      </div>
    </div>
  </div>
</div>

            <h1 className="text-center mb-2 mt-5 text-2xl text-gray-500 shadow-sm">Şimdiye Kadar Ne Okudum</h1>
            <h1 className="text-center mb-2 mt-5 text-5xl font-black shadow-md">Eğitim</h1>

            <h1 className="text-center mb-5 mt-10 text-5xl shadow-md">My Experience</h1>
            <div className="flex mt-10 w-2/3 m-auto shadow-lg rounded-lg p-6">
                <div className="w-1/4 flex justify-center items-center">
                    <img src="#" className="w-full rounded-full shadow-xl" alt="stats icon" />
                </div>
                <div className="w-3/4 shadow-md rounded p-4 ml-4">
                    <h2 className="text-xl font-bold mb-2">İstatistikler</h2>
                    <p>stats Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, beatae minima quisquam impedit molestias unde reiciendis ipsam expedita repudiandae illo asperiores delectus, natus harum ipsa libero ad repellat aut ducimus.</p>
                </div>
            </div>
        </>
    )
}

export default App
