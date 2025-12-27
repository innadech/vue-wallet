<script>
export default {
  emits: ['category-submitted'],

  data() {
    return {
      newIncomecategory: '',
      isError: false,
    }
  },

  methods: {
    addIncomeCategory() {
      // const clean = this.newIncomecategory.replaceAll(' ', '')
      if (this.newIncomecategory.trim() !== '') {
        this.isError = false
        this.newIncomecategory = this.newIncomecategory.toLowerCase()
        this.$emit('category-submitted', this.newIncomecategory)
        this.newIncomecategory = ''
        this.$refs.elInput.focus()
      } else {
        this.isError = true
      }
    },
  },
}
</script>

<template>
  <div class="input-group mb-3">
    <input
      type="text"
      v-bind:class="isError ? 'form-control is-invalid' : 'form-control'"
      class="form-control"
      placeholder="add income category"
      aria-label="add income category"
      ref="elInput"
      v-bind:value="newIncomecategory"
      v-on:input="newIncomecategory = $event.target.value"
      v-on:keypress.enter="addIncomeCategory"
    />
    <button
      class="btn btn-outline-secondary"
      type="button"
      v-on:click="addIncomeCategory"
    >
      Add
    </button>
  </div>
  <div>
    <span v-if="isError" style="color: red">Such category is exited</span>
  </div>
</template>
