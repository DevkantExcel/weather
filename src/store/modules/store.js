import Vue from 'vue'
import Vuex from 'vuex'
import {make} from 'vuex-pathify'
import pathify from './pathify'
import axios from 'axios'

const state = {
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
        city: null,
        condition: null,
        statusCode: null,
        cityName: null,
        loading: false,
    }

}
const mutations = make.mutations(state)
const actions = {
    ...make.actions(state),
    async getWeather({state, commit}, payload) {
        let response = null
        store.set('weather@statusCode', null) //unset city not found message
        store.set('weather@loading', payload.loading) //set loading image
        try {
            response = await axios.get(`${payload.apiUrl}`)
            store.set('weather@temp', response.data.main.temp)
            store.set('weather@humidity', response.data.main.humidity)
            store.set('weather@condition', response.data.weather[0].main)
            store.set('weather@cityName', response.data.name)
            store.set('weather@loading', false) //unset loading image
        } 
        catch (error) {
            store.set('weather@statusCode', error.response.data.message) //set city not found message
            store.set('weather@city', null)
            store.set('weather@country', null)
            store.set('weather@temp', null)
            store.set('weather@humidity', null)
            store.set('weather@condition', null)
            store.set('weather@cityName', null)
            store.set('weather@loading', false)
        }
            // .then(response => {
            // }).catch(error => {
            // }).finally(() => {
            //     store.set('weather@loading', false)
            // });
    }
}
const getters = {
    ...make.getters(state)
}
Vue.use(Vuex)
export default new Vuex.Store({
    plugins: [pathify.plugin],
    state,
    mutations,
    actions,
    getters
})