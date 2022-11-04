/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx04ad8fbea46ce937',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'f88cc11d1900de0784a9b1212fd616db',

  PROVINCE: '河南',
  CITY: '安阳',

  USERS: [
    {
      // 想要发送的人的名字
      name: '任明文',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oZur46Soi8-xtgg3iHO6A0B2wGJQ',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'HgyxmPuBQunZCysQ11L5RoIOHU8ZVDZrCti_h5wmm-g',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '03-29',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '任明文', year: '1997', date: '03-29',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '超级日', name: '任明文', year: '2022', date: '10-01',
        },
        {
          type: '节日', name: '相识纪念日', year: '2019', date: '12-01',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2021-03-01' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2025-10-01' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'E8TcForMn44z11h4vkepmBd-WGbsqP44qcde0YyQF2g',

  CALLBACK_USERS: [
    {
      name: '韩明州',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oZur46SFUWad_3ZuJcNv3KRSW3M0',
    }
  ],

}

module.exports = USER_CONFIG

