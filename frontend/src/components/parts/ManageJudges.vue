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
      <tr v-for="row in judgesList">
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
  import {mapGetters} from 'vuex';

  export default {
    computed: {
      ...mapGetters(['judgesList']),
    },
    methods: {

    },
  };
</script>
