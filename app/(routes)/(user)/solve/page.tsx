"use client";

import LoadingSpinner from '@/components/loading-spinnner';
import { Button } from '@/components/ui/button'
//import { useToast } from '@/components/ui/use-toast';
import {toast } from "sonner"
import { ChangeEvent, FormEvent, useState } from 'react'

function SolvePage() {

    const [ image, setImage ] = useState<string>("");
    const [ openAiResponse, setOpenAiResponse ] = useState<string>("");
    const [loading, setLoading] = useState(false);
    //const {toast} = useToast();

    function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
        if(event.target.files === null){
            window.alert("No file selected. Please choose a file.")
            return;
        }
        const file = event.target.files[0]

        //Convert user's file to base64
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            //reader.result -> base64 string
            if(typeof reader.result === "string"){
                setImage(reader.result);
            }
        }
        reader.onerror = (error) => {
            console.log("error" + error)
        }
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault(); //This is to stop weird submits

        //Loading State:
        setLoading(true);
        toast("Solving...",{
          description: "Hold tight while we solve your prompt...",
          duration: 3000,
        });

        if(image === ""){
            alert("Upload an image")
            return;
        }

        //POST
        await fetch("api/solve", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                image: image //base64 image
            })
        }) .then(async (response: any) => {
            //Because we are getting a streaming text response, we want to handle streaming text
            const reader = response.body?.getReader();

            //Clear old response:
            setOpenAiResponse("");

            //reader allows us to read a new piece of info on each read
            //eg. "hello" + "I am" + "brett"
            while(true){
                const { done, value } = await reader?.read();
                // done is true once response is done
                if(done){
                    break;
                }

                // value: unit8array -> string
                var currentChunk = new TextDecoder().decode(value);
                setOpenAiResponse((prev) => prev + currentChunk);
            }
            setLoading(false);
        })
    }

  return (
    <div className='min-h-screen flex items-center justify-center text-md'>
        <div className='bg-slate-800 w-full max-w-2xl rounded-lg shadow-md p-8 my-5'>
            <h1 className='text-xl font-bold mb-4'>Upload Image</h1>
            { image !== "" ?
            
                <div className='mb-4 overflow-hidden rounded-md'>
                    <img
                        src={image}
                        className='w-full object-contain max-h-72'
                    />
                </div>

            : <div className='mb-4 p-8 text-center'>
            <p>Once you upload an image you will see it here</p>
        </div>
            }
            

            <form onSubmit={(e) => handleSubmit(e)}>
                <div className='flex flex-col mb-6'>
                    <label className='mb-2 text-sm font-medium'>
                        Upload Image
                    </label>
                    <input type="file" className='text-smborder border-2 border-white rounded-lg cursor-pointer'
                    onChange={(e) => handleFileChange(e)}
                    />
                </div>

                <div className='flex justify-center'>
                    <Button type="submit">
                    {loading ? <LoadingSpinner/> :
                    "Solve"
                    }
                    </Button>
                </div>
            </form>

            {openAiResponse !== "" 
            ?   <div className='border-t border-gray-300 pt-4 mt-5'>
                    <h2 className='text-xl font-bold mb-2'>Ai Response</h2>
                    <p>{openAiResponse}</p>
                </div>
            :   null
            }
        </div>

    </div>
  )
}

export default SolvePage