import axios from 'axios'
export default {
    state: {
        lineChart: {
            ydif: 10,
            linechartData: [{
                    "Year": 2007,
                    "Men": 106898,
                    "Female": 97516
                },
                {
                    "Year": 2008,
                    "Men": 103937,
                    "Female": 94796
                },
                {
                    "Year": 2009,
                    "Men": 99492,
                    "Female": 91818
                },
                {
                    "Year": 2010,
                    "Men": 87213,
                    "Female": 79673
                },
                {
                    "Year": 2011,
                    "Men": 101943,
                    "Female": 94684
                },
                {
                    "Year": 2012,
                    "Men": 118848,
                    "Female": 110633
                },
                {
                    "Year": 2013,
                    "Men": 103120,
                    "Female": 95993
                },
            ]
        },
        weather: {
            country: null,
            temp: null,
            humidity: null,
            baseUrl: "http://api.openweathermap.org/data/2.5/weather?q=",
            appid: "&units=metric&appid=a9ada488ff5fd28a976eed7beada1e81",
            city: null,
            condition: null,
            statusCode: null,
            cityName: null,
            loading: false
        }

    },
    mutations: {
        updateCountry: (state, val) => {
            state.weather.country = val;
        },
        updateTemp: (state, val) => {
            state.weather.temp = val;
        },
        updateHumidity: (state, val) => {
            state.weather.humidity = val;
        },
        updateCity: (state, val) => {
            state.weather.city = val;
        },
        updateCondition: (state, val) => {
            state.weather.condition = val;
        },
        updateStatusCode: (state, val) => {
            state.weather.statusCode = val;
        },
        updateCityName: (state, val) => {
            state.weather.name = val;
        },
        updateLoading: (state, val) => {
            state.weather.loading = val;
        },
        updateData: (state, val) => {
            state.weather.temp = val.main.temp;
            state.weather.humidity = val.main.humidity;
            state.weather.condition = val.weather[0].main;
            state.weather.cityName = val.name;
        },
        updateError: (state, val) => {
            state.weather.statusCode = val;
            state.weather.city = null;
            state.weather.country = null;
            state.weather.temp = null;
            state.weather.humidity = null;
            state.weather.condition = null;
            state.weather.cityName = null;
        },
        defaultLoading: (state, val) => {
            state.weather.loading = val;
        },
        updateLoadingFinally: (state, val) => {
            state.weather.loading = val;
        },

    },
    actions: {
        async getWeather({commit}, payload) {
            commit('defaultLoading', payload.loading),
                axios.get(`${payload.mode.apiUrl}`)
                .then(response => {
                    commit('updateData', response.data)
                }).catch(error => {
                    commit('updateError', error.response.data.message)
                }).finally(() => {
                    commit('updateLoadingFinally', false)
                });
        },
    },
    getters: {
        showLineChart: state => state.lineChart,
        showWeather: state => state.weather
    },
}