import { getResourcebyAssetId } from '@/lib/media/cloudinary';

import MediaViewer from '@/components/media/media-viewer';

async function Resource({ params }: { params: { assetId: string } }) {
  const { assetId } = params;
  const resource = await getResourcebyAssetId(assetId);  
  return <MediaViewer resource={resource} />
}

export default Resource;
