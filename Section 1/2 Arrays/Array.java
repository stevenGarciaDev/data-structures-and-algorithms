package myproject;

public class Array {
  private int[] arr;
  private int openSlot;


  public Array(int length) {
    this.arr = new int[length];
    this.openSlot = 0;
  }

  public void insert(int num) {
    if (this.arr.length <= openSlot) {
      // must allocate a new array and copy over contents
      int[] updatedArr = new int[this.arr.length * 2];
      for (int i = 0; i < this.arr.length; i++) {
        updatedArr[i] = this.arr[i];
      }
      this.arr = updatedArr;
    }
    this.arr[openSlot] = num;
    openSlot += 1;
  }

  public void removeAt(int index) {
    if (openSlot == index) {
      this.arr[index] = -1;
    } else {
      this.arr[index] = -1;
      for (int n = openSlot - 1; n > index; n--) {
        this.arr[n - 1] = this.arr[n];
      }
    }
    openSlot -= 1;
  }

  public int indexOf(int num) {
    for (int i = 0; i < this.arr.length; i++) {
      if (this.arr[i] == num) {
        return i;
      }
    }
    return -1;
  }

  

  public void print() {
    for (int i = 0; i < openSlot; i++) {
      System.out.println(this.arr[i]);
    }
  }
}
