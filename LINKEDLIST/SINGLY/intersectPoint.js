class Node1{
    constructor(data){
        this.data=data
        this.next = null
    }
}


let head1 = new Node1(4)
temp11 = new Node1(1)
temp12 = new Node1(8)
temp13 = new Node1(4)
temp14 = new Node1(5)

head1.next = temp11 
temp11.next = temp12
temp12.next = temp13
temp13.next = temp14


class Node2{
    constructor(data){
        this.data=data
        this.next = null
    }
}

let head2 = new Node2(5)
temp21 = new Node2(6)
temp22 = new Node2(1)
temp23 = new Node2(8)
temp24 = new Node2(4)
temp25 = new Node2(5)


head2.next = temp21
temp21.next = temp22
temp22.next = temp23
temp23.next = temp24
temp24.next = temp25


function intersectionPoint(head1,head2){
if(head1 === null || head2===null) return -1 

let point1 = head1.next
let point2 = head2.next

while(point1 && point2){
    if(point1.data === point2.data) return point1.data 

    if(point1.data < point2.data){
        point1 = point1.next
    }else if(point2.data < point1.data){
        point2 = point2.next
    }else{
        point1 = point1.next
        point2 = point2.next
    }
}

}

let result = intersectionPoint(head1 , head2)
console.log(result);