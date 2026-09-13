export default function Navbar() {
  return (
    <header className="bg-white border-b sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg"></div>
            <h1 className="text-lg font-bold text-gray-900">DevStack</h1>
            <span className="text-[10px] text-purple-600 bg-purple-100 px-2 py-0.5 rounded font-bold">Free</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
            <a href="#" className="text-pink-500">Home</a><a href="#" className="hover:text-gray-900">Technologies</a><a href="#" className="hover:text-gray-900">Projects</a><a href="#" className="hover:text-gray-900">About</a><a href="#" className="hover:text-gray-900">Contact</a>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-sm font-medium text-gray-600">Sign In</button>
          <button className="bg-pink-500 text-white text-sm font-semibold px-4 py-1.5 rounded-lg">Sign Up</button>
        </div>
      </div>
    </header>
  )
}