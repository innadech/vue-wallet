<script>
import ExpenseCategoryItem from './ExpenseCategoryItem.vue'

export default {
  components: { ExpenseCategoryItem },

  props: ['expenseCategories'],

  emit: ['updated'],

  methods: {
    deleteCategory(categoryName) {
      this.$emit(
        'updated',
        this.expenseCategories.filter(e => e !== categoryName)
      )
    },
  },
}
</script>

<template>
  <div class="p-3">
    <p>Expense categories</p>
    <ul>
      <ExpenseCategoryItem
        v-for="category of expenseCategories"
        v-bind:key="category"
        v-bind:category="category"
        v-on:category-deleted="deleteCategory($event)"
      />
    </ul>
  </div>
</template>
