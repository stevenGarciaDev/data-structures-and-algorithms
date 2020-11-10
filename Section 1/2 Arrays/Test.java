package myproject;

public class Test {

  public static void main(String[] args) {
    Array numbers = new Array(3);
    numbers.insert(10);
    numbers.insert(20);
    numbers.insert(30);
    numbers.insert(40);
    numbers.print();
    numbers.removeAt(3);
    System.out.println(numbers.indexOf(10));
    // will return -1 if not found
  }
  
}
