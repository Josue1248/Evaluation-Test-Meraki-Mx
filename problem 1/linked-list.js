function Node(data) { 
    this.node = data; 
    this.next = null; 
}

function LinkedList(list) { 
    this.head = list || null
} 

LinkedList.prototype.insert = function(data) { 
      if (this.head === null) 
          this.head = new Node(data); 

      else { 

          let list = this.head; 
          while (list.next) { 
              list = list.next; 
          } 

          list.next = new Node(data) 
      } 
} 


LinkedList.prototype.iterate = function() { 
      if (this.head === null) 
          return null; 

      let list = this.head; 

      while (list) { 
          document.write(list.node)  
          if (list.next) 
              document.write(' -> ') 
          list = list.next 
      } 
} 

LinkedList.prototype.mergeSort = function(list) { 

      if (list.next === null) 
          return list; 

      let count = 0; 
      let countList = list 
      let leftPart = list; 
      let leftPointer = list; 
      let rightPart = null;

      while (countList.next !== null) { 
          count++; 
          countList = countList.next; 
      } 

      let mid = Math.floor(count / 2) 
      let count2 = 0; 

      while (count2 < mid) { 
          count2++; 
          leftPointer = leftPointer.next; 
      } 

      rightPart = new LinkedList(leftPointer.next); 
      leftPointer.next = null; 

      return this._mergeSort(this.mergeSort(leftPart), 
                             this.mergeSort(rightPart.head)) 
} 

LinkedList.prototype._mergeSort = function(left, right) { 
      let result = new LinkedList() 

      let resultPointer = result.head; 
      let pointerLeft = left; 
      let pointerRight = right; 

      while (pointerLeft && pointerRight) { 
          let tempNode = null; 

          if (pointerLeft.node > pointerRight.node) { 
              tempNode = pointerRight.node 
              pointerRight = pointerRight.next; 
          } 
          else { 
              tempNode = pointerLeft.node 
              pointerLeft = pointerLeft.next; 
          } 

          if (result.head == null) { 
              result.head = new Node(tempNode) 
              resultPointer = result.head 
          } 
          else { 
              resultPointer.next = new Node(tempNode) 
              resultPointer = resultPointer.next 
          } 
      } 

      resultPointer.next = pointerLeft; 
      while (resultPointer.next) 
          resultPointer = resultPointer.next 

          resultPointer.next = pointerRight 

       return result.head; 
} 

let listOne = new LinkedList();
let listTwo = new LinkedList();

listOne.insert(10)
listOne.insert(45)
listOne.insert(4)
listOne.insert(23)
listOne.insert(1)

listTwo.insert(12)
listTwo.insert(43)
listTwo.insert(2)
listTwo.insert(45)
listTwo.insert(12)

listOne.head = LinkedList.prototype.mergeSort(listOne.head)
listTwo.head = LinkedList.prototype.mergeSort(listTwo.head)

document.write('<p>List one</p>');
listOne.iterate()

document.write('<br><p>List two</p>')
listTwo.iterate()

let mergedList = new LinkedList();
mergedList.head = LinkedList.prototype._mergeSort(listOne.head, listTwo.head)

document.write('<br><p>Merged lists</p>')
mergedList.iterate()
console.log(mergedList)