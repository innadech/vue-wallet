<script>
import IncomeSubmitter from './components/IncomeSubmitter.vue'
import OutcomeSubmitter from './components/OutcomeSubmitter.vue'
import IncomeCategotyList from './components/IncomeCategotyList.vue'
import IncomeCategorySubmitter from './components/IncomeCategorySubmitter.vue'

export default {
  components: {
    IncomeSubmitter,
    OutcomeSubmitter,
    IncomeCategotyList,
    IncomeCategorySubmitter,
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
  <body data-bs-theme="blue">
    <div>transaction{{ transactionHistory }}</div>
    <div>incomeCategories{{ incomeCategories }}</div>

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
            <div class="col">
              <div class="p-3 text-center">
                <p id="balance" class="fs-1 text-right">{{ balance }}</p>
              </div>
            </div>
          </div>
          <div class="row gx-5">
            <div class="col">
              <IncomeSubmitter
                v-bind:incomeCategories="incomeCategories"
                v-on:income-submitted="incomeSubmit"
              />
            </div>
            <div class="col">
              <OutcomeSubmitter v-on:outcome-submitted="outcomeSubmit" />
            </div>
          </div>
        </div>
        <div class="container px-4 text-left">
          <div class="container overflow-hidden text-center">
            <div class="row gx-5">
              <div class="col">
                <div class="p-3">
                  <p>Income categories</p>
                  <div id="container-income-list">
                    <IncomeCategotyList
                      v-bind:incomeCategories="incomeCategories"
                      v-on:incomeCategories-deleted="incomeCategories = $event"
                    />
                    <!-- <span class="badge rounded-pill text-bg-light">Light
                    <button type="button" class="btn-close" aria-label="Close"></button> -->
                  </div>
                </div>
                <div class="input-group mb-3">
                  <IncomeCategorySubmitter
                    v-on:incomecategory-submitted="submitIncomeCategory($event)"
                  />
                </div>
              </div>
              <div class="col">
                <div class="p-3">
                  <p>Outcome categories</p>
                  <div id="container-outcome-list">
                    <!-- <span class="badge rounded-pill text-bg-light">Light
                    <button type="button" class="btn-close" aria-label="Close"></button>
                    </span> -->
                  </div>
                </div>
                <div class="input-group mb-3">
                  <IncomeCategorySubmitter
                    v-on:incomecategory-submitted="submitIncomeCategory($event)"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container px-4 text-left">
          <p class="fs-1 text-left">Transaction History</p>
          <ul id="transaction-history" class="list-group">
            <!-- <li class="list-group-item list-group-item-success">A simple success list group item
              <button type="button" class="btn-close" aria-label="Close"></button>
            </li>
            <li class="list-group-item list-group-item-danger">A simple danger list group item</li> -->
          </ul>
        </div>
      </div>
    </div>
  </body>
</template>

<style scoped></style>
