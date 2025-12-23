<script>
export default {
  emits: ['category-submitted'],

  data() {
    return {
      newIncomecategory: this.initIncomecategory(),
    }
  },

  methods: {
    addIncomeCategory() {
      if (this.newIncomecategory) {
        this.newIncomecategory = this.newIncomecategory.toLowerCase()
        this.$emit('category-submitted', this.newIncomecategory)
        this.newIncomecategory = this.initIncomecategory()
        this.$refs.elInput.focus()
      }
    },

    initIncomecategory() {
      return ''
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
      v-bind:value="newIncomecategory"
      v-on:input="newIncomecategory = $event.target.value"
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
