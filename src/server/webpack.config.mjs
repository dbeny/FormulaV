import path from "path";

export default {
	mode: "production",
	entry: {
		server: {import: "./index"}
	},
	target: "node16",
	ignoreWarnings: [(warning) => warning !== /^(?!CriticalDependenciesWarning$)/],
	output: {
		path: path.resolve("../../dist"),
		filename: "[name].js"
	},
	module: {
		rules: [
			{
				test: /\.(js|ts)$/,
				exclude: /node_modules/,
				loader: "ts-loader"
			}
		]
	},
	resolve: {
		extensions: [
			".ts",
			".js"
		]
	}
};