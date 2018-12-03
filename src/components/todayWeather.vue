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
            <br>
            Temperature : {{ temp }}&deg;C
            <br>
            Humidity : {{ humidity }}%
            <br>
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
import { sync, set, get } from "vuex-pathify";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "todayWeather",
  computed: {
    country: sync("weather@country"),
    temp: sync("weather@temp"),
    humidity: sync("weather@humidity"),
    city: sync("weather@city"),
    condition: sync("weather@condition"),
    statusCode: sync("weather@statusCode"),
    cityName: sync("weather@cityName"),
    loading: sync("weather@loading"),
    baseUrl: sync("weather@baseUrl"),
    appid: sync("weather@appid")
  },
  methods: {
    ...mapActions(["getWeather"]),
    fetchWeather: function() {
      if (
        this.city !== null &&
        this.city !== "" &&
        (this.country !== null && this.country !== "")
      ) {
        this.getWeather({
          mode: {
            apiUrl: this.baseUrl + this.city + "," + this.country + this.appid
          },
          loading: true
        });
      } else {
        alert("please fill all details");
      }
    }
  }
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
