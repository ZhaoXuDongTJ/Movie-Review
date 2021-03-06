const CONF = {
    port: '5757',
    rootPathname: '',

    // 微信小程序 App ID
    appId: 'wxa62caeaf0d28c264',

    // 微信小程序 App Secret
    appSecret: '477a8710758c16b7d63486ff9a4c6018',

    // 是否使用腾讯云代理登录小程序
    useQcloudLogin: true,

    //qcloud
    qcloudAppId:'1252365072',
    qcloudSecretId:'AKID4s53lDyVLuCHGTHWCWe0e4KNDobx5rtr',
    qcloudSecretKey:'sY1KxLUeaGuJsMWhhb1J7gGeaGG0au59',

    /**
     * MySQL 配置，用来存储 session 和用户信息
     * 若使用了腾讯云微信小程序解决方案
     * 开发环境下，MySQL 的初始密码为您的微信小程序 appid
     */
    mysql: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        db: 'cAuth',
        pass: 'wxa62caeaf0d28c264',
        char: 'utf8mb4'
    },

    cos: {
        /**
         * 地区简称
         * @查看 https://cloud.tencent.com/document/product/436/6224
         */
      region: 'na-siliconvalley',
        // Bucket 名称
      fileBucket: 'audio-review',
        // 文件夹
        uploadFolder: '',
        mimetypes: ['audio/x-aac', 'audio/mpeg', 'video/webm', 'audio/mpeg', 'audio/mp3', 'audio/m4a', 'audio/aac']
    },

    // 微信登录态有效期
    wxLoginExpires: 7200,
    wxMessageToken: 'abcdefgh'
}

module.exports = CONF
