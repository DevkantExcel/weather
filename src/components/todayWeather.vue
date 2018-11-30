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
import { mapGetters, mapActions } from "vuex";
export default {
  name: "todayWeather",
  computed: {
    ...mapGetters(["showWeather"]),
    country: {
      set: function(val) {
        this.$store.commit("updateCountry", val);
      },
      get: function() {
        return this.showWeather.country;
      }
    },
    temp: {
      set: function(val) {
        this.$store.commit("updateTemp", val);
      },
      get: function() {
        return this.showWeather.temp;
      }
    },
    humidity: {
      set: function(val) {
        this.$store.commit("updateHumidity", val);
      },
      get: function() {
        return this.showWeather.humidity;
      }
    },
    city: {
      set: function(val) {
        this.$store.commit("updateCity", val);
      },
      get: function() {
        return this.showWeather.city;
      }
    },
    condition: {
      set: function(val) {
        this.$store.commit("updateCondition", val);
      },
      get: function() {
        return this.showWeather.condition;
      }
    },
    statusCode: {
      set: function(val) {
        this.$store.commit("updateStatusCode", val);
      },
      get: function() {
        return this.showWeather.statusCode;
      }
    },
    cityName: {
      set: function(val) {
        this.$store.commit("updateCityName", val);
      },
      get: function() {
        return this.showWeather.cityName;
      }
    },
    loading: {
      set: function(val) {
        this.$store.commit("updateLoading", val);
      },
      get: function() {
        return this.showWeather.loading;
      }
    },
    baseUrl: {
      get: function() {
        return this.showWeather.baseUrl;
      }
    },
    appid: {
      get: function() {
        return this.showWeather.appid;
      }
    }
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
