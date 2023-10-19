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
      console.log(`${vertex} ==> ${this.list[vertex].join(" , ")}`);
    });
  }

  bfs(rootVertex) {
    if (rootVertex === null) return null;

    let queue = [];
    queue.push(rootVertex);

    let visited = new Array(this.list.length).fill('false'); // To keep track of visited vertices
    visited[rootVertex] = true;

    let ans = [];

    while (queue.length > 0) {
      let currentVertex = queue.shift();
      ans.push(currentVertex);

      this.list[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          queue.push(neighbor);
          visited[neighbor] = true;
        }
      });
    }

    return ans;
  }
}

const graph = new Graph();
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);
graph.addVertex(6);
graph.addVertex(7);

graph.addEdges(2, 3);
graph.addEdges(2, 4);
graph.addEdges(2, 5);
graph.addEdges(5, 3);
graph.addEdges(7, 3);

graph.showConnections();

console.log(graph.bfs(2));
