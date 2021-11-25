<template>
  <article class="content">
    <me-post-title>{{ document.title }}</me-post-title>
    <nuxt-content :document="document" />
  </article>
</template>

<script>
export default {
  layout: "blog",
  async asyncData({$content, params}) {
    const content = '/games/'+params.slug || 'index'
    const document = await $content(content).fetch()
    return { document }
  }
}
</script>
