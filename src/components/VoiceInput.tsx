// src/components/VoiceInput.tsx
'use client'

import { useState, useEffect } from 'react'
import { Mic, MicOff } from 'lucide-react'

// Type declarations for Speech Recognition API
declare global {
  interface Window {
    SpeechRecognition: any
    webkitSpeechRecognition: any
  }
}

interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList
  resultIndex: number
}

interface SpeechRecognitionErrorEvent extends Event {
  error: string
  message: string
}

interface VoiceInputProps {
  onResult: (text: string) => void
}

export default function VoiceInput({ onResult }: VoiceInputProps) {
  const [isListening, setIsListening] = useState(false)
  const [transcript, setTranscript] = useState('')
  const [isSupported, setIsSupported] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    if (typeof window === 'undefined') return
    
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    if (!SpeechRecognition) {
      setIsSupported(false)
      return
    }
    
    setIsSupported(true)

    const recognition = new SpeechRecognition()
    recognition.continuous = false
    recognition.interimResults = false
    recognition.lang = 'en-US'

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const text = event.results[0][0].transcript
      setTranscript(text)
      onResult(text)
    }

    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      console.error('Speech recognition error:', event.error)
      setIsListening(false)
    }

    recognition.onend = () => {
      setIsListening(false)
    }

    if (isListening) {
      recognition.start()
    }

    return () => {
      recognition.stop()
    }
  }, [isListening, onResult])

  const toggleListening = () => {
    if (!mounted) return
    setIsListening(!isListening)
  }

  if (!mounted || !isSupported) {
    return (
      <button
        disabled
        className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-400 cursor-not-allowed"
        title="Voice input not supported"
      >
        <MicOff className="h-6 w-6" />
      </button>
    )
  }

  return (
    <button
      onClick={toggleListening}
      className={`flex items-center justify-center w-12 h-12 rounded-full ${
        isListening 
          ? 'bg-red-500 text-white animate-pulse' 
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      } transition-colors`}
      title={isListening ? 'Stop recording' : 'Start voice input'}
    >
      {isListening ? (
        <MicOff className="h-6 w-6" />
      ) : (
        <Mic className="h-6 w-6" />
      )}
    </button>
  )
}