// src/app/symptom-checker/page.tsx
import SymptomChecker from '@/components/SymptomChecker'

export default function SymptomCheckerPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Symptom Checker</h1>
      <p className="text-gray-600">Describe your symptoms to get preliminary health insights</p>

      <div className="mt-8">
        <SymptomChecker />
      </div>
    </div>
  )
}
