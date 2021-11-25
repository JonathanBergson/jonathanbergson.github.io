<template>
  <div class="me-container">
    <me-brand />
    <me-nav />
    <main class="me-content">
      <Nuxt />
    </main>
  </div>
</template>

<style scoped>
.me-container {
  margin: 0 auto;
  max-width: 720px;
  padding: 0 24px;
}

.me-content {
  padding: 64px 0;
}
</style>
