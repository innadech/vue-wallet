<script>
import ExpenseSubmitter from './components/ExpenseSubmitter.vue'
import TransactionHistoryList from './components/TransactionHistoryList.vue'
import ExpenseCategoryList from './components/ExpenseCategoryList.vue'
import ExpenseCategorySubmitter from './components/ExpenseCategorySubmitter.vue'
import BalanceWidget from './components/BalanceWidget.vue'
import IncomeWidget from './components/income/IncomeWidget.vue'

export default {
  components: {
    IncomeWidget,
    ExpenseSubmitter,
    TransactionHistoryList,
    ExpenseCategoryList,
    ExpenseCategorySubmitter,
    BalanceWidget,
  },

  data() {
    return {
      transactionHistory: [],
      expenseCategories: [],
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
    submitExpenseCategory(category) {
      this.expenseCategories.push(category)
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
    <div>expenseCategories{{ expenseCategories }}</div>
    <div class="container">
      <div
        class="container-fluid mt-3 bg-light-subtle border border-primary-subtle rounded-3"
      >
        <div class="container px-4 text-left">
          <div class="row gx-5">
            <div class="col">
              <div class="p-3">
                <p class="fs-1 text-left">Wallet</p>
              </div>
            </div>
            <BalanceWidget v-bind:balance="balance" />
          </div>
          <div class="row gx-5">
            <IncomeWidget v-on:submitted="transactionHistory.push($event)" />
            <div class="col">
              <ExpenseSubmitter
                v-bind:expenseCategories="expenseCategories"
                v-on:expense-submitted="transactionHistory.push($event)"
              />
              <ExpenseCategoryList
                v-bind:expense-categories="expenseCategories"
                v-on:updated="expenseCategories = $event"
              />
              <ExpenseCategorySubmitter
                v-on:category-submitted="submitExpenseCategory($event)"
              />
            </div>
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
