var canvas = document.getElementById('myCanvas')
var gl = canvas.getContext('webgl');

var program = gl.createProgram();

var VSHADER_SOURCE, FSHADER_SOURCE

VSHADER_SOURCE = `
    attribute vec4 a_Position;
    uniform mat4 u_ModelMatrix;
    void main() {
        gl_Position = u_ModelMatrix * a_Position;
    }
`

FSHADER_SOURCE = `
    void main() {
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    }
`

// 顶点着色器，片元着色器
var vertexShader, fragmentShader

function createShader(gl, sourceCode, type) {
    var shader = gl.createShader(type)
    gl.shaderSource(shader, sourceCode)
    gl.compileShader(shader)
    return shader;
}

// 定义 vertexShader
vertexShader = createShader(gl, VSHADER_SOURCE, gl.VERTEX_SHADER)
// 定义 fragmentShader
fragmentShader = createShader(gl, FSHADER_SOURCE, gl.FRAGMENT_SHADER)

// attach shader to program
gl.attachShader(program, vertexShader)
gl.attachShader(program, fragmentShader)

// link program to context
gl.linkProgram(program)
gl.useProgram(program)
gl.program = program

var currentAngle = 0;
var g_last = Date.now();

var tick = function() {
    animate()
    draw();
    requestAnimationFrame(tick)
}

function initVertexBuffers() {
    // webgl 默认视角，沿着 Z 轴负方向望向原点，没有 Z 值，则默认为 0
    // 整个画布坐标，坐标系原点为画布中心，上下左右各为一个单元
    var vertices = new Float32Array([
        0, 0.5, -0.5, -0.5, 0.5, -0.5
        // -1, 1, -1, -1, 1, -1
    ])
    var n = 3;
    var vertexBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer)
    // write data into the buffer object
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)
    // get a_Position address in vertex shader
    var a_Position = gl.getAttribLocation(gl.program, 'a_Position')
    gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0)
    // enable a_position variable
    gl.enableVertexAttribArray(a_Position)
    return n
}

// write the position of vertices to a vertex shader
var n = initVertexBuffers();

gl.clearColor(0, 0, 0, 1)

var u_ModelMatrix = gl.getUniformLocation(gl.program, 'u_ModelMatrix')
var modelMatrix = new Matrix4()

function animate() {
    var now = Date.now();
    var duration = now - g_last
    g_last = now;
    currentAngle = currentAngle + duration / 1000 * 180
}

function draw() {
    modelMatrix.setRotate(currentAngle, 0, 1, 0)
    gl.uniformMatrix4fv(u_ModelMatrix, false, modelMatrix.elements)
    // clear canvas and add background color
    gl.clear(gl.COLOR_BUFFER_BIT)
    gl.drawArrays(gl.TRIANGLES, 0, n)
}

tick()