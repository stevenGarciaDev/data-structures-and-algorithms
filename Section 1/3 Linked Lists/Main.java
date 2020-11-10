public class Test {
  public static void main(String[] args) {
    LinkedList myList = new LinkedList();
    myList.addFirst(10);
    myList.addLast(20);

    int[] array = myList.toArray();
    System.out.println(array.toString());
  }
}
