<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column"></div>
          <div class="column is-half">
            <div class="card">
              <header class="card-header">
                <p class="card-header-title">
                  Name
                </p>
                <div class="dropdown is-pulled-right" :class="{'is-active': showJudgeList }">
                  <div class="dropdown-trigger">
                    <a href="#" class="card-header-icon" aria-label="more options" @click="showJudgeList = !showJudgeList">
                      Please Select Your Name
                      <span class="icon">
                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                      </span>
                    </a>
                  </div>
                  <div class="dropdown-menu" id="dropdown-menu" role="menu">
                    <div class="dropdown-content">
                      <a href="#" class="dropdown-item">
                        Dropdown item
                      </a>
                      <a class="dropdown-item">
                        Other dropdown item
                      </a>
                      <a href="#" class="dropdown-item is-active">
                        Active dropdown item
                      </a>
                      <a href="#" class="dropdown-item">
                        Other dropdown item
                      </a>
                      <hr class="dropdown-divider">
                      <a href="#" class="dropdown-item">
                        With a divider
                      </a>
                    </div>
                  </div>
                </div>
              </header>
              <div class="card-content">
                <div class="content">
                  <table class="table is-fullwidth is-narrow is-striped">
                    <thead>
                      <tr>
                        <th>Team Name</th>
                        <th>Evaluate</th>
                        <th>Edit</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td></td>
                        <td>
                          <a class="button is-small is-success">Evaluate</a>
                        </td>
                        <td>
                          <a class="button is-small is-warning">Edit Evaluation</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <footer class="card-footer">
                <a href="#" class="card-footer-item">Save</a>
                <a href="#" class="card-footer-item">Edit</a>
                <a href="#" class="card-footer-item">Delete</a>
              </footer>
            </div>
            </div>
          <div class="column"></div>
          <div class="column"></div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        showJudgeList: false,
      };
    },
  };
</script>
