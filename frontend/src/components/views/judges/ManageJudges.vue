<template>
  <div>
    <table class="table is-fullwidth is-narrow is-striped">
      <thead>
        <tr>
          <th>Judge Name</th>
          <th>Events</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
      <tr v-for="(judge, index) in judgesList">
        <td>{{ judge.name }}</td>
        <td>
          <span v-for="event in judge.events">
            <small>
              {{ event }}
            </small>
          </span>
        </td>
        <td><a class="button is-small is-info" @click="showJudge(index)">Edit</a></td>
        <td><a class="button is-small is-danger" @click.prevent="deleteJudge(judge._id)">Delete</a></td>
      </tr>
      </tbody>
    </table>
    <edit :showModal="showModal" :judge="selectedJudge" @close="closeModal"></edit>
  </div>
</template>
<script>
  import axios from 'axios';
  import { mapGetters, mapActions } from 'vuex';
  import edit from './EditJudges';

  export default {
    data() {
      return {
        showModal: false,
        selectedJudge: {},
      };
    },
    components: {
      edit,
    },
    computed: {
      ...mapGetters(['judgesList']),
    },
    methods: {
      ...mapActions(['getJudges']),
      showJudge(index) {
        this.selectedJudge = this.judgesList[index];
        this.showModal = true;
      },
      deleteJudge(judge) {
        axios.delete(`http://localhost:5000/judges/${judge}`)
          .then(() => { this.$router.push('home'); });
      },
      closeModal() {
        this.showModal = false;
      },
    },
    mounted() {
      this.getJudges();
    },
  };
</script>
