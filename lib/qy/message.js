/*
 * @Author: 姜彦汐
 * @Date: 2021-12-24 15:21:41
 * @LastEditors: 姜彦汐
 * @LastEditTime: 2021-12-25 13:55:28
 * @Description: 
 * @Site: https://www.undsky.com
 */
const {
    QyApiConfigKit,
    QySendMsgApi,
    QyTextMsg,
    QyText
} = require('tnwx')

async function sendText(text, toUser, toParty, toTag, safe, enableIdTrans, enableDuplicateCheck, duplicateCheckInterval) {
    const textMsg = new QyTextMsg(
        new QyText(text),
        QyApiConfigKit.getApiConfig.getAppId, toUser, toParty, toTag, safe, enableIdTrans, enableDuplicateCheck, duplicateCheckInterval
    )

    return await QySendMsgApi.sendTextMessage(textMsg)
}

module.exports = {
    sendText
}