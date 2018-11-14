const withSass = require('@zeit/next-sass');

const debug = process.env.NODE_ENV !== "production";

module.exports = withSass({
    assetPrefix:  !debug ? 'https://abhishek-mittal.github.io/abhishekmittal/' : '',
    exportPathMap: () => ({ '/': { page: '/' } }),
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: '[local]'
    }
    // cont.. configurations
});

// ___[hash: base64: 5]
