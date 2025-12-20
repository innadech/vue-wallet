<script>
export default {
  emits: ['expense-submitted'],

  props: ['expenseCategories'],

  data() {
    return {
      newOutcome: this.currentOutcome(),
    }
  },

  methods: {
    submitOutcome() {
      if (this.newOutcome.category) {
        this.newOutcome.category = this.newOutcome.category.toLowerCase()
        this.$emit('expense-submitted', { ...this.newOutcome })
        this.newOutcome = this.currentOutcome()
        this.$refs.elInput.focus()
      }
    },

    currentOutcome() {
      return {
        id: this.makeId(),
        amount: 0,
        category: '',
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
  <div class="p-3 text-primary-emphasis bg-primary-subtle border rounded-3">
    <div class="input-group mb-3">
      <label class="input-group-text" for="outcome">Expense</label>
      <select
        v-bind:value="newOutcome.category"
        v-on:change="newOutcome.category = $event.target.value"
        class="form-select"
      >
        <!-- <option selected>Choose...</option> -->
        <option v-for="oc of expenseCategories" :key="oc.id">
          {{ oc.caption }}
        </option></select
      >``
    </div>
    <div class="input-group mb-3">
      <span class="input-group-text" id="inputGroup-sizing-default"
        >Enter amount</span
      >
      <input
        type="text"
        class="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default"
        v-bind:value="newOutcome.amount"
        v-on:input="newOutcome.amount = $event.target.value"
        ref="elInput"
      />
    </div>
    <button
      v-on:click="submitOutcome"
      type="button"
      class="btn btn-primary btn-lg"
    >
      Add expense
    </button>
  </div>
</template>
