/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false
let assetPrefix = ''
let basePath = '/'


const nextConfig = {
    output: 'export',
    assetPrefix: assetPrefix,
    basePath: basePath,
}

module.exports = nextConfig
