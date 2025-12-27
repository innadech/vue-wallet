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
      const cleanString = String(this.newIncome.amount).replaceAll(' ', '')
      const amount = parseInt(cleanString) || 0
      if (cleanString !== '' && amount > 0 && this.newIncome.category) {
        this.newIncome.isError = false
        this.newIncome.category = this.newIncome.category.toLowerCase()
        this.$emit('income-submitted', { ...this.newIncome })
        this.newIncome = this.currentIncome()
        this.$refs.elInput.focus()
      } else {
        this.newIncome.isError = true
      }
    },

    currentIncome() {
      return {
        id: this.makeId(),
        amount: 0,
        category: '',
        type: 'income',
        isError: false,
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
      <label class="input-group-text" for="income">Income</label>
      <select
        v-bind:value="newIncome.category"
        v-on:change="newIncome.category = $event.target.value"
        class="form-select"
      >
        <!-- <option selected>Choose...</option> -->
        <option v-for="ic of incomeCategories" :key="ic">
          {{ ic }}
        </option>
      </select>
    </div>
    <div class="input-group mb-3">
      <span class="input-group-text" id="inputGroup-sizing-default"
        >Enter amount</span
      >
      <input
        type="number"
        v-bind:class="
          newIncome.isError ? 'form-control border-danger' : 'form-control'
        "
        class="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default"
        v-bind:value="newIncome.amount"
        v-on:input="newIncome.amount = +$event.target.value"
        ref="elInput"
      />

      <div>
        <p v-if="newIncome.isError" style="color: red">Inserte number</p>
      </div>
    </div>
    <button
      v-on:click="submitIncome"
      type="button"
      class="btn btn-primary btn-lg"
    >
      Add income
    </button>
  </div>
</template>
