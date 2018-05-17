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
        <button class="button is-info is-pulled-right" @click.prevent="createTeam">Create New team</button>
        <br>
      </div>
    </div>
</template>
<script>
  import axios from 'axios';

  export default {
    name: 'newteam',
    data() {
      return {
        team: {
          mentor: '',
          school_name: '',
          team_name: '',
        },
      };
    },
    methods: {
      createTeam() {
        axios.post('http://localhost:5000/teams', { team: this.team })
          .then((response) => {
            // eslint-disable-next-line
            console.log(response.data);
          });
      },
    },
  };
</script>
