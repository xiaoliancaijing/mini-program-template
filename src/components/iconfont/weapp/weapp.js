Component({
  properties: {
    // shouji | you1 | zuo1 | shanchu1 | bianji1 | kecheng1 | weigouxuan | gouxuan | bianji | xingzhuang1 | wen | lock | kecheng | xiaoxi1 | lujingbeifen3 | lujingbeifen2 | shouye1 | kechengmingcheng | keshimingcheng | bianzu18 | biji1 | tiwen | tiwen-copy | wodebiji | xiazaijiangyi | jingxuan | 91 | zhifubao | shouye | jinpai2 | jinpai1 | jinpai | you | zuo | youke | z | y | shijuan11 | jiantoubeifen2 | jiantoubeifen | icon_nz | zhengque | xingzhuang | xingzhuang22 | xingzhuang2 | tongji | shijuan1 | shijian | liebiao | kemu | kaodian | datika0222 | datika022 | datika02 | cuowu | bianzu4 | bianzu3 | bianzu2 | shitijiaocai | zhengzaizhibo | zhichidingjin | weigoumai1 | iconshouqi | iconzhankai | tongzhi | qianwangshezhi | icon_xs2 | icon_xs | icon_tj | icon_xz2 | icon_g | shijuan | PK | img_tu | icon_xz1 | icon_xl21 | icon_xl2 | icon_sl21 | icon_sl1 | icon_qh | icon_kg2 | icon_kg | icon_sc | icon_yj1 | icon_bj | dingdan2 | icon_yj | weigoumai | touxiang | xiaoxitishi1 | qianwang | ke1 | ke | 2 | 1 | Fill4 | Fill3 | xiaoxi2 | dingdan12 | biji11 | wenda11 | zixun11 | tikuicon11 | banci1 | icon_right | icon_left | icon_calendar | right-arrow | icon_ts2 | shouhuo | img_lc | icon_ts | icon_xl1 | icon_sl | dingdan1 | chenggong | icon_xx | icon_xl | icon_sl2 | icon_rl | delete | dengluye_weigouxuan1 | dengluye_gouxuan1 | dengluye_weigouxuan | dengluye_gouxuan | fanhui | fanhui1 | chakan | yati | mokao | ceping | xingzhuangjiehe2 | xingzhuangjiehe1 | error | icon_fh | mima | yonghu | xialacaidan | xiaoxitishi | xiaoxi | dingdan | biji | wenda | zixun | tikuicon | banci
    name: {
      type: String,
    },
    // string | string[]
    color: {
      type: null,
      observer: function(color) {
        this.setData({
          colors: this.fixColor(),
          isStr: typeof color === 'string',
        });
      }
    },
    size: {
      type: Number,
      value: 18,
      observer: function(size) {
        this.setData({
          svgSize: size / 750 * wx.getSystemInfoSync().windowWidth,
        });
      },
    },
  },
  data: {
    colors: '',
    svgSize: 18 / 750 * wx.getSystemInfoSync().windowWidth,
    quot: '"',
    isStr: true,
  },
  methods: {
    fixColor: function() {
      var color = this.data.color;
      var hex2rgb = this.hex2rgb;

      if (typeof color === 'string') {
        return color.indexOf('#') === 0 ? hex2rgb(color) : color;
      }

      return color.map(function (item) {
        return item.indexOf('#') === 0 ? hex2rgb(item) : item;
      });
    },
    hex2rgb: function(hex) {
      var rgb = [];

      hex = hex.substr(1);

      if (hex.length === 3) {
        hex = hex.replace(/(.)/g, '$1$1');
      }

      hex.replace(/../g, function(color) {
        rgb.push(parseInt(color, 0x10));
        return color;
      });

      return 'rgb(' + rgb.join(',') + ')';
    }
  }
});
