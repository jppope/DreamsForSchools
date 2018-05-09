<template>
  <div>
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
      <tr v-for="row in teams" :key="team._id">
        <td>{{ row.team }}</td>
        <td>{{ row.school_name }}</td>
        <td>{{ row.mentor }}</td>
        <td><a class="button is-small is-info">Edit</a></td>
        <td><a class="button is-small is-danger">Delete</a></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  export default {
    props: ['teams'],
    methods: {
      getTeams() {

      },
    },
  };
</script>
