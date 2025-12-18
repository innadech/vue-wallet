<script>
export default {
  emits: ['outcomecategory-submitted'],

  data() {
    return {
      newOutcomecategory: this.initOutcomecategory(),
    }
  },

  methods: {
    addOutcomeCategory() {
      if (this.newOutcomecategory.caption) {
        this.newOutcomecategory.caption =
          this.newOutcomecategory.caption.toLowerCase()
        this.$emit('outcomecategory-submitted', { ...this.newOutcomecategory })
        this.newOutcomecategory = this.initOutcomecategory()
        this.$refs.elInput.focus()
      }
    },

    initOutcomecategory() {
      return {
        id: this.makeId(),
        caption: '',
        type: 'outcome',
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
      placeholder="add outcome category"
      aria-label="add outcome category"
      ref="elInput"
      v-bind:value="newOutcomecategory.caption"
      v-on:input="newOutcomecategory.caption = $event.target.value"
    />
    <button
      class="btn btn-outline-secondary"
      type="button"
      v-on:click="addOutcomeCategory"
    >
      Add
    </button>
  </div>
</template>
