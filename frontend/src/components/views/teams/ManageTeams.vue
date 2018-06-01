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
      <tr v-for="row in teamsList">
        <td>{{ row.team_name }}</td>
        <td>{{ row.school_name }}</td>
        <td>{{ row.mentor }}</td>
        <td><a class="button is-small is-info" @click="editTeam(row)">Edit</a></td>
        <td><a class="button is-small is-danger" @click="deleteTeam(row._id)">Delete</a></td>
      </tr>
      </tbody>
    </table>
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
      ...mapGetters(['teamsList', 'event']),
    },
    methods: {
      ...mapActions(['getTeams']),
      editTeam(row) {
        this.selectedTeam = row;
        this.showModal = true;
      },
      deleteTeam(team) {
        axios.delete(`http://localhost:5000/teams/${team}`)
          /* eslint ignore */
          .then(res => console.log(res))
      },
    },
    mounted() {
      this.getTeams();
    },
  };
</script>
