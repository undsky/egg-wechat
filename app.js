/*
 * @Author: 姜彦汐
 * @Date: 2020-12-23 15:14:18
 * @LastEditors: 姜彦汐
 * @LastEditTime: 2021-12-28 11:13:00
 * @Description: 
 * @Site: https://www.undsky.com
 */
const qy = require('./lib/qy')
const cx = require('./lib/cx')
const gh = require('./lib/gh')
const open = require('./lib/open')
const pay = require('./lib/pay')

const {
    ApiConfig,
    ApiConfigKit,
    QyApiConfigKit,
    WxPayApiConfig,
    WxPayApiConifgKit
} = require('tnwx')

module.exports = app => {
    const {
        cache,
        devMode
    } = app.config.wechat.default

    const _cache = {
        get: key => {
            return new Promise((resolve, reject) => {
                app.cache[cache].get(key, (err, result) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(result || '')
                    }
                })
            });
        },
        set: (key, jsonValue) => {
            return new Promise((resolve, reject) => {
                app.cache[cache].set(key, jsonValue, {
                    ttl: 7100
                }, err => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(jsonValue)
                    }
                })
            });
        },
        remove: key => {
            return new Promise((resolve, reject) => {
                app.cache[cache].del(key, err => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve()
                    }
                })
            });
        }
    }

    ApiConfigKit.setCache = _cache
    QyApiConfigKit.setCache = _cache
    WxPayApiConifgKit.setCache = _cache

    ApiConfigKit.devMode = devMode
    QyApiConfigKit.devMode = devMode
    WxPayApiConifgKit.devMode = devMode

    app.addSingleton('wechat', init);
}

function init(config, app) {
    const {
        apiConfig: { // 微信配置（公众号、小程序、开放平台）
            appId,
            appScrect,
            token,
            encryptMessage,
            encodingAesKey
        },
        qyApiConfig: { // 企业微信配置（应用、小程序、第三方）
            appId: qyAppId,
            appScrect: qyAppScrect,
            token: qyToken,
            encryptMessage: qyEncryptMessage,
            encodingAesKey: qyEncodingAesKey,
            corpId
        },
        wxPayApiConfig: { // 微信支付配置
            apiKey,
            apiKey3,
            domain,
            appId: payAppId,
            mchId,
            certP12Path,
            keyPath,
            certPath,
            providerAppId,
            provideMchId
        }
    } = config

    if (appId)
        ApiConfigKit.putApiConfig(new ApiConfig(appId, appScrect, token, encryptMessage, encodingAesKey))

    if (corpId)
        QyApiConfigKit.putApiConfig(new ApiConfig(qyAppId, qyAppScrect, qyToken, qyEncryptMessage, qyEncodingAesKey, corpId))

    if (payAppId)
        WxPayApiConifgKit.putConfig(new WxPayApiConfig(payAppId, apiKey, apiKey3, domain, mchId, certPath, certP12Path, keyPath, providerAppId, provideMchId))

    return () => {
        if (appId)
            ApiConfigKit.setCurrentAppId(appId)
        if (corpId)
            QyApiConfigKit.setCurrentAppId(qyAppId, corpId)
        if (payAppId)
            WxPayApiConifgKit.setCurrentAppId(payAppId)

        return {
            qy,
            cx,
            gh,
            open,
            pay
        }
    }
}