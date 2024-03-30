class Solution {
    isPalindrome(head) {
        if (head === null || head.next === null) return true; 
        
        let slow = head;
        let fast = head;
        
        while (fast.next !== null && fast.next.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        
        let secondHalfHead = this.reverse(slow.next);
        
        let firstHalf = head;
        let secondHalf = secondHalfHead;
        let isPalindrome = true;
        
        while (secondHalf !== null) {
            if (firstHalf.data !== secondHalf.data) {
                isPalindrome = false;
                break;
            }
            firstHalf = firstHalf.next;
            secondHalf = secondHalf.next;
        }
        
        // Restore the original second half of the linked list
        slow.next = this.reverse(secondHalfHead);
        
        return isPalindrome;
    }
    
    // Function to reverse a linked list
    reverse(head) {
        let prev = null;
        let curr = head;
        
        while (curr !== null) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        
        return prev;
    }
}
