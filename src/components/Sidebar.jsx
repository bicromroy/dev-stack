import { Trash2, X } from 'lucide-react';
export default function Sidebar({ stack, removeFromStack, setStack }) {
  return (
    <div className="bg-white rounded-xl p-5 border-gray-200 shadow-sm sticky top-24">
      <h3 className="text-lg font-bold mb-4">Your Stack</h3>
      {stack.length === 0? (<p className="text-gray-400 text-sm">Your stack is empty</p>) : (<>
          {stack.map(tech => (<div key={tech.name} className="flex justify-between items-center bg-gray-50 p-2 rounded-lg mb-2"><div className="flex items-center gap-2"><img src={tech.icon} className="w-5 h-5" /><span className="font-semibold text-sm">{tech.name}</span></div><button onClick={() => removeFromStack(tech.name)}><X size={14} className="text-gray-500 hover:text-red-500" /></button></div>))}
          <button onClick={() => setStack([])} className="w-full mt-4 flex items-center justify-center gap-2 text-red-500 text-sm font-semibold"><Trash2 size={14} /> Remove All</button>
        </>)}
    </div>
  )
}