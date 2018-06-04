<template>
<div>
  <div class="modal" :class="{ 'is-active': showModal }">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title"></p>
        <button class="delete" aria-label="close" @click="closeModal"></button>
      </header>
      <section class="modal-card-body">
        <div class="field">
          <label class="label">Judge Name</label>
          <div class="control">
            <input class="input" type="text" placeholder="Name of team" v-model="judge.name">
          </div>
        </div>
        <h3 class="">Assigned Events</h3>
        <div class="tag is-medium is-info" v-for="(eventInfo, index) in judge.events">
          {{ getEventName(eventInfo) }}&nbsp;
          <button class="delete is-small" @click.prevent="removeEvent(index)"></button>
        </div>
        <br>&nbsp;
        <h3 class="title is-4">Add Another Event</h3>

        <div class="field has-addons">
          <div class="control is-expanded">
            <div class="select is-fullwidth">
              <select v-model="selectedEvent">
                <option v-for="event in events" :value="event">
                  {{ event.name }}
                </option>
              </select>
            </div>
          </div>
          <div class="control">
            <button type="submit" class="button is-primary" @click.prevent="addEvent">Add Event</button>
          </div>
        </div>

       <br>&nbsp;<br>&nbsp;
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success" @click="updateEvent">Save changes</button>
        <button class="button" @click="closeModal">Cancel</button>
      </footer>
    </div>
  </div>
</div>
</template>
<script>
  import axios from 'axios';
  import { mapGetters } from 'vuex';

  export default {
    props: ['showModal', 'judge'],
    data() {
      return {
        selectedEvent: '',
      };
    },
    computed: {
      ...mapGetters(['events']),
    },
    methods: {
      closeModal() {
        this.$emit('close');
      },
      addEvent() {
        // eslint-disable-next-line
        const id = this.judge._id;
        axios.put(`http://localhost:5000/judges/${id}`, { judge: this.judge })
          .then(() => {
            // eslint-disable-next-line
            this.judge.events.push(this.selectedEvent._id);
          });
      },
      removeEvent() {

      },
      updateEvent() {
        this.$emit('close');
      },
      getEventName(id) {
        // eslint-disable-next-line
        return this.events.filter(event => event._id === id)
          .map(event => event.name)[0];
      },
    },
  };
</script>

