import webpack from 'webpack';

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        // Handle fallback for specific Node.js modules in the client-side bundle
        if (!isServer) {
            config.resolve.fallback = {
                fs: false,
                net: false,
                tls: false,
                child_process: false,
            };
        }

        // Add the DefinePlugin to handle environment variables
        config.plugins.push(
            new webpack.DefinePlugin({
                'process.env.FLUENTFFMPEG_COV': JSON.stringify(false),
            })
        );

        return config;
    },
};

export default nextConfig;


// /** @type {import('next').NextConfig} */
// const nextConfig = {};
//
// export default nextConfig;
