<template>
  <nav>
    <!-- app: 组件必须要有 app 属性，v-main才会给与注册高度 -->
    <!-- mini-variant: 抽屉会缩小（默认56px），并隐藏第一个元素外的v-list内的所有内容 -->
    <v-navigation-drawer
      v-model="drawer"
      dark
      app
      mini-variant
      mini-variant-width="100"
      class="teal lighten-3"
    >
      <v-list>
        <!-- mb-12: https://vuetifyjs.com/zh-Hans/styles/spacing/ -->
        <v-list-item class="mb-12">
          <v-list-item-content>
            <!-- large: https://vuetifyjs.com/zh-Hans/components/icons/#material-design -->
            <v-icon class="mb-2" large>fas fa-hand-holding-medical</v-icon>
            <!-- align:  -->
            <v-list-item-subtitle align="center">Medi</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "SideBar",

  data: () => ({
    // Navigation Drawer 显示设定
    drawer: true,
  }),
};
</script>
