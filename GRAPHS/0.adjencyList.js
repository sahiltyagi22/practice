class Graph{
    constructor(){
        this.list = []
    }

    addVertex(vertex){
        if(!this.list[vertex]){
            this.list[vertex]= []
        }
    }

    addEdges(vertex1 , vertex2){
        this.list[vertex1].push(vertex2)
        this.list[vertex2].push(vertex1)
    }

    showConnections(){
        Object.keys(this.list).forEach(vertex =>{
            console.log(`${vertex} ==> ${this.list[vertex].join(' , ')}`)
        })
    }
}


const graph = new Graph()
graph.addVertex(2)
graph.addVertex(3)
graph.addVertex(4)
graph.addVertex(5)
graph.addVertex(6)
graph.addVertex(7)

graph.addEdges(2 , 3)
graph.addEdges(2 , 4)
graph.addEdges(2 , 5)
graph.addEdges(5 , 3)
graph.addEdges(7 , 3)

graph.showConnections()