/*
 * @Author: 姜彦汐
 * @Date: 2021-12-27 09:04:47
 * @LastEditors: 姜彦汐
 * @LastEditTime: 2021-12-28 15:52:19
 * @Description: 
 * @Site: https://www.undsky.com
 */
const {
    ApiConfigKit
} = require('tnwx')


module.exports = {
    get config() {
        return ApiConfigKit.getApiConfig
    },
}