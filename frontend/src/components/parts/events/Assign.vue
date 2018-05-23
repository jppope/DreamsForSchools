<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <div class="field has-addons is-pulled-right">
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select @change="numberOfJudges(judgeNumber)" v-model="judgeNumber">
                  <option value="0">Number of Reviews</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                </select>
              </div>
            </div>
            <div class="control">
              <div class="button is-info" @click="eventJudges(event._id)">Assigned Judges</div>
            </div>
          </div>

          <table class="table is-fullwidth is-narrow is-striped">
            <thead>
              <tr>
                <th>Team Name</th>
                <th>Judges</th>
              </tr>
            </thead>
            <tbody>
            <tr v-for="team in event.teams">
              <td>{{ team.team_name }}</td>
              <td>
                <span v-for="judge in team.judges">{{judge.name}}, </span>
              </td>
            </tr>
            </tbody>
          </table>
          <div class="button is-info is-pulled-right" @click="nextStep">Review Assignments</div>
        </div>
        <div class="column"></div>
      </div>
    </div>
  </section>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    data() {
      return {
        judgeNumber: 0,
      };
    },
    computed: {
      ...mapGetters(['event']),
    },
    methods: {
      ...mapActions(['completeJudgeAssignment', 'eventJudges', 'numberOfJudges']),
      nextStep() {
        this.$emit('cc', 'review');
      },
    },
  };
</script>
