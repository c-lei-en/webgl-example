<template>
  <div class="home">
    <!-- <hello-webgl></hello-webgl> -->
    <!-- <hello-point></hello-point> -->
    <!-- <color-point></color-point> -->
    <!-- <multi-point></multi-point> -->
    <hello-triangle></hello-triangle>
  </div>
</template>

<script>
// import helloWebgl from '@/examples/helloWebgl/helloWebgl'
// import helloPoint from '@/examples/helloPoint/helloPoint'
// import helloPoint from '@/examples/helloPoint/helloPoint1'
// import helloPoint from '@/examples/helloPoint/helloPoint2'
// import colorPoint from '@/examples/helloPoint/colorPoint'
// import multiPoint from '@/examples/helloPoint/multiPoints'
import helloTriangle from '@/examples/helloTriangles/helloTriangles'
export default {
  components: {
    // helloWebgl
    // helloPoint
    // colorPoint
    // multiPoint
    helloTriangle
  }
}
</script>
