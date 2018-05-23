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
                    <li><a @click.prevent="toggleComponent('viewevent')">View Event</a></li>
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
  import buildevent from '../parts/events/BuildEvent';
  import newteam from '../parts/teams/NewTeam';
  import teams from '../parts/teams/ManageTeams';
  import newjudge from '../parts/judges/NewJudge';
  import judges from '../parts/judges/ManageJudges';
  import viewevent from '../parts/events/ViewEvent';

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
      viewevent,
    },
    methods: {
      toggleComponent(choice) {
        this.SelectedComponent = choice;
      },
    },
  };
</script>
