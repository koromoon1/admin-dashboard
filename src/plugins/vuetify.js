// 导入
import "@fortawesome/fontawesome-free/css/all.css"; // needs to be all to show the used icons
import "material-design-icons-iconfont";
import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
// 导入javascript颜色包
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  // 图标
  // https://github.com/vuetifyjs/vuetify/tree/master/packages/vuetify/src/services/icons/presets
  icons: {
    // 更改icon字体库
    iconfont: "md" || "fa", // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  },
  // 颜色包
  // https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/styles/settings/_colors.scss
  theme: {
    // 设定主题颜色
    themes: {
      dark: {
        // use pre-defined material colors
        background: colors.green.lighten5,
        divider: colors.grey,
      },
      light: {
        background: "#eee",
      },
    },
  },
});
