/*
 * @Author: 姜彦汐
 * @Date: 2021-12-24 15:17:53
 * @LastEditors: 姜彦汐
 * @LastEditTime: 2021-12-28 15:51:52
 * @Description: 
 * @Site: https://www.undsky.com
 */
const {
    QyWeChat,
    QyApiConfigKit
} = require('tnwx')

const message = require('./message')


module.exports = {
    get config() {
        return QyApiConfigKit.getApiConfig
    },
    jssdkSignature: QyWeChat.jssdkSignature,
    checkSignature: QyWeChat.checkSignature,
    handleMsg: QyWeChat.handleMsg,
    message
}