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
for(i=0;i<bfs_practice.result.length;i++){
    resetnode(bfs_practice.result[i]);
}
bfs_practice.first = 0;
bfs_practice.selected_cnt = 0;
bfs_practice.selected = [];
bfs_practice.result=[];
bfs_practice.visited.fill(0);
bfs_practice.output = [];
bfs_practice.finish = [];
print("cards");
print("cards_vis");
document.getElementById("ins").innerHTML = "Execution is reset";
document.getElementById("insa").innerHTML = "";}
class bfs_class{
    constructor(){
        this.result = [];
        this.first = 0;
        this.selected = [];
        this.selected_cnt = 0;
        this.temp;
        this.output = [];
        this.finish = [];
        this.visited = new Array(10);
        this.visited.fill(0);
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
        border: 'grey',
        background: "grey"
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
        border: "#98CB3B",
        background: "#98CB3B"
    }
    clickedNode.font = {
        color: "white"
    }
    nodes.update(clickedNode);}
}

function clickednodeid(nodeID) {
if (nodeID) {
    var clickedNode = nodes.get(nodeID);
    nodes.update(clickedNode);
    return clickedNode.label;}
}

function print(input){
 var classToFill = document.getElementById(input);
 document.getElementById(input).innerHTML = ""
  for (var i = 0; i < nodes.length; i++ ){
    var temp = document.createElement("div");
    temp.className = "card";
    if(input=="cards_vis")
    {
        if(i>=bfs_practice.visited.length)
    {
        temp.innerHTML=0;
        temp.style.color = "black";}
    else
    {
        temp.innerHTML = bfs_practice.visited[i+1];
        temp.style.color = "black";}    
    }
    else{
    if(i>=bfs_practice.output.length)
    {
        temp.innerHTML="a";
        temp.style.color = "white";}
    else
    {
        temp.innerHTML = bfs_practice.output[i];
        temp.style.color = "black";}    
    }
    temp.style.fontStyle = "normal";
    classToFill.appendChild(temp);
  }
}
print("cards");
print("cards_vis");
graph.on("click", function(params) {
    bfs_practice.temp = clickednodeid(params['nodes']['0']);
    if (!params['nodes']['0'] && !params['edges']['0']) { return; }
    if(params['edges']['0']){return;}
    if (addedEdges == a[0][0].length - 1) { return; }
    if (bfs_practice.first == 0) {
    bfs_practice.visited[params['nodes']['0']] = 1;
    bfs_practice.selected[bfs_practice.selected_cnt]=params['nodes']['0'];
    bfs_practice.finish[bfs_practice.selected_cnt++]=clickednodeid(params['nodes']['0']);
    bfs_practice.result[0]=params['nodes']['0'];
    bfs_practice.result = g.bfs_pra_que(params['nodes']['0'],bfs_practice.result,bfs_practice.first);
    bfs_practice.first = 1;
    document.getElementById("ins").innerHTML = clickednodeid(params['nodes']['0'])+" is selected as source node and its children are enqueued to the queue";
    if(bfs_practice.result.length==0){document.getElementById("ins").innerHTML += "<br>Since the queue is empty,BFS is complete!!<br>Sequence of nodes visited in the BFS traversal : "+bfs_practice.finish;}
    clickednode(params['nodes']['0']);
    for(i=0;i<bfs_practice.result.length;i++){
        bfs_practice.output[i] = clickednodeid(bfs_practice.result[i]);
        }
    print("cards");
    print("cards_vis");
    }
    else{
    if(bfs_practice.result.length==0){document.getElementById("ins").innerHTML = "BFS is complete!!<br>Sequence of nodes visited in the BFS traversal : "+bfs_practice.finish;}
    else{
        if(params['nodes']['0']==bfs_practice.result[0])
        {
            bfs_practice.visited[params['nodes']['0']] = 1;
            bfs_practice.selected[bfs_practice.selected_cnt]=params['nodes']['0'];
            bfs_practice.finish[bfs_practice.selected_cnt++]=clickednodeid(params['nodes']['0']);
            document.getElementById("ins").innerHTML = "<b>"+clickednodeid(params['nodes']['0'])+"</b> is dequeued from the queue and its children are enqueued to the queue";
            bfs_practice.result = g.bfs_pra_que(params['nodes']['0'],bfs_practice.result,bfs_practice.first);
            bfs_practice.output=[];
            for(i=0;i<bfs_practice.result.length;i++){
                bfs_practice.output[i] = clickednodeid(bfs_practice.result[i]);
            }
            clickednode(params['nodes']['0']);
            print("cards");
            print("cards_vis");
            if(bfs_practice.result.length==0){
                document.getElementById("ins").innerHTML = "Since the queue is empty,<br>BFS is complete!!<br>Sequence of nodes visited in the BFS traversal : "+ bfs_practice.finish;
        }
        }
        else{
            document.getElementById("ins").innerHTML ="Wrong node<br>Select <b>"+clickednodeid(bfs_practice.result[0])+"</b> as it is the first element of the queue";
        }
    }
    }
});
function handlers()
{ 
    document.getElementById("reset").onclick = function() { reset(); };
    document.getElementById("New_graph").onclick = function() { regen(); };
};
