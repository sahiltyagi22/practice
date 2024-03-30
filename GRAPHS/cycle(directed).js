class Graph{
    constructor(){
        this.list = {}
    }

    addVertex(vertex){
        if(!this.list[vertex]){
            this.list[vertex] = []
        }
    }

    addEdges(vertex1 , vertex2){
        this.list[vertex1].push(vertex2)
    }

    showConnections(){
        Object.keys(this.list).forEach(vertex =>{
            console.log(`${vertex} => ${this.list[vertex].join(',')}`);
        })
    }
    
    DFS(s, visited , activeSet){
        visited[s] = true
        activeSet[s] = true

        let adj = this.list

        for(let i=0; i<adj[s].length; i++){
            let u = adj[s][i]
            if(!visited[u]){
                if(this.DFS(u , visited , activeSet)) return true
            }else if(activeSet[u]) return true
        }
        activeSet[s] = false
        return false
    }

    isCycle(){
        let v = Object.entries(this.list).length
        let visited = new Array(v+1).fill(false)
        let activeSet = new Array(v+1).fill(false)

        for(let i=1; i<=v; i++){
            if(!visited[i]){
                if(this.DFS(i , visited , activeSet)) return true
            }
        }

        return false
    }
 
}


let graph = new Graph()

graph.addVertex(1)
graph.addVertex(2)
graph.addVertex(3)
graph.addVertex(4)
graph.addVertex(5)

graph.addEdges(1,2)
graph.addEdges(2,3)
graph.addEdges(3,4)
graph.addEdges(4,5)
// graph.addEdges(5,3)

graph.showConnections()

console.log(graph.isCycle());
