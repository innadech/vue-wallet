<script>
import IncomeCategoryItem from './IncomeCategoryItem.vue'
export default {
  components: { IncomeCategoryItem },

  props: ['incomeCategories'],

  emit: ['updated'],

  methods: {
    deleteIncomeCategory(categoryName) {
      let newSet = new Set(this.incomeCategories)
      newSet.delete(categoryName)

      this.$emit(
        'updated',
        newSet

        // new Set(
        //   Array.from(this.incomeCategories).filter(
        //     income => income !== categoryName
        //   )
        // )
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
        v-bind:key="category"
        v-bind:category="category"
        v-on:incomecategory-deleted="deleteIncomeCategory($event)"
      />
    </ul>
  </div>
</template>
