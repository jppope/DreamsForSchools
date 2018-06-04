<template>
<div>
  <div class="modal" :class="{ 'is-active': show }">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Edit Judges</p>
        <button class="delete" aria-label="close" @click="closeModal"></button>
      </header>
      <section class="modal-card-body">
        <div class="columns">
          <div class="column"></div>
          <div class="column is-three-quarters">
            <table class="table is-fullwidth">
              <thead>
                <tr>
                  <th>Judge Name</th>
                  <th>
                    <span class="is-pulled-right">
                    Remove Judge
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
              <tr v-for="(judge, index) in team.judges" style="margin:5px;">
                <td>
                  <!-- {{ getEventName(eventInfo) }}&nbsp; -->
                  {{ judge.name }}
                </td>
                <td>
                  <button class="button is-small is-info is-pulled-right" @click.prevent="removeJudge(index)">Remove</button>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="field has-addons">
                    <div class="control is-expanded">
                      <div class="select">
                        <select v-model="selectedJudge">
                          <option v-for="judge in eventJudges" :value="judge">
                            {{ judge }}
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <button class="button is-small is-success is-pulled-right">
                    Add Judge
                  </button>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
          <div class="column"></div>
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
  import { mapGetters } from 'vuex';

  export default {
    props: ['show', 'team'],
    data() {
      return {
        selectedJudge: {},
      };
    },
    computed: {
      ...mapGetters(['event']),
      eventJudges() {
        return this.event.teams.map(team => team.judges)
          .reduce((arr, obj) => {
            obj.forEach(item => arr.push(item));
            return arr;
          }, [])
          .filter(this.onlyUnique);
      },
    },
    methods: {
      closeModal() {
        this.$emit('close');
      },
      updateTeam() {
        this.$emit('close');
      },
      onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
      },
      // removeJudge(index) {},
    },
  };
</script>

