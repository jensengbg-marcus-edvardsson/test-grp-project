<template>
  <div class="home">
    <p>{{ imgList }}</p>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      imgList: []
    }
  },
  methods: {
    cleanList(list) {
      for (const el of list) {
        this.imgList.push({
          id: el.id,
          thumb: el.urls.small,
          fullImg: el.urls.full,
          name: el.alt_description
        })
      }
    },
    getData() {
      const URL =
        'https://api.unsplash.com/search/photos?client_id=hr_mePtO3L4IJ27dp7JKMA9PBadBNTaBcOVM8wjLASc&per_page=20&query=cars'
      fetch(URL, { method: 'GET' })
        .then(res => res.json())
        .then(data => {
          const list = data.results
          this.cleanList(list)
        })
        .catch(err => console.log('Erorr: ', err))
    }
  },
  created() {
    this.getData()
  }
}
</script>
