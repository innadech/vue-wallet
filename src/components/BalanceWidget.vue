<script>
export default {
  props: ['balance'],
}
</script>

<template>
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
</template>
