<template>
  <!-- <v-footer padless class="mt-5">
    <v-container class="pa-6">
      <v-row class="align-center">
        <div>
          <v-btn v-for="link in links" :key="link" text>
            {{ link }}
          </v-btn>
        </div>
        <v-spacer></v-spacer>
        <div class="">
          {{ new Date().getFullYear() }} — <strong>Made by Vuetify</strong>
        </div>
      </v-row>
    </v-container>
  </v-footer> -->
  <v-footer dark padless class="mt-5">
    <v-card
      flat
      tile
      class="white--text text-center grey lighten-1"
      width="100%"
    >
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Admin Dashboard clone of Vuetify Material Dashboard PRO
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: ["Home", "About Us", "Team", "Services", "Contact Us"],
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>
