<template>
  <div class="content">
    <h1>{{ document.title }}</h1>
    <nuxt-content :document="document" />
  </div>
</template>

<script>
export default {
  layout: "blog",
  async asyncData({$content, params}) {
    const document = await $content(params.slug || 'index').fetch()
    return { document }
  }
}
</script>
