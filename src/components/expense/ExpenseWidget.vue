<script>
import ExpenseCategorySubmitter from './ExpenseCategorySubmitter.vue'
import ExpenseCategoryList from './ExpenseCategoryList.vue'
import ExpenseSubmitter from './ExpenseSubmitter.vue'

export default {
  components: {
    ExpenseSubmitter,
    ExpenseCategoryList,
    ExpenseCategorySubmitter,
  },

  emits: ['submitted'],

  data() {
    return {
      expenseCategories: [],
    }
  },
}
</script>

<template>
  <div class="col">
    <ExpenseSubmitter
      v-bind:expense-categories="expenseCategories"
      v-on:expense-submitted="$emit('expense-submitted', $event)"
    />
    <ExpenseCategoryList
      v-bind:expense-categories="expenseCategories"
      v-on:updated="expenseCategories = $event"
    />
    <ExpenseCategorySubmitter
      v-on:category-submitted="expenseCategories.push($event)"
    />
  </div>
</template>
