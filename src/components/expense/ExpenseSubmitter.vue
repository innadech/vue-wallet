<script>
export default {
  emits: ['expense-submitted'],

  props: ['expenseCategories'],

  data() {
    return {
      newExpense: this.currentExpense(),
    }
  },

  methods: {
    submitExpense() {
      if (this.newExpense.category) {
        this.newExpense.category = this.newExpense.category.toLowerCase()
        this.$emit('expense-submitted', { ...this.newExpense })
        this.newExpense = this.currentExpense()
        this.$refs.elInput.focus()
      }
    },

    currentExpense() {
      return {
        id: this.makeId(),
        amount: 0,
        category: '',
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
  <div class="p-3 text-primary-emphasis bg-primary-subtle border rounded-3">
    <div class="input-group mb-3">
      <label class="input-group-text" for="expense">Expense</label>
      <select
        v-bind:value="newExpense.category"
        v-on:change="newExpense.category = $event.target.value"
        class="form-select"
      >
        <!-- <option selected>Choose...</option> -->
        <option v-for="oc of expenseCategories" :key="oc">
          {{ oc }}
        </option>
      </select>
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
        v-bind:value="newExpense.amount"
        v-on:input="newExpense.amount = $event.target.value"
        ref="elInput"
      />
    </div>
    <button
      v-on:click="submitExpense"
      type="button"
      class="btn btn-primary btn-lg"
    >
      Add expense
    </button>
  </div>
</template>
