# seniorTransform

## rotatedMatrix4

```js
const VSHADER_SOURCE = `
attribute vec4 a_Position;\n
uniform mat4 u_xformMatrix;\n
void main(){\n
  gl_Position = u_xformMatrix * a_Position;\n
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
const xformMatrix = new Matrix4()
xformMatrix.setRotate(60, 0, 0, 1)
const uxformMatrix = gl.getUniformLocation(gl.program, 'u_xformMatrix')
gl.uniformMatrix4fv(uxformMatrix, false, xformMatrix.elements)
gl.clearColor(0.0, 0.0, 0.0, 1.0)
gl.clear(gl.COLOR_BUFFER_BIT)
gl.drawArrays(gl.TRIANGLES, 0, n)

initVertexBuffers (gl) {
  const vertices = new Float32Array([
    0, 0.5,
    -0.5, -0.5,
    0.5, -0.5
  ])
  const n = 3
  const vertexBuffers = gl.createBuffer()
  if (!vertexBuffers) {
    console.log('创建缓冲区失败')
    return -1
  }
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers)
  gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)
  const aPosition = gl.getAttribLocation(gl.program, 'a_Position')
  if (aPosition < 0) {
    console.error('未找到名称为a_Position的变量')
  }
  gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0)
  gl.enableVertexAttribArray(aPosition)
  return n
}
```

![rotatedMatrix](./displaySeniorTransform/rotatedMatrix.JPG)

## translateMatrix4

```js
const VSHADER_SOURCE = `
attribute vec4 a_Position;\n
uniform mat4 u_xformMatrix;\n
void main(){\n
  gl_Position = u_xformMatrix * a_Position;\n
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
const xformMatrix = new Matrix4()
xformMatrix.setTranslate(0.5, 1.0, 0.0)
const uxformMatrix = gl.getUniformLocation(gl.program, 'u_xformMatrix')
gl.uniformMatrix4fv(uxformMatrix, false, xformMatrix.elements)
gl.clearColor(0.0, 0.0, 0.0, 1.0)
gl.clear(gl.COLOR_BUFFER_BIT)
gl.drawArrays(gl.TRIANGLES, 0, n)

initVertexBuffers (gl) {
  const vertices = new Float32Array([
    0, 0.5,
    -0.5, -0.5,
    0.5, -0.5
  ])
  const n = 3
  const vertexBuffers = gl.createBuffer()
  if (!vertexBuffers) {
    console.log('创建缓冲区失败')
    return -1
  }
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers)
  gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)
  const aPosition = gl.getAttribLocation(gl.program, 'a_Position')
  if (aPosition < 0) {
    console.error('未找到名称为a_Position的变量')
  }
  gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0)
  gl.enableVertexAttribArray(aPosition)
  return n
}
```

![translateMatrix](./displaySeniorTransform/translateMatrix.JPG)

## scaleMatrix4

```js
const VSHADER_SOURCE = `
attribute vec4 a_Position;\n
uniform mat4 u_xformMatrix;\n
void main(){\n
  gl_Position = u_xformMatrix * a_Position;\n
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
const xformMatrix = new Matrix4()
xformMatrix.setScale(0.5, 2.0, 1.0)
const uxformMatrix = gl.getUniformLocation(gl.program, 'u_xformMatrix')
gl.uniformMatrix4fv(uxformMatrix, false, xformMatrix.elements)
gl.clearColor(0.0, 0.0, 0.0, 1.0)
gl.clear(gl.COLOR_BUFFER_BIT)
gl.drawArrays(gl.TRIANGLES, 0, n)

initVertexBuffers (gl) {
  const vertices = new Float32Array([
    0, 0.5,
    -0.5, -0.5,
    0.5, -0.5
  ])
  const n = 3
  const vertexBuffers = gl.createBuffer()
  if (!vertexBuffers) {
    console.log('创建缓冲区失败')
    return -1
  }
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers)
  gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)
  const aPosition = gl.getAttribLocation(gl.program, 'a_Position')
  if (aPosition < 0) {
    console.error('未找到名称为a_Position的变量')
  }
  gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0)
  gl.enableVertexAttribArray(aPosition)
  return n
}
```

![scaleMatrix](./displaySeniorTransform/scaleMatrix.JPG)

## rotateBeforeTranslate

```js
const VSHADER_SOURCE = `
attribute vec4 a_Position;\n
uniform mat4 u_ModelMatrix;\n
void main(){\n
  gl_Position = u_ModelMatrix * a_Position;\n
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
const modelMatrix = new Matrix4()
modelMatrix.setTranslate(0.5, 0.0, 0.0)
modelMatrix.rotate(30, 0, 0, 1)
const uxformMatrix = gl.getUniformLocation(gl.program, 'u_xformMatrix')
gl.uniformMatrix4fv(uModelMatrix, false, modelMatrix.elements)
gl.clearColor(0.0, 1.0, 0.0, 1.0)
gl.clear(gl.COLOR_BUFFER_BIT)
gl.drawArrays(gl.TRIANGLES, 0, n)

initVertexBuffers (gl) {
  const vertices = new Float32Array([
    0, 0.5,
    -0.5, -0.5,
    0.5, -0.5
  ])
  const n = 3
  const vertexBuffers = gl.createBuffer()
  if (!vertexBuffers) {
    console.log('创建缓冲区失败')
    return -1
  }
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers)
  gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)
  const aPosition = gl.getAttribLocation(gl.program, 'a_Position')
  if (aPosition < 0) {
    console.error('未找到名称为a_Position的变量')
  }
  gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0)
  gl.enableVertexAttribArray(aPosition)
  return n
}
```

![rotateBeforeTranslate](./displaySeniorTransform/rotateBeforeTranslate.JPG)

## translateBeforeRotate

```js
const VSHADER_SOURCE = `
attribute vec4 a_Position;\n
uniform mat4 u_ModelMatrix;\n
void main(){\n
  gl_Position = u_ModelMatrix * a_Position;\n
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
const modelMatrix = new Matrix4()
modelMatrix.setRotate(30, 0, 0, 1)
modelMatrix.translate(0.5, 0.0, 0.0)
const uxformMatrix = gl.getUniformLocation(gl.program, 'u_xformMatrix')
gl.uniformMatrix4fv(uModelMatrix, false, modelMatrix.elements)
gl.clearColor(0.0, 1.0, 0.0, 1.0)
gl.clear(gl.COLOR_BUFFER_BIT)
gl.drawArrays(gl.TRIANGLES, 0, n)

initVertexBuffers (gl) {
  const vertices = new Float32Array([
    0, 0.5,
    -0.5, -0.5,
    0.5, -0.5
  ])
  const n = 3
  const vertexBuffers = gl.createBuffer()
  if (!vertexBuffers) {
    console.log('创建缓冲区失败')
    return -1
  }
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers)
  gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)
  const aPosition = gl.getAttribLocation(gl.program, 'a_Position')
  if (aPosition < 0) {
    console.error('未找到名称为a_Position的变量')
  }
  gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0)
  gl.enableVertexAttribArray(aPosition)
  return n
}
```

![translateBeforeRotate](./displaySeniorTransform/translateBeforeRotate.JPG)
