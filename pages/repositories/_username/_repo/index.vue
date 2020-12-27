<template>
  <section>
    <div class="container">
      <h1>{{ repository.name }}</h1>
      <a :href="repository.owner.html_url" target="_blank">{{ repository.owner.html_url }}</a>

      <p>{{ repository.description }}</p>
    </div>
  </section>
</template>

<script src="./index.js"></script>
<!-- style lang="scss" src="./index.scss"></style -->
