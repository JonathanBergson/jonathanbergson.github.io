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
  text-align: center;
  font-size: 32px;
  line-height: 4px;
  margin: 0 -4000px;
  opacity: 0.8;

  a {
    border: 2px transparent solid;
    color: $content-heading-color;
    font-weight: bold;
    padding: 12px 24px;
    transition: all 0.2s;

    &:hover {
      background-color: #161a1d;
      border-color: $content-heading-color;
    }
  }
}
</style>
