<template>
  <button></button>
</template>
<script>
export default {
  name: 'StereoButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: String,
    icon: {
      type: String,
      default: ''
    }
  },

  computed: {},

  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    }
  }
};
</script>
