export default class Stack<T> {
    public length: number;
    private head?: ListNode<T>;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        const node = { value: item } as ListNode<T>;
        this.length++;
        if (!this.head) {
            this.head = node;
            return;
        }

        // imagine a linked list reversed (o <= o <= o)
        // node.prev is the new node added at the very right side
        // pointing to the soon to be old head
        node.prev = this.head;

        // point head at new node (head)
        this.head = node;
    }
    pop(): T | undefined {
        this.length = Math.max(0, this.length - 1);
        if (this.length === 0) {
            const head = this.head;
            this.head = undefined;
            return head?.value;
        }

        const head = this.head as ListNode<T>;
        this.head = head.prev;

        return head.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
