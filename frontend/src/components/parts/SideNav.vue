<template>
  <aside class="column is-2 aside hero is-fullheight is-hidden-mobile">
    <div>
      <div class="compose has-text-centered">
        <img src="http://placehold.it/150x50&text=dreamsforschools.org">
        <!-- <a class="button is-danger is-block is-bold is-expaned">
          <span class="icon">
            <i class="fa fa-upload"></i>
          </span>&nbsp;&nbsp;
          Upload
        </a> -->
      </div>
      <div class="main">
        <router-link to="/home" class="item">
          <span class="icon">
            <i class="fa fa-home"></i>
          </span>
          <span class="name">Home</span>
        </router-link>
        <router-link to="/admin" class="item">
          <span class="icon">
            <i class="fa fa-cogs"></i>
          </span>
          <span class="name">Admin</span>
        </router-link>

        <router-link to="/mentor" class="item">
          <span class="icon">
            <i class="fa fa-envelope-o"></i>
          </span>
          <span class="name">Mentor</span>
        </router-link>
        <router-link to="/judges" class="item">
          <span class="icon">
            <i class="fa fa-folder-o"></i>
          </span>
          <span class="name">Judges</span>
        </router-link>
      </div>
    </div>
</aside>
</template>
