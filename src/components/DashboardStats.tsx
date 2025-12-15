// src/components/DashboardStats.tsx
export default function DashboardStats() {
  const stats = [
    { label: 'Active Users', value: '50K+', icon: '👥' },
    { label: 'Consultations', value: '25K+', icon: '💬' },
    { label: 'Success Rate', value: '98%', icon: '✅' },
    { label: 'Countries', value: '50+', icon: '🌍' },
  ]

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Trusted by Healthcare Professionals Worldwide
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="card text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">{stat.icon}</div>
            <div className="text-3xl font-bold text-health-blue mb-2">{stat.value}</div>
            <div className="text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
