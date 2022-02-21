<template>
  <nav>
    <!-- app: 组件必须要有 app 属性，v-main才会给与注册高度 -->
    <!-- mini-variant: 抽屉会缩小（默认56px），并隐藏第一个元素外的v-list内的所有内容 -->
    <v-navigation-drawer
      v-model="drawer"
      class="teal lighten-0"
      app
      dark
      mini-variant
      mini-variant-width="100"
    >
      <!-- Avatar -->
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
      <!-- Nav Button List -->
      <v-list flat>
        <!-- home icon -->
        <v-list-item router to="/">
          <v-list-item-content>
            <v-icon class="mb-2">fas fa-home</v-icon>
          </v-list-item-content>
        </v-list-item>
        <!-- user icon -->
        <v-list-item router to="/">
          <v-badge color="pink" dot overlap offset-y="17" offset-x="0">
            <v-list-item-content>
              <v-icon class="mb-2">fas fa-user</v-icon>
            </v-list-item-content>
          </v-badge>
        </v-list-item>
        <!-- email icon -->
        <v-list-item router to="/">
          <v-badge color="pink" dot overlap offset-y="17" offset-x="0">
            <v-list-item-content>
              <v-icon class="mb-2">fas fa-envelope</v-icon>
            </v-list-item-content>
          </v-badge>
        </v-list-item>
        <!-- config icon -->
        <v-list-item router to="/">
          <v-list-item-content>
            <v-icon class="mb-2">fas fa-cog</v-icon>
          </v-list-item-content>
        </v-list-item>
        <!-- question icon -->
        <v-list-item router to="/">
          <v-list-item-content>
            <v-icon class="mb-2">fas fa-question-circle</v-icon>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-spacer></v-spacer>
      <!-- Sign Out -->
      <v-list style="position: absolute; bottom: 0" class="ml-6" flat>
        <v-list-item router to="/">
          <!-- <v-list-item-action> -->
          <v-icon>fas fa-sign-out</v-icon>
          <!-- </v-list-item-action> -->
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "SideBar",

  data: () => ({
    // Navigation Drawer 显示设定: null(移动关闭，桌面打开), true(移动打开桌面关闭)
    drawer: true,
  }),
};
</script>
