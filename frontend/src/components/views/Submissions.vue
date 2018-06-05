<template>
  <div>
    <div class="columns">
      <div class="column"></div>
      <div class="column is-three-quarters">
        <table class="table is-fullwidth">
          <thead>
            <tr>
              <th>Judge</th>
              <th>Team</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(score, index) in event.scores">
              <td>{{ score.judge.name }} </td>
              <td>{{ score.team.team_name }} </td>
              <!-- <td>{{ score.score }} </td> -->
              <td>
                <button class="button is-small is-info" @click="review(score, index)">Edit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="column"></div>
    </div>
    <subreview :showModal="showModal" :score="selectedScore" :eventId="event._id" :location="location" @closeIt="closeModal"></subreview>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex';
  import subreview from '../parts/SubmissionReview';

  export default {
    name: 'submissions',
    data() {
      return {
        showModal: false,
        selectedScore: {
          score: {
            one: 0,
            two: 0,
            three: 0,
            four: 0,
            five: 0,
            six: 0,
            seven: 0,
            eight: 0,
          },
        },
        location: 0,
      };
    },
    components: {
      subreview,
    },
    computed: {
      ...mapGetters(['event']),
    },
    methods: {
      closeModal() {
        this.showModal = false;
      },
      review(score, index) {
        this.location = index;
        this.selectedScore = score;
        this.showModal = true;
      },
    },
  };
</script>
