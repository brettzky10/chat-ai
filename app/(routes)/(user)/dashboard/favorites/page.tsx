import { getConfig } from '@/lib/media/config';
import { getResourcesByTag } from '@/lib/media/cloudinary';

import MediaGallery from '@/components/media/media-gallery';

export const revalidate = 10;

export default async function Home() {
  const { favoritesTag } = getConfig();
  const { resources } = await getResourcesByTag(favoritesTag);
  return (
    <div className="h-full mt-6">
      <MediaGallery
        resources={resources}
        tag={favoritesTag}
      />
    </div>
  )
}