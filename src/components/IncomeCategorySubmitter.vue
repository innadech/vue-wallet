<script>
export default {
  emits: ['incomecategory-submitted'],

  data() {
    return {
      newIncomecategory: this.initIncomecategory(),
    }
  },

  methods: {
    addIncomeCategory() {
      if (this.newIncomecategory.caption) {
        this.newIncomecategory.caption =
          this.newIncomecategory.caption.toLowerCase()
        this.$emit('incomecategory-submitted', { ...this.newIncomecategory })
        this.newIncomecategory = this.initIncomecategory()
        this.$refs.elInput.focus()
      }
    },

    initIncomecategory() {
      return {
        id: this.makeId(),
        caption: '',
        type: 'income',
      }
    },

    makeId() {
      return crypto.randomUUID().split('-').at(0)
    },
  },
}
</script>

<template>
  <div class="input-group mb-3">
    <input
      type="text"
      class="form-control"
      placeholder="add income category"
      aria-label="add income category"
      ref="elInput"
      v-bind:value="newIncomecategory.caption"
      v-on:input="newIncomecategory.caption = $event.target.value"
    />
    <button
      class="btn btn-outline-secondary"
      type="button"
      v-on:click="addIncomeCategory"
    >
      Add
    </button>
  </div>
</template>
