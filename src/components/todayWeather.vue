<template>
  <div>Todays weather
    <hr>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <!-- FORM -->
          <div v-if="!loading">
            <b-form inline @submit.prevent>City:
              <b-input v-model="city" type="text" placeholder="Enter City" autofocus></b-input>Country:
              <b-input v-model="country" type="text" placeholder="Enter Country"></b-input>
              <b-btn @click="fetchWeather">Search</b-btn>
            </b-form>
            <!-- FORM CLOSE -->
            <b-alert v-show="this.statusCode !== null" show variant="danger">{{ statusCode }}</b-alert>

            <img
              v-show="this.condition!==('Clouds' && 'Rain' && 'Clear')"
              id="na"
              src="../../public/img_trans.gif"
              alt="ICONS"
            >
            <br>

            <div v-show="this.condition!==''">
              <img :id="condition" src="../../public/img_trans.gif" alt="ICONS">
              <br>
            </div>
            <!-- City: {{cityName}} -->
            <br>
            Temperature : {{ temp }}&deg;F
            <br>
            Humidity : {{ humidity }}%
            <br>
            <!-- Condition: {{ condition }} -->
            <br>
          </div>

          <div v-if="loading == true">
            <img src="../../public/loading.webp" alt="Loading">
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "todayWeather",
  data: () => {
    return {
      country: null,
      temp: null,
      humidity: null,
      baseUrl: "http://api.openweathermap.org/data/2.5/weather?q=",
      appid: "&appid=a9ada488ff5fd28a976eed7beada1e81",
      city: null,
      condition: null,
      statusCode: null,
      cityName: null,
      loading: false
    };
  },
  methods: {
    fetchWeather: function() {
      if (
        this.city !== null &&
        this.city !== "" &&
        (this.country !== null && this.country !== "")
      ) {
        this.loading = true;
        //  weather api
        axios
          .get(this.baseUrl + this.city + this.appid)
          .then(response => {
            this.temp = response.data.main.temp;
            this.humidity = response.data.main.humidity;
            this.condition = response.data.weather[0].main;
            this.cityName = response.data.name;
          })
          .catch(error => {
            // eslint-disable-next-line
            console.log("AXIOS CATCH BLOCK", error);
            this.statusCode = error.response.data.message;
            this.city = null;
            this.country = null;
            this.temp = null;
            this.humidity = null;
            this.condition = null;
            this.cityName = null;
          })
          .finally(() => (this.loading = false));
        //  weather api close
        //clear input fields
        this.city = null;
        this.country = null;
        this.statusCode = null;
      } else {
        alert("please fill all details");
      }
    }
  },
  mounted() {}
};
</script>

<style>
#Clouds {
  width: 61px;
  height: 59px;
  background: url(/img/icons.bb9729e5.png) -74px -380px;
}
#Rain {
  width: 61px;
  height: 59px;
  background: url(/img/icons.bb9729e5.png) -289px -380px;
}
#Clear {
  width: 70px;
  height: 70px;
  background: url(../../public/icons.png) -76px -20px;
}
#na {
  width: 70px;
  height: 70px;
  background: url(../../public/icons.png) -136px -507px;
}
#Loading {
  width: 70px;
  height: 70px;
  background: url(../../public/icons.png) 0px 0px;
}
</style>
