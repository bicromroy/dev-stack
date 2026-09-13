import { Github, Twitter, Linkedin } from 'lucide-react';
export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-6 py-12 grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="flex items-center gap-2 mb-3"><div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-md"></div><h4 className="font-bold text-gray-900">DevStack</h4></div>
          <p className="text-gray-500">The best tools and resources for developers building modern software.</p>
          <div className="flex gap-3 mt-4 text-gray-500"><Github size={18}/><Twitter size={18}/><Linkedin size={18}/></div>
        </div>
        <div><h4 className="font-bold text-gray-900 mb-3">PRODUCT</h4><ul className="space-y-2 text-gray-500"><li><a href="#" className="hover:text-gray-900">Technologies</a></li><li><a href="#" className="hover:text-gray-900">Compare</a></li><li><a href="#" className="hover:text-gray-900">Projects</a></li></ul></div>
        <div><h4 className="font-bold text-gray-900 mb-3">COMPANY</h4><ul className="space-y-2 text-gray-500"><li><a href="#" className="hover:text-gray-900">About</a></li><li><a href="#" className="hover:text-gray-900">Contact</a></li><li><a href="#" className="hover:text-gray-900">Careers</a></li></ul></div>
        <div><h4 className="font-bold text-gray-900 mb-3">LEGAL</h4><ul className="space-y-2 text-gray-500"><li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li><li><a href="#" className="hover:text-gray-900">Terms of Service</a></li></ul></div>
      </div>
    </footer>
  )
}
