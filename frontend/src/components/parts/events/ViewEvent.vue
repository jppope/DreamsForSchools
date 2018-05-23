<template>
  <div>
      <div class="card">
        <div class="card-content">
            <h2 class="title is-3">{{ event.name }}</h2>
            <h3 class="title is-4">Teams</h3>
            <ul>
              <li v-for="team in event.teams">
                <strong>{{ team.team_name }}</strong>
                [<span v-for="judge in team.judges">{{ judge.name}}, </span>]
              </li>
            </ul>
        </div>
      </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'viewevent',
    computed: {
      ...mapGetters(['event']),
    },
  };
</script>
