<template>
  <div>
    <!-- decide how many you have -->
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-2"></div>
          <div class="column is-half">
            <div class="card">
              <div class="card-content has-text-centered">
                  <div class="field">
                    <label class="label">Please select your Team</label>
                    <div class="control has-text-centered">
                      <div class="select">
                        <select>
                          <option v-for="mentorTeam in mentorTeamList">
                            {{ mentorTeam.name }}
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div class="column is-2"></div>
        </div>
      </div>
    </section>
    <!-- add kids, record scores -->
    <section class="section is-paddingless">
      <div class="container">
        <div class="columns">
          <div class="column is-2"></div>
          <div class="column is-half">
            <div class="card">
              <div class="card-content has-text-centered">
                <button class="button is-pulled-right is-warning" @click="students.push({})">
                  Add Student
                </button>
                <table class="table is-fullwidth">
                  <thead>
                    <tr>
                      <th>Student</th>
                      <th>Score</th>
                      <th>Delete?</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(student, index) in students">
                      <td>
                        <div class="field">
                          <div class="control">
                            <input class="input" type="text" v-model="students[index].teamMember">
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="field">
                          <div class="control">
                            <div class="select">
                            <select v-model="students[index].choice">
                              <option v-for="team in event.teams" :value="team._id">
                                {{ team.team_name }}
                              </option>
                            </select>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="is-pulled-right" style="padding:5px">
                          <span class="delete" @click="removeRating(index)"></span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <br>
                <button class="button is-primary is-pulled-right">Save Scores</button>
                <br>
              </div>
            </div>
          </div>
          <div class="column"></div>
        </div>
      </div>
    </section>
    <!-- /add kids, record scores -->
  </div>
</template>
<script>
  import axios from 'axios';
  import { mapActions, mapGetters } from 'vuex';

  export default {
    data() {
      return {
        students: [],
      };
    },
    computed: {
      ...mapGetters(['mentorTeamList', 'event']),
    },
    methods: {
      ...mapActions(['getMentorTeams']),
      removeRating(index) {
        this.students.splice(index, 1);
      },
      // mentors
      submitScore() {
        axios.post('http://localhost:5000/mentors', { judge: this.judge })
          .then(() => {
            this.$router.push('home');
          });
        axios.post('http://localhost:5000/', {});
      },
    },
    mounted() {
      this.getMentorTeams();
    },
  };
</script>
