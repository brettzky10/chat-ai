"use client";

import { useState, useEffect, useRef } from 'react';
import { HoverBorderGradient } from '@/components/gradient-button';
import { Button } from '@/components/ui/button';
import languageCodesData from '@/data/language-codes.json';
import countryCodesData from '@/data/country-codes.json';

const languageCodes: Record<string, string> = languageCodesData;
const countryCodes: Record<string, string> = countryCodesData;

export default function SpeechTranslator() {
  const [isListening, setIsListening] = useState(false);
  const [spokenText, setSpokenText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('en-US');
  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  useEffect(() => {
    const synth = window.speechSynthesis;
    const updateVoices = () => {
      setAvailableVoices(synth.getVoices());
    };
    synth.onvoiceschanged = updateVoices;
    updateVoices();

    return () => {
      synth.onvoiceschanged = null;
    };
  }, []);

  const handleStartListening = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.continuous = false;
    recognitionRef.current.interimResults = false;

    recognitionRef.current.onstart = () => setIsListening(true);
    recognitionRef.current.onend = () => setIsListening(false);
    recognitionRef.current.onresult = handleSpeechResult;

    recognitionRef.current.start();
  };

  const handleStopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
  };

  const handleSpeechResult = async (event: SpeechRecognitionEvent) => {
    const transcript = event.results[0][0].transcript;
    setSpokenText(transcript);

    try {
      const response = await fetch('/api/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: transcript, language: targetLanguage }),
      });

      if (!response.ok) throw new Error('Translation failed');

      const data = await response.json();
      setTranslatedText(data.text);
      speakTranslatedText(data.text);
    } catch (error) {
      console.error('Error during translation:', error);
      setTranslatedText('Translation error occurred');
    }
  };

  const speakTranslatedText = (text: string) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    
    const targetVoice = availableVoices.find(voice => voice.lang === targetLanguage);
    if (targetVoice) {
      utterance.voice = targetVoice;
    }

    synth.speak(utterance);
  };

  const availableLanguages = availableVoices
    .map(voice => ({
      lang: voice.lang,
      label: languageCodes[voice.lang.split('-')[0]] || voice.lang,
      dialect: countryCodes[voice.lang.split('-')[1]]
    }))
    .filter((lang, index, self) => 
      index === self.findIndex((t) => t.lang === lang.lang)
    )
    .sort((a, b) => a.label.localeCompare(b.label));

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-gray-200">
          Speech Translator
        </h1>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Target Language
          </label>
          <select
            className="w-full p-2 border rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            value={targetLanguage}
            onChange={(e) => setTargetLanguage(e.target.value)}
          >
            {availableLanguages.map(({ lang, label, dialect }) => (
              <option key={lang} value={lang}>
                {label} ({dialect ? `${dialect}, ` : ''}{lang})
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-center mb-6">
          <HoverBorderGradient
            onClick={isListening ? handleStopListening : handleStartListening}
            className={`flex items-center justify-center rounded-full w-20 h-20 focus:outline-none ${
              isListening ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'
            }`}
          >
            {isListening ? (
              <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
              </svg>
            ) : (
              <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            )}
          </HoverBorderGradient>
        </div>

        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Spoken Text:</h2>
            <p className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md text-gray-800 dark:text-gray-200">
              {spokenText || "Waiting for speech..."}
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Translated Text:</h2>
            <p className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md text-gray-800 dark:text-gray-200">
              {translatedText || "Translation will appear here..."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}