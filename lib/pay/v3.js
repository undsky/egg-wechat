/*
 * @Author: 姜彦汐
 * @Date: 2021-12-29 14:28:35
 * @LastEditors: 姜彦汐
 * @LastEditTime: 2021-12-29 20:33:48
 * @Description: 
 * @Site: https://www.undsky.com
 */
const fs = require('fs')
const {
    PayKit
} = require('tnwx')

const PUBLICKEY = Symbol('wechat#pay#publicKey')

async function verifySign(headers, body, platformPath) {
    if (!this[PUBLICKEY]) {
        this[PUBLICKEY] = fs.readFileSync(platformPath).toString()
    }
    return PayKit.verifySign(headers, body, this[PUBLICKEY])
}

module.exports = {
    verifySign
}