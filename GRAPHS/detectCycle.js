class Graph {
  constructor() {
    this.list = {};
  }

  addVertex(vertex) {
    if (!this.list[vertex]) {
      this.list[vertex] = [];
    }
  }

  addEdges(vertex1, vertex2) {
    this.list[vertex1].push(vertex2);
    this.list[vertex2].push(vertex1);
  }

  showConnections() {
    Object.keys(this.list).forEach((vertex) => {
      console.log(`${vertex} => ${this.list[vertex].join(" , ")}`);
    });
  }

  DFSr(s, parent, visited) {
    visited[s] = true;
    // console.log(s);

    let adj = this.list;
    for (let i = 0; i < adj[s].length; i++) {
      let u = adj[s][i];
      if (visited[u] === false) {
        if (this.DFSr(u, s, visited)) return true;
      } else if (u !== parent) return true;
    }
    return false;
  }

  isCycle() {
    let v = Object.keys(this.list).length; 
    let visited = new Array(v+1).fill(false); // Initialize visited array with false values
  
    for (let i = 1; i <=v; i++) {
      if (!visited[i]) {
        if (this.DFSr(i, -1, visited)) return true;
      }
    }
    return false;
  }
  
}

let graph = new Graph();

//  adding vertices
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);

// adding edges
graph.addEdges(1, 2);
graph.addEdges(2, 3);
graph.addEdges(3, 4);
graph.addEdges(4, 5);
graph.addEdges(5, 3);

graph.showConnections();
console.log(graph.isCycle())
