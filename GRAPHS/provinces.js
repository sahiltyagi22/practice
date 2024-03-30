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

    DFSr(s, visited) {
        visited[s] = true;
        let adj = this.list;
        for (let i = 0; i < adj[s].length; i++) {
            let u = adj[s][i];
            if (visited[u] === false) {
                this.DFSr(u, visited);
            }
        }
    }

    DFS(s) {
        let visited = {};
        for (let vertex in this.list) {
            visited[vertex] = false;
        }

        this.DFSr(s, visited);
    }

    provinces() {
        const visited = {};
        let provinces = 0;

        for (let node in this.list) {
            if (!visited[node]) {
                provinces++;
                this.DFS(node);
            }
        }

        return provinces;
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

console.log(graph.provinces()); // Output: 1
