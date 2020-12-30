<!--
 * @Author: 姜彦汐
 * @Date: 2020-12-24 10:23:09
 * @LastEditors: 姜彦汐
 * @LastEditTime: 2020-12-30 14:58:05
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

egg-wechat 版本 | egg 2.x | egg 1.x
--- | --- | ---
1.x | 😁 | ❌

### 依赖的插件

[egg-cache](https://gitee.com/mc-node/egg-cache)

## 使用

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
exports.wechat = {  
  default: {
      appid: null,
      appsecret: null,
      token: null,
      encodingAESKey: null,
      cache: 'cache.disk' // 默认集成 egg-cache，支持任意实现 get、set 方法的缓存插件
  },
  // Single
  client: {
      message: {
          // 接收微信公众平台消息
      },
      api: {
          // 公众平台 API
      },
      oauth: {
          // 网页授权
      },
      pay: {
          // 微信支付
          mchid: null,
          partnerKey: null,
          pfx: null,
          notify_url: null,
          refund_url: null,
          spbill_create_ip: null,
          debug: false
      },
      cx: {
          // 小程序
          appid: null,
          appsecret: null,
          pay: {
              // 小程序支付
              mchid: null,
              partnerKey: null,
              pfx: null,
              notify_url: null,
              refund_url: null,
              spbill_create_ip: null,
              debug: false
          },
      }
    },
    // Multi
    // clients: {
    //     wechat1: {

    //     },
    //     wechat2: {

    //     }
    // }
};
```

## 示例

+ 主动调用公众平台 API

```js
await app.wechat.api.**
```

+ 网页授权

```js
await app.wechat.oauth.**
```

+ 微信支付

```js
await app.wechat.pay.**
```

+ 接收微信公众平台消息

```js
const Controller = require('egg').Controller;

module.exports = app => {
    class WechatController extends Controller {

    }

    WechatController.prototype.message = app.wechat.message(async (message, ctx) => {
      // 消息处理
    })

    return WechatController;
};
```

## 自定义缓存机制

```js
// {app_root}/app/extend/application.js
const CACHETOKEN = Symbol('cache#token')

module.exports = {
    get cachetoken() {
        if (!this[CACHETOKEN]) {
            async function get(key) {
                // 
            }

            async function set(key, value) {
                //
            }

            this[CACHETOKEN] = {
                get,
                set
            }
        }

        return this[CACHETOKEN]
    }
};
// 配置
// {app_root}/config/config.default.js
exports.wechat = {  
  default: {
      cache: 'cachetoken'
  },
}
```

## License

[MIT](LICENSE)