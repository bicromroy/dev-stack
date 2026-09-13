import { Star, Tag } from 'lucide-react';
export default function TechnologyCard({ tech, addToStack }) {
  return (
    <div className="bg-white rounded-xl p-5 border-gray-200 shadow-sm hover:shadow-md transition">
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center gap-2"><img src={tech.icon} className="w-6 h-6" /><h3 className="text-base font-bold">{tech.name}</h3></div>
        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${tech.tagColor}`}>{tech.tag}</span>
      </div>
      <p className="text-xs text-gray-500 h-10">{tech.desc}</p>
      <div className="flex gap-2 mt-3 text-xs">
        <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded text-gray-600"><Tag size={12} /> {tech.category}</span>
        <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded text-gray-600"><Star size={12} fill="#F59E0B" stroke="#F59E0B" /> {tech.rating}</span>
      </div>
      <button onClick={() => addToStack(tech)} className="w-full mt-4 bg-[#0F172A] text-white py-2 rounded-lg text-sm font-semibold hover:bg-gray-800 transition">Add to Stack</button>
    </div>
  )
}