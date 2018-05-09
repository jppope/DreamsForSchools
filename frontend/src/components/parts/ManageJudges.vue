<template>
  <div>
    <table class="table is-fullwidth is-narrow is-striped">
      <thead>
        <tr>
          <th>Judge Name</th>
          <th>Teams</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
      <tr v-for="row in judges" :key="judge._id">
        <td>{{ row }}</td>
        <td>{{ row }}</td>
        <td><a class="button is-small is-info">Edit</a></td>
        <td><a class="button is-small is-danger">Delete</a></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  export default {
    props: ['judges'],
    methods: {
      getTeams() {

      },
    },
  };
</script>
