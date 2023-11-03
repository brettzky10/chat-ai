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

interface SubscriptionState {
    subscription: Subscription | null | undefined;
    setSubscription: (subscription: Subscription | null) => void;
};

export const useSubscriptionStore = create<SubscriptionState>((set) => ({
    subscription: undefined,
    setSubscription: (subscription: Subscription | null) => set({ subscription }),
}));
