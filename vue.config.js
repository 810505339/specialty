const resolve = dir => path.join(__dirname, dir)
module.exports = {
	// 配置路径别名
	configureWebpack: {
		devServer: {
			disableHostCheck: true,
			proxy:{
				"/api":{
					"target": "http://yapi.cqlink.club/mock/160",
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
