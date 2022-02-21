<template>
  <nav>
    <!-- app: 组件必须要有 app 属性，v-main才会给与注册高度 -->
    <!-- mini-variant: 抽屉会缩小（默认56px），并隐藏第一个元素外的v-list内的所有内容 -->
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      mini-variant-width="80"
      class="black px-2"
      app
      dark
      permanent
      style="height: 100%"
    >
      <!-- Log Out -->
      <template v-slot:append>
        <div class="pa-3 mb-4 text-center">
          <v-btn block class="blue" :class="{ 'px-2': mini }">
            <span v-if="!mini" class="">Logout</span>
            <v-icon v-else class="">mdi-logout-variant</v-icon>
          </v-btn>

          <!-- <v-btn  inline-block class="blue" min-width="40">
          </v-btn> -->
        </div>
      </template>
      <!-- Avatar -->
      <v-list-item class="">
        <v-list-item-avatar size="30" class="py-5">
          <v-img src="../assets/vuetify-logo.png"></v-img>
        </v-list-item-avatar>
        <v-list-item-title class="text-uppercase font-weight-black"
          >Dashboard</v-list-item-title
        >
        <v-btn icon @click.stop="mini = !mini">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <!-- divider -->
      <v-divider class="mx-3 grey darken-3"></v-divider>

      <!-- User Profile Nav Group -->
      <v-list>
        <v-list-group class="" color="white" no-action value="false">
          <template v-slot:activator>
            <v-list-item-icon>
              <v-icon>mdi-account-circle</v-icon>
            </v-list-item-icon>
            <v-list-item-title text--white>Boyang</v-list-item-title>
          </template>
          <v-list-item v-for="(o, index) in userMenuOptionList" :key="index">
            <v-list-item-title>{{ o.optionName }}</v-list-item-title>
            <v-list-item-icon>
              <v-icon v-text="'mdi-' + o.optionIcon"></v-icon>
              <!-- <v-icon>mdi-arrow-right-thin</v-icon> -->
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>
      </v-list>

      <!-- divider -->
      <v-divider class="mx-3 grey darken-3"></v-divider>

      <!-- Dashboard Nav -->
      <v-list-item class="mt-2">
        <v-list-item-icon>
          <v-icon>mdi-view-dashboard</v-icon>
        </v-list-item-icon>
        <v-list-item-content
          ><v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <!-- ===== Navigation List ===== -->
      <v-list class="mt-n2">
        <v-list-group
          v-for="(nav, index) in menuNavOptionList"
          :key="index"
          v-model="nav.active"
          :prepend-icon="'mdi-' + nav.icon"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title text--white text-subtitle-1>{{
                nav.name
              }}</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item v-for="(c, index) in nav.childOptionList" :key="index">
            <v-list-item-title>{{ c.optionName }}</v-list-item-title>
            <v-list-item-icon>
              <v-icon v-if="c.optionIcon" size="20">
                {{ "mdi-" + c.optionIcon }}
              </v-icon>
              <v-icon
                v-else
                size="20"
                v-text="'mdi-' + nav.childOptionIcon"
              ></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>
      </v-list>

      <!-- <v-list flat>
        <v-list-item router to="/">
          <v-badge color="pink" dot overlap offset-y="17" offset-x="0">
            <v-list-item-content>
              <v-icon class="mb-2">fas fa-user</v-icon>
            </v-list-item-content>
          </v-badge>
        </v-list-item>

        <v-list-item router to="/">
          <v-badge color="pink" dot overlap offset-y="17" offset-x="0">
            <v-list-item-content>
              <v-icon class="mb-2">fas fa-envelope</v-icon>
            </v-list-item-content>
          </v-badge>
        </v-list-item>

        <v-list-item router to="/">
          <v-list-item-icon>
            <v-icon class="mb-2">fas fa-cog</v-icon>
          </v-list-item-icon>
        </v-list-item>

        <v-list-item router to="/">
          <v-list-item-icon>
            <v-icon class="mb-2">fas fa-question-circle</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list> -->
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "SideBar",

  data: () => ({
    // Navigation Drawer
    drawer: null, // null(移动关闭，桌面打开), true(移动打开桌面关闭)
    mini: null,
    // dummy data
    userMenuOptionList: [
      {
        optionName: "My Profile",
        optionIcon: "card-account-details",
        optionLink: "",
      },
      {
        optionName: "Edit Profile",
        optionIcon: "account-edit",
        optionLink: "",
      },
      {
        optionName: "Settings",
        optionIcon: "account-cog",
        optionLink: "",
      },
    ],
    menuNavOptionList: {
      pages: {
        name: "Pages",
        icon: "book-open-page-variant",
        link: "",

        childOptionIcon: "page-next",
        childOptionList: [
          {
            optionName: "Page 1",
            optionIcon: "",
            optionLink: "",
          },
          {
            optionName: "Page 2",
            optionIcon: "",
            optionLink: "",
          },
          {
            optionName: "Page 3",
            optionIcon: "",
            optionLink: "",
          },
        ],
      },
      components: {
        name: "Component",
        icon: "view-grid-plus",
        link: "",
        childOptionIcon: "view-grid",
        childOptionList: [
          {
            optionName: "Component 1",
            optionIcon: "",
            optionLink: "",
          },
          {
            optionName: "Component 2",
            optionIcon: "",
            optionLink: "",
          },
          {
            optionName: "Component 3",
            optionIcon: "",
            optionLink: "",
          },
        ],
      },
      forms: {
        name: "Forms",
        icon: "format-columns",
        link: "",
        childOptionIcon: "format-align-justify",
        childOptionList: [
          {
            optionName: "Form 1",
            optionIcon: "",
            optionLink: "",
          },
          {
            optionName: "Form 2",
            optionIcon: "format-align-center",
            optionLink: "",
          },
          {
            optionName: "Form 3",
            optionIcon: "format-align-left",
            optionLink: "",
          },
        ],
      },
      tables: {
        name: "Tables",
        icon: "table-large",
        link: "",
        childOptionIcon: "table",
        childOptionList: [
          {
            optionName: "Table 1",
            optionIcon: "",
            optionLink: "",
          },
          {
            optionName: "Table 2",
            optionIcon: "table-column",
            optionLink: "",
          },
          {
            optionName: "Table 3",
            optionIcon: "table-row",
            optionLink: "",
          },
        ],
      },
      maps: {
        name: "Maps",
        icon: "map-marker-radius",
        link: "",
        childOptionIcon: "map-outline",
        childOptionList: [
          {
            optionName: "Map 1",
            optionIcon: "",
            optionLink: "",
          },
          {
            optionName: "Map 2",
            optionIcon: "",
            optionLink: "",
          },
          {
            optionName: "Map 3",
            optionIcon: "",
            optionLink: "",
          },
        ],
      },
      charts: {
        name: "Charts",
        icon: "chart-line",
        link: "",
        active: true,
        childOptionIcon: "page-next-outline",
        childOptionList: [
          {
            optionName: "Chart 1",
            optionIcon: "chart-arc",
            optionLink: "",
          },
          {
            optionName: "Chart 2",
            optionIcon: "chart-bar",
            optionLink: "",
          },
          {
            optionName: "Chart 3",
            optionIcon: "chart-bell-curve-cumulative",
            optionLink: "",
          },
        ],
      },
      calendar: {
        name: "Calendar",
        icon: "calendar-month",
        link: "",
        childOptionIcon: "calendar-range-outline",
        childOptionList: [
          {
            optionName: "Calendar 1",
            optionIcon: "",
            optionLink: "",
          },
          {
            optionName: "Calendar 2",
            optionIcon: "calendar-check",
            optionLink: "",
          },
          {
            optionName: "Calendar 3",
            optionIcon: "calendar-star",
            optionLink: "",
          },
        ],
      },
      // forms,
      // tables,
      // maps,
      // chats,
      // calendar,
    },
  }),
};
</script>

<style scoped></style>
