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
import { ModeToggle } from '@/components/mode-toggle';
import Link from 'next/link';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { MountainIcon } from 'lucide-react';
import CategoryLinks from '../category-link';
import Image from 'next/image';


  const FormSchema = z.object({
    language: z
      .string({
        required_error: "Please select a Language to translate to.",
      })
  })

const languageCodes: Record<string, string> = languageCodesData;
const countryCodes: Record<string, string> = countryCodesData;



const TranslateClerk = () => {
  const recognitionRef = useRef<SpeechRecognition>();

  const [isActive, setIsActive] = useState<boolean>(false);
  const [text, setText] = useState<string>();
  const [translation, setTranslation] = useState<string>();
  const [voices, setVoices] = useState<Array<SpeechSynthesisVoice>>();
  const [language, setLanguage] = useState<string>('pt-BR');

  const isSpeechDetected = false;

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
      //utterance.volume = 0.5;
      //utterance.lang = language;
      console.log(language)
    };

    window.speechSynthesis.speak(utterance);
  }

  //Form
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  return (
    <div className="h-screen max-h-screen ">
    <div className="isolate items-center bg-white dark:bg-[#262730] relative h-screen">
    <div className="absolute inset-x-24 md:inset-x-96 -z-10 transform-gpu overflow-hidden blur-3xl mx-auto  dark:bg-[#262730] shadow-2xl" aria-hidden="true">

      <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#de8f6e] to-[#77ba99] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
      style={{
        clipPath:
          "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
      }}
      />
    </div>
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link className="flex items-center justify-center" href="#">
        
      </Link>
      <div className='mx-5'>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              {/* <MountainIcon className="h-6 w-6" /> */}
              <Image
              src="/letter-b.png"
              alt="logo"
              width={20}
              height={20}
              />
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/translate/clerk">Translate</BreadcrumbLink>
          </BreadcrumbItem>

        </BreadcrumbList>
      </Breadcrumb>
      </div>
      <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
        {/* <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
          Features
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
          Pricing
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
          About
        </Link> */}
        <form className='my-12'>
                <div className='flex flex-row space-x-3 items-center'>
                <label className="block text-zinc-500 text-[.6rem] uppercase font-bold ">Language:</label>
                  <select className="w-full text-[.7rem] rounded-sm border-zinc-300 px-2 py-1 pr-7" name="language" value={language} onChange={(event) => {
                    setLanguage(event.currentTarget.value);
                  }}>
                    {availableLanguages.map(({ lang, label }) => {
                      return (
                        <option key={lang} value={lang}>
                          { label } ({ lang })
                        </option>
                      )
                    })}
                  </select>
                  
                </div>
              </form>
        <ModeToggle/>
        {/* <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
          Contact
        </Link> */}
      </nav>
    </header>
        <div className="mx-auto max-w-7xl flex flex-col justify-between items-center">
        <div className="mt-12 px-4 items-center">
        
            <div className="items-center mx-auto max-w-lg rounded-xl overflow-hidden p-4 flex flex-col">
              
          {/* <ul className="text-gray-600 dark:text-gray-300 px-4 py-2 rounded-md">
                <li>
                  &gt; Translation Mode: { activeLanguage?.label }
                </li>
                <li>
                  &gt; Dialect: { activeLanguage?.dialect }
                </li>
          </ul> */}
            <div className=" max-w-lg rounded-lg p-5 mx-auto items-center">
              
              {isActive ? (
              // Button for stopping recording
              <HoverBorderGradient
                onClick={handleOnRecord}
                className="mt-10 m-auto flex items-center justify-center bg-red-400 hover:bg-red-500 rounded-full w-20 h-20 focus:outline-none"
              >
                <svg
                  className="h-12 w-12 "
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
                className="mt-10 m-auto flex items-center justify-center bg-[#EFF0D1] hover:bg-[#77BA99] rounded-full w-20 h-20 focus:outline-none"
              >
                <svg
                  viewBox="0 0 256 256"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 text-white"
                >
                  <path
                    fill="#82735C" // Change fill color to the desired color
                    d="M128 176a48.05 48.05 0 0 0 48-48V64a48 48 0 0 0-96 0v64a48.05 48.05 0 0 0 48 48ZM96 64a32 32 0 0 1 64 0v64a32 32 0 0 1-64 0Zm40 143.6V232a8 8 0 0 1-16 0v-24.4A80.11 80.11 0 0 1 48 128a8 8 0 0 1 16 0a64 64 0 0 0 128 0a8 8 0 0 1 16 0a80.11 80.11 0 0 1-72 79.6Z"
                  />
                </svg>
              </HoverBorderGradient>
            )}
            </div>
        </div>
  
      {translation 
      ? <div className="max-w-lg mx-auto mt-12 p-5  flex flex-col">
      <p className="mb-4 border p-3 border-zinc-100 rounded-xl text-gray-400 ">
        { text }
      </p>
      <p className=" text-gray-100">
      <span className='text-gray-400'>Translation:</span>  { translation }
      </p>
    </div>
      : <div className="max-w-4xl mx-auto flex flex-col items-center">
            
            Push to auto-detect language
            <CategoryLinks/>
        </div>
      
      }
        
  
      </div>
        </div>
  </div>
  </div>
    
  )
}

export default TranslateClerk;