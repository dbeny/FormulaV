import path from "path";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
	mode: "production",
	entry: {
		client: {import: "./index", dependOn: ["react"]},
		react: ["react", "react-dom"]
	},
	target: "web",
	output: {
		path: path.resolve("../../dist/client"),
		filename: "[name]-[contenthash].js",
		publicPath: "./"
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx|tsx|ts)$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				options: {
					presets: [
						"@babel/preset-typescript",
						["@babel/preset-react", {"runtime": "automatic"}]
					]
				}
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader",
				],
			},
			{
				test: /\.(png|gif)$/,
				type: "asset/resource"
			}
		]
	},
	resolve: {
		extensions: [
			".tsx",
			".ts",
			".js",
			".css"
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: "static/index.html",
			publicPath: "/",
			favicon: "static/favicon.png"
		})
	]
};