<template>
  <figure v-bind:style="{'background-image': 'url(' + this.thumbImg + ')'}" class="thumbnail">

  </figure>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    //id: String,
    //full: String,
    thumbImg: String
  },
  methods: {}
}
</script>

<style>
.thumbnail {
    width: 150px;
    height: 100px;
    margin: 0px;
    border: solid black 1px;
    background-repeat: no-repeat;
    background-size: cover;
}

</style>
