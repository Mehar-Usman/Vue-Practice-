<template>
  <div class="text-center">
    <button @click="someMethod">Call A component when the button is triggered</button>
    <p>Result: {{ additionResult }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      additionResult: null,
    };
  },
  methods: {
    someMethod() {
      // Call a function that adds two numbers
      const result = this.addNumbers(3, 4);
      this.additionResult = result;
    },
    addNumbers(a, b) {
      return a + b;
    },
  },
};
</script>
