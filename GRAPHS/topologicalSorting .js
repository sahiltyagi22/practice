//  In this we have used kahn algo

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

    topological(V){
        let in_degree = new Array(V+1).fill(0)
        let adj = this.list

        for(let i=1; i<=V; i++){
            for(let j=0; j<adj[i].length; j++){
                let x = adj[i][j]

                in_degree[x]++
            }
        }

        

        let topoArray = []

        for(let i=1; i<=in_degree.length; i++){
            if(in_degree[i]=== 0){
                topoArray.push(i)
            }
        }

        while(topoArray.length>0){
            let x = topoArray.shift()
            console.log(x);

            for(let i=0; i<adj[x].length; i++){
                let y = adj[x][i]

                in_degree[y]--

                if(in_degree[y]=== 0){
                    topoArray.push(y)
                }
            }
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

console.log(graph.topological(5));

