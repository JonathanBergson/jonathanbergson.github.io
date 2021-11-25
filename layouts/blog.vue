<template>
  <div class="me-container">
    <me-brand />
    <me-nav />
    <main class="me-content">
      <Nuxt />
    </main>
    <me-footer />
  </div>
</template>

<style scoped>
.me-container {
  margin: 0 auto;
  max-width: 720px;
  padding: 0 24px;
}

.me-content {
  min-height: calc(100vh - 124px - 200px);
  padding: 64px 0;
}
</style>
