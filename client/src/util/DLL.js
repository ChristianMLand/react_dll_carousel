class Node {
    constructor(obj) {
        this.value = obj
        this.next = null
        this.prev = null
    }
    getNext(amt=1){
        let output = []
        let runner = this
        for(let i = 0; i < amt; i++){
            output.push(runner.value)
            runner = runner.next
        }
        return output
    }
}

class DLL {
    constructor(arr) {
        this.head = new Node(arr[0])
        this.tail = this.head
        this.length = 1
        for (let i = 1; i < arr.length; i++) {
            let node = new Node(arr[i])
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
            this.length++
        }
        this.tail.next = this.head
        this.head.prev = this.tail
    }
}

export default DLL