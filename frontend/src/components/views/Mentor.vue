<template>
  <div>
    <!-- decide how many you have -->
    <div class="field">
      <label class="label">Select your Team</label>
      <div class="control">
        <div class="select">
          <select>
            <option>Select dropdown</option>
            <option>With options</option>
          </select>
        </div>
      </div>
    </div>

    <span v-for="(student, index) in students">
      <div class="field">
        <label class="label">Student</label>
        <div class="control has-icons-left has-icons-right">
          <input class="input" type="text" placeholder="write score" v-model="students[index]">
          <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
          </span>
        </div>
      </div>
    </span>



  </div>
</template>
<script>
  export default {
    data(){
      return {
        students: [],
      }
    }
  }
</script>
