<script>
export default {
  emits: ['category-submitted'],

  data() {
    return {
      newExpensecategory: this.initExpensecategory(),
    }
  },

  methods: {
    addCategory() {
      if (this.newExpensecategory.caption) {
        this.newExpensecategory.caption =
          this.newExpensecategory.caption.toLowerCase()
        this.$emit('category-submitted', { ...this.newExpensecategory })
        this.newExpensecategory = this.initExpensecategory()
        this.$refs.elInput.focus()
      }
    },

    initExpensecategory() {
      return {
        id: this.makeId(),
        caption: '',
        type: 'expense',
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
      placeholder="add expense category"
      aria-label="add expense category"
      ref="elInput"
      v-bind:value="newExpensecategory.caption"
      v-on:input="newExpensecategory.caption = $event.target.value"
    />
    <button
      class="btn btn-outline-secondary"
      type="button"
      v-on:click="addCategory"
    >
      Add
    </button>
  </div>
</template>
