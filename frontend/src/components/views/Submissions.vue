<template>
  <div>
    <br>
    <br>
    <div class="columns">
      <div class="column"></div>
      <div class="column is-three-quarters">
        <div class="card">
          <div class="card-body">
            <table class="table is-fullwidth">
              <thead>
                <tr>
                  <th>Judge</th>
                  <th>Team</th>
                  <th>Edit</th>
                </tr>
              </thead>
              <tfoot>
              </tfoot>
              <tbody>
                <tr v-for="(score, index) in event.scores">
                  <td>{{ score.judge.name }} </td>
                  <td>{{ score.team.team_name }} </td>
                  <td>{{ score.score }} </td>
                  <td>
                    <button class="button is-small is-info" @click="review(score, index)">Edit</button>
                  </td>
                </tr>
              </tbody>
            </table>
            <button class="button is-pulled-right" @click="saveScores">Save Changes</button>
          </div>
        </div>
      </div>
      <div class="column"></div>
    </div>
    <subreview :showModal="showModal" :score="selectedScore" :eventId="event._id" :location="location" @closeIt="closeModal"></subreview>
  </div>
</template>
<script>
  import axios from 'axios';
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
      saveScores() {
        // eslint-disable-next-line
        const scoreIndex = this.location;
        const scores = this.event.scores;
        const payload = {
          scoreIndex,
          scores,
        };
        // eslint-disable-next-line
        axios.put(`http://localhost:5000/event/${this.event._id}/update-score`, payload)
          .then(() => {});
      },
    },
  };
</script>
