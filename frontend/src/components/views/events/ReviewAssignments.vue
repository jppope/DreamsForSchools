<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <table class="table is-fullwidth is-narrow is-striped">
            <thead>
              <tr>
                <th>Team Name</th>
                <th>Judges</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
            <tr v-for="team in event.teams">
              <td>{{ team.team_name }}</td>
              <td>
                <span v-for="judge in team.judges">
                  {{judge.name}},
                </span>
              </td>
              <td>
                <a class="button is-primary is-small" @click="EditAssignment">edit</a>
              </td>
            </tr>
            </tbody>
          </table>
          <div class="button is-info is-pulled-right" @click="$router.push('home')">Rock!</div>
        </div>
        <div class="column"></div>
      </div>
    </div>
    <edit :show="showModal" :team="selectedTeam" @close="showModal = !showModal"></edit>
  </section>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex';
  import edit from './EditAssignments';

  export default {
    data() {
      return {
        showModal: false,
        selectedTeam: {},
        judgeNumber: 0,
      };
    },
    components: {
      edit,
    },
    computed: {
      ...mapGetters(['event']),
    },
    methods: {
      ...mapActions(['completeJudgeAssignment', 'eventJudges', 'numberOfJudges']),
      EditAssignment() {
        this.showModal = !this.showModal;
      },
    },
  };
</script>
