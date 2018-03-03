import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;


class Difference {
  	private int[] elements;
  	public int maximumDifference;
    
    Difference(int[] elements){
        this.elements = elements;
    }

    void computeDifference () {
        //to get O(n), go through array once saving min and max value in array and calculating their difference
        //modified to work also for negative elements in array
        int min = this.elements[0];
        int max = min;
        
        for(int i = 0; i < this.elements.length; i++){
            if(this.elements[i] < min){ 
                min = this.elements[i];
            } else if(this.elements[i] > max){
                max = this.elements[i];
            }
        }
        this.maximumDifference = Math.abs(max - min);
    }
}

public class Solution {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] a = new int[n];
        for (int i = 0; i < n; i++) {
            a[i] = sc.nextInt();
        }
        sc.close();

        Difference difference = new Difference(a);

        difference.computeDifference();

        System.out.print(difference.maximumDifference);
    }
}