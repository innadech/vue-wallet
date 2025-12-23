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
      expenseCategories: new Set(),
    }
  },
  methods: {
    addCategory(category) {
      this.expenseCategories.add(category)
      this.expenseCategories = new Set(this.expenseCategories)
    },
  },
}
</script>

<template>
  <div class="col">
    <ExpenseSubmitter
      v-bind:expense-categories="Array.from(expenseCategories)"
      v-on:expense-submitted="$emit('submitted', $event)"
    />
    <ExpenseCategoryList
      v-bind:expense-categories="Array.from(expenseCategories)"
      v-on:updated="expenseCategories = new Set($event)"
    />
    <ExpenseCategorySubmitter v-on:category-submitted="addCategory" />
  </div>
</template>
