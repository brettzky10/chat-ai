/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    images: {
        domains: [
        "github.com",
        "lh3.googleusercontent.com",
        "cdn.openai.com",
        "replicate.delivery",
        "pbxt.replicate.delivery"],
    }
}

module.exports = nextConfig
