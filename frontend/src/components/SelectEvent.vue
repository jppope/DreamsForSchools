<template>
  <div>
    <div class="modal" :class="{ 'is-active': showEventSelect }">
      <div class="modal-background"></div>
      <div class="columns">
        <div class="column"></div>
        <div class="column is-three-quarters">
          <div class="notification">
            <h2 class="title is-4 has-text-centered">
              Please select your event:
            </h2>
            <div class="field">
              <div class="control has-text-centered">
                <div class="select">
                  <select v-model="selectedEvent" @change="updateEvent" placeholder="select event">
                    <option v-for="event in events" :value="event">
                      {{ event.name }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column"></div>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    props: ['showEventSelect'],
    data() {
      return {
        selectedEvent: {},
      };
    },
    computed: {
      ...mapGetters(['event', 'isLoggedIn', 'events']),
      events() {
        return this.$store.getters.events;
      },
    },
    methods: {
      ...mapActions(['logout', 'getEvents', 'setEvent']),
      updateEvent() {
        this.setEvent(this.selectedEvent);
        this.$emit('closeEventSelect');
      },
    },
    created() {
      this.getEvents();
    },
  };
</script>
