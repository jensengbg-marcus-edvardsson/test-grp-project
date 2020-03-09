<template>
  <div class="home">
    <div>
      <Modal v-if="showModal">
      </Modal>
    </div>
  </div>
</template>

<script>
import { modalInfo, setModal } from '@/modules/modal-handler.js'
import Modal from '../components/Modal'
export default {
  name: 'Home',
  components: {
    Modal
  },
  methods: {
    setModal (state = 0) {
      this.showModal = false
      setModal(state)
      this.showModal = true
    },
    closeModal () {
      this.showModal = false
    }
  },
  computed: {
    modalInfo () {
      return modalInfo
    }
  },
  data: () => {
    return {
      showModal: false
    }
  }
}
</script>
