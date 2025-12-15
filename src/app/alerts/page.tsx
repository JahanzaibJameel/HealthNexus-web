// src/app/alerts/page.tsx
export default function AlertsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Health Alerts</h1>
      <p className="text-gray-600">Stay informed about important health updates and notifications</p>

      <div className="mt-8">
        <div className="card">
          <h2 className="text-xl font-semibold mb-4">Recent Alerts</h2>
          <p className="text-gray-600">No alerts at the moment. You'll be notified here when important health information becomes available.</p>
        </div>
      </div>
    </div>
  )
}
