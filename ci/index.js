const ci = require('miniprogram-ci')
;(async () => {
  const project = new ci.Project({
    appid: 'wxfbafe9ec825808ab',
    type: 'miniProgram',
    projectPath: '../unpackage/dist/build/mp-weixin',
    privateKeyPath: './private.wxfbafe9ec825808ab.key',
    ignores: ['node_modules/**/*'],
  })
  await ci.preview({
    project,
    desc: 'hello',
    setting: {
      es6: true,
    },
    qrcodeFormat: 'image',
    qrcodeOutputDest: '/path/to/qrcode/file/destination.jpg',
    onProgressUpdate: console.log,
    // pagePath: 'pages/index/index', // 预览页面
    // searchQuery: 'a=1&b=2',  // 预览参数 [注意!]这里的`&`字符在命令行中应写成转义字符`\&`
    // proxy: 'your proxy url',
  })
})()