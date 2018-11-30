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
import { mapGetters } from "vuex"
import Raphael from 'raphael/raphael'
global.Raphael = Raphael
import { LineChart } from "vue-morris"
export default {
  name: "dataAnalysis",
  components: {
    LineChart
  },
  computed: {
    ...mapGetters(['showLineChart']),
    ydif(){
      return this.showLineChart.ydif
    },
    linechartData(){
      return this.showLineChart.linechartData
    },
    
  }
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
