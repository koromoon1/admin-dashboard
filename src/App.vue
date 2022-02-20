<template>
  <v-app>
    <!-- v-app 是默认的根节点，直接替换默认的vue入口 -->

    <SideBar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import SideBar from "./components/SideBar.vue";

export default {
  name: "App",

  components: {
    SideBar,
  },
  data: () => ({
    //
  }),
};
</script>
