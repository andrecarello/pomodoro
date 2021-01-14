<template>
  <FormulateForm @submit="submit">
    <FormulateInput
      class="form:group"
      type="text"
      name="email"
      placeholder=""
      v-model="form.email"
      label="Email"
      validation="bail|required|email"
      :validation-messages="{
        required: 'Campo obrigatório',
        email: 'Não é um email válido',
        min: 'Preencha o campo corretamente',
        max: 'Preencha o campo corretamente',
      }"
      error-behavior="live"
    />

    <FormulateInput
      class="form:group"
      type="text"
      name="password"
      placeholder=""
      v-model="form.password"
      label="Password"
      validation="bail|required"
      :validation-messages="{
        required: 'Campo obrigatório',
        min: 'Preencha o campo corretamente',
        max: 'Preencha o campo corretamente',
      }"
      error-behavior="submit"
    />

    <button type="submit" class="button button:pink">Enviar</button>
  </FormulateForm>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
