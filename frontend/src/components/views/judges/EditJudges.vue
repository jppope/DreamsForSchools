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
          {{judge}}
        <!-- <div class="field">
          <label class="label">Judge Name</label>
          <div class="control">
            <input class="input" type="text" placeholder="Name of team" v-model="judge">
          </div>
        </div>
        <div class="field">
          <label class="label">School Name</label>
          <div class="control">
            <input class="input" type="text" placeholder="Select Date" v-model="team.school_name">
          </div>
        </div>
        <div class="field">
          <label class="label">Mentor Name</label>
          <div class="control">
            <input class="input" type="text" placeholder="Select Date" v-model="team.mentor">
          </div>
        </div> -->
      </section>
      <!-- <footer class="modal-card-foot">
        <button class="button is-success" @click="updateTeam">Save changes</button>
        <button class="button" @click="closeModal">Cancel</button>
      </footer> -->
    </div>
  </div>
</div>
</template>
<script>
  export default {
    props: ['showModal', 'judge'],
    methods: {
      closeModal() {
        this.$emit('close');
      },
      updateTeam() {
        this.$emit('close');
      },
    },
  };
</script>

