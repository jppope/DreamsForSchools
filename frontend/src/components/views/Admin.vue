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
                    <li><a @click="toggleEventForm">New Event</a></li>
                  </ul>
                  <p class="menu-label">
                    Administration
                  </p>
                  <ul class="menu-list">
                    <li>
                      <a class="">Manage Teams</a>
                      <ul>
                        <li><a>Add Teams</a></li>
                        <li><a>Edit Teams</a></li>
                        <li><a>Delete Team</a></li>
                      </ul>
                    </li>
                  </ul>
                  <!-- Judges -->
                  <ul class="menu-list">
                    <li>
                      <a class="">Manage Judges</a>
                      <ul>
                        <li><a>Add Judge</a></li>
                        <li><a>Edit Judge</a></li>
                        <li><a>Delete Judge</a></li>
                      </ul>
                    </li>
                  </ul>
                </aside>
              </div>
            </div>
          </div>
          <div class="column">
            <div v-if="true">
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
            </div>


          </div>
          <div class="column is-1"></div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        event: {
          name: '',
          date: '',
        },
        newEvent: false,
      };
    },
    methods: {
      toggleEventForm() {
        this.newEvent = !this.newEvent;
      },
      createEvent() {
        axios.post('http://localhost:5000/event', { event })
          .then(() => {
            this.toggleEventForm();
          });
      },
    },
  };
</script>
