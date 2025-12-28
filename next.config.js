/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['localhost'],
	},

	// Transpile lucide-react for better SSR compatibility
	transpilePackages: ['lucide-react'],

	compiler: {
		// Remove console logs in production
		removeConsole: process.env.NODE_ENV === 'production',
	},

	webpack: config => {
		config.resolve.alias = {
			...config.resolve.alias,
			'@': './src',
		}
		return config
	},
}

module.exports = nextConfig
