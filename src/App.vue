<template>
  <v-app>
    <!-- v-app 是默认的根节点，直接替换默认的vue入口 -->

    <!-- App Bar -->
    <TopBar />

    <!-- Drawer -->
    <SideBar />

    <v-main>
      <v-container fluid app>
        <!-- Route View -->
        <router-view />
      </v-container>
      <FooterBar />
    </v-main>
  </v-app>
</template>

<script>
import TopBar from "./components/TopBar.vue";
import SideBar from "./components/SideBar.vue";
import FooterBar from "./components/FooterBar.vue";

export default {
  name: "App",

  components: {
    SideBar,
    TopBar,
    FooterBar,
  },
  data: () => ({
    //
  }),
};
</script>

<style scoped>
.theme--light.v-application {
  background: #eee;
}
</style>
