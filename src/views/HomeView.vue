<template>
  <v-container
    app
    class="pa-0 mx-0"
    :style="{ background: $vuetify.theme.themes.light.background }"
  >
    <v-row no-gutters>
      <!-- Left Side -->
      <v-col md="8">
        <v-container
          :style="{ background: $vuetify.theme.themes.dark.background }"
          class="rounded-tr-xl rounded-br-xl"
          fill-height
          align-start
        >
          <v-container>
            <v-row>
              <!-- Promotion Information -->
              <v-col cols="12" sm="12">
                <v-card class="mx-12 mt-0 rounded-xl">
                  <v-list-item three-line>
                    <v-list-item-content class="pa-10">
                      <v-list-item-title class="headline mb-1"
                        >Today <span class="teal--text">-10%</span> discount
                        <br />
                        on lung examinations</v-list-item-title
                      >
                      <v-list-item-subtitle
                        >The package price includes: consulation <br />
                        of a pulmonosdasds
                        <span class="teal--text">></span></v-list-item-subtitle
                      >
                    </v-list-item-content>

                    <!-- promotion Avatar -->
                    <v-list-item-avatar tile size="150" class="mr-10">
                      <v-img
                        lazy-src="../assets/catBQ.jpg"
                        src="../assets/catBQ.jpg"
                        alt=""
                      >
                        <!-- Image Placeholder -->
                        <template v-slot:placeholder>
                          <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                          >
                            <v-progress-circular
                              indeterminate
                              color="grey lighten-5"
                            ></v-progress-circular>
                          </v-row>
                        </template>
                      </v-img>
                    </v-list-item-avatar>
                  </v-list-item>
                </v-card>
              </v-col>

              <!-- Health Statistics -->
              <v-col cols="12" sm="12">
                <v-card class="mx-12 mt-0 rounded-xl">
                  <v-app-bar color="rgba(0,0,0,0)" flat class="mx-8 mb-8">
                    <h5>Statistics of your health</h5>
                    <v-spacer></v-spacer>
                    <v-btn color="teal" text
                      >2019
                      <v-icon right>mdi-chevron-down</v-icon>
                    </v-btn>
                    <v-btn color="teal" rounded dark depressed>Year</v-btn>
                    <!-- <v-btn text>Month</v-btn> -->
                  </v-app-bar>
                  <!-- Sparkline -->
                  <template>
                    <v-sparkline
                      color="teal"
                      :value="value"
                      :smooth="radius || false"
                      :padding="padding"
                      :line-width="width"
                      :stroke-linecap="lineCap"
                      :fill="fill"
                      :type="type"
                      :auto-line-width="autoLineWidth"
                      auto-draw
                    ></v-sparkline>
                  </template>
                </v-card>
              </v-col>

              <!-- Heart Rate -->
              <v-col cols="12" sm="6">
                <v-card class="mx-12 rounded-xl" color="teal" dark>
                  <v-list-item three-line>
                    <v-list-item-content class="pa-2">
                      <v-list-item-title class="headline mb-1">
                        Heart Rate <br />
                        <h2>112 bpm</h2>
                      </v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-avatar tile size="160" class="mr-5">
                      <v-icon size="100">fas fa-heartbeat</v-icon>
                    </v-list-item-avatar>
                  </v-list-item>
                </v-card>
              </v-col>

              <!-- Activity Circular -->
              <v-col cols="12" sm="6">
                <v-card class="mx-12 rounded-xl">
                  <v-app-bar color="rgba(0,0,0,0)" class="mx-8" flat>
                    <h5>Your activity</h5>

                    <!-- spacer -->
                    <v-spacer></v-spacer>

                    <v-btn color="teal" rounded dark depressed>Week</v-btn>
                    <v-btn text>Month</v-btn>
                  </v-app-bar>
                  <!-- Progress Circular -->

                  <v-container class="d-flex justify-center">
                    <v-progress-circular
                      class="mb-2 mx-5"
                      rotate="360"
                      size="100"
                      width="15"
                      value="50"
                      color="lime"
                    >
                      50
                    </v-progress-circular>

                    <v-progress-circular
                      class="mb-2 mx-5"
                      rotate="360"
                      size="100"
                      width="15"
                      value="70"
                      color="green"
                    >
                      70
                    </v-progress-circular>

                    <v-progress-circular
                      class="mb-2 mx-5"
                      rotate="360"
                      size="100"
                      width="15"
                      value="80"
                      color="teal"
                    >
                      80
                    </v-progress-circular>
                  </v-container>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-container>
      </v-col>

      <!-- Right Side -->
      <v-col md="4">
        <v-app :style="{ background: $vuetify.theme.themes.light.background }">
          <!-- Patient Info Card -->
          <v-container>
            <v-row>
              <!-- Avata, age and city -->
              <v-col cols="12" sm="12">
                <v-list two-line>
                  <v-list-group :value="true" color="teal">
                    <template v-slot:activator>
                      <v-list-item-avatar>
                        <img
                          src="https://cdn.vuetifyjs.com/images/lists/3.jpg"
                          alt=""
                        />
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title>Anastasia Turner</v-list-item-title>
                        <v-list-item-subtitle class="teal-text"
                          >35 years, Houston</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </template>

                    <!-- Personal Information -->
                    <v-list-item>
                      <v-row>
                        <!-- Blood -->
                        <v-col cols="12" md="4">
                          <v-row>
                            <v-col cols="12" md="2">
                              <v-card
                                height="50px"
                                width="10px"
                                color="red"
                              ></v-card>
                            </v-col>
                            <v-col cols="12" md="10">
                              <v-list two-line subheader class="ml-n8">
                                <v-list-item>
                                  <v-list-item-content>
                                    <v-list-item-subtitle>
                                      Blood
                                    </v-list-item-subtitle>
                                    <v-list-item-title>A+</v-list-item-title>
                                  </v-list-item-content>
                                </v-list-item>
                              </v-list>
                            </v-col>
                          </v-row>
                        </v-col>

                        <!-- Height -->
                        <v-col cols="12" md="4">
                          <v-row>
                            <v-col cols="12" md="2">
                              <v-card
                                height="50px"
                                width="10px"
                                color="green"
                              ></v-card>
                            </v-col>
                            <v-col cols="12" md="10">
                              <v-list two-line subheader class="ml-n8">
                                <v-list-item>
                                  <v-list-item-content>
                                    <v-list-item-subtitle>
                                      Height
                                    </v-list-item-subtitle>
                                    <v-list-item-title
                                      >175 cm</v-list-item-title
                                    >
                                  </v-list-item-content>
                                </v-list-item>
                              </v-list>
                            </v-col>
                          </v-row>
                        </v-col>

                        <!-- Weight -->
                        <v-col cols="12" md="4">
                          <v-row>
                            <v-col cols="12" md="2">
                              <v-card
                                height="50px"
                                width="10px"
                                color="grey"
                              ></v-card>
                            </v-col>
                            <v-col cols="12" md="10">
                              <v-list two-line subheader class="ml-n8">
                                <v-list-item>
                                  <v-list-item-content>
                                    <v-list-item-subtitle>
                                      Weight
                                    </v-list-item-subtitle>
                                    <v-list-item-title>64kg</v-list-item-title>
                                  </v-list-item-content>
                                </v-list-item>
                              </v-list>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                    </v-list-item>

                    <v-list-group
                      :value="true"
                      sub-group
                      prepend-icon="mdi-clock-time-nine-outline"
                      no-action
                      color="teal"
                    >
                      <template v-slot:activator>
                        <v-list-item-title> Appointments </v-list-item-title>
                      </template>
                    </v-list-group>
                    <v-row>
                      <!-- Month Select -->
                      <v-col cols="12" sm="12">
                        <v-btn text
                          >November
                          <v-icon right>mdi-chevron-down</v-icon>
                        </v-btn>
                      </v-col>

                      <!-- Weekday Select -->
                      <v-col cols="12" sm="12">
                        <v-list>
                          <v-list-item>
                            <v-list-item-content>
                              <v-btn outlined color="teal darken-1">MON</v-btn>
                            </v-list-item-content>
                            <v-list-item-content>
                              <v-btn outlined color="teal darken-1">TUE</v-btn>
                            </v-list-item-content>
                            <v-list-item-content>
                              <v-btn outlined color="teal darken-1">WED</v-btn>
                            </v-list-item-content>
                            <v-list-item-content>
                              <v-btn dark color="teal darken-1">THU</v-btn>
                            </v-list-item-content>
                            <v-list-item-content>
                              <v-btn outlined color="teal darken-1">FRI</v-btn>
                            </v-list-item-content>
                            <v-list-item-content>
                              <v-btn outlined color="teal darken-1">SAT</v-btn>
                            </v-list-item-content>
                          </v-list-item>
                        </v-list>
                      </v-col>

                      <!-- Appointments -->
                      <v-col cols="12" sm="12">
                        <v-list-group
                          color="black"
                          :value="true"
                          prepend-icon="mdi-clock-time-nine-outline"
                        >
                          <template v-slot:activator>
                            <v-list-item-title class="text-uppercase"
                              >Appointments</v-list-item-title
                            >
                          </template>
                          <!-- 1 -->
                          <v-card
                            class="mx-12 my-4 rounded-xl py-4"
                            color="teal"
                            dark
                            flat
                          >
                            <v-list-item three-line>
                              <v-list-item-avatar tile size="30">
                                <v-icon size="30">mdi-tooth</v-icon>
                              </v-list-item-avatar>
                              <v-list-item-content class="pa-2">
                                <v-list-item-title class="headline mb-1">
                                  Dentist <br />
                                  <h6>8:00am - 9:30am</h6>
                                  <h6>Dr. Alex Brown(cab 39)</h6>
                                </v-list-item-title>
                              </v-list-item-content>
                            </v-list-item>
                          </v-card>
                          <!-- 2 -->
                          <v-card
                            class="mx-12 my-4 rounded-xl py-4"
                            color="teal lighten-5"
                            flat
                          >
                            <v-list-item three-line>
                              <v-list-item-avatar tile size="30">
                                <v-icon size="30">fas fa-heartbeat</v-icon>
                              </v-list-item-avatar>
                              <v-list-item-content class="pa-2">
                                <v-list-item-title class="headline mb-1">
                                  Cardiologist <br />
                                  <h6>9:45am - 11:50am</h6>
                                  <h6>Dr. Elika Clark(cab 61)</h6>
                                </v-list-item-title>
                              </v-list-item-content>
                            </v-list-item>
                          </v-card>
                        </v-list-group>
                      </v-col>

                      <!-- Treatment List Group -->
                      <v-col cols="12" sm="12">
                        <v-list-group
                          color="black"
                          :value="true"
                          prepend-icon="mdi-pill"
                        >
                          <template v-slot:activator>
                            <v-list-item-title class="text-uppercase"
                              >Your Treatment</v-list-item-title
                            >
                          </template>
                          <!-- 1 -->
                          <v-card
                            class="mx-12 my-4 rounded-xl py-4"
                            color="teal lighten-5"
                            flat
                          >
                            <v-list-item three-line>
                              <v-list-item-avatar tile size="30">
                                <v-icon color="teal" size="30">mdi-pill</v-icon>
                              </v-list-item-avatar>
                              <v-list-item-content class="pa-2">
                                <v-list-item-title class="headline mb-1">
                                  Gentle Iron <br />
                                  <h6>
                                    <span class="teal--text">2 capsules</span>
                                    with meals everyday
                                  </h6>
                                </v-list-item-title>
                              </v-list-item-content>
                            </v-list-item>
                          </v-card>
                          <!-- 2 -->
                          <v-card
                            class="mx-12 my-4 rounded-xl py-4"
                            color="teal lighten-5"
                            flat
                          >
                            <v-list-item three-line>
                              <v-list-item-avatar tile size="30">
                                <v-icon color="teal" size="30">mdi-pill</v-icon>
                              </v-list-item-avatar>
                              <v-list-item-content class="pa-2">
                                <v-list-item-title class="headline mb-1">
                                  Gentle Iron <br />
                                  <h6>
                                    <span class="teal--text">2 capsules</span>
                                    with meals everyday
                                  </h6>
                                </v-list-item-title>
                              </v-list-item-content>
                            </v-list-item>
                          </v-card>
                        </v-list-group>
                      </v-col>
                    </v-row>
                  </v-list-group>
                </v-list>
              </v-col>
            </v-row>
          </v-container>
        </v-app>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HomeView",
  components: {},

  data: () => ({
    // sparkline settings
    width: 2,
    radius: 10,
    padding: 8,
    lineCap: "round",
    value: [0, 2, 5, 9, 5, 10, 0, 2, 5, 9, 5, 10],
    fill: false,
    type: "trend", // trend or others (trend is better)
    autoLineWidth: false,
  }),

  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
  },
};
</script>
