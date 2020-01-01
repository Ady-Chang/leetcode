# Convert Binary Number in a Linked List to Integer

1290. Convert Binary Number in a Linked List to Integer



Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.

Return the decimal value of the number in the linked list.

 

Example 1:

![example_1.png](./example_1.png)

Input: head = [1,0,1]
Output: 5
Explanation: (101) in base 2 = (5) in base 10
Example 2:

Input: head = [0]
Output: 0
Example 3:

Input: head = [1]
Output: 1
Example 4:

Input: head = [1,0,0,1,0,0,1,1,1,0,0,0,0,0,0]
Output: 18880
Example 5:

Input: head = [0,0]
Output: 0
 

Constraints:

The Linked List is not empty.
Number of nodes will not exceed 30.
Each node's value is either 0 or 1.


/*

源頭為 singly linked-list，但是要把 linked-list 的順序與 binary 解析順序相反，
所以可以先把 linked-list 的 value push 到一個 array stack，
這樣剛好順序反置，符合 binary 從右邊往左邊解析的順序，
然後再每個 element 的 index 來做 2 base power，做總數疊加即得到答案

*/

## submission solution

```javascript

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */



var getDecimalValue = function(head) {
    let total = 0;
    let count = 0;
    let tempArr = [];
    
    while(head){
        tempArr.push(head.val);
        head = head.next;
    }
    
    const len = tempArr.length;
    for(let i=len-1 ; i>=0 ; i--){
      if(tempArr[i]){
          total += Math.pow(2,count);
      }
      count++;
    }
    return total;
};

```

![pic.png](./pic.png)