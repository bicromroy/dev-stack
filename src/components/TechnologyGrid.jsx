import TechnologyCard from './TechnologyCard'

export default function TechnologyGrid({ technologies, onAddToStack }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {technologies.map(tech => (
        <TechnologyCard key={tech.id} tech={tech} onAddToStack={onAddToStack} />
      ))}
    </div>
  )
}