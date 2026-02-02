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
for (i = 0; i < bfs_practice.selected.length; i++) {
    resetnode(bfs_practice.selected[i]);
}
bfs_practice.done=0;
bfs_practice.output = [];
bfs_practice.fin = [];
bfs_practice.first = 0;
bfs_practice.selected_cnt = 0;
bfs_practice.selected = [];
bfs_practice.bfsvis = new Array(1000);
bfs_practice.bfsvis.fill(0);
document.getElementById("ins").innerHTML = "Execution is reset, select the source node for BFS ";}
class bfs_class{
    constructor(){
        this.src;
        this.min = 100000;
        this.min_id;
        this.result = [];
        this.fin = [];
        this.output = [];
        this.first = 0;
        this.selected = [];
        this.selected_cnt = 0;
        this.finalcheck=0;
        this.done=0;
        this.bfsvis = new Array(1000);
        this.bfsvis.fill(0);
        this.temp;
    };
};
addedEdges = 0;
let bfs_practice = new bfs_class();
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
        border: '#B22222',
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
        background: " #2C9AD1"
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
    bfs_practice.temp = clickednodeid(params['nodes']['0']);
    if (!params['nodes']['0'] && !params['edges']['0']) { return; }
    if(params['edges']['0']){return;}
    if (addedEdges == a[0][0].length - 1) { return; }
  
    if (bfs_practice.first == 0) {
    bfs_practice.selected[bfs_practice.selected_cnt]=params['nodes']['0'];
    bfs_practice.output[bfs_practice.selected_cnt++]=params['nodes']['0']-1;
    clickednode1(params['nodes']['0']);
    bfs_practice.src = params['nodes']['0'];
    document.getElementById("ins").innerHTML = 'Node <b>' + bfs_practice.temp + '</b> is selected as source node.<br>Now perform BFS on node <b>' + bfs_practice.temp + '</b>'
    bfs_practice.result = g.bfs_pra(params['nodes']['0']);
    bfs_practice.first = 1;
    bfs_practice.min = 100000;
    bfs_practice.result[params['nodes']['0']] = 100000;
    for(i=1;i<bfs_practice.result.length;i++){
        if(bfs_practice.result[i]!=100000)
        bfs_practice.finalcheck=1;
    }
    if(bfs_practice.finalcheck==0){
        document.getElementById("ins").innerHTML += "<br>As source node has no children nodes, BFS is done! ";
        bfs_practice.done=1;
    }
    bfs_practice.finalcheck=0;
    for (i = 0; i < bfs_practice.result.length; i++) bfs_practice.fin[i] = bfs_practice.result[i];
    } else if (bfs_practice.first == 1) {
        if(bfs_practice.done==1)
        {
            document.getElementById("ins").innerHTML="BFS is done on the selected node.<br>Sequence of nodes visited on performing BFS on node <b>"+bfs_practice.output[0]+"</b> : "+bfs_practice.output+"<br>";
        }
        else{
        bfs_practice.temp = params['nodes']['0'];
        if(bfs_practice.temp==bfs_practice.src){
            document.getElementById("ins").innerHTML = "Selected node is the source node from where the BFS was started";
        }
        else{
        if (bfs_practice.bfsvis[bfs_practice.temp] == 0) {
            bfs_practice.bfsvis[bfs_practice.temp] = 1;
            for (i = 1; i < 20; i++) {
                if (bfs_practice.result[i] < bfs_practice.min) {
                    bfs_practice.min = bfs_practice.result[i];
                    bfs_practice.min_id = i;
                }
            }
            if (bfs_practice.fin[bfs_practice.temp] == bfs_practice.min) {
                bfs_practice.selected[bfs_practice.selected_cnt]=params['nodes']['0'];
                bfs_practice.output[bfs_practice.selected_cnt++]=params['nodes']['0']-1;
                document.getElementById("ins").innerHTML = "Selected node is the correct node."
                bfs_practice.result[bfs_practice.min_id] = 100000;
                for(i=1;i<bfs_practice.result.length;i++){
                    if(bfs_practice.result[i]!=100000)
                    {
                        bfs_practice.finalcheck=1;
                    }
                }
                if(bfs_practice.finalcheck==0){
                    document.getElementById("ins").innerHTML+="<br>BFS is done!!!<br>Sequence of nodes visited on performing BFS on node <b>"+bfs_practice.output[0]+"</b> : "+bfs_practice.output+"<br>";
                    bfs_practice.done=1;
                }
                bfs_practice.finalcheck=0;
                bfs_practice.min = 100000;
                clickednode(params['nodes']['0']);}
            else {
                document.getElementById("ins").innerHTML = "Selected node is an incorrect node."
                bfs_practice.bfsvis[bfs_practice.temp] = 0;
        }
    } 
    else{
        document.getElementById("ins").innerHTML = "Selected node is already visited."
    }
    }
  }}
});
function handlers()
{ 
    document.getElementById("reset").onclick = function() { reset(); };
    document.getElementById("New_graph").onclick = function() { regen(); };
};
