import java.io.*;
import java.util.*;

interface AdvancedArithmetic{
   int divisorSum(int n);
}

class Calculator implements AdvancedArithmetic {
  
  public int divisorSum(int n) {
    //returns sum of divisors of n
      
    // each number is divisible by 1 and itself (in case of 1 only one divisor)
      int divisorSum = 1;
      if(n > 1){
           divisorSum = 1 + n;
      }
      
    //largest factor before itself is n / 2
    //faster option would be to go through list of prime numbers
    for (int i = 2; i <= n / 2; i++) {
        if (n % i == 0) {
            divisorSum += i;
        }
    }
        return divisorSum;
    }
}
    
 class Solution {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();
        scan.close();
        
      	AdvancedArithmetic myCalculator = new Calculator(); 
        int sum = myCalculator.divisorSum(n);
        System.out.println("I implemented: " + myCalculator.getClass().getInterfaces()[0].getName() );
        System.out.println(sum);
    }
}