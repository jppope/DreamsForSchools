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
              <th v-for="n in 7">Question {{ n }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="score in event.scores">
              <td>{{score.team.team_name}}</td>
              <td>{{score.judge.name}}</td>
              <td v-for="question in score.score">
                {{ question }}
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
    },
  };
</script>
