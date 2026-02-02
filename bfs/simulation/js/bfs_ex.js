function resetedge(edgeID) {
if (edgeID) {
    var clickedEdge = edges.get(edgeID);
    clickedEdge.color = {
        color: '#808080',
        highlight: '#808080',
        highlightwidth: 0
    };
    clickedEdge.width = 2.0;
    clickedEdge.selectionWidth = 0;
    edges.update(clickedEdge);}
}
function resetnode(nodeID) {
if (nodeID) {
    var clickedNode = nodes.get(nodeID);
    clickedNode.color = {
        border: "#98CB3B",
        background: "white"
    }
    clickedNode.font = {
        color: "black"
    }
    nodes.update(clickedNode);}
}
function regen(){
    location.reload();
}
function reset() {
for (i = 0; i < bfs_exercise.selected1.length; i++) {
    resetnode(bfs_exercise.selected1[i]);}
bfs_exercise.fin = [];
bfs_exercise.first = 0;
bfs_exercise.selected_cnt = 0;
bfs_exercise.selected = [];
bfs_exercise.selected1 = [];
bfs_exercise.exercise_check=0;
bfs_exercise.done = 0;
bfs_exercise.bfsvis = new Array(1000);
bfs_exercise.bfsvis.fill(0);
document.getElementById("ins").innerHTML = "Execution is reset";}
function submit(){
    bfs_exercise.done = 1;
    document.getElementById("ins").innerHTML = "Your sequence : " + bfs_exercise.selected;
if(bfs_exercise.exercise_check==1||bfs_exercise.selected.length!=correct_seq.length){
    document.getElementById("ins").innerHTML += "<br>Incorrect!<br>Click <b>Reset</b> to try again";
}
else{
    document.getElementById("ins").innerHTML += "<br>Correct!";}
}
class bfs_class{
    constructor(){
        this.min = 100000;
        this.min_id;
        this.result = [];
        this.fin = [];
        this.first = 0;
        this.selected = [];
        this.done = 0;
        this.selected1 = [];
        this.selected_cnt = 0;
        this.bfsvis = new Array(1000);
        this.bfsvis.fill(0);
        this.temp;
        this.exercise_check=0;
    };
};
addedEdges = 0;
let bfs_exercise = new bfs_class(); 
var nodes = new vis.DataSet (a[0][0]);
var edges = new vis.DataSet (a[0][1]);
graphs[0]();
var container = document.getElementById('graph');
var data = {
nodes: nodes,
edges: edges};
var graph = new vis.Network(container, data, {});
handlers();
graph.setOptions({
clickToUse:true,
nodes: {
    borderWidth: 1,
    borderWidthSelected: 1,
    chosen: false,
    font: { color: 'black' },
    shape:"circle",
    scaling:{
      label:{
        enabled:true,
        min:35,
        max:35
      },
    },
    value: 1,
    color: {
        border: "#98CB3B",
        background: "#ffffff",
        highlight: {
            border: "#98CB3B",
            background: "#ffffff",
        },
        hover: {
            border: "#98CB3B",
            background: "#ffffff",
        }
    }
},
interaction: {
    dragView: false,
    zoomView: false,
    selectConnectedEdges: false,
    hover: true,
    hoverConnectedEdges: false,
    keyboard: {
        enabled: true,
        bindToWindow: true
    },
    navigationButtons: true,
    zoomView: false
},
physics: {
    enabled: false,
    stabilization: false
},
edges: {
    scaling:{
        min:1,
        max:3,
        label:{
            enabled:true,
            min:20,
            max:20
        }
    },
    hoverWidth:0,
    value:1,
    selectionWidth: 0,
    font: { background: 'white' },
    width: 2,
    labelHighlightBold: false,
    color: {
        inherit: false,
        color: "#808080",
        opacity: 2.0
    },
    chosen: {
        inherit: false
    },
    arrows: {
        to: { enabled: true, scaleFactor: 1, type: 'arrow' },
        middle: { enabled: false, scaleFactor: 1, type: 'arrow' },
        from: { enabled: false, scaleFactor: 1, type: 'arrow' }
    },
    chosen: {
    },
    physics: false
    }
});
var networkCanvas = document.getElementById("graph").getElementsByTagName("canvas")[0];
 function changeCursor(newCursorStyle){
    networkCanvas.style.cursor = newCursorStyle;
 }
 function changeEventCursor(eventName,cursorType){
   graph.on(eventName, function() {
     changeCursor(cursorType);
   });
 }
 graph.on('hoverNode', function () {
    changeCursor('pointer');
 });
 graph.on('blurNode', function () {
    changeCursor('default');
 });
 graph.on('hoverEdge', function () {
    changeCursor('default');
 });
 graph.on('blurEdge', function () {
    changeCursor('default');
 });
 graph.on('dragStart', function () {
    changeCursor('grabbing');
 });
 graph.on('dragging', function () {
    changeCursor('grabbing');
 });
 graph.on('dragEnd', function () {
    changeCursor('grab');
 });
function clickednode(nodeID) {
if (nodeID) {
    var clickedNode = nodes.get(nodeID);
    clickedNode.color = {
        border: "black",
        background: "#98CB3B"
    }
    clickedNode.font = {
        color: "white"
    }
    nodes.update(clickedNode);}
}

function clickednode1(nodeID) {
if (nodeID) {
    var clickedNode = nodes.get(nodeID);
    clickedNode.color = {
        border: "black",
        background: "#2C9AD1"
    }
    clickedNode.font = {
        color: "white"
    }
    nodes.update(clickedNode);    }
}

function clickednodeid(nodeID) {
if (nodeID) {
    var clickedNode = nodes.get(nodeID);
    nodes.update(clickedNode);
    return clickedNode.label;}
}

graph.on("click", function(params) {
    if(bfs_exercise.done==0){
    if(params['edges']['0']){return;}
    if(params['nodes']['0']!=null){
    bfs_exercise.temp = clickednodeid(params['nodes']['0']);
    if (!params['nodes']['0'] && !params['edges']['0']) { return; }
    if (addedEdges == a[0][0].length - 1) { return; }
  
    if (bfs_exercise.first == 0) {
        bfs_exercise.selected1[bfs_exercise.selected_cnt]=params['nodes']['0'];    
        bfs_exercise.selected[bfs_exercise.selected_cnt++]=clickednodeid(params['nodes']['0']);
        bfs_exercise.bfsvis[params['nodes']['0']]=1;
        clickednode1(params['nodes']['0']);
        document.getElementById("ins").innerHTML = 'Node <b>' + bfs_exercise.temp + '</b> is selected as source node.<br>Now perform BFS on node <b>' + bfs_exercise.temp + '</b>'
        bfs_exercise.result = g.bfs_pra(params['nodes']['0']);
        correct_seq = g.bfs_ex(params['nodes']['0']);
        for(i=0;i<correct_seq.length;i++){correct_seq[i]=clickednodeid(correct_seq[i]);}
        bfs_exercise.first = 1;
        bfs_exercise.min = 100000;
        bfs_exercise.result[params['nodes']['0']] = 100000;
        for (i = 0; i < bfs_exercise.result.length; i++) bfs_exercise.fin[i] = bfs_exercise.result[i];
    }
    else{
    bfs_exercise.temp = params['nodes']['0'];
    if (bfs_exercise.bfsvis[bfs_exercise.temp] == 0) {
        bfs_exercise.selected1[bfs_exercise.selected_cnt]=params['nodes']['0'];    
        bfs_exercise.selected[bfs_exercise.selected_cnt++]=clickednodeid(params['nodes']['0']);
        bfs_exercise.bfsvis[bfs_exercise.temp] = 1;
        for (i = 1; i < 20; i++) {
            if (bfs_exercise.result[i] < bfs_exercise.min) {
                bfs_exercise.min = bfs_exercise.result[i];
                bfs_exercise.min_id = i;
            }
        }
    if (bfs_exercise.fin[bfs_exercise.temp] == bfs_exercise.min) {
        bfs_exercise.result[bfs_exercise.min_id] = 100000;
        bfs_exercise.min = 100000;
        clickednode(params['nodes']['0']);}
    else {
        bfs_exercise.exercise_check=1;
        clickednode(params['nodes']['0']);}
    }     
  }
}}
});
function handlers()
{ 
    document.getElementById("reset").onclick = function() { reset(); };
    document.getElementById("New_graph").onclick = function() { regen(); };
    document.getElementById("Submit").onclick = function() { submit(); };
};
