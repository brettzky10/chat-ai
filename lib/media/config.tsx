import { Focus } from 'lucide-react';
import themeConfig from '../../theme.config';

import { PhotoboxConfig } from '@/types/config';

export function getConfig() {
  const config: PhotoboxConfig = {
    // Customization

    logo: <Focus className="w-6 h-6" />,
    title: 'Translate',

    gallery: {
      crop: 'square'
    },

    editor: {
      // Background Removal requires the Cloudinary AI Background Removal Add-On
      backgroundRemoval: true
    },

    // Cloudinary asset management

    assetsFolder: process.env.NEXT_PUBLIC_CLOUDINARY_ASSETS_FOLDER || 'product-builder',
    assetsTag: process.env.NEXT_PUBLIC_CLOUDINARY_ASSETS_TAG || 'product-builder',
    libraryTag: process.env.NEXT_PUBLIC_CLOUDINARY_LIBRARY_TAG || 'product-builder-library',
    creationTag: process.env.NEXT_PUBLIC_CLOUDINARY_CREATION_TAG || 'product-builder-creation',
    favoritesTag: process.env.NEXT_PUBLIC_CLOUDINARY_FAVORITES_TAG || 'product-builder-favorite',
    trashTag: process.env.NEXT_PUBLIC_CLOUDINARY_TRASH_TAG || 'product-builder-trash',

    // Apply custom settings based on theme configuration

    ...themeConfig
  }

  return config;
}