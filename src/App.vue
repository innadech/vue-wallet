<script>
import IncomeSubmitter from './components/IncomeSubmitter.vue'
import ExpenseSubmitter from './components/ExpenseSubmitter.vue'
import IncomeCategoryList from './components/IncomeCategoryList.vue'
import IncomeCategorySubmitter from './components/IncomeCategorySubmitter.vue'
import TransactionHistoryList from './components/TransactionHistoryList.vue'
import ExpenseCategoryList from './components/ExpenseCategoryList.vue'
import ExpenseCategorySubmitter from './components/ExpenseCategorySubmitter.vue'
import BalanceWidget from './components/BalanceWidget.vue'

export default {
  components: {
    IncomeSubmitter,
    ExpenseSubmitter,
    IncomeCategoryList,
    IncomeCategorySubmitter,
    TransactionHistoryList,
    ExpenseCategoryList,
    ExpenseCategorySubmitter,
    BalanceWidget,
  },

  data() {
    return {
      transactionHistory: [],
      incomeCategories: [],
      expenseCategories: [],
    }
  },
  methods: {
    // incomeSubmit(income) {
    //   this.transactionHistory.push(income)
    // },
    // expenseSubmit(expense) {
    //   this.transactionHistory.push(expense)
    // },

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

    submitIncomeCategory(category) {
      this.incomeCategories.push(category)
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
    <div>incomeCategories{{ incomeCategories }}</div>
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
            <div class="col">
              <IncomeSubmitter
                v-bind:incomeCategories="incomeCategories"
                v-on:income-submitted="transactionHistory.push($event)"
              />
            </div>
            <div class="col">
              <ExpenseSubmitter
                v-bind:expenseCategories="expenseCategories"
                v-on:expense-submitted="transactionHistory.push($event)"
              />
            </div>
          </div>
        </div>
        <div class="container px-4 text-left">
          <div class="container overflow-hidden text-center">
            <div class="row gx-5">
              <div class="col">
                <IncomeCategoryList
                  v-bind:incomeCategories="incomeCategories"
                  v-on:updated="incomeCategories = $event"
                />
                <IncomeCategorySubmitter
                  v-on:category-submitted="submitIncomeCategory($event)"
                />
              </div>
              <div class="col">
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
        </div>
        <TransactionHistoryList
          v-bind:transactionHistory="transactionHistory"
          v-on:updated="transactionHistory = $event"
        />
      </div>
    </div>
  </body>
</template>
