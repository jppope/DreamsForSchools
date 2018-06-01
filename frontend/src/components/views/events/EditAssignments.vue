<template>
<div>
  <div class="modal" :class="{ 'is-active': show }">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title"></p>
        <button class="delete" aria-label="close" @click="closeModal"></button>
      </header>
      <section class="modal-card-body">
        <div class="field">
          <label class="label">Team Name</label>
          <div class="control">
            <input class="input" type="text" placeholder="Name of team" >
          </div>
        </div>

      </section>
      <footer class="modal-card-foot">
        <button class="button is-success" @click="">Save changes</button>
        <button class="button" @click="closeModal">Cancel</button>
      </footer>
    </div>
  </div>
</div>
</template>
<script>
  export default {
    props: ['show', 'team'],
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

