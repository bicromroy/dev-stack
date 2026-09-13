import heroImg from '../assets/hero.png'
export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 flex-col lg:flex-row items-center gap-8">
      <div className="flex-1">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">Build Your Ideal <br /><span className="bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">Development Stack</span></h1>
        <p className="text-gray-500 mt-4 max-w-lg">Explore frontend, backend, database, and tooling options. compare them side by side, and put together the stack that fits your next project.</p>
        <div className="mt-6 flex gap-3">
          <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-5 py-2.5 rounded-lg text-sm font-semibold">Explore Technologies</button>
          <button className="border border-gray-300 text-gray-700 px-5 py-2.5 rounded-lg text-sm font-semibold">Learn More</button>
        </div>
      </div>
      <div className="flex-1 flex justify-center"><img src={heroImg} alt="3D Stack" className="w-72" /></div>
    </section>
  )
}