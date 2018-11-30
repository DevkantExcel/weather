<template>
  <div>
    <b-container fluid class="bv-example-row">
      <b-row no-gutters>
        <!--______ LEFT COLUMN_____ -->
        <b-col sm="2">
          <ul>
            <li>
              <router-link to="/dataAnalysis">Data Analysis</router-link>
            </li>
            <li>
              <router-link to="/todayWeather">Today's Weather</router-link>
            </li>
          </ul>
        </b-col>
        <!--______ LEFT COLUMN CLOSE_____ -->
        <!--______ RIGHT COLUMN_____ -->
        <b-col sm="10">
          <router-view></router-view>
        </b-col>
        <!--______ RIGHT COLUMN CLOSE_____ -->
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 15px 0;
}
li {
  display: block;
  margin: 0 30px;
  border: 1px solid #c0c0c0;
  width: 70%;
  padding: 5px 5px 5px 20px;
  font-size: 12px;
  font-family: arial;
  cursor: pointer;
}
a {
  color: black;
}
li:active {
  border: 1px solid #2a9fcd;
  background: #e7ebff;
}
</style>
