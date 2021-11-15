<template>
  <div class="wrapper">
    <main>
      <h1 class="title">{{ title || 'Tailwind Color Shades Generator' }}</h1>

      <section>
        <SingleColorForm />
      </section>
    </main>
    <footer>
      Made with ❤️ by <a href="https://github.com/salvobee" target="_blank">Salvo Bee</a>
    </footer>
  </div>
</template>

<script setup lang="ts">
import SingleColorForm from "./SingleColorForm.vue";

defineProps<{ title?: string }>()
</script>

<style scoped>
.wrapper {
  @apply h-screen bg-gray-200 text-center space-y-5
}
.title {
  @apply text-3xl leading-loose
}

section {
  @apply mx-auto my-5 md:w-3/4
}

footer {
  @apply mx-auto mt-20
}
</style>