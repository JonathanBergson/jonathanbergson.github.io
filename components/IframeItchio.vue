<template>
  <div class="me-itchio">
    <iframe
      :src="src"
      width="552"
      height="167"
      frameborder="0"
    >
      <a :href="linkUrl">
        <slot>{{ linkLabel }}</slot>
      </a>
    </iframe>
  </div>
</template>

<script>
export default {
  props: {
    bgColor: { type: String, default: "161a1d" },
    borderColor: { type: String, default: "161a1d" },
    borderWidth: { type: String, default: "0" },
    textColor: { type: String, default: "d6d6d6" },
    hasLink: { type: String, default: "true" },
    id: { type: String, default: "" },
    buttonColor: { type: String, default: "c71054" },
    linkUrl: { type: String, default: "https://jonathanbergson.itch.io/" },
    linkLabel: { type: String, default: "Games by Jonathan Bergson" },
  },
  computed: {
    src() {
      const params = [
        `linkback=${this.hasLink}`,
        `bg_color=${this.bgColor}`,
        `fg_color=${this.textColor}`,
        `link_color=${this.buttonColor}`,
        `border_color=${this.borderColor}`,
        `border_width=${this.borderWidth}`,
      ].join("&")
      return `https://itch.io/embed/${this.id}?${params}`
    }
  }
}
</script>

<style lang="scss" scoped>
.me-itchio {
  margin: 0 -12px;

  & > iframe {
    width: 100%;
  }
}
</style>
