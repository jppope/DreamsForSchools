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
  numJudges: 0,
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
  numJudges: (state, payload) => state.numJudges = payload,
  addEventJudges: (state, payload) => {
    let judges = payload;
    // each team gets judged a certain number of times
    let judgesNeeded = Math.ceil(state.event.teams.length * state.numJudges / judges.length);
    // store of arrays of judges
    let eventJudgements = [];
    // push judges in to total number of event judgements needed
    for (var i = 0; i < judgesNeeded; i++){ eventJudgements.push(judges) }
    // single dimensional array
    let flattened = [].concat.apply([], eventJudgements);
    // randomize the result
    let random = flattened.sort(() => Math.random() - 0.5)
    // chunk into final assignment size
    const chunk = (arr, chunkSize, cache = []) => {
      const temp = [...arr]
      while (temp.length) cache.push(temp.splice(0, chunkSize))
      return cache
    }
    // assignments
    let assignments = chunk(random, state.numJudges)
    state.event.teams = state.event.teams.map((team, index) => {
      team.judges = assignments[index];
      return team;
    })

    axios.put(`http://127.0.0.1:5000/event/${state.event._id}`, state.event)
      .then((response) => { console.log(response);})
  },
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
  completeJudgeAssignment: (context, payload) => {
    context.commit('setEvent', payload)
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
  },
  eventJudges: (context, payload) => {
    axios.get(`http://127.0.0.1:5000/judges/events/${payload}`)
      .then((response) => {
        context.commit('addEventJudges', response.data.judges)
      })
  },
  numberOfJudges: (context, payload) => context.commit('numJudges', payload),
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
