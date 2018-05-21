<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-one-quarter">
            <div class="card">
              <div class="card-content">
                <aside class="menu is-light">
                  <p class="menu-label">
                    General
                  </p>
                  <ul class="menu-list">
                    <li><a @click.prevent="toggleComponent('newevent')">Create Event</a></li>
                    <li><a @click.prevent="toggleComponent('buildevent')">Build Event</a></li>
                  </ul>
                  <p class="menu-label">
                    Administration
                  </p>
                  <ul class="menu-list">
                    <li>
                      <a class="#">Teams</a>
                      <ul>
                        <li><a @click.prevent="toggleComponent('newteam')">Add Teams</a></li>
                        <li><a @click.prevent="toggleComponent('teams')">Manage Teams</a></li>
                      </ul>
                    </li>
                  </ul>
                  <!-- Judges -->
                  <ul class="menu-list">
                    <li>
                      <a class="">Judges</a>
                      <ul>
                        <li><a @click.prevent="toggleComponent('newjudge')">Add Judge</a></li>
                        <li><a @click.prevent="toggleComponent('judges')">Manage Judges</a></li>
                      </ul>
                    </li>
                  </ul>
                </aside>
              </div>
            </div>
          </div>
          <div class="column">
            <component :is="SelectedComponent"></component>
          </div>
          <div class="column is-2"></div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  import admindefault from '../parts/AdminDefault';
  import newevent from '../parts/NewEvent';
  import buildevent from '../parts/BuildEvent';
  import newteam from '../parts/teams/NewTeam';
  import newjudge from '../parts/NewJudge';
  import teams from '../parts/teams/ManageTeams';
  import judges from '../parts/ManageJudges';
  // import assignment from '../parts/Assignment';

  export default {
    data() {
      return {
        SelectedComponent: 'admindefault',
      };
    },
    components: {
      admindefault,
      newevent,
      buildevent,
      newteam,
      newjudge,
      teams,
      judges,
      // assignment,
    },
    methods: {
      toggleComponent(choice) {
        this.SelectedComponent = choice;
      },
    },
  };
</script>
