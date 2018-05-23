<template>
    <div class="card">
      <div class="card-content">
        <div class="field">
          <label class="label">judge Name</label>
          <div class="control">
            <input class="input" type="text" placeholder="Name of judge" v-model="judge.name">
          </div>
        </div>
        <div class="field">
            <div class="control">
              <div class="select" >
                <select v-model="judge.events[0]">
                  <option>Select Event</option>
                  <option v-for="event in events" :value="event._id">
                    {{ event.name }}
                    </option>
                </select>
              </div>
            </div>
          </div>
        <button class="button is-info is-pulled-right" @click.prevent="createJudge">Create New judge</button>
        <br>
      </div>
    </div>
</template>
<script>
  import axios from 'axios';
  import { mapGetters, mapActions } from 'vuex';
  // import router from '../../../router/index';


  export default {
    name: 'newjudge',
    data() {
      return {
        judge: {
          name: '',
          events: [],
        },
      };
    },
    computed: {
      ...mapGetters(['events']),
    },
    methods: {
      ...mapActions(['getEvents']),
      createJudge() {
        axios.post('http://localhost:5000/judges', { judge: this.judge })
          .then(() => {
            this.$router.push('home');
          });
      },
    },
    mounted() {
      this.getEvents();
    },
  };
</script>
