<template>
  <h1 class="post-title">
    <slot />
  </h1>
</template>

<style lang="scss" scoped>
$body-background-color: #161a1d;
$body-background-color-secundary: #1f2328;
$body-color: #d6d6d6;
$content-heading-color: #c71054;

.post-title {
  background-color: $content-heading-color;
  color: $body-color;
  display: inline-block;
  margin: 24px -0;
  padding: 12px 24px;
}
</style>
