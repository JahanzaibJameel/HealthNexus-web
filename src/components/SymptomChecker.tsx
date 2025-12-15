// src/components/SymptomChecker.tsx
'use client'

import { useState } from 'react'
import { Mic, MicOff, Send, Loader2 } from 'lucide-react'
import VoiceInput from './VoiceInput'

export default function SymptomChecker() {
  const [symptoms, setSymptoms] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [results, setResults] = useState<any[]>([])
  const [isRecording, setIsRecording] = useState(false)

  const handleVoiceResult = (text: string) => {
    setSymptoms(text)
  }

  const analyzeSymptoms = async () => {
    if (!symptoms.trim()) return
    
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setResults([
        { condition: 'Common Cold', confidence: 85, description: 'Viral infection of the upper respiratory tract' },
        { condition: 'Allergic Rhinitis', confidence: 65, description: 'Allergic response causing nasal congestion' },
        { condition: 'Influenza', confidence: 45, description: 'Viral infection with fever and body aches' },
      ])
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="card max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold mb-6">Describe Your Symptoms</h3>
      
      {/* Input Area */}
      <div className="mb-6">
        <div className="flex gap-4 mb-4">
          <textarea
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            placeholder="Describe your symptoms in detail (e.g., headache, fever, cough for 3 days)..."
            className="input-field h-32"
          />
          <VoiceInput onResult={handleVoiceResult} />
        </div>
        
        <button
          onClick={analyzeSymptoms}
          disabled={isLoading || !symptoms.trim()}
          className="btn-primary flex items-center gap-2"
        >
          {isLoading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Analyzing...
            </>
          ) : (
            <>
              <Send className="h-5 w-5" />
              Analyze Symptoms
            </>
          )}
        </button>
      </div>

      {/* Results */}
      {results.length > 0 && (
        <div className="mt-8">
          <h4 className="text-xl font-semibold mb-4">Analysis Results</h4>
          <div className="space-y-4">
            {results.map((result, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-4 hover:border-health-blue transition-colors"
              >
                <div className="flex justify-between items-start mb-2">
                  <h5 className="font-semibold text-lg">{result.condition}</h5>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    result.confidence > 70 ? 'bg-green-100 text-green-800' :
                    result.confidence > 40 ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {result.confidence}% Confidence
                  </span>
                </div>
                <p className="text-gray-600 mb-3">{result.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    Based on symptom analysis
                  </span>
                  <button className="text-health-blue hover:text-blue-700 font-medium">
                    Consult Doctor →
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Note:</strong> This is AI-powered analysis and should not replace professional medical advice. 
              Please consult with a healthcare provider for accurate diagnosis and treatment.
            </p>
          </div>
        </div>
      )}

      {/* Tips */}
      <div className="mt-8 pt-6 border-t">
        <h4 className="font-semibold mb-3">Tips for better analysis:</h4>
        <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-600">
          <li>• Mention symptom duration (e.g., "for 3 days")</li>
          <li>• Describe severity (e.g., "mild headache", "severe pain")</li>
          <li>• Include location (e.g., "pain in lower right abdomen")</li>
          <li>• Mention any triggers or relieving factors</li>
          <li>• List all symptoms, even minor ones</li>
          <li>• Note any recent travel or exposure</li>
        </ul>
      </div>
    </div>
  )
}