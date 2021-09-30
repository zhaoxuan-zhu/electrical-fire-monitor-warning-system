const path = require("path")

const theme = require(path.resolve(__dirname, "vite-config/theme.js"))
const proxy = require(path.resolve(__dirname, "vite-config/proxy.js"))

const srcPath = path.resolve(__dirname, "src")
const layoutsPath = path.resolve(__dirname, "src/layouts")
const utilsPath = path.resolve(__dirname, "src/utils")
const stylesPath = path.resolve(__dirname, "src/styles")
const componentsPath = path.resolve(__dirname, "src/components")
const pagesPath = path.resolve(__dirname, "src/pages")
const minixsPath = path.resolve(__dirname, "src/mixins")
const apisPath = path.resolve(__dirname, "src/apis")
const assetsPath = path.resolve(__dirname, "src/assets")
const storePath = path.resolve(__dirname, "src/store")

const alias = {
	"@": srcPath,
	layouts: layoutsPath,
	utils: utilsPath,
	styles: stylesPath,
	components: componentsPath,
	pages: pagesPath,
	mixins: minixsPath,
	apis: apisPath,
	assets: assetsPath,
	store: storePath,
}

module.exports = {
	configureWebpack: {
		resolve: {
			alias,
		},
	},
	// chainWebpack: config => {
	// 	config.resolve.alias
	// 		.set("@", srcPath)
	// 		.set("layouts", layoutsPath)
	// 		.set("utils", utilsPath)
	// 		.set("styles", stylesPath)
	// 		.set("components", componentsPath)
	// 		.set("pages", pagesPath)
	// 		.set("mixins", minixsPath)
	// 		.set("apis", apisPath)
	// 		.set("assets", assetsPath)
	// 		.set("store", storePath)
	// },
	css: {
		loaderOptions: {
			less: {
				lessOptions: {
					modifyVars: theme,
					javascriptEnabled: true,
				},
			},
		},
	},
}