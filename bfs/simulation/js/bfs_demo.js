function resetedge(edgeID) {
  if (edgeID) {
    var clickedEdge = edges.get(edgeID)
    clickedEdge.color = {
      color: '#808080',
      highlight: '#808080',
      highlightwidth: 0,
    }
    clickedEdge.width = 2.0
    clickedEdge.selectionWidth = 0
    edges.update(clickedEdge)
  }
}
function resetnode(nodeID) {
  if (nodeID) {
    var clickedNode = nodes.get(nodeID)
    clickedNode.color = {
      border: '#98CB3B',
      background: 'white',
    }
    clickedNode.font = {
      color: 'black',
    }
    nodes.update(clickedNode)
  }
}
function regen() {
  location.reload()
}

class bfs_class {
  constructor() {
    this.resetter = 0
    this.src
    this.time
    this.res = []
    this.prev = -1
    this.count = 0
    this.src1 = 0
    this.first = 0
    this.it = 0
    this.par = new Array(10)
    this.start = 0
    this.seq = []
    this.cnt = 0
    this.befstart = null
    this.ispaused = 0
  }
}
addedEdges = 0
let bfs_demo = new bfs_class()
var nodes = new vis.DataSet(a[0][0])
var edges = new vis.DataSet(a[0][1])
graphs[0]()
var container = document.getElementById('graph')
var data = {
  nodes: nodes,
  edges: edges,
}
var graph = new vis.Network(container, data, {})
handlers()
graph.setOptions({
  clickToUse: true,
  nodes: {
    borderWidth: 2,
    heightConstraint: {
      minimum: 10,
    },
    borderWidthSelected: 1,
    chosen: false,
    font: { color: 'black' },
    shape: 'circle',
    scaling: {
      label: {
        enabled: true,
        min: 35,
        max: 35,
      },
    },
    value: 1,
    color: {
      border: '#98CB3B',
      background: '#ffffff',
      highlight: {
        border: '#98CB3B',
        background: '#ffffff',
      },
      hover: {
        border: '#98CB3B',
        background: '#ffffff',
      },
    },
  },
  interaction: {
    dragView: false,
    zoomView: false,
    selectConnectedEdges: false,
    hover: true,
    hoverConnectedEdges: false,
    keyboard: {
      enabled: true,
      bindToWindow: true,
    },
    navigationButtons: true,
    zoomView: false,
  },
  physics: {
    enabled: false,
    stabilization: false,
  },
  edges: {
    scaling: {
      min: 1,
      max: 3,
      label: {
        enabled: true,
        min: 20,
        max: 20,
      },
    },
    hoverWidth: 0,
    value: 1,
    selectionWidth: 0,
    font: { background: 'white' },
    width: 2,
    labelHighlightBold: false,
    color: {
      inherit: false,
      color: '#808080',
      opacity: 2.0,
    },
    chosen: {
      inherit: false,
    },
    arrows: {
      to: { enabled: true, scaleFactor: 1, type: 'arrow' },
      middle: { enabled: false, scaleFactor: 1, type: 'arrow' },
      from: { enabled: false, scaleFactor: 1, type: 'arrow' },
    },
    chosen: {},
    physics: false,
  },
})
var networkCanvas = document
  .getElementById('graph')
  .getElementsByTagName('canvas')[0]
function changeCursor(newCursorStyle) {
  networkCanvas.style.cursor = newCursorStyle
}
function changeEventCursor(eventName, cursorType) {
  graph.on(eventName, function () {
    changeCursor(cursorType)
  })
}
graph.on('hoverNode', function () {
  changeCursor('pointer')
})
graph.on('blurNode', function () {
  changeCursor('default')
})
graph.on('hoverEdge', function () {
  changeCursor('default')
})
graph.on('blurEdge', function () {
  changeCursor('default')
})
graph.on('dragStart', function () {
  changeCursor('grabbing')
})
graph.on('dragging', function () {
  changeCursor('grabbing')
})
graph.on('dragEnd', function () {
  changeCursor('grab')
})
function clickednode(nodeID) {
  if (nodeID) {
    var clickedNode = nodes.get(nodeID)
    clickedNode.color = {
      border: '#3BFB11',
      background: '#98CB3B',
    }
    clickedNode.font = {
      color: 'white',
    }
    nodes.update(clickedNode)
  }
}

function clickednode1(nodeID) {
  if (nodeID) {
    var clickedNode = nodes.get(nodeID)
    clickedNode.color = {
      border: 'black',
      background: '#2C9AD1',
    }
    clickedNode.font = {
      color: 'white',
    }
    nodes.update(clickedNode)
  }
}

function clickednode2(nodeID) {
  if (nodeID) {
    var clickedNode = nodes.get(nodeID)
    clickedNode.color = {
      border: '#70746F',
      background: 'grey',
    }
    clickedNode.font = {
      color: 'white',
    }
    nodes.update(clickedNode)
  }
}

function clickednode3(nodeID) {
  if (nodeID) {
    var clickedNode = nodes.get(nodeID)
    clickedNode.color = {
      border: '#0C0D0C',
      background: 'black',
    }
    clickedNode.font = {
      color: 'white',
    }
    nodes.update(clickedNode)
  }
}

function clickededge1(edgeID) {
  if (edgeID) {
    var clickedEdge = edges.get(edgeID)
    clickedEdge.color = {
      color: 'black',
      highlight: 'black',
    }
    edges.update(clickedEdge)
  }
}

function clickednodeid(nodeID) {
  if (nodeID) {
    var clickedNode = nodes.get(nodeID)
    nodes.update(clickedNode)
    return clickedNode.label
  }
}
if (bfs_demo.start == 0) {
  //   document.getElementById('pause').disabled = true
  //   document.getElementById('pause').style.backgroundColor = 'grey'
  document.getElementById('reset').disabled = true
  document.getElementById('reset').style.backgroundColor = 'grey'
  document.getElementById('reset').style.cursor = 'not-allowed'
  //   document.getElementById('pause').style.cursor = 'not-allowed'
}
graph.on('click', function (params) {
  bfs_demo.resetter = 0
  if (!params['nodes']['0'] && !params['edges']['0']) {
    return
  }
  if (params['edges']['0']) {
    return
  }
  if (addedEdges == a[0][0].length - 1) {
    return
  }
  if (bfs_demo.first == 0) {
    bfs_demo.src = clickednodeid(params['nodes']['0'])
    if (bfs_demo.befstart == null) {
      bfs_demo.befstart = params['nodes']['0']
      clickednode1(bfs_demo.befstart)
    } else {
      resetnode(bfs_demo.befstart)
      bfs_demo.befstart = params['nodes']['0']
      clickednode1(bfs_demo.befstart)
    }
    document.getElementById('ins').innerHTML =
      '<b>' +
      bfs_demo.src +
      '</b>' +
      ' is selected as source node <br>Click on <b>Start</b> to start the BFS Demo with the source node' +
      '<b>' +
      bfs_demo.src +
      '</b>'
    bfs_demo.src1 = params['nodes']['0']
    document.getElementById('pause').value = 'Start'
  }
})
function clicking() {
  if (bfs_demo.resetter == 1) return
  else if (bfs_demo.count < bfs_demo.res.length && bfs_demo.resetter == 0) {
    if (
      bfs_demo.res[bfs_demo.count].id == undefined &&
      bfs_demo.par[bfs_demo.it] == bfs_demo.count
    ) {
      clickednode2(bfs_demo.res[bfs_demo.count])
      bfs_demo.seq[bfs_demo.cnt++] = clickednodeid(bfs_demo.res[bfs_demo.count])
      document.getElementById('ins').innerHTML =
        'Node <b>' +
        (bfs_demo.res[bfs_demo.count] - 1) +
        '</b> is the current node'
      bfs_demo.it++
      bfs_demo.count++
    } else if (
      bfs_demo.res[bfs_demo.count].id == undefined &&
      bfs_demo.par[bfs_demo.it] != bfs_demo.count
    ) {
      document.getElementById('ins').innerHTML =
        'Node <b>' +
        (bfs_demo.res[bfs_demo.count] - 1) +
        '</b> is explored completely'
      clickednode3(bfs_demo.res[bfs_demo.count])
      bfs_demo.count++
    } else {
      document.getElementById('ins').innerHTML =
        'Node <b>' +
        clickednodeid(bfs_demo.res[bfs_demo.count].node) +
        '</b> is visited'
      clickededge1(bfs_demo.res[bfs_demo.count].id)
      clickednode(bfs_demo.res[bfs_demo.count].node)
      bfs_demo.count++
    }
  } else if (
    bfs_demo.count == bfs_demo.res.length &&
    bfs_demo.start == 1 &&
    bfs_demo.first == 1
  ) {
    document.getElementById('ins').innerHTML =
      'BFS is done on the node <b>' +
      bfs_demo.src +
      '</b> !!!<br>Sequence of nodes visited on performing BFS on node ' +
      bfs_demo.src +
      ' : ' +
      bfs_demo.seq

    document.getElementById('pause').disabled = true
    document.getElementById('pause').style.backgroundColor = 'grey'
    document.getElementById('pause').style.cursor = 'not-allowed'
  }
}

function reset() {

    document.getElementById('pause').disabled = false
    document.getElementById('pause').style.backgroundColor = '#288ec8'
    document.getElementById('pause').style.cursor = 'pointer'

  for (i = 0; i < bfs_demo.res.length; i++) {
    resetedge(bfs_demo.res[i].id)
    resetnode(bfs_demo.res[i].node)
  }
  bfs_demo.resetter = 1
  bfs_demo.count = 0
  bfs_demo.res = []
  bfs_demo.par = []
  bfs_demo.first = 0
  bfs_demo.start = 0
  bfs_demo.seq = []
  bfs_demo.cnt = 0
  bfs_demo.it = 0
  bfs_demo.prev = -1
  bfs_demo.befstart = null
  document.getElementById('pause').value = 'Start'
  resetnode(bfs_demo.src1)
  bfs_demo.src1 = 0
  clearInterval(bfs_demo.time)
  document.getElementById('ins').innerHTML =
    'Execution is reset, select the source node for BFS demo.'
  document.getElementById('interval').value = 1500
  //   document.getElementById('pause').disabled = true
  //   document.getElementById('pause').style.backgroundColor = 'grey'
  //   document.getElementById('reset').disabled = true
  document.getElementById('reset').style.backgroundColor = 'grey'
  //   document.getElementById('reset').style.cursor = 'not-allowed'
  //   document.getElementById('pause').style.cursor = 'not-allowed'
}
function start() {
  if (bfs_demo.start == 0) {
    if (bfs_demo.src1 == 0) {
      document.getElementById('ins').innerHTML =
        'Select the source node from where you want to start the BFS Demo'
    } else {
      document.getElementById('ins').innerHTML =
        'BFS Demo started on node ' + '<b>' + bfs_demo.src + '</b>'
      document.getElementById('pause').value = 'Pause'

      bfs_demo.first = 1
      bfs_demo.start = 1
      bfs_demo.res = g.bfs(bfs_demo.src1)
      //   document.getElementById('start').value = 'Next'
      document.getElementById('pause').disabled = false
      document.getElementById('pause').style.backgroundColor = '#288ec8'
      document.getElementById('reset').disabled = false
      document.getElementById('reset').style.backgroundColor = '#288ec8'
      document.getElementById('reset').style.cursor = 'pointer'
      document.getElementById('pause').style.cursor = 'pointer'
      bfs_demo.time = setInterval(
        clicking,
        3000 - document.getElementById('interval').value
      )
    }
  }
}
function pause() {
  if (bfs_demo.start == 0) {
    start()
  } else if (bfs_demo.prev == -1) {
    bfs_demo.prev = document.getElementById('interval').value
    if (bfs_demo.time != 0) {
      clearInterval(bfs_demo.time)
    }
    bfs_demo.ispaused = 1
    document.getElementById('pause').value = 'Play'
  } else {
    bfs_demo.prev = -1
    bfs_demo.ispaused = 0
    clearInterval(bfs_demo.time)
    bfs_demo.time = setInterval(
      clicking,
      3000 - document.getElementById('interval').value
    )
    document.getElementById('pause').value = 'Pause'
  }
}
function change_interval() {
  if (bfs_demo.time != 0) {
    clearInterval(bfs_demo.time)
  }
  if (document.getElementById('interval').value != 100) {
    clearInterval(bfs_demo.time)
    bfs_demo.time = setInterval(
      clicking,
      3000 - document.getElementById('interval').value
    )
    document.getElementById('pause').style.backgroundColor = '#288ec8'
  } else document.getElementById('pause').style.backgroundColor = 'grey'
}
function handlers() {
  document.getElementById('interval').oninput = function () {
    change_interval()
  }
  document.getElementById('interval').onchange = function () {
    change_interval()
  }
  document.getElementById('reset').onclick = function () {
    reset()
  }
  document.getElementById('New_graph').onclick = function () {
    regen()
  }
  //   document.getElementById('start').onclick = function () {
  //     start()
  //   }
  document.getElementById('pause').onclick = function () {
    pause()
  }
}
