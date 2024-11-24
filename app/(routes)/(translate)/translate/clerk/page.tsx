import Navbar from "@/components/translate/navbar";
import TranslatePersonA from "@/components/translate/clerk/translate-person-a";
import TranslateClerk from "@/components/translate/clerk/translate-clerk";
import ChatRealtime from "@/components/translate/clerk/chat-realtime";
import SpeechTranslator from "@/components/translate/clerk/translate-person";
import SpeechVoiceTranslator from "@/components/translate/clerk/translate-voice";
//import TranslatePersonB from "@/components/translate-person-b";
//import Translator from "@/components/translator";

export default function ClerkPage() {
  return (
    <>
    <TranslateClerk/>
    {/* <SpeechTranslator/> */}
    {/* <SpeechVoiceTranslator/> */}
    {/* <ChatRealtime/> */}
    </>
  )
}