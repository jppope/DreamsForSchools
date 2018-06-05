<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column"></div>
          <div class="column is-one-third">
            <div class="card">
              <header class="card-header">
                <p class="card-header-title">
                  Name
                </p>
                <div class="dropdown is-pulled-right" :class="{'is-active': showJudgeList }">
                  <div class="dropdown-trigger">
                    <a href="#" class="card-header-icon" aria-label="more options" @click="showJudgeList = !showJudgeList">
                      Please Select Your Name
                      <span class="icon">
                        <i class="fa fa-angle-down"></i>
                      </span>
                    </a>
                  </div>
                  <div class="dropdown-menu" id="dropdown-menu" role="menu">
                    <div class="dropdown-content" >
                      <a href="#" class="dropdown-item"
                        v-for="judge in eventJudges"
                        @click.prevent="setJudgeFilter(judge)"
                      >
                        {{ judge.name }}
                      </a>
                    </div>
                  </div>
                </div>
              </header>
              <div class="card-content">
                <div class="content">
                  <table class="table is-fullwidth is-narrow is-striped">
                    <thead>
                      <tr>
                        <th>Team Name</th>
                        <th>
                          <span class="is-pulled-right">
                            Evaluate
                          </span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="team in judgeTeams">
                        <td>{{ team.team_name }}</td>
                        <td>
                          <a class="button is-small is-success is-pulled-right"
                            @click.prevent="judgeTeam(team)"
                          >Evaluate</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <footer class="card-footer">
                <a href="#" class="card-footer-item">Save</a>
                <a href="#" class="card-footer-item">Edit</a>
                <a href="#" class="card-footer-item">Delete</a>
              </footer>
            </div>
            </div>
          <div class="column"></div>
          <div class="column"></div>
        </div>
      </div>
      <br><br><br><br><br>
      <evaluate :show="showModal" :team="selectedTeam" :judge="judgeFilter" @close="showModal = false"></evaluate>
    </section>
  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex';
  import evaluate from './Evaluate';

  export default {
    name: 'judge',
    data() {
      return {
        showJudgeList: false,
        showModal: false,
        judgeFilter: {},
        selectedTeam: {},
      };
    },
    components: {
      evaluate,
    },
    computed: {
      ...mapGetters(['event']),
      eventJudges() {
        return this.event.teams.reduce((total, item) => {
          const judges = item.judges.map((judge) => {
            // eslint-disable-next-line
            delete judge.__v;
            return judge;
          });
          judges.forEach((judge) => {
            // eslint-disable-next-line
            if (!total.map(data => data._id).includes(judge._id)) {
              total.push(judge);
            }
          });
          return total;
        }, []);
      },
      judgeTeams() {
         // eslint-disable-next-line
        if (!this.judgeFilter._id) return this.event.teams;
        return this.event.teams.filter((team) => {
          // eslint-disable-next-line
          const arr = team.judges.map(judge => judge._id);
          // eslint-disable-next-line
          console.log(arr.includes(this.judgeFilter._id))
          // eslint-disable-next-line
          if(arr.includes(this.judgeFilter._id)) {
            return team;
          }
          return null;
        });
      },
    },
    methods: {
      ...mapActions(['getJudges']),
      setJudgeFilter(judge) {
        this.showJudgeList = !this.showJudgeList;
        this.judgeFilter = judge;
      },
      judgeTeam(team) {
        this.showModal = true;
        this.selectedTeam = team;
      },
    },
  };
</script>
