<template>
  <PoseTransition mode="out-in">
    <Box v-if="show" key="a">Hello hi</Box>
    <li v-else key="test">Test</li>
  </PoseTransition>
</template>

<script>
import posed, { PoseTransition } from "vue-pose";

export default {
  data: () => ({
    show: true,
    items: [0, 1, 2, 3, 4]
  }),
  mounted() {
    setInterval(() => (this.show = !this.show), 2000);
  },
  components: {
    PoseTransition,
    Box: posed.li({
      enter: { opacity: 1 },
      exit: { opacity: 0 }
    })
  }
};
</script>

<style>
body {
  display: flex;
  height: 95vh;
  padding: 0;
  margin: 0;
  justify-content: center;
  align-items: center;
}

.li {
  width: 300px;
  height: 50px;
  background: #54e365;
  margin-bottom: 20px;
}
</style>
