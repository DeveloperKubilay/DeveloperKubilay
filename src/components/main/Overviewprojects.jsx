function App() {
    return (
   <div>
      <h1 className="text-center mb-5 mt-2 text-5xl">Projelerim</h1>
      <div className="text-center text-2xl mb-2">
         <a href="#" className="bg-green-400 rounded-md p-2 text-base mr-2">Detaylı gör (önerilen)</a>
         <a href="#" className="bg-blue-600 rounded p-2 text-base">Genel Bak</a>
      </div>
      <div className="w-4/5 m-auto flex gap-2">
         <div className="bg-slate-900 w-1/2 rounded p-3 flex">
            <img src="#" alt="Project image" className="w-1/4" />
            <div className="w-3/4 pl-3">
               <h1>Tung Tung Tung sahurrr</h1>
               <h1 className="text-wrap">Bombardino crakol öylerrrrr şeyler</h1>
               <h1 className="text-blue-600 cursor-pointer hover:underline">Detayli oku</h1>
            </div>
         </div>
      </div>
   </div>
    )
}

export default App
