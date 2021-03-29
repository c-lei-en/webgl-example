<template>
  <canvas id="webgl" width="400" height="400"></canvas>
</template>

<script>
import { getWebGLContext } from '@/components/lib/cuon-utils'
export default {
  mounted () {
    const canvas = document.getElementById('webgl')

    const gl = getWebGLContext(canvas)
    if (!gl) {
      console.error('浏览器不支持webgl')
    }

    gl.clearColor(0, 0, 0, 1)

    gl.clear(gl.COLOR_BUFFER_BIT)
  }
}
</script>

<style>

</style>
