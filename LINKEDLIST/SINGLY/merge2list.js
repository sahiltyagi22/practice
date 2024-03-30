// merge 2 sorted list

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let head1 = new Node(10);
let temp1 = new Node(20);
let temp2 = new Node(30);

let head2 = new Node(10);
let temp11 = new Node(40);
let temp22 = new Node(50);

function merge2list(head1, head2) {
 

    let list1 = head1;
    let list2 = head2;

    const dummyNode = new Node(0);
    let curr = dummyNode;
  
    while (list1 && list2) {
      if (list1.val < list2.val) {
        curr.next = list1;
        list1 = list1.next;
      } else {
        curr.next = list2;
        list2 = list2.next;
      }
      curr = curr.next;
    }

    // After the loop, if any list remains, append it to the merged list
    if (list1 !== null) {
        curr.next = list1;
    }

    if (list2 !== null) {
        curr.next = list2;
    }

    return dummyNode.next;
}


function print(head) {
    if (head === null) {
        return;
    }

    console.log(head.data);
    print(head.next);
}

let result = merge2list(head1, head2);
print(result);








