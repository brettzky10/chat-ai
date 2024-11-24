"use client";

import { Upload } from 'lucide-react';
import { CloudinaryUploadWidgetResults } from 'next-cloudinary';
import { toast } from "sonner"

import { useResources } from '@/hooks/use-resources';
import { getConfig } from '@/lib/media/config';

import CldUploadButton from "@/components/media/cld-upload-button";

interface UploadButtonProps {
  children?: JSX.Element
}

const UploadButton = ({ children }: UploadButtonProps) => {

  const { assetsFolder, assetsTag, libraryTag } = getConfig();

  const { addResources } = useResources({
    disableFetch: true
  });

  async function handleOnSuccess(results: CloudinaryUploadWidgetResults) {
    if ( typeof results?.info === 'object' ) {
      addResources([results.info]);
      toast.success("Uploaded successfully.")
    }
  }

  function handleOnError(error: any) {
    //console.log('error', error)
    toast.error('Something went wrong uploading', error)

  }

  return (
    <CldUploadButton
      signatureEndpoint="/api/sign-cloudinary-params"
      options={{
        autoMinimize: true,
        resourceType: 'image',
        tags: [
          assetsTag,
          libraryTag,
        ],
        folder: assetsFolder
      }}
      onSuccess={handleOnSuccess}
      onError={handleOnError}
    >
      {children || (
        <span className="flex items-center">
          <Upload className="mr-2 h-4 w-4" /> Upload
        </span>
      )}
    </CldUploadButton>
  )
}

export default UploadButton;