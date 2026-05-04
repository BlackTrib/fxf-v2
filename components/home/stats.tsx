import { Server, TrendingUp, Users, Clock } from 'lucide-react'

const stats = [
  { icon: Server, value: '99.9%', label: 'Uptime Garantat', desc: 'Disponibilitate servere' },
  { icon: TrendingUp, value: '5x', label: 'Mai Rapid', desc: 'Cu SSD NVMe vs HDD' },
  { icon: Users, value: '500+', label: 'Clienți Activi', desc: 'Site-uri găzduite' },
  { icon: Clock, value: '24/7', label: 'Suport Tehnic', desc: 'Disponibil non-stop' },
]

export function Stats() {
  return (
    <section className="py-8 bg-accent-brand/90">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white/20 backdrop-blur-sm mb-2">
                <s.icon size={20} className="text-white" strokeWidth={1.5} />
              </div>
              <p className="font-display text-3xl font-bold text-white">{s.value}</p>
              <p className="text-sm font-medium text-white/90 mt-0.5">{s.label}</p>
              <p className="text-xs text-white/60">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
