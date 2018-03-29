#https://www.hackerrank.com/challenges/s10-mcq-7/problem
'''
The regression line of y on x is 3x + 4y + 8 = 0, and the regression line of x on y is 4x + 3y + 7. What is the value of the Pearson correlation coefficient?
Step 1: Rewrite the 2 lines in proper form

1) Format lines:
y = -2 + (-3/4) * x 
x = -7/4 + (-3/4) * y

=> b1 = -3/4 and b2 = -3/4

2) Pearson's Coefficient formula p * (std_x/std_y)

Let p = pearson coefficient
Let x_std = standard deviation of x
Let y_std = standard deviation of y

p = b1 (x_std / y_std)
p = b2 (y_std / x_std)

solve p: multiplying 2 equations together
p^2 = b1 * b2 ( x_std * y_std )/(y_std/x_std)
p^2 = (-3/4) * (-3/4) * 1
p^2 = 9/16 |sqrt
p = 3/4 or -3/4 (depending on correlation of x and y)

3) both original equations have negative slopes (-3/4)
=> x and y are negatively correlated by definition


4) Result: -3/4


'''

