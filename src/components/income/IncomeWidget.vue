<script>
import IncomeCategorySubmitter from './IncomeCategorySubmitter.vue'
import IncomeCategoryList from './IncomeCategoryList.vue'
import IncomeSubmitter from './IncomeSubmitter.vue'

export default {
  components: { IncomeSubmitter, IncomeCategoryList, IncomeCategorySubmitter },

  emits: ['submitted'],

  data() {
    return {
      incomeCategories: new Set(),
    }
  },
  methods: {
    // addCategory(category) {
    //   this.incomeCategories.add(category)
    //   this.incomeCategories = new Set(this.incomeCategories)
    // },
  },
}
</script>

<template>
  <div class="col">
    <IncomeSubmitter
      v-bind:income-categories="incomeCategories"
      v-on:income-submitted="$emit('submitted', $event)"
    />
    <IncomeCategoryList
      v-bind:income-categories="incomeCategories"
      v-on:updated="incomeCategories = $event"
    />
    <IncomeCategorySubmitter
      v-on:category-submitted="incomeCategories.add($event)"
    />
  </div>
</template>
