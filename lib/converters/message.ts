//How we push and pull data to firestore

import { db} from "@/firebase"
import { LanguagesSupported } from "@/store/store";
import { DocumentData, FirestoreDataConverter, QueryDocumentSnapshot, SnapshotOptions, collection, limit, orderBy, query } from "firebase/firestore"

//Sub Collection Chat Member will have the following data attributed to it:


export interface User {
    id: string;
    email: string;
    name: string;
    image: string;
}

export interface Message {
    id?: string;
    input: string;
    timestamp: Date;
    user: User;
    translated?: {
        [K in LanguagesSupported]?: string;
    };
    //..other fields
}



const messageConverter: FirestoreDataConverter<Message> = {
    //Push message
    toFirestore: function (message: Message): DocumentData {
        return {
            input: message.input,
            timestamp: message.timestamp,
            user: message.user,
            //..other fields
        }
    },
    //Pull Message
    fromFirestore: function (
        snapshot: QueryDocumentSnapshot,
        options: SnapshotOptions,
    ): Message {
        const data = snapshot.data(options);
        
        return {
           id: snapshot.id,
           input: data.input,
           timestamp: data.timestamp?.toDate(),
           translated: data.translated,
           user: data.user,
        };
    },
};

export const messagesRef = (chatId: string) => collection(db, 'chats', chatId, "messages").withConverter(
    messageConverter
);

//Change to limit(25) on number of messages allowed under free plan
export const limitedMessagesRef = (chatId: string) => query(messagesRef(chatId), limit(25));

export const sortedMessagesRef = (chatId: string) => query(messagesRef(chatId), orderBy("timestamp", "asc"));

export const limitedSortedMessagesRef = (chatId: string) => query(query(messagesRef(chatId), limit(1)), orderBy("timestamp", "desc"));






