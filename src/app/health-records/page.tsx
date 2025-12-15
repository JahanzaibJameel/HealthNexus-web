// src/app/health-records/page.tsx
export default function HealthRecordsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Health Records</h1>
      <p className="text-gray-600">Access and manage your medical records securely</p>

      <div className="mt-8">
        <div className="card">
          <h2 className="text-xl font-semibold mb-4">Your Records</h2>
          <p className="text-gray-600">Your health records will appear here once connected to healthcare providers.</p>
        </div>
      </div>
    </div>
  )
}
