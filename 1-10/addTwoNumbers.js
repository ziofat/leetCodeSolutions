/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var lr = new ListNode(0);
	var lc = lr;
	while(l1 || l2) {
		if (!l1) {
			l1 = new ListNode(0);
		}
		if (!l2) {
			l2 = new ListNode(0);
		}
		if (!lc.next) {
			lc.next = new ListNode(0);
		}
		lc = lc.next;
		lc.val += l1.val + l2.val;
		if(lc.val >= 10){
			lc.val-= 10;
			lc.next = new ListNode(1);
		}
		l1 = l1.next;
		l2 = l2.next;
	}
	return lr.next;
};