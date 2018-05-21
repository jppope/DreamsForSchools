<template>
  <div>
    <section class="section">
      <div class="container">
        <h2 class="title is-3">
          Step 1: Add Teams
        </h2>
        <div class="columns">
          <div class="column">
            <table class="table is-fullwidth is-narrow is-striped">
              <thead>
                <tr>
                  <th>Team Name</th>
                  <th>Mentor</th>
                  <th>Add</th>
                </tr>
              </thead>
              <tbody>
              <tr v-for="team in teamsList">
                <td>{{ team.team_name }}</td>
                <td>{{ team.mentor }}</td>
                <td><a class="button is-small is-info" @click="addTeam(team)">Add Team</a></td>
              </tr>
              </tbody>
            </table>
          </div>
          <div class="column"></div>
        </div>
        <!-- teams to be added to the event -->
        {{ event }}
        <div class="columns">
          <div class="column">
            <table class="table is-fullwidth is-narrow is-striped">
              <thead>
                <tr>
                  <th>Team Name</th>
                  <th>Mentor</th>
                </tr>
              </thead>
              <tbody>
              <tr v-for="team in eventTeams">
                <td>{{ team.team_name }}</td>
                <td>{{ team.mentor }}</td>
              </tr>
              </tbody>
            </table>
          </div>
          <div class="column"></div>
        </div>
        <a class="button" href="" @click.prevent="addTeams">Add Teams To Event</a>
      </div>
    </section>
  </div>
</template>
<script>
  import axios from 'axios';
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'build',
    data() {
      return {
        step: 0,
        eventTeams: [],
      };
    },
    computed: {
      ...mapGetters(['event', 'teamsList']),
    },
    methods: {
      ...mapActions(['getTeams']),
      addTeam(team) {
        this.eventTeams.push(team);
      },
      addTeams() {
        if (this.event) {
          const id = JSON.parse(JSON.stringify(this.event._id));// eslint-disable-line
          console.log(this.eventTeams); // eslint-disable-line
          axios.put(`http://localhost:5000/event/${id}`, { teams: this.eventTeams })
            .then((response) => {
              if (response === 200) {
                this.eventTeams = '';
              }
              // console.log(response);
            });
        } else {
          alert(this.event) // eslint-disable-line
        }
      },
    },
    mounted() {
      this.getTeams();
    },
  };
</script>
