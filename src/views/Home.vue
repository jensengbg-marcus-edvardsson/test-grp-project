<template>
  <div class="home">
    <search v-on:search="search" />
    <gallery :searchWord="searchWord" />
    <div>
      <Modal v-if="showModal"> </Modal>
    </div>
  </div>
</template>

<script>
import search from '../components/Search.vue'
import gallery from '../components/Gallery.vue'
import { modalInfo, setModal } from '@/modules/modal-handler.js'
import Modal from '../components/Modal'
export default {
  name: 'Home',
  components: {
    gallery,
    Modal,
    search
  },
  methods: {
    search(param) {
      this.searchWord = param
    },
    setModal(state = 0) {
      this.showModal = false
      setModal(state)
      this.showModal = true
    },
    closeModal() {
      this.showModal = false
    }
  },
  computed: {
    modalInfo() {
      return modalInfo
    }
  },
  data: () => {
    return {
      showModal: false,
      searchWord: ''
    }
  }
}
</script>
