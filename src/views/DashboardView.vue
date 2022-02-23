<template>
  <div id="dashboardView" class="px-4">
    <!-- Sparkline Section -->
    <v-row class="">
      <v-col
        class="col-md-6 col-lg-4 col-12"
        v-for="(c, index) in sparklinesConfigs"
        :key="index"
      >
        <v-card class="mt-6 mx-auto">
          <v-sheet
            class="v-sheet--offset mx-auto pa-5"
            max-width="calc(100% - 32px)"
            :color="c.cardConfig.sheetColor"
            :elevation="c.cardConfig.sheetElevation"
          >
            <v-sparkline
              color="white"
              :fill="c.sparklineConfig.fill"
              :gradient="c.sparklineConfig.gradients"
              :line-width="c.sparklineConfig.lineWidth"
              :smooth="c.sparklineConfig.radius || false"
              :value="c.sparklineConfig.value"
              :labels="c.sparklineConfig.labels"
              :label-size="c.sparklineConfig.labelSize"
              :type="c.sparklineConfig.type"
            ></v-sparkline>
          </v-sheet>

          <v-card-text class="pt-0">
            <div class="text-h6 font-weight-light mb-2">
              {{ c.cardConfig.title }}
            </div>
            <div class="subheading font-weight-light grey--text">
              {{ c.cardConfig.subTitle }}
            </div>
            <v-divider class="my-2"></v-divider>
            <v-icon class="mr-2" small> mdi-clock </v-icon>
            <span class="text-caption grey--text font-weight-light mt-3">{{
              c.cardConfig.note
            }}</span>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Datas Section -->
    <v-row class="">
      <v-col
        class="col-md-6 col-lg-3 col-12 mt-6"
        v-for="(d, index) in dataConfigs"
        :key="index"
      >
        <v-card class="align-start">
          <v-card-title>
            <v-sheet
              class="mt-n16 rounded"
              :color="d.sheetColor"
              :elevation="d.sheetElevation"
            >
              <div class="pa-8">
                <v-icon color="#fff" size="36">{{ d.sheetIcon }}</v-icon>
              </div>
            </v-sheet>
            <v-spacer></v-spacer>
            <div class="d-flex flex-column align-center">
              <v-card-title class="text-subtitle-1">
                {{ d.cardTitle }}</v-card-title
              >
              <v-card-subtitle class="text-h5">{{
                d.cardSubtitle
              }}</v-card-subtitle>
            </div>
          </v-card-title>

          <v-card-text>
            <v-divider class="mb-2"></v-divider>

            <v-icon class="mr-2" small>{{ d.cardNoteIcon }}</v-icon>
            <span class="text-caption grey--text font-weight-light mt-3">{{
              d.cardNote
            }}</span>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Advertisement Section -->
    <v-row class="mt-6">
      <v-col
        class="col-md-4 col-12"
        v-for="(a, index) in advertiseConfigs"
        :key="index"
      >
        <v-card class="mt-6 mx-auto">
          <v-card-title class="align-start">
            <v-sheet
              :elevation="a.elevation"
              class="mt-n9 overflow-hidden"
              rounded
            >
              <v-img
                :src="a.sheetImageUrl"
                :height="a.sheetImageHeight"
              ></v-img>
            </v-sheet>
          </v-card-title>
          <v-card-text class="text-center font-weight-light">
            <div class="text-h6 font-weight-light black--text">
              {{ a.cardTitle }}
            </div>
            <div class="text-subtitle-1 grey--text"></div>

            {{ a.cardSubtitle }}
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-actions class="pa-4 text-body-2 grey--text font-weight-light">
            <span class="text-h6 font-weight-light grey-text">{{
              a.cardPriceUnit + a.cardPrice + "/" + a.cardUnit
            }}</span>
            <v-spacer></v-spacer>
            <v-icon>{{ a.cardNoteIcon }}</v-icon>
            <span v-if="a.cardCountry && a.cardCity" class="hidden-md-and-down"
              >{{ a.cardCity + ", " + a.cardCountry }}
            </span>
            <span v-else class="hidden-md-and-down">{{ a.cardLocation }}</span>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
const gradients = [
  ["#fff"],
  ["#42b3f4"],
  ["red", "orange", "yellow"],
  ["purple", "violet"],
  ["#00c6ff", "#F0F", "#FF0"],
  ["#f72047", "#ffd200", "#1feaea"],
];

const labels = ["12am", "3am", "6am", "9am", "12pm", "3pm", "6pm", "9pm"];

export default {
  data: () => ({
    // Sparkline Config
    sparklinesConfigs: [
      {
        cardConfig: {
          title: "User Registrations",
          subTitle: "Last Day Performance",
          note: "last registration 26 minutes ago",
          noteIcon: "mdi-clock",
          sheetColor: "yellow darken-2",
          sheetElevation: "12",
        },
        sparklineConfig: {
          fill: false,
          gradients: gradients[3],
          lineWidth: 3,
          radius: false,
          value: [3, 2, 5, 9, 5, 10, 3, 5],
          labels: ["12am", "3am", "6am", "9am", "12pm", "3pm", "6pm", "9pm"],
          labelSize: 8,
          type: "trend",
        },
      },
      {
        cardConfig: {
          title: "Viewers Visits",
          subTitle: "Morning and evening has the most visits",
          note: "last registration 26 minutes ago",
          noteIcon: "mdi-clock",
          sheetColor: "teal lighten-1",
          sheetElevation: "12",
        },
        sparklineConfig: {
          fill: false,
          gradients: gradients[0],
          lineWidth: 9,
          radius: false,
          value: [3, 2, 5, 9, 5, 10, 3, 5],
          labels: labels,
          labelSize: 8,
          type: "bar",
        },
      },
      {
        cardConfig: {
          title: "Total Visits Trend",
          subTitle: "Last Year Performance",
          note: "last registration 1 day ago",
          noteIcon: "mdi-clock",
          sheetColor: "cyan",
          sheetElevation: "12",
        },
        sparklineConfig: {
          fill: true,
          gradients: ["#fff"],
          lineWidth: 3,
          radius: true,
          value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8],
          labels: [
            "JAN",
            "FEB",
            "MAR",
            "APR",
            "MAY",
            "JUN",
            "JUL",
            "AUG",
            "SEP",
            "OCT",
            "NOV",
            "DEC",
          ],
          labelSize: 8,
          type: "trend",
        },
      },
    ],
    // Data Section
    dataConfigs: [
      {
        sheetColor: "orange",
        sheetElevation: "9",
        sheetIcon: "mdi-sofa-single",
        cardTitle: "Bookings",
        cardSubtitle: "184",
        cardNote: "Get More Space...",
        cardNoteIcon: "mdi-alert",
      },
      {
        sheetColor: "teal",
        sheetElevation: "9",
        sheetIcon: "mdi-chart-areaspline-variant",
        cardTitle: "Website Visits",
        cardSubtitle: "75.521",
        cardNote: "Tracked from Google Analytics",
        cardNoteIcon: "mdi-tag",
      },
      {
        sheetColor: "green lighten-1",
        sheetElevation: "9",
        sheetIcon: "mdi-store",
        cardTitle: "Revenue",
        cardSubtitle: "$34,245",
        cardNote: "Last 24 Hours",
        cardNoteIcon: "mdi-calendar-week",
      },
      {
        sheetColor: "cyan",
        sheetElevation: "9",
        sheetIcon: "mdi-twitter",
        cardTitle: "Followers",
        cardSubtitle: "+245",
        cardNote: "Just Updated",
        cardNoteIcon: "mdi-update",
      },
    ],
    // Advertise Section
    advertiseConfigs: [
      {
        sheetElevation: 9,
        sheetImageUrl:
          "https://demos.creative-tim.com/vue-material-dashboard-pro/img/card-2.jpg",
        sheetImageHeight: "350px",
        cardTitle: "Cozy 5 Stars Apartment",
        cardSubtitle: `The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the life in Barcelona.`,
        cardPrice: "899",
        cardPriceUnit: "$",
        cardUnit: "night",
        cardCity: "Barcelona",
        cardCountry: "Spain",
        cardNoteIcon: "mdi-map-marker",
      },
      {
        sheetElevation: 9,
        sheetImageUrl:
          "https://demos.creative-tim.com/vue-material-dashboard-pro/img/card-3.jpg",
        sheetImageHeight: "350px",
        cardTitle: "Office Studio",
        cardSubtitle: `The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the night life in London, UK.`,
        cardPrice: "1.119",
        cardPriceUnit: "$",
        cardUnit: "night",
        cardLocation: "Office Studio",
        cardNoteIcon: "mdi-map-marker",
      },
      {
        sheetElevation: 9,
        sheetImageUrl:
          "https://demos.creative-tim.com/vue-material-dashboard-pro/img/card-1.jpg",
        sheetImageHeight: "350px",
        cardTitle: "Beautiful Castle",
        cardSubtitle: `The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the life in Barcelona.`,
        cardPrice: "459",
        cardPriceUnit: "$",
        cardUnit: "night",
        cardCity: "Milan",
        cardCountry: "Italy",
        cardNoteIcon: "mdi-map-marker",
      },
    ],
  }),
};
</script>

<style>
.v-sheet--offset {
  top: -24px;
  position: relative;
}
</style>
