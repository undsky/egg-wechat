<!--
 * @Author: 姜彦汐
 * @Date: 2020-12-24 10:23:09
 * @LastEditors: 姜彦汐
 * @LastEditTime: 2021-04-22 10:15:54
 * @Description: 
 * @Contact: jiangyanxi@live.com
 * @FilePath: /egg-wechat/README.md
-->
# egg-wechat
## 安装

```bash
$ npm i egg-wechat --save
# or
$ yarn add egg-wechat
```

## 依赖说明

### 依赖的 egg 版本

egg 2.x | egg 1.x
--- | ---
😁 | ❌

### 依赖的插件

[co-wechat](https://github.com/node-webot/co-wechat)

[co-wechat-api](https://github.com/node-webot/co-wechat-api)

[co-wechat-oauth](https://github.com/node-webot/co-wechat-oauth)

[tenpay](https://github.com/befinal/node-tenpay)

## 开启插件

```js
// {app_root}/config/plugin.js
exports.wechat = {
  enable: true,
  package: 'egg-wechat',
};
```

## 配置

```js
// {app_root}/config/config.default.js
config.wechat = {

};
```
## License

[MIT](LICENSE)