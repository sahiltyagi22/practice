// in this we are doing it with the help of a stack DS

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
        if (!this.list[vertex1]) {
            this.addVertex(vertex1);
        }
        if (!this.list[vertex2]) {
            this.addVertex(vertex2);
        }
        this.list[vertex1].push(vertex2);
    }

    showConnections() {
        Object.keys(this.list).forEach((vertex) => {
            console.log(`${vertex} ==> ${this.list[vertex].join(', ')}`);
        });
    }

    DFS(u , visited , stack){
        visited[u] = true

        for(let i=0; i<this.list[u].length; i++){
            let x = this.list[u][i]

            if(!visited[x]){
                this.DFS(x , visited, stack)
            }
        }

        stack.push(u)

    }

    topological(V){
        let visited = new Array(V+1).fill(false)
        let stack = []

        for(let i=1; i<=V; i++){
            if(visited[i] === false){
                this.DFS(i , visited , stack)
            }
        }

        while(stack.length!==0){
            let x = stack[stack.length-1]
            console.log(x);
            stack.pop()
        }
    }
}




let graph = new Graph()

graph.addVertex(1)
graph.addVertex(2)
graph.addVertex(3)
graph.addVertex(4)
graph.addVertex(5)

graph.addEdges(1,2)
graph.addEdges(3,2)
graph.addEdges(3,4)
graph.addEdges(4,5)


graph.showConnections()

graph.topological(5)