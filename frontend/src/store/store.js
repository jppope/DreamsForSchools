/**
 * Vuex Store
 *   This file is used to manage state for the vue application
 * @type {Object}
 */

/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import router from '../router/index';

Vue.use(Vuex);

const state = {
  isLoggedIn: false,
  event: {},
  token: '',
  user: {},
  teams: [],
  judges: [],
  eventList: [],
  mentorTeams: [],
}

const getters = {
  isLoggedIn: (state) => state.isLoggedIn,
  event: (state) => state.event,
  events: (state) => state.eventList,
  mentorTeamList: (state) => state.mentorTeams,
  teamsList: (state) => state.teams,
  judgesList: (state) => state.judges,
}

const mutations = {
  auth: (state, payload) => {
    console.log(payload)
    state.token = payload.token;
    state.user = payload.user;
    state.expiration = payload.expiration;
    state.isLoggedIn = true;
  },
  logOut: (state) => {
    state.isLoggedIn = false;
    localStorage.clear();
    router.replace('/login');
  },
  events: (state, payload) => {
    state.eventList = payload;
  },
  teams: (state, payload) => state.teams = payload,
  judges: (state, payload) => state.judges = payload,
  mentorTeams: (state, payload) => state.mentorTeams = payload,
  setEvent: (state, payload) => state.event = payload,
}

const actions = {
  setLogoutTimer: (context) => {
    setTimeout(() => {
      commit('clearAuthData')},
      72000000
    )
  },
  register: (context, creds) => {
    const user = JSON.parse(JSON.stringify(this.user));
    /* eslint-disable*/
    axios.post('http://127.0.0.1:5000/users', { user })
      .then((response) => {
        console.log(response.data)
        localStorage.setItem('user', response.data)
        this.showRegister = false;
        this.showLogin = false;
        this.showNotification = true;
      })
  },
  autoLogin: (context, creds) => {
    const token = localStorage.getItem('token');
    if (!token) {
      return;
    }
    const expiration = localStorage.getItem('expirationDate');
    const now = new Date();
    if (now <= expiration){
      return;
    }
    const user = localStorage.getItem('user');
    context.commit('auth', {
      user: user,
      token: token,
      expiration: expiration,
    })
    router.replace('/home');
  },
  login: (context, creds) => {
    axios.post('http://127.0.0.1:5000/auth', creds)
      .then((response) => {
        console.log(response);
        var now = new Date();
        var expiration = new Date(now.getTime() + (2*1000*60*60));
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', response.data.user);
        localStorage.setItem('expirationDate', expiration);
        context.commit('auth', response.data)
        if(response.data.token){
          router.replace('/home');
        }
      })
  },
  logout: (context) => {
    localStorage.removeItem('token');
    context.commit('logOut');
  },
  getJudges: (context) => {
    /* eslint-disable*/
    axios.get('http://127.0.0.1:5000/judges')
      .then((response) => {
        console.log(response.data);
        context.commit('judges', response.data.judges)
      })
  },
  getEvents: (context) => {
    /* eslint-disable*/
    axios.get('http://127.0.0.1:5000/event')
      .then((response) => {
        console.log(response.data)
        context.commit('events', response.data.events)
      })
  },
  getTeams: (context) => {
    /* eslint-disable*/
    axios.get('http://127.0.0.1:5000/teams')
      .then((response) => {
        console.log(response.data);
        context.commit('teams', response.data.teams)
      })
  },
  getMentorTeams: (context) => {
    /* eslint-disable*/
    axios.get('http://127.0.0.1:5000/mentors')
      .then((response) => {
        console.log(response.data);
        context.commit('mentorTeams', response.data.mentors)
      })
  },
  setEvent: (context, payload) => {
    context.commit('setEvent', payload);
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
