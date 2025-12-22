<script>
import TransactionHistoryList from './components/TransactionHistoryList.vue'
import BalanceWidget from './components/BalanceWidget.vue'
import IncomeWidget from './components/income/IncomeWidget.vue'
import ExpenseWidget from './components/expense/ExpenseWidget.vue'

export default {
  components: {
    IncomeWidget,
    ExpenseWidget,
    TransactionHistoryList,
    BalanceWidget,
  },

  data() {
    return {
      transactionHistory: [],
    }
  },
  methods: {
    getSumAmountByType() {
      let amountIncome = 0
      let amountExpense = 0
      this.transactionHistory.forEach(history => {
        if (history.type === 'income') {
          amountIncome += +history.amount
        } else {
          amountExpense += +history.amount
        }
      })
      return [amountIncome, amountExpense]
    },
  },
  computed: {
    balance() {
      const [incomeSum, expenseSum] = this.getSumAmountByType()
      return 'Balance: ' + (+incomeSum - +expenseSum)
    },
  },
}
</script>

<template>
  <body data-bs-theme="blue">
    <div>transaction{{ transactionHistory }}</div>

    <div class="container">
      <div
        class="container-fluid mt-3 bg-light-subtle border border-primary-subtle rounded-3"
      >
        <div class="container px-4 text-left">
          <BalanceWidget v-bind:balance="balance" />
          <div class="row gx-5">
            <IncomeWidget v-on:submitted="transactionHistory.push($event)" />
            <ExpenseWidget v-on:submitted="transactionHistory.push($event)" />
          </div>
        </div>
        <TransactionHistoryList
          v-bind:transactionHistory="transactionHistory"
          v-on:updated="transactionHistory = $event"
        />
      </div>
    </div>
  </body>
</template>
