<template>
  <canvas id="webgl" width="400" height="400"></canvas>
</template>

<script>
import { getWebGLContext, initShaders } from '@/components/lib/cuon-utils'
export default {
  mounted () {
    const VSHADER_SOURCE = `
    attribute vec4 a_Position;\n
    void main(){\n
      gl_Position = a_Position;\n
      gl_PointSize = 10.0;\n
    }\n
    `

    const FSHADER_SOURCE = `
    void main(){\n
      gl_FragColor = vec4(1.0,0.0,0.0,1.0);\n
    }\n
    `

    const canvas = document.getElementById('webgl')

    const gl = getWebGLContext(canvas)
    if (!gl) {
      console.error('浏览器不支持webgl')
    }

    if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
      console.error('初始化着色器失败')
    }

    const n = this.initVertexBuffers(gl)
    if (n < 0) {
      console.error('设置顶点位置失败')
    }

    gl.clearColor(0, 0, 0, 1)

    gl.clear(gl.COLOR_BUFFER_BIT)
    gl.drawArrays(gl.POINTS, 0, n)
  },
  methods: {
    initVertexBuffers (gl) {
      const vertices = new Float32Array([
        0, 0.5,
        -0.5, -0.5,
        0.5, -0.5
      ])
      const n = 3

      const vertexBuffer = gl.createBuffer()
      if (!vertexBuffer) {
        console.log('创建缓冲区对象失败')
        return -1
      }

      gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer)

      gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)

      const aPosition = gl.getAttribLocation(gl.program, 'a_Position')
      if (aPosition < 0) {
        console.error('获取a_Position变量失败')
      }

      gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0)

      gl.enableVertexAttribArray(aPosition)
      return n
    }
  }
}
</script>

<style>

</style>
