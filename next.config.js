/** @type {import("next").NextConfig} */
const coreConfig = {
	images: {
		remotePatterns: [{ hostname: "*.ufs.sh" }]
	},
	typescript: {
		ignoreBuildErrors: true
	},
	eslint: {
		ignoreDuringBuilds: true
	},
	webpack: (config, options) => {
		config.module.rules.push(
			...[
				{
					test: /\.pdf/,
					type: "asset/resource",
					generator: {
						filename: "static/[hash][ext]"
					}
				},
				{
					test: /\.mov/,
					type: "asset/resource",
					generator: {
						filename: "static/[hash][ext]"
					}
				},
				{
					test: /\.mp4/,
					type: "asset/resource",
					generator: {
						filename: "static/[hash][ext]"
					}
				}
			]
		);
		return config;
	}
};

export default coreConfig;
