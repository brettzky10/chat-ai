import { getConfig } from '@/lib/media/config';
import { getResourcesByTag } from '@/lib/media/cloudinary';

import MediaGallery from '@/components/media/media-gallery';

export const revalidate = 10;

export default async function Home() {
  const { creationTag } = getConfig();
  const { resources } = await getResourcesByTag(creationTag);
  return (
    <div className="h-full mt-6">
      <MediaGallery
        resources={resources}
        tag={creationTag}
      />
    </div>
  )
}