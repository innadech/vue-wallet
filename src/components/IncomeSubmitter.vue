<script>
export default {
  emits: ['income-submitted'],

  props: ['incomeCategories'],

  data() {
    return {
      newIncome: this.currentIncome(),
    }
  },

  methods: {
    submitIncome() {
      if (this.newIncome.category) {
        this.newIncome.category = this.newIncome.category.toLowerCase()
        this.$emit('income-submitted', { ...this.newIncome })
        this.newIncome = this.currentIncome()
        this.$refs.elInput.focus()
      }
    },

    currentIncome() {
      return {
        id: this.makeId(),
        amount: 0,
        category: '',
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
  <div
    class="p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3"
  >
    <div class="input-group mb-3">
      <label class="input-group-text" for="income">Income</label>
      <select
        v-bind:value="newIncome.category"
        v-on:change="newIncome.category = $event.target.value"
        class="form-select"
      >
        <!-- <option selected>Choose...</option> -->
        <option v-for="ic of incomeCategories" :key="ic.id">
          {{ ic.caption }}
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
        v-bind:value="newIncome.amount"
        v-on:input="newIncome.amount = $event.target.value"
        ref="elInput"
      />
    </div>
    <button
      v-on:click="submitIncome"
      id="incomeadd"
      type="button"
      class="btn btn-primary btn-lg"
    >
      Add button
    </button>
  </div>
</template>
