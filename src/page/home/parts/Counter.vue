<template>
  <div>{{ count }}</div>
</template>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";

  @Component<Counter>({
  name: "Counter",
  })
  export default class Counter extends Vue {
    count = 0;

    inc(): void {
      this.count += 1;
    }
  }
</script>
