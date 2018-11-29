<template>
  <div>Data Analysis
    <hr>
   <div class="lineChart" >
     <p class="fontBirth" >Birth in Taiwan<br>
      <span class="fontSource" > Source: Ministry of the Interior </span>
     </p>
      <line-chart
        id="area"
        :data="linechartData"
        xkey="Year"
        ykeys='["Men","Female"]'
        ymax="130000"
        ymin="70000"
        numLines= "15"
        labels='["Men","Female"]'
        line-colors='["#FF6384","#36A2EB"]'
        grid="true"
        grid-text-weight="bold"
        resize="true"
        parseTime="false">
      </line-chart>
   </div>
  </div>
</template>

<script>
import Raphael from 'raphael/raphael'
global.Raphael = Raphael
// import Vue from 'vue'
// import { DonutChart } from "vue-morris"
import { LineChart } from "vue-morris"
export default {
  name: "dataAnalysis",
  components: {
    // DonutChart,
    LineChart
  },
  data: function() {
    return {
      ydif: 10,
      linechartData:[
        {"Year": 2007, "Men": 106898, "Female": 97516},
        {"Year": 2008, "Men": 103937, "Female": 94796},
        {"Year": 2009, "Men": 99492, "Female": 91818},
        {"Year": 2010, "Men": 87213, "Female": 79673},
        {"Year": 2011, "Men": 101943, "Female": 94684},
        {"Year": 2012, "Men": 118848, "Female": 110633},
        {"Year": 2013, "Men": 103120, "Female": 95993},
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.lineChart {
  text-align: center;
  border: 1px solid black;
}
.fontBirth {
  font-size: 16px;
}
.fontSource {
  font-size: 11px;
}
</style>
