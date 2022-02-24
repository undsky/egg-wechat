/*
 * @Author: 姜彦汐
 * @Date: 2021-12-27 09:04:53
 * @LastEditors: 姜彦汐
 * @LastEditTime: 2021-12-30 10:27:05
 * @Description: 
 * @Site: https://www.undsky.com
 */
const x509 = require('@peculiar/x509')
const fs = require('fs')
const v2 = require('./v2')
const v3 = require('./v3')



const {
    Kits,
    WX_TRADE_TYPE,
    SIGN_TYPE,
    WX_DOMAIN,
    WX_API_TYPE,
    WxPayApiConifgKit,
    HttpKit
} = require('tnwx')

const KEY = Symbol('wechat#pay#key')
const SERIAL = Symbol('wechat#pay#serial')

/**
 * @description: 统一下单
 * https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=9_1
 * @param {*} out_trade_no
 * @param {*} total_fee
 * @param {*} body
 * @param {*} attach
 * @return {*}
 */
async function unifiedOrder(out_trade_no, total_fee, body, attach, openid, sub_openid) {
    const {
        apiKey,
        appId,
        mchId,
        providerAppId,
        provideMchId,
        getDomin
    } = WxPayApiConifgKit.getConfig

    let reqObj = {
        appid: providerAppId || appId,
        mch_id: provideMchId || mchId,
        nonce_str: Kits.generateStr(),
        body,
        attach,
        out_trade_no,
        total_fee,
        openid,
        sub_openid,
        spbill_create_ip: '127.0.0.1',
        notify_url: getDomin,
        trade_type: WX_TRADE_TYPE.JSAPI,
        sign_type: SIGN_TYPE.SIGN_TYPE_HMACSHA256
    }

    if (provideMchId && provideMchId != mchId) {
        reqObj.sub_appid = appId
        reqObj.sub_mch_id = mchId
    }

    const xml = await Kits.generateSignedXml(reqObj, apiKey, SIGN_TYPE.SIGN_TYPE_HMACSHA256)

    return await HttpKit.getHttpDelegate.httpPost(WX_DOMAIN.CHINA.concat(WX_API_TYPE.UNIFIED_ORDER), xml)
}

module.exports = {
    get config() {
        return WxPayApiConifgKit.getConfig
    },
    get key() {
        if (!this[KEY]) {
            this[KEY] = fs.readFileSync(WxPayApiConifgKit.getConfig.keyPath).toString()
        }

        return this[KEY]
    },
    get serial() {
        if (!this[SERIAL]) {
            const certStr = fs.readFileSync(WxPayApiConifgKit.getConfig.certPath, 'utf-8')
            const {
                serialNumber
            } = new x509.X509Certificate(certStr);

            this[SERIAL] = serialNumber
        }

        return this[SERIAL]
    },
    v2,
    v3,
    unifiedOrder
}