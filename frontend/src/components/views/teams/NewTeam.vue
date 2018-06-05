<template>
    <div class="card">
      <div class="card-content">
        <div class="field">
          <label class="label">Team Name</label>
          <div class="control">
            <input class="input" type="text" placeholder="Name of team" v-model="team.team_name">
          </div>
        </div>
        <div class="field">
          <label class="label">School Name</label>
          <div class="control">
            <input class="input" type="text" placeholder="Select Date" v-model="team.school_name">
          </div>
        </div>
        <div class="field">
          <label class="label">Mentor Name</label>
          <div class="control">
            <input class="input" type="text" placeholder="Select Date" v-model="team.mentor">
          </div>
        </div>
        <div class="field">
          <div class="control">
            <label class="label">Select Event</label>
            <div class="select" >
              <select v-model="team.event" placeholder="select event">
                <option v-for="event in events" :value="event._id">
                  {{ event.name }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <button class="button is-info is-pulled-right" @click.prevent="teamGeneration">Create New team</button>
        <br>
      </div>
    </div>
</template>
<script>
  import axios from 'axios';
  import { mapGetters } from 'vuex';

  export default {
    name: 'newteam',
    data() {
      return {
        team: {
          mentor: '',
          school_name: '',
          team_name: '',
          event: '',
        },
      };
    },
    computed: {
      ...mapGetters(['event', 'events']),
    },
    methods: {
      teamGeneration() {
        Promise.all([this.createTeam(), this.createEventTeam()])
          .then(() => this.$router.push('home'));
      },
      createTeam() {
        return new Promise((resolve, reject) => {
          axios.post('http://localhost:5000/teams', { team: this.team })
            .then(() => resolve())
            .catch(err => reject(err));
        });
      },
      createEventTeam() {
        return new Promise((resolve, reject) => {
          // eslint-disable-next-line
          const id = this.event._id;
          axios.put(`http://localhost:5000/event/${id}/team`, { team: this.team })
            .then(() => resolve())
            .catch(err => reject(err));
        });
      },
    },
  };
</script>
