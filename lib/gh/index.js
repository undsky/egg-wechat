/*
 * @Author: 姜彦汐
 * @Date: 2021-12-27 09:04:39
 * @LastEditors: 姜彦汐
 * @LastEditTime: 2021-12-28 15:52:34
 * @Description: 
 * @Site: https://www.undsky.com
 */
const {
    WeChat,
    ApiConfigKit
} = require('tnwx')


module.exports = {
    get config() {
        return ApiConfigKit.getApiConfig
    },
    jssdkSignature: WeChat.jssdkSignature,
    checkSignature: WeChat.checkSignature,
    handleMsg: WeChat.handleMsg,
}