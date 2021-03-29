# webgl绘制点

## helloPoint

```js
const VSHADER_SOURCE = `
void main(){\n
  gl_Position = vec4(0.0,0.0,0.0,1.0);\n
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
gl.clearColor(0, 0, 0, 1)
gl.clear(gl.COLOR_BUFFER_BIT)
gl.drawArrays(gl.POINTS, 0, 1)
```

![helloPoint](./displayHelloPoint/helloPoint.JPG)
