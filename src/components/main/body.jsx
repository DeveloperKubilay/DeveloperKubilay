function App() {
    return (
        <>
            <h1 className="text-center mb-2 mt-5 text-2xl text-gray-500 shadow-sm">Giriş</h1>
            <h1 className="text-center mb-2 mt-5 text-5xl font-black shadow-md">Genel Bakış</h1>
            
            <div className="flex mt-20 w-2/3 m-auto shadow-lg rounded-lg p-6">
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
                        <p>Yazılım geliştirme ve bulut teknolojileri alanında 5 yılı aşkın deneyime sahip bir Yazılım ile uğraşıyorum.</p>
                    </div>
                    <div className="mb-3">
                        <h2 className="text-xl font-bold">📈 Beceriler</h2>
                        <p>İş akışlarını otomatikleştirmekten, sistemleri optimize etmekten ve karmaşık zorlukları gerçek sonuçlara dönüştürmekten hoşlanıyorum.</p>
                    </div>
                    <div className="mb-3">
                        <h2 className="text-xl font-bold">🛠 Projeler</h2>
                        <p>Tam yığın geliştirmeden bulut tabanlı çözümlere kadar, operasyonları kolaylaştıran ve gerçek etki yaratan kurumsal düzeyde projelere liderlik ettim.</p>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">💡 Sürekli Gelişim</h2>
                        <p>Her zaman meraklıyım ve sürekli öğreniyorum.</p>
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
