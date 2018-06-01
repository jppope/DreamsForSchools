<template>
  <div>
    <table class="table is-fullwidth is-narrow is-striped">
      <thead>
        <tr>
          <th>Team Name</th>
          <th>Judge</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
      <tr v-for="row in teamsList">
        <td>{{ row.team_name }}</td>
        <td>{{ 'Judge Name' }}</td>
        <td><a class="button is-small is-info">Edit</a></td>
        <td><a class="button is-small is-danger">Delete</a></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  import { mapActions, mapGetters } from 'vuex';

  export default {
    computed: {
      ...mapGetters(['teamsList']),
    },
    methods: {
      ...mapActions(['getTeams']),
    },
    mounted() {
      this.getTeams();
    },
  };
</script>
