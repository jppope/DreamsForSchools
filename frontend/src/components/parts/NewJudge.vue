<template>
    <div class="card">
      <div class="card-content">
        <div class="field">
          <label class="label">judge Name</label>
          <div class="control">
            <input class="input" type="text" placeholder="Name of judge" v-model="judge.name">
          </div>
        </div>
        <div class="field">
          <label class="label">judge date</label>
          <div class="control">
            <input class="input" type="date" placeholder="Select Date" v-model="judge.date">
          </div>
        </div>
        <button class="button is-info is-pulled-right" @click.prevent="createJudge">Create New judge</button>
        <br>
      </div>
    </div>
</template>
<script>
  import axios from 'axios';

  export default {
    name: 'newjudge',
    data() {
      return {
        judge: {
          name: '',
          date: '',
        },
      };
    },
    methods: {
      createJudge() {
        axios.post('http://localhost:5000/judge', { judge: this.judge })
          .then((response) => {
            // eslint-disable-next-line
            console.log(response.data);
          });
      },
    },
  };
</script>
