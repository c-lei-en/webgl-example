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

## helloPoint1

```js
const VSHADER_SOURCE = `
attribute vec4 a_Position;\n
attribute float a_PointSize;\n
void main(){\n
  gl_Position = a_Position;\n
  gl_PointSize = a_PointSize;\n
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
// * 获取attribute 变量的存储位置
const aPosition = gl.getAttribLocation(gl.program, 'a_Position')
const aPointSize = gl.getAttribLocation(gl.program, 'a_PointSize')
// * 将顶点位置和大小数据传输给attribute变量
gl.vertexAttrib3f(aPosition, 0.5, 0.5, 0)
gl.vertexAttrib1f(aPointSize, 5.0)
gl.clearColor(0, 0, 0, 1)
gl.clear(gl.COLOR_BUFFER_BIT)
gl.drawArrays(gl.POINTS, 0, 1)
```

![helloPoint1](./displayHelloPoint/helloPoint1.JPG)

## helloPoint2 通过捕获canvas的点击事件在canvas上面绘制点

```js
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
// * 获取attribute 变量的存储位置
const aPosition = gl.getAttribLocation(gl.program, 'a_Position')
canvas.onmousedown = ev => {
  this.canvasClick(ev, gl, canvas, aPosition)
}
gl.clearColor(0, 0, 0, 1)
gl.clear(gl.COLOR_BUFFER_BIT)

canvasClick (ev, gl, canvas, aPosition) {
  let x = ev.clientX; let y = ev.clientY
  const rect = ev.target.getBoundingClientRect()
  x = ((x - rect.left) - canvas.height / 2) / (canvas.height / 2)
  y = (canvas.width / 2 - (y - rect.top)) / (canvas.width / 2)
  this.pointArray.push([x, y])
  gl.clear(gl.COLOR_BUFFER_BIT)
  for (let i = 0, len = this.pointArray.length; i < len; i++) {
    const xy = this.pointArray[i]
    gl.vertexAttrib3f(aPosition, xy[0], xy[1], 0.0)
    gl.drawArrays(gl.POINTS, 0, 1)
  }
}
```

![helloPoint2](./displayHelloPoint/helloPoint2.JPG)
