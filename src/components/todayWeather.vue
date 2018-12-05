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
              v-show="this.condition!==('Clouds' || 'Rain' || 'Clear')"
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
import { sync, call , get } from "vuex-pathify";
export default {
  name: "todayWeather",
  computed: {
    country: sync("weather@country"),
    city: sync("weather@city"),
    temp: get("weather@temp"),
    humidity: get("weather@humidity"),
    condition: get("weather@condition"),
    statusCode: get("weather@statusCode"),
    cityName: get("weather@cityName"),
    loading: get("weather@loading"),
  },
  methods: {
    api: call("getWeather"),
    fetchWeather: function(){
      if((this.city !== '' && this.city !== null) && (this.country !== '' && this.country !== null)) {
      this.api({
      apiUrl: process.env.VUE_APP_baseUrl + this.city + "," + this.country + process.env.VUE_APP_appid,
      loading: true
    })
    }else{ alert('please fill all the details') }
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
