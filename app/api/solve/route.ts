import { Configuration, OpenAIApi } from "openai-edge"
import { OpenAIStream, StreamingTextResponse } from "ai"

export const runtime = "edge";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);

//POST
export async function POST(request: Request){
    //image: base64 image string
    const { image } = await request.json();

    const response = await openai.createChatCompletion({
        model: "gpt-4-vision-preview",
        stream: true,
        max_tokens: 4096, //If no max tokens, response is super short
        messages: [ //GPT-4 with vision is just GPT-4, so you can still talk with it
        //There is no system message (this may change)
            {
                role: "user",
                //@ts-ignore
                content: [
                    { 
                        type: "text", text: "what's in this image" 
                    },
                    { 
                        type: "image_url",
                        image_url: image //base64 images
                }
                ]
            }

        ]

    });

    const stream = OpenAIStream(response);
    
    return new StreamingTextResponse(stream);
}