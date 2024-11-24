"use client";

import { useState, useEffect, useRef } from 'react';

import { default as languageCodesData } from '@/data/language-codes.json';
import { default as countryCodesData } from '@/data/country-codes.json';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { boolean, z } from "zod"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { HoverBorderGradient } from '@/components/gradient-button';
import { Button } from '@/components/ui/button';


  const FormSchema = z.object({
    language: z
      .string({
        required_error: "Please select a Language to translate to.",
      })
  })

const languageCodes: Record<string, string> = languageCodesData;
const countryCodes: Record<string, string> = countryCodesData;



const TranslatePersonA = () => {
  const recognitionRef = useRef<SpeechRecognition>();

  const [isActive, setIsActive] = useState<boolean>(false);
  const [text, setText] = useState<string>();
  const [translation, setTranslation] = useState<string>();
  const [voices, setVoices] = useState<Array<SpeechSynthesisVoice>>();
  const [language, setLanguage] = useState<string>('pt-BR');

  const isSpeechDetected = false;

  /* const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })
 
  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  } */

  const availableLanguages = Array.from(new Set(voices?.map(({ lang }) => lang)))
    .map(lang => {
      const split = lang.split('-');
      const languageCode: string = split[0];
      const countryCode: string = split[1];
      return {
        lang,
        label: languageCodes[languageCode] || lang,
        dialect: countryCodes[countryCode]
      }
    })
    .sort((a, b) => a.label.localeCompare(b.label));
  const activeLanguage = availableLanguages.find(({ lang }) => language === lang);

  const availableVoices = voices?.filter(({ lang }) => lang === language);
  const activeVoice =
    availableVoices?.find(({ name }) => name.includes('Google'))
    || availableVoices?.find(({ name }) => name.includes('Luciana'))
    || availableVoices?.[0];

  useEffect(() => {
    const voices = window.speechSynthesis.getVoices();
    if ( Array.isArray(voices) && voices.length > 0 ) {
      setVoices(voices);
      return;
    }
    if ( 'onvoiceschanged' in window.speechSynthesis ) {
      window.speechSynthesis.onvoiceschanged = function() {
        const voices = window.speechSynthesis.getVoices();
        setVoices(voices);
      }
    }
  }, []);

  function handleOnRecord() {
    if ( isActive ) {
      recognitionRef.current?.stop();
      setIsActive(false);
      return;
    }

    speak(' ');

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognitionRef.current = new SpeechRecognition();

    recognitionRef.current.onstart = function() {
      setIsActive(true);
    }

    recognitionRef.current.onend = function() {
      setIsActive(false);
    }

    recognitionRef.current.onresult = async function(event) {
      const transcript = event.results[0][0].transcript;

      setText(transcript);

      const results = await fetch('/api/translate', {
        method: 'POST',
        body: JSON.stringify({
          text: transcript,
          language: language //'pt-BR' ${activeLanguage?.label}-${activeLanguage?.dialect}
        })
      }).then(r => r.json());

      setTranslation(results.text);

      speak(results.text);
    }

    recognitionRef.current.start();
  }

  function speak(text: string) {
    const utterance = new SpeechSynthesisUtterance(text);
    
    if ( activeVoice ) {
      utterance.voice = activeVoice;
    };

    window.speechSynthesis.speak(utterance);
  }

  //Form
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  return (
    <div className="mt-12 px-4">
      <div className="max-w-lg rounded-xl overflow-hidden mx-auto p-4">

        {/* <ul className="text-gray-600 dark:text-gray-300 px-4 py-2 rounded-md text-sm">
              <li>
                &gt; Translation Mode: { activeLanguage?.label }
              </li>
              <li>
                &gt; Dialect: { activeLanguage?.dialect }
              </li>
        </ul> */}
          <div className="grid sm:grid-cols-2 gap-4 max-w-lg bg-zinc-200 rounded-lg p-5 mx-auto">
            <form>
              <div>
                <label className="block text-zinc-500 text-[.6rem] uppercase font-bold mb-1">Language</label>
               {/*  <Select name="language" value={language} onValueChange={(event) => {
                  setLanguage(event.currentTarget.value);
                }}>
                  <SelectTrigger 
                  
                  className="w-[280px]">
                    <SelectValue placeholder="Select a language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Languages</SelectLabel>
                      {availableLanguages.map(({ lang, label }) => {
                    return (
                      
                      <SelectItem key={lang} value={lang}>{ label } ({ lang })</SelectItem>
                    )
                  })}
                    </SelectGroup>
                    
                  </SelectContent>
                </Select> */}
                {<select className="w-full text-[.7rem] rounded-sm border-zinc-300 px-2 py-1 pr-7" name="language" value={language} onChange={(event) => {
                  setLanguage(event.currentTarget.value);
                }}>
                  {availableLanguages.map(({ lang, label }) => {
                    return (
                      <option key={lang} value={lang}>
                        { label } ({ lang })
                      </option>
                    )
                  })}
                </select>}
              </div>
            </form>
            {isActive ? (
            // Button for stopping recording
            <HoverBorderGradient
              onClick={handleOnRecord}
              className="mt-10 m-auto flex items-center justify-center bg-red-400 hover:bg-red-500 rounded-full w-20 h-20 focus:outline-none"
            >
              <svg
                className="h-8 w-8 "
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="white" d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
              </HoverBorderGradient>
          ) : (
            // Button for starting recording
            <HoverBorderGradient
              onClick={handleOnRecord}
              className="mt-10 m-auto flex items-center justify-center bg-[#FE3900] hover:bg-[#77BA99] rounded-full w-20 h-20 focus:outline-none"
            >
              <svg
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-white"
              >
                <path
                  fill="#010101" // Change fill color to the desired color
                  d="M128 176a48.05 48.05 0 0 0 48-48V64a48 48 0 0 0-96 0v64a48.05 48.05 0 0 0 48 48ZM96 64a32 32 0 0 1 64 0v64a32 32 0 0 1-64 0Zm40 143.6V232a8 8 0 0 1-16 0v-24.4A80.11 80.11 0 0 1 48 128a8 8 0 0 1 16 0a64 64 0 0 0 128 0a8 8 0 0 1 16 0a80.11 80.11 0 0 1-72 79.6Z"
                />
              </svg>
            </HoverBorderGradient>
          )}
          </div>
      </div>
      
      {/* <ul className="text-gray-600 dark:text-gray-300 px-4 py-2 rounded-md text-sm">
              <li>
                &gt; Translation Mode: { activeLanguage?.label }
              </li>
              <li>
                &gt; Dialect: { activeLanguage?.dialect }
              </li>
        </ul> */}

       <div className="max-w-lg mx-auto mt-12 rounded-xl shadow-md bg-white/30 dark:bg-[#eff0d1] p-5 dark:text-gray-700 text-gray-700 flex flex-col">
        <p className="mb-4">
          My Speech: { text }
        </p>
        <p>
          Translation: { translation }
        </p>
      </div> 

    </div>
  )
}

export default TranslatePersonA;