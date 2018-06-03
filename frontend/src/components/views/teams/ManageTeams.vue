<template>
  <div>
    <span class="tag is-info is-medium is-rounded is-pulled-right">
      <span class="icon">
        <i class="fa fa-info-circle"></i>
      </span>
      &nbsp;
      {{ event.name }}
    </span>
    <table class="table is-fullwidth is-narrow is-striped">
      <thead>
        <tr>
          <th>Team Name</th>
          <th>School Name</th>
          <th>Mentor</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
      <tr v-for="(team, index) in event.teams">
        <td>{{ team.team_name }}</td>
        <td>{{ team.school_name }}</td>
        <td>{{ team.mentor }}</td>
        <td><a class="button is-small is-info" @click="editTeam(index)">Edit</a></td>
        <td>
          <a class="button is-small is-danger" @click="deleteTeam(team._id)" disabled>
            Delete
          </a>
        </td>
      </tr>
      </tbody>
    </table>
    <button class="button is-pulled-right is-info" @click.prevent="saveChanges">Save Changes</button>
    <edit :show="showModal" :team="selectedTeam"  @close="showModal = false"></edit>
  </div>
</template>
<script>
  import axios from 'axios';
  import { mapActions, mapGetters } from 'vuex';
  import edit from './EditTeam';

  export default {
    data() {
      return {
        showModal: false,
        selectedTeam: {},
      };
    },
    components: {
      edit,
    },
    computed: {
      ...mapGetters(['event']),
    },
    methods: {
      ...mapActions(['getTeams']),
      editTeam(index) {
        this.selectedTeam = this.event.teams[index];
        this.showModal = true;
      },
      saveChanges() {
        // eslint-disable-next-line
        let id = this.event._id;
        axios.put(`http://localhost:5000/event/${id}`, { teams: this.event.teams })
          .then(() => this.$router.push('home'));
      },
      deleteTeam(team) {
        axios.delete(`http://localhost:5000/teams/${team}`);
          /** eslint ignore */
          // .then(res => console.log(res))
      },
    },
    mounted() {
      this.getTeams();
    },
  };
</script>
