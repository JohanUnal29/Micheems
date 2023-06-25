export class Queue {
  constructor() {
    this.queue = [];
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  enqueue(value) {
    this.queue.push(value);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    return this.queue.shift();
  }

  size() {
    return this.queue.length;
  }

  map(callback) {
    return this.queue.map(callback);
  }
}


