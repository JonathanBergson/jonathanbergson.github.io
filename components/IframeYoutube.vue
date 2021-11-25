<template>
  <div class="me-youtube">
    <iframe
      width="560"
      height="315"
      :src="src"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </div>
</template>

<script>
export default {
  props: {
    id: { type: String, default: "" }
  },
  computed: {
    src() {
      return `https://www.youtube.com/embed/${this.id}`
    }
  }
}
</script>

<style lang="scss" scoped>
.me-youtube {
  height: 0;
  margin-bottom: 1em;
  padding-bottom: 56.25%;
  position: relative;

  & > iframe {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
}
</style>
