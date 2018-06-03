<template>
    <div class="card">
      <div class="card-content">
        <div class="field">
          <label class="label">Event Name</label>
          <div class="control">
            <input class="input" type="text" placeholder="Name of Event" v-model="event.name">
          </div>
        </div>
        <div class="field">
          <label class="label">Event date</label>
          <div class="control">
            <input class="input" type="date" placeholder="Select Date" v-model="event.date">
          </div>
        </div>
        <button class="button is-info is-pulled-right" @click.prevent="createEvent">Create New Event</button>
        <br>
      </div>
    </div>
</template>
<script>
  import axios from 'axios';

  export default {
    name: 'newevent',
    data() {
      return {
        event: {
          name: '',
          date: '',
        },
      };
    },
    methods: {
      createEvent() {
        axios.post('http://localhost:5000/event', { event: this.event })
          .then(() => this.$router.push('home'));
      },
    },
  };
</script>
