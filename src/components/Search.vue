<template>
  <div class="search">
    <label>
      <input type="text" name="search" id="search" v-model="searchText" />
      <button v-on:click="search">Search</button>
    </label>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data: () => {
    return {
      searchText: ''
    }
  },
  methods: {
    search() {
      this.$emit('search', this.searchText)
    }
  }
}
</script>

<style scoped></style>
