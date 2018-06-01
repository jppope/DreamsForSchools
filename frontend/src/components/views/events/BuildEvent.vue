<template>
  <div>
    <div v-if="event._id">
      <component :is="componentName" @cc="changeComponent"></component>
    </div>
    <div class="notification" v-else>
        <h2 class="title is-3">Please Select an Event</h2>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex';
  import addteams from './AddTeams';
  import assign from './Assign';
  import review from './ReviewAssignments';

  export default {
    name: 'build',
    data() {
      return {
        componentName: 'addteams',
      };
    },
    components: {
      addteams,
      assign,
      review,
    },
    computed: {
      ...mapGetters(['event']),
    },
    methods: {
      changeComponent(name) {
        this.componentName = name;
      },
    },

  };
</script>
