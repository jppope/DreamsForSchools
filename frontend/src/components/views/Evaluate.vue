<template>
<div>
  <div class="modal" :class="{ 'is-active': show }">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Evaluate {{ team.team_name }} </p>
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
              <select v-model="eval.one">
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
              <select v-model="eval.two">
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
              <select v-model="eval.three">
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
              <select v-model="eval.four">
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
              <select v-model="eval.five">
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
              <select v-model="eval.six">
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
              <select v-model="eval.seven">
                <option v-for="n in 10">{{ n }}</option>
              </select>
            </div>
            </div>
          </div>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success" @click="saveEvaluation">Submit Evaluation</button>
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
    name: 'evaluate',
    props: ['show', 'team', 'judge'],
    data() {
      return {
        eval: {
          one: 0,
          two: 0,
          three: 0,
          four: 0,
          five: 0,
          six: 0,
          seven: 0,
        },
      };
    },
    computed: {
      ...mapGetters(['event']),
    },
    methods: {
      closeModal() {
        this.$emit('close');
      },
      updateTeam() {
        this.$emit('close');
      },
      saveEvaluation() {
        const evaluation = JSON.parse(JSON.stringify({
          team: this.team,
          judge: this.judge,
          score: this.eval,
        }));
        /* eslint-disable*/
        axios.put(`http://127.0.0.1:5000/event/${this.event._id}/score`, { evaluation })
          .then((response) => {
            console.log(response.data);
            this.closeModal();
          })
      },
    },
  };
</script>

