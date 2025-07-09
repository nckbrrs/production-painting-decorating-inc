import webpack from "webpack";

/** @type {import("next").NextConfig} */
const coreConfig = {
	images: {
		remotePatterns: [
			{ hostname: "*ufs.sh" },
			{ hostname: "*placekittens.com" },
			{ hostname: "*placehold.co" },
			{ hostname: "*vimeo.com" },
			{ hostname: "*vimeocdn.com" }
		]
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

		config.plugins.push(
			new webpack.ProvidePlugin({
				Buffer: ["buffer", "Buffer"]
			})
		);

		// Add fallback for 'buffer'
		config.resolve.fallback = {
			...(config.resolve.fallback || {}),
			buffer: "buffer"
		};

		return config;
	}
};

export default coreConfig;
