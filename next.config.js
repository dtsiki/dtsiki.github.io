module.exports = {
  env: {
    PUBLIC_URL: 'https://dtsiki.github.io',
    assetPrefix: './',
  },
  images: {
    loader: 'akamai',
    path: '/',
  },
  eslint: {
    // Warning: This allows production builds to successfully complete
    // even if your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};
