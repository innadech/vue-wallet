<script>
import IncomeCategoryItem from './IncomeCategoryItem.vue'
export default {
  components: { IncomeCategoryItem },

  props: ['incomeCategories'],

  emit: ['incomeCategories-deleted'],

  methods: {
    deleteIncomeCategory(id) {
      this.$emit(
        'incomeCategories-deleted',
        this.incomeCategories.filter(income => income.id !== id)
      )
    },
  },
}
</script>

<template>
  <div class="p-3">
    <p>Income categories</p>
    <ul>
      <IncomeCategoryItem
        v-for="category of incomeCategories"
        v-bind:key="category.id"
        v-bind:category="category"
        v-on:incomecategory-deleted="deleteIncomeCategory($event)"
      />
    </ul>
  </div>
</template>
