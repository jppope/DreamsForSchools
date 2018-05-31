<template>
  <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <slot name="image"></slot>
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-4 has-text-centered" style="color:black;">
          <slot></slot>
        </p>
      </div>
    </div>
  </div>
</div>
</template>
