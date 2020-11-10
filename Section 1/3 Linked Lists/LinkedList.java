public class LinkedList {
  private Node first;
  private Node last;
  private int size;

  public void addFirst(int n) {
    Node node = new Node(n);
    if (this.first == null) {
      first = last = node;
  } else {
      node.next = first;
      this.first = node;
    }
    this.size++;
  }

  public void addLast(int n) {
    Node node = new Node(n);
    if (this.first == null) {
      this.first = this.last = node;
    } else {
      last.next = node;
      this.last = node;
    }
    this.size++;
  }

  public void deleteFirst() throws Exception {
    if (this.first == null) {
      throw new Exception();
    } else if (this.first.next == null) {
        this.first = this.last = null;
    } else {
      Node second = this.first.next;
      first.next = null;
      this.first = second;
    }
    this.size--;
  }

  public void deleteLast() throws Exception {
    if (this.first == null) {
      throw new Exception();
    } else if (this.first == this.last) {
      this.first = this.last = null;
    } else {
      Node current = this.first;
      while (current != null && current != this.last) {
        current = current.next;
      }
      current.next = null;
      this.last = current;
    }
    this.size--;
  }

  public boolean contains(int n) {
    Node current = this.first;
    while (current != null) {
      if (current.value == n) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  public int indexOf(int n) {
    int index = 0;
    Node current = first;
    while (current != null) {
      if (current.value == n) return index;
      current = current.next;
      index++;
    }
    return -1;
  }

  public int[] toArray() {
    int[] array = new int[this.size];
    Node current = this.first;
    int index = 0;
    while (current != null) {
      array[index] = current.value;
      index++;
      current = current.next;
    }
    return array;
  }

  private class Node {
    public int value;
    public Node next;

    public Node(int value) {
      this.value = value;
    }
  }

}
