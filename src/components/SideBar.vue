<template>
  <nav>
    <!-- app: 组件必须要有 app 属性，v-main才会给与注册高度 -->
    <!-- mini-variant: 抽屉会缩小（默认56px），并隐藏第一个元素外的v-list内的所有内容 -->
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      class="black"
      app
      dark
      style="height: 100%"
    >
      <!-- Log Out -->
      <template v-slot:append>
        <div class="mb-4 px-2 text-center" :class="{ 'px-4': !mini }">
          <v-btn block class="blue" :class="{ 'px-2': mini }">
            <span v-if="!mini">Logout</span>
            <v-icon v-else>mdi-logout-variant</v-icon>
          </v-btn>
        </div>
      </template>
      <v-list nav>
        <!-- Avatar -->
        <v-list-item>
          <v-list-item-avatar size="28" tile>
            <v-img src="../assets/vuetify-logo-light.svg"></v-img>
          </v-list-item-avatar>

          <v-list-item-title class="text-uppercase font-weight-black"
            >Vuefity Dashboard</v-list-item-title
          >
        </v-list-item>

        <!-- divider -->
        <v-divider class="mx-1 grey darken-3"></v-divider>

        <!-- User Profile Nav Group -->
        <v-list>
          <v-list-group color="white" value="false">
            <template v-slot:activator>
              <v-list-item-icon>
                <v-icon>mdi-account-circle</v-icon>
              </v-list-item-icon>
              <v-list-item-title text--white>Boyang</v-list-item-title>
            </template>

            <v-list-item
              router
              v-for="(o, index) in userProfileNavListGroup"
              :key="index"
            >
              <v-list-item-icon>
                <v-icon v-text="'mdi-' + o.optionIcon"></v-icon>
                <!-- <v-icon>mdi-arrow-right-thin</v-icon> -->
              </v-list-item-icon>
              <v-list-item-title>{{ o.optionName }}</v-list-item-title>
            </v-list-item>
          </v-list-group>
        </v-list>

        <!-- divider -->
        <v-divider class="mx-1 grey darken-3"></v-divider>

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
        <!-- Sub Group -->
        <v-list-group prepend-icon="mdi-book-open-page-variant">
          <template v-slot:activator>
            <v-list-item-title text--white>Pages</v-list-item-title>
          </template>
          <v-list-group
            no-action
            sub-group
            v-for="([title, child], i) in pageSubGroup"
            :key="i"
          >
            <template v-slot:activator>
              <v-list-item-title>{{ title }}</v-list-item-title>
            </template>
            <v-list-item
              v-for="([childTitle, childIcon], index) in child"
              :key="index"
            >
              <v-list-item-title v-text="childTitle"></v-list-item-title>
              <v-list-item-icon>
                <v-icon>{{ childIcon }}</v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
        </v-list-group>

        <!-- Single Group -->
        <v-list class="py-0">
          <v-list-group
            v-for="(nav, index) in sidebarSingleGroupNavList"
            :key="index"
            v-model="nav.active"
            :prepend-icon="'mdi-' + nav.icon"
            no-action
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title text--white>{{
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
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "SideBar",

  computed: {
    // Navigation Drawer Status
    drawer: {
      get() {
        return this.$store.getters["drawer"];
      },
      set(newValue) {
        return this.$store.dispatch("toggleDrawer", newValue);
      },
    },

    mini: {
      get() {
        return this.$store.getters["mini"];
      },
      set(newValue) {
        return this.$store.dispatch("toggleMini", newValue);
      },
    },
  },

  data: () => ({
    // dummy data

    // User Profile Group
    userProfileNavListGroup: [
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
    // Sub Group
    pageSubGroup: [
      [
        "Examples",
        [
          ["Page 1", "mdi-page-next-outline"],
          ["Page 2", "mdi-page-next-outline"],
          ["Page 3", "mdi-page-next-outline"],
        ],
      ],
      [
        "Actions",
        [
          ["Create", "mdi-plus-outline"],
          ["Edit", "mdi-file-edit-outline"],
          ["Delete", "mdi-delete-outline"],
        ],
      ],
    ],
    // Single Group
    sidebarSingleGroupNavList: {
      components: {
        name: "Components",
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
        active: false,
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
    },
  }),
};
</script>

<style scoped></style>
