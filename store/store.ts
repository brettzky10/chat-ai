import { create } from "zustand";
import { Subscription } from "@/types/subscription";

export type LanguagesSupported =
    | "en"
    | "es"
    | "de"
    | "fr"
    | "hi"
    | "ja"
    | "la"
    | "ru"
    | "zh"
    | "ar"
    | "pa"
    | "no"
    | "sv"
    | "uk"
    | "pt";

export const LanguagesSupportedMap: Record<LanguagesSupported, string> = {
    en: "English",
    es: "Spanish",
    de: "German",
    fr: "French",
    hi: "Hindi",
    ja: "Japanese",
    la: "Latin",
    ru: "Russian",
    zh: "Mandarin",
    ar: "Arabic",
    pa: "Punjabi",
    no: "Norwegian",
    sv: "Swedish",
    uk: "Ukrainian",
    pt: "Portuguese",
};

const LANGUAGES_IN_FREE = 2;

interface LanguageState{
    language: LanguagesSupported;
    setLanguage: (language: LanguagesSupported) => void;
    getLanguages: (isPro: boolean) => LanguagesSupported[];
    getNotSupportedLanguages: (isPro: boolean) => LanguagesSupported[];
};

export const useLanguageStore = create<LanguageState>()((set, get) => ({
    language: "en",
    setLanguage: (language: LanguagesSupported) => set({ language }),
    getLanguages: (isPro: boolean) => {
        //If user is pro, return all supported languages
        if (isPro)
        return Object.keys(LanguagesSupportedMap) as LanguagesSupported[];
        //If not pro, return only two languages
        return Object.keys(LanguagesSupportedMap).slice(
            0,
            LANGUAGES_IN_FREE
        ) as LanguagesSupported[];
    },
    getNotSupportedLanguages: (isPro: boolean) => {
        if (isPro)
            return []; //no unsupported languages for pro members

        return Object.keys(LanguagesSupportedMap).slice(
            LANGUAGES_IN_FREE
        ) as LanguagesSupported[]; //excluding the first two languages
    }
}));

interface SubscriptionState {
    subscription: Subscription | null | undefined;
    setSubscription: (subscription: Subscription | null) => void;
};

export const useSubscriptionStore = create<SubscriptionState>((set) => ({
    subscription: undefined,
    setSubscription: (subscription: Subscription | null) => set({ subscription }),
}));
