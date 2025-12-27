<script>
export default {
  emits: ['category-submitted'],

  data() {
    return {
      newExpensecategory: this.initExpensecategory(),
      isError: false,
    }
  },

  methods: {
    addCategory() {
      if (this.newExpensecategory.trim() !== '') {
        this.newExpensecategory = this.newExpensecategory.toLowerCase()
        this.$emit('category-submitted', this.newExpensecategory)
        this.newExpensecategory = this.initExpensecategory()
        this.$refs.elInput.focus()
      } else {
        this.isError = true
      }
    },

    initExpensecategory() {
      return ''
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
      placeholder="add expense category"
      aria-label="add expense category"
      ref="elInput"
      v-bind:value="newExpensecategory"
      v-on:input="newExpensecategory = $event.target.value"
      v-on:keypress.enter="addCategory"
    />
    <button
      class="btn btn-outline-secondary"
      type="button"
      v-on:click="addCategory"
    >
      Add
    </button>
  </div>
  <div>
    <span v-if="isError" style="color: red">Such category is exited</span>
  </div>
</template>
