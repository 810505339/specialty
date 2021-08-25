const resolve = dir => path.join(__dirname, dir)
module.exports = {
	// 配置路径别名
	configureWebpack: {
		devServer: {
			disableHostCheck: true,
			proxy:{
				"/api":{
					"target": "http://116.62.234.233:801",
					"changeOrigin": true,
					"secure": false,
					"pathRewrite": {
						"^/api": "/"
					}
				}
			}
		},
	},


}
