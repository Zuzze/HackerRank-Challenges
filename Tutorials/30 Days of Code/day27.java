import java.io.*;
import java.util.*;

public class Solution{
    
    Solution(int n, int k, int[] a){
        //number of students, k cancellation threshold, a array of arrival times of students
        System.out.println(n + " " + k);
        for(int i = 0; i < n; i++){
            System.out.print(a[i] + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        int testCases = 5; 

        //print example test cases (3 < n < 200, 1 < k < n)
        System.out.println(testCases);
        new Solution(4, 3, new int[] {-1, 0, 4, 2});
        new Solution(5, 2, new int[] {0, -1, 2, 1, 4});
        new Solution(7, 7, new int[] {2, 0, -1, 1 , 1 , 1, 1});
        new Solution(10, 5, new int[] {-1, 0, 4, -1, 5, 1, 1, 1, 1, 1});
        new Solution(6, 1, new int[] {0, -1, 1, 4, 5, 6});
    }
}