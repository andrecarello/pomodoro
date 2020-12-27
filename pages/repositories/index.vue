<template>
  <section class="users">
    <div class="container">
      <input type="text" @keyup.enter="get" placeholder="Digite o usuário" />
      <ul>
        <li>
          <nuxt-link to="/repositories/andrecarello">André Carello</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/repositories/andrewrbrunoro"
            >Andrew Rodrigues</nuxt-link
          >
        </li>
      </ul>
    </div>
  </section>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
