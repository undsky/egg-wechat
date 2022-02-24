/*
 * @Author: 姜彦汐
 * @Date: 2020-12-23 15:33:45
 * @LastEditors: 姜彦汐
 * @LastEditTime: 2021-12-28 11:08:33
 * @Description: 
 * @Site: https://www.undsky.com
 */
module.exports = appInfo => ({
    wechat: {
        default: {
            devMode: false,
            cache: 'fs',
            // 微信配置（公众号、小程序、开放平台）
            apiConfig: {
                //     appId: 'appId',
                //     appScrect: 'appScrect',
                //     token: 'token',
                //     encryptMessage: true,
                //     encodingAesKey: 'encodingAesKey'
            },
            // 企业微信配置（应用、小程序、第三方）
            qyApiConfig: {
                //     appId: 'appId',
                //     appScrect: 'appScrect',
                //     token: 'token',
                //     encryptMessage: true,
                //     encodingAesKey: 'encodingAesKey',
                //     corpId: '企业ID/服务商的企业ID'
            },
            // 微信支付配置
            wxPayApiConfig: {
                //     apiKey: 'apiKey',
                //     apiKey3: 'apiKey3',
                //     domain: 'domain',
                //     appId: '应用ID',
                //     mchId: '商户号',
                //     certP12Path: 'cert.p12',
                //     keyPath: 'key.pem',
                //     certPath: 'cert.pem',
                //     providerAppId: '服务商appId',
                //     provideMchId: '服务商商户号'
            },
        },
        // Single
        // client: {

        // },
        // Multi
        // clients: {
        //     wechat1: {

        //     },
        //     wechat2: {

        //     }
        // }
    }
});