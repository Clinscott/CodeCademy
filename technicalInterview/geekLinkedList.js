/*
description:	Linked List creation from geeks for geeks.
credit:		    GeeksforGeeks.
link:			https://www.geeksforgeeks.org/implementation-linkedlist-javascript/
further:        Comments before methods provided by site. Comments in methods adapted for my better understanding.
*/

class Node{
    constructor(element)
    {
        this.element = element;
        this.next = null
    }
}

class linkedlist{
    constructor()
    {
        this.head = null;
        this.size = 0;
    }
/* 
    add(element) – It adds an element at the end of the list. 
    add element at tail
    If the list is empty then add an element and it will be head
    If the list is not empty then iterate to the end of the list and add an element at the end of the list
 */

    add(element){
        //create a new node
        const node = new Node(element);
        //create variable to store new node
        let current;
        //if list empty at at head of list
        if(this.head === null){
            this.head = node;
        }else{
            //if list not empty add at end
            current = this.head;
            //get to end of list while current is true
            while (current.next) {
                current = current.next;
            }
            //add the node
            current.next = node;
        }
        //increase linkedList length
        this.size++
    }

/* 
    InsertAt(element, index) – It inserts an element at the given index in a list.
    if the index is zero we add an element at the front of the list and make it head
    If the index is the last position of the list we append the element at the end of the list
    if the index is between 0 or size – 1 we iterate over to the index and add an element at that index
     */
    insertAt(element, index){
        //look for index number
        if(index < 0 || index > this.size){
            throw new Error('Insert valid index number')
        }else{
            //create a new node
            const node = new Node(element);
            let curr,
            prev;
            curr = this.head;

            //if element first in index
            if(index == 0){
                node.next = this.head;
                this.head = node;
            }else{
                curr = this.head;
                let it = 0;

                //search for index number
                while (it < index) {
                    it++
                    prev = curr;
                    curr = curr.next;
                }

                //add element
                node.next = curr;
                prev.next = node;
            }
            //increase linkedList length
            this.size++
        }
    }

    /*
    removeFrom
    It removes and returns an element from the list from the specified index  
    If the index is 0 then we remove the head and make the next node head of the list
    if the index is size – 1 then we remove the last element from the list and make prev the last element
    if it’s in between 0 to size – 1 we remove the element by using prev and the current node 
    */
    removeFrom(index){
        //remove from specified index number
        if (index < 0 || index > this.size) {
            throw new Error('Insert valid index number')
        }else{
            let curr,
            prev,
            it = 0;
            curr = this.head;
            prev = curr;

            //destroy if first element
            if (index === 0) {
                this.head = curr.next;
            }else{
                //get to specified index
                while (it < index) {
                    it++
                    prev = curr;
                    curr = curr.next;
                }
                //remove element at specified index
                prev.next = curr.next
            }
            //decrease size of linkedList
            this.size--;
            //return the removed element
            return curr.element;
        }
    }
/* 
    removeElement(element) – This method removes element from the list. 
    It returns the removed element, or if it’s not found it returns -1.
    The above method is just a modification of removeFrom(index),
    as it searches for an element and removes it, rather than removing it from a specified location
 */
    removeElement(element){
        let current = this.head;
        let prev = null;

        //iterate over the list
        while (current !== null) {
            //compare element with current
            if(current.element === element){
                //if previous link is null make next link head
                if (prev === null) {
                    this.head = current.next
                }else{
                    //else set previous nodes next pointer to deleted nodes next pointer
                    prev.next = current.next
                }
                this.size--;
                return current.element;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }

    /* making some helper methods for single linked list */

    /* 
    indexOf(element) – it returns the index of a given element if the element is in the list.
    In this method, we iterate over the list to find the index of an element. 
    If it is not present in the list it returns -1 instead.
    */




}