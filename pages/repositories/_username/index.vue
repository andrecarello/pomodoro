<template>
  <section class="repositories">
    <div class="container">
      <header>
        <nuxt-link to="/repositories">Voltar</nuxt-link>
      </header>

      <ul>
        <li v-for="(repository, index) in repositories" :key="index">
          <nuxt-link :to="'/repositories/' + username + '/' + repository.name">{{ repository.name }}</nuxt-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
