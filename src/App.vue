<script>
import IncomeSubmitter from './components/IncomeSubmitter.vue'
import OutcomeSubmitter from './components/OutcomeSubmitter.vue'
import IncomeCategoryList from './components/IncomeCategoryList.vue'
import IncomeCategorySubmitter from './components/IncomeCategorySubmitter.vue'
import TransactionHistoryList from './components/TransactionHistoryList.vue'
import OutcomeCategoryList from './components/OutcomeCategoryList.vue'
import OutcomeCategorySubmitter from './components/OutcomeCategorySubmitter.vue'
import BalanceWidget from './components/BalanceWidget.vue'

export default {
  components: {
    IncomeSubmitter,
    OutcomeSubmitter,
    IncomeCategoryList,
    IncomeCategorySubmitter,
    TransactionHistoryList,
    OutcomeCategoryList,
    OutcomeCategorySubmitter,
    BalanceWidget,
  },

  data() {
    return {
      transactionHistory: [],
      incomeCategories: [],
      outcomeCategories: [],
    }
  },
  methods: {
    incomeSubmit(income) {
      this.transactionHistory.push(income)
    },
    outcomeSubmit(outcome) {
      this.transactionHistory.push(outcome)
    },

    getSumAmountByType() {
      let amountIncome = 0
      let amountOutcome = 0
      this.transactionHistory.forEach(history => {
        if (history.type === 'income') {
          amountIncome += +history.amount
        } else {
          amountOutcome += +history.amount
        }
      })
      return [amountIncome, amountOutcome]
    },

    submitIncomeCategory(incomegategory) {
      this.incomeCategories.push(incomegategory)
    },
    submitOutcomeCategory(outcomegategory) {
      this.outcomeCategories.push(outcomegategory)
    },
  },
  computed: {
    balance() {
      const [incomeSum, outcomeSum] = this.getSumAmountByType()
      return 'Balance: ' + (+incomeSum - +outcomeSum)
    },
  },
}
</script>

<template>
  <div>
    <div>transaction{{ transactionHistory }}</div>
    <div>incomeCategories{{ incomeCategories }}</div>
    <div>outcomeCategories{{ outcomeCategories }}</div>

    <div class="container">
      <div class="container-fluid mt-3 bg-light-subtle border rounded-3">
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
                v-bind:income-categories="incomeCategories"
                v-on:income-submitted="incomeSubmit"
              />
            </div>
            <div class="col">
              <OutcomeSubmitter
                v-bind:outcome-categories="outcomeCategories"
                v-on:outcome-submitted="outcomeSubmit"
              />
            </div>
          </div>
        </div>
        <div class="container px-4 text-left">
          <div class="container overflow-hidden text-center">
            <div class="row gx-5">
              <div class="col">
                <IncomeCategoryList
                  v-bind:income-categories="incomeCategories"
                  v-on:income-categories-deleted="incomeCategories = $event"
                />
                <IncomeCategorySubmitter
                  v-on:incomecategory-submitted="incomeCategories.push($event)"
                />
              </div>
              <div class="col">
                <OutcomeCategoryList
                  v-bind:outcome-categories="outcomeCategories"
                  v-on:updated="outcomeCategories = $event"
                />
                <OutcomeCategorySubmitter
                  v-on:outcomecategory-submitted="
                    outcomeCategories.push(outcomegategory)
                  "
                />
              </div>
            </div>
          </div>
        </div>
        <TransactionHistoryList
          v-bind:transaction-history="transactionHistory"
          v-on:history-deleted="transactionHistory = $event"
        />
      </div>
    </div>
  </div>
</template>
