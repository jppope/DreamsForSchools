<template>
  <div>
    <div class="columns">
      <div class="column is-1"></div>
      <div class="column">
        <br>
        <br>
        <table class="table is-bordered is-narrow">
          <thead>
            <tr>
              <th>Team Name</th>
              <td>Judge Name</td>
              <th v-for="n in 8">Question {{ n }}</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="score in scored">
              <td>{{score.team.team_name}}</td>
              <td>{{score.judge.name}}</td>
              <td v-for="question in score.score">
                {{ question }}
              </td>
              <td>
                {{ totalScore(score.score) }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="column is-1"></div>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex';

  export default {
    computed: {
      ...mapGetters(['event']),
      scored() {
        return this.event.scores.sort((a, b) => {
          if (a.team.team_name < b.team.team_name) return -1;
          if (a.team.team_name > b.team.team_name) return 1;
          return 0;
        });
      },
    },
    methods: {
      totalScore(obj) {
        return Object.values(obj)
        .reduce((total, item) => {
          // eslint-disable-next-line
          total += parseInt(item);
          return total;
        }, 0);
      },
    },
  };
</script>
appjamrocks
