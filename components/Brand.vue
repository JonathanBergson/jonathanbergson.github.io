<template>
  <div class="brand">
    <h1 class="brand-name">
      <nuxt-link to="/">
        Jonathan Bergson
      </nuxt-link>
    </h1>
  </div>
</template>

<style lang="scss" scoped>
$body-background-color: #161a1d;
$body-background-color-secundary: #1f2328;
$body-color: #d6d6d6;
$content-heading-color: #c71054;

.brand {
  padding: 48px 0;
}

.brand-name {
  background-color: $body-background-color-secundary;
  background-image: linear-gradient(to right, $body-background-color-secundary, $body-background-color-secundary 4px, $body-background-color 4px, $body-background-color );
  background-size: 10px 100%;
  color: $content-heading-color;
  font-size: 32px;
  line-height: 4px;
  margin: 0 -4000px;
  opacity: 0.8;
  padding: 0 4000px;

  a {
    color: $content-heading-color;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
