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
    const content = '/games/'+params.slug || 'index'
    const document = await $content(content).fetch()
    return { document }
  }
}
</script>
