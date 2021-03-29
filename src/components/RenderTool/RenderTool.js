export class RenderTool {
  static initShaders (gl, vshader, fshader) {
    const program = RenderTool.createPrograms(gl, vshader, fshader)
    if (!program) {
      console.log('创建program失败')
      return false
    }

    gl.useProgram(program)

    gl.program = program

    return true
  }

  static createPrograms (gl, vshader, fshader) {
    // * 创建顶点着色器对象
    const vertexShader = RenderTool.loadShader(gl, gl.VERTEX_SHADER, vshader)
    // * 创建片元着色器对象
    const fragmentShader = RenderTool.loadShader(gl, gl.FRAGMENT_SHADER, fshader)

    if (!vertexShader) {
      console.log('创建顶点着色器失败')
      return null
    } else if (!fragmentShader) {
      console.log('创建片元着色器失败')
      return null
    }

    // * 创建program对象
    const program = gl.createProgram()
    if (!program) {
      console.log('创建program对象失败')
      return null
    }

    // * 绑定着色器和program
    gl.attachShader(program, vertexShader)
    gl.attachShader(program, fshader)

    // * 连接program
    gl.linkProgram(program)

    // * 检查连接结果
    const linked = gl.getProgramParameter(program, gl.LINK_STATUS)
    if (!linked) {
      const error = gl.getProgramInfoLog(program)
      gl.deleteProgram()
      gl.deleteShader(vshader)
      gl.deleteShader(fshader)
      throw new Error('连接program失败: ' + error)
    }

    return program
  }

  /**
   * @description: 创建着色器
   * @param {*} gl
   * @param {*} type
   * @param {*} source
   * @return {*} shader
   */
  static loadShader (gl, type, source) {
    // * 创建着色器
    const shader = gl.createShader(type)
    if (shader == null) {
      console.log('未能创建着色器,请检查创建类型是否正确')
      return null
    }

    // * 设置着色器程序
    gl.shaderSource(shader, source)

    // * 编译着色器
    gl.compileShader(shader)

    // * 检查编译结果
    const compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS)
    if (!compiled) {
      const error = gl.getShaderInfoLog(shader)
      gl.deleteShader(shader)
      console.log('编译着色器失败: ' + error)
      return null
    }
    return shader
  }
}
