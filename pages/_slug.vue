<template>
  <div class="content">
    <post-title>{{ document.title }}</post-title>
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
