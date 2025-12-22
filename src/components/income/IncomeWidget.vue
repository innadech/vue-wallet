<script>
import IncomeCategorySubmitter from './IncomeCategorySubmitter.vue'
import IncomeCategoryList from './IncomeCategoryList.vue'
import IncomeSubmitter from './IncomeSubmitter.vue'

export default {
  components: { IncomeSubmitter, IncomeCategoryList, IncomeCategorySubmitter },

  emits: ['submitted'],

  data() {
    return {
      incomeCategories: [],
    }
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
      v-on:category-submitted="incomeCategories.push($event)"
    />
  </div>
</template>
