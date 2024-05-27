const matrix =  [
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 0, 1, 1, 0],
    [0, 0, 0, 0, 1]
];

function toList(matrix) {
    let list = {};

    for (let i = 0; i < matrix.length; i++) {
        list[i] = [];
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 1 && i !== j) {
                list[i].push(j);
            }
        }
    }

    return list;
}

// BFS to traverse the graph
function bfs(node, list, visited) {
    let queue = [node];
    visited[node] = true;

    while (queue.length > 0) {
        let current = queue.shift();

        for (let neighbor of list[current]) {
            if (!visited[neighbor]) {
                queue.push(neighbor);
                visited[neighbor] = true;
            }
        }
    }
}

// Count the number of provinces
function noOfProvinces(graph) {
    if (graph.length == 0) {
        return 0;
    }

    let list = toList(graph);
    let visited = new Array(graph.length).fill(false);
    let provinces = 0;

    for (let i = 0; i < visited.length; i++) {
        if (!visited[i]) {
            provinces++;
            bfs(i, list, visited);
        }
    }
    return provinces;
}

function main() {
    let result = noOfProvinces(matrix);
    console.log(result); // Should output 3 for this matrix
}

main();
