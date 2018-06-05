<template>
  <div>
  <div class="modal" :class="{ 'is-active': showModal }">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">score</p>
        <button class="delete" aria-label="close" @click="closeModal"></button>
      </header>
      <section class="modal-card-body">
          <!-- 0 - 15 -->
          <div class="control columns">
            <div class="column">
              <label class="label">
                how well does this app meet one or more requirements of STEM?
              </label>
            </div>
            <div class="column is-2">
              <div class="select">
                <select v-model="score.score.one">
                  <option v-for="n in 15">{{ n }}</option>
                </select>
              </div>
            </div>
          </div>
          <div class="control columns">
            <div class="column">
            <label class="label">
              How usable is the app? Is it bug free? Are they noticeable?
            </label>
            </div>
            <div class="column is-2">
            <div class="select" >
              <select v-model="score.score.two">
                <option v-for="n in 15">{{ n }}</option>
              </select>
            </div>
            </div>
          </div>
          <div class="control columns">
            <div class="column">
            <label class="label">
              Technical Features: Are there features that make the app stand out and add technical sophistication?
            </label>
            </div>
            <div class="column is-2">
            <div class="select">
              <select v-model="score.score.three">
                <option v-for="n in 15">{{ n }}</option>
              </select>
            </div>
            </div>
          </div>
          <div class="control columns">
            <div class="column">
            <label class="label">
              UI/UX Is there clarity, simplicity, friendliness and an intuitive feel as to how the app works and what to do next?
            </label>
            </div>
            <div class="column is-2">
            <div class="select">
              <select v-model="score.score.four">
                <option v-for="n in 15">{{ n }}</option>
              </select>
            </div>
            </div>
          </div>
          <div class="control columns">
            <div class="column">
            <label class="label">
              How creative/unique is this application compared to others?
            </label>
            </div>
            <div class="column is-2">
            <div class="select">
              <select v-model="score.score.five">
                <option v-for="n in 10">{{ n }}</option>
              </select>
            </div>
            </div>
          </div>
          <div class="control columns">
            <div class="column">
            <label class="label">
              How well does this app use the features of the tablet?
            </label>
            </div>
            <div class="column is-2">
            <div class="select">
              <select v-model="score.score.six">
                <option v-for="n in 10">{{ n }}</option>
              </select>
            </div>
            </div>
          </div>
          <div class="control columns">
            <div class="column">
            <label class="label">
              How well was the presentation of the app by the team?
            </label>
            </div>
            <div class="column is-2">
            <div class="select">
              <select v-model="score.score.seven">
                <option v-for="n in 10">{{ n }}</option>
              </select>
            </div>
            </div>
          </div>
          <div class="control columns">
            <div class="column">
            <label class="label">
              How "fun/cool" is it for your designated K-12 audience?
            </label>
            </div>
            <div class="column is-2">
            <div class="select">
              <select v-model="score.score.eight">
                <option v-for="n in 10">{{ n }}</option>
              </select>
            </div>
            </div>
          </div>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success" @click.prevent="saveUpdate">Submit</button>
        <button class="button" @click="closeModal">Cancel</button>
      </footer>
    </div>
  </div>
</div>
</template>
<script>
  import axios from 'axios';

  export default {
    props: ['score', 'showModal', 'location', 'eventId'],
    methods: {
      closeModal() {
        this.$emit('closeIt');
      },
      saveUpdate() {
        // eslint-disable-next-line
        const scoreIndex = this.location;
        const score = this.score;
        const payload = {
          scoreIndex,
          score,
        };
        axios.put(`http://localhost:5000/event/${this.eventId}/update-score`, payload)
          .then(() => {
            this.$emit('close');
          });
      },
    },
  };
</script>
