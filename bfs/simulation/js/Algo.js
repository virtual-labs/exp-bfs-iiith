class Graph {
    constructor() {
        this.edges = {};
        this.nodes = [];
        this.visited = new Array(100);
        this.visited.fill(0);
    }

    addNode(node) {
        this.nodes.push(node);
        this.edges[node] = [];
    }

    addEdge(node1, node2, id) {
        this.edges[node1].push({ node: node2, id: id });
    }
bfs(root) {
    var count = 0;
    var edgearr = [];
    var cnt = 0;
    var que = [root];
    var visited = new Array(1000);
    visited.fill(0);
    visited[root] = 1;
    while (que.length != 0) {
        var current = que.shift();
        bfs_demo.par[cnt++] = count;
        edgearr[count++] = current;
        for (var i = 0; i < g.edges[current].length; i++) {
            if (visited[g.edges[current][i].node] == 0) {
                visited[g.edges[current][i].node] = 1;
                que.push(g.edges[current][i].node);
                edgearr[count++] = g.edges[current][i];
            }
        }
        edgearr[count++] = current;
    }
    return edgearr;
}
bfs_ex(root) {
    var edgearr = [];
    var count = 0;
    var que = [root];
    var visited = new Array(1000);
    visited.fill(0);
    visited[root] = 1;
    while (que.length != 0) {
        var current = que.shift();
        edgearr[count++] = current;
        for (var i = 0; i < g.edges[current].length; i++) {
            if (visited[g.edges[current][i].node] == 0) {
                visited[g.edges[current][i].node] = 1;
                que.push(g.edges[current][i].node);
            }
        }
    }
    return edgearr;
}
bfs_pra_que(root,que,check) {
    var edgearr = [];
    var return_arr = [];
    var count = 0;
    if(check==0){
        g.visited = new Array(100);
        g.visited.fill(0);    
        }
    g.visited[root] = 1;
    var dist = new Array(1000);
    dist.fill(100000);
    dist[root] = 0;
        var current = que.shift();
        for (var i = 0; i < g.edges[current].length; i++) {
            var temp = que.indexOf(g.edges[current][i].node);
            if (g.visited[g.edges[current][i].node] == 0 && temp==-1) {
                g.visited[g.edges[current][i].node] = 1;
                que.push(g.edges[current][i].node);
                edgearr[count] = g.edges[current][i];
                dist[g.edges[current][i].node] = dist[current] + 1;
            }
        }
    return que;
    }

bfs_pra(root) {
    var edgearr = [];
    var count = 0;
    var que = [root];
    var visited = new Array(1000);
    visited.fill(0);
    visited[root] = 1;
    var dist = new Array(1000);
    dist.fill(100000);
    dist[root] = 0;
    while (que.length != 0) {
        var current = que.shift();
        for (var i = 0; i < g.edges[current].length; i++) {
            if (visited[g.edges[current][i].node] == 0) {
                visited[g.edges[current][i].node] = 1;
                que.push(g.edges[current][i].node);
                edgearr[count] = g.edges[current][i];
                dist[g.edges[current][i].node] = dist[current] + 1;
            }
        }
    }
    return dist;
    }
}
let g = new Graph();
