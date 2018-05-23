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
      <tr v-for="judge in judgesList">
        <td>{{ judge.name }}</td>
        <td>
          <span v-for="event in judge.events">
            <small>
              event,
            </small>
          </span>
        </td>
        <td><a class="button is-small is-info">Edit</a></td>
        <td><a class="button is-small is-danger" @click.prevent="deleteJudge(judge._id)">Delete</a></td>
      </tr>
      </tbody>
    </table>
    <edit></edit>
  </div>
</template>
<script>
  import axios from 'axios';
  import { mapGetters, mapActions } from 'vuex';
  import edit from './EditJudges';

  export default {
    components: {
      edit,
    },
    computed: {
      ...mapGetters(['judgesList']),
    },
    methods: {
      ...mapActions(['getJudges']),
      deleteJudge(judge) {
        axios.delete(`http://localhost:5000/judges/${judge}`)
          .then(() => { this.$router.push('home'); });
      },
    },
    mounted() {
      this.getJudges();
    },
  };
</script>
