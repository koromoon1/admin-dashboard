<template>
  <v-app-bar
    app
    class="elevation-0 px-3 px-sm-8"
    height="80px"
    color="background"
    elevate-on-scroll
  >
    <!-- Toggle Drawer Btn -->
    <v-btn icon @click.stop="toggleDrawer">
      <v-icon size="25">mdi-menu</v-icon>
    </v-btn>
    <v-toolbar-title class="hidden-sm-and-down">Title</v-toolbar-title>
    <v-spacer></v-spacer>
    <!-- Search Bar -->
    <v-text-field
      class="mr-16 mt-6 hidden-sm-and-down"
      style="max-width: 220px"
      prepend-icon="mdi-magnify"
      placeholder="Search"
      flat
    >
    </v-text-field>

    <!-- Icons -->
    <!-- User Profile -->
    <v-menu transition="scroll-y-transition" origin="top center" offset-y>
      <template v-slot:activator="{ on: menu, attrs }">
        <!-- tool tip -->
        <!-- tool tip -->
        <v-tooltip bottom :disabled="!isDesktop">
          <template v-slot:activator="{ on: tooltip }">
            <v-btn
              class="mx-3"
              icon
              v-bind="attrs"
              v-on="{ ...tooltip, ...menu }"
            >
              <v-icon size="30">mdi-account</v-icon>
            </v-btn>
          </template>
          <span>Profile Options</span>
        </v-tooltip>
      </template>
      <!-- menu content -->
      <v-card max-width="400">
        <v-list>
          <v-subheader>Profile Options</v-subheader>
          <v-list-item
            v-for="(o, index) in profileOptionList"
            :key="index"
            link
          >
            <v-list-item-title v-text="o"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>

    <!-- Notifications -->
    <v-menu transition="scroll-y-transition" origin="top center" offset-y>
      <template v-slot:activator="{ on: menu, attrs }">
        <!-- tool tip -->
        <v-tooltip bottom :disabled="!isDesktop">
          <template v-slot:activator="{ on: tooltip }">
            <!-- badge settings -->
            <v-badge
              :content="notification"
              :value="notification"
              color="pink"
              overlap
              offset-y="18"
              offset-x="30"
            >
              <v-btn
                class="mx-3"
                icon
                v-bind="attrs"
                v-on="{ ...tooltip, ...menu }"
              >
                <v-icon size="30">mdi-bell</v-icon>
              </v-btn>
            </v-badge>
          </template>
          <span>Profile Options</span>
        </v-tooltip>
      </template>
      <!-- menu content -->
      <v-card max-width="400">
        <v-list>
          <v-subheader>Notifications</v-subheader>
          <v-list-item v-for="n in notificationList" :key="n" link>
            <v-list-item-title
              v-text="'Item asdsadsads' + n"
            ></v-list-item-title>
          </v-list-item>
          <v-btn class="mx-4" @click="clearNoti">Clear Notifications</v-btn>
        </v-list>
      </v-card>
    </v-menu>

    <!-- Dashboard Nav -->
    <!-- tool tip -->
    <v-tooltip bottom :disabled="!isDesktop">
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="mx-3" icon v-bind="attrs" v-on="on">
          <v-icon size="30">mdi-view-dashboard</v-icon>
        </v-btn>
      </template>
      <span class="text-body2">Dashboard</span>
    </v-tooltip>

    <!-- Setting -->
    <v-menu transition="scroll-y-transition" origin="top center" offset-y>
      <template v-slot:activator="{ on: menu, attrs }">
        <!-- tool tip -->
        <v-tooltip bottom :disabled="!isDesktop">
          <template v-slot:activator="{ on: tooltip }">
            <v-btn
              class="mx-3"
              icon
              v-bind="attrs"
              v-on="{ ...tooltip, ...menu }"
            >
              <v-icon size="30">mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <span>Settings</span>
        </v-tooltip>
      </template>
      <!-- menu content -->
      <v-card max-width="400" clas="me-10">
        <v-list flat>
          <v-subheader>General Settings</v-subheader>

          <v-list-item
            v-for="(o, index) in profileOptionList"
            :key="index"
            link
          >
            <v-list-item-title v-text="o"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  name: "TopBar",

  computed: {
    // Is desktop or not
    isDesktop() {
      return window.innerWidth >= 1264;
    },
    notification() {
      return this.$store.getters["notification"];
    },
  },

  methods: {
    toggleDrawer() {
      // On desktop
      // always show drawer, only toggle mini
      if (this.isDesktop) {
        this.$store.state.mini = !this.$store.state.mini;
      }
      // On tablet and mobile
      // always not mini, only toggle show/hide
      else {
        this.$store.state.drawer = !this.$store.state.drawer;
      }
    },
    clearNoti() {
      this.$store.dispatch("clearNotification");
    },
  },

  data() {
    return {
      profileOptionList: ["My Profile", "Edit Profile", "Log Out"],
      notificationList: ["My Profile", "Edit Profile", "Log Out"],
      // notificationList: ["My Profile", "Edit Profile", "Log Out"],
    };
  },
};
</script>
