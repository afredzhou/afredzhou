import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin';

// Specify the path to the request config file
const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const config: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'cdn.sanity.io' },
      { hostname: 'picsum.photos' },
    ],
  },
  typescript: {
    // Set this to false if you want production builds to abort if there's type errors
    ignoreBuildErrors: process.env.VERCEL_ENV === 'production',
  },
  eslint: {
    /// Set this to false if you want production builds to abort if there's lint errors
    ignoreDuringBuilds: process.env.VERCEL_ENV === 'production',
  },
}

export default withNextIntl(config)
