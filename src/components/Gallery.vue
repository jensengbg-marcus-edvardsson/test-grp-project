<template>
  <div class="gallery">
    <h1>This is the gallery</h1>
    <img v-for="img in imagesObjs" :key="img.id" v-bind:src="img.urls.small" />
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  data: () => {
    return {
      imagesObjs: []
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData: async function(searchWord) {
      searchWord = 'cars'
      const url = `https://api.unsplash.com/search/photos?client_id=hr_mePtO3L4IJ27dp7JKMA9PBadBNTaBcOVM8wjLASc&per_page=20&query=${searchWord}`
      const responce = await fetch(url, { method: 'GET' })
      const data = await responce.json()
      this.imagesObjs = data.results
    }
  }
}
</script>

<style scoped></style>
