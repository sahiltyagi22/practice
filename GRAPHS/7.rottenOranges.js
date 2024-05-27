// rotten oranges 

function rottenOranges(grid){
    if(grid.length == 0) return 0 

    let n = grid.length 
    let m = grid[0].length 

    let totalOranges = 0 
    let rottenOranges = 0 

    let time = 0 

    let queue = []

    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            if(grid[i][j] == 2) queue.push([i,j])
            if(grid[i][j] != 0) totalOranges++
        }
    }

    let directions = [[0,1], [0,-1], [1,0], [-1,0]]

    while(queue.length >0){
        let k = queue.length 
        rottenOranges += k

        while(k-- > 0){
            let [x,y] = queue.shift()

            for([dx,dy] of directions){
                let nx = x+dx 
                let ny = y+dy

                if(nx<0 || ny<0 || nx >=n || ny>=m || grid[nx][ny]!= 1) continue 

                grid[nx][ny] = 2 
                queue.push([nx,ny])
            }
        }

        if(queue.length >0) time++
    }

    return totalOranges === rottenOranges ? time:-1
}

function main(){
    let grid =[ [ 2, 1, 0, 2, 1 ],
    [ 1, 0, 1, 2, 1 ],
    [ 1, 0, 0, 2, 1 ] ];

    let result = rottenOranges(grid)
    console.log(result)
}
main()