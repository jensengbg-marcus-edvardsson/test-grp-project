<template>
    <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">

              <div class="modal-header">
                <slot name="header">
                  IMAGE TAG
                </slot>
              </div>

              <div class="modal-body">
                <slot name="body">
                  THE IMAGE
                </slot>
              </div>

              <div class="modal-footer">
                <slot name="footer">
                  CLOSE TAG
                  <button class="modal-default-button" @click="$emit('close')">
                    OK
                  </button>
                </slot>
              </div>
            </div>
          </div>
        </div>
    </transition>
</template>

<script>
export default {
}
</script>
