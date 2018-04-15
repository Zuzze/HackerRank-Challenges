#https://www.hackerrank.com/challenges/s10-least-square-regression-line/problem

'''
If a student scored an  on the Math aptitude test, what grade would we expect them to achieve in Statistics? Determine the equation of the best-fit line using the least squares method, then compute and print the value of  when.

Linear Regression Formula: Y = a + bX
where b = (n(sigma(xi*xy)) - sigma(xi)*sigma(yi)) / (n * sigma(xi**2) - sigma(xi)**2)
a = y_mean - b * x_mean
'''

def mean(numbers):
    return sum(numbers)/len(numbers)*1.0

def a(meanX, meanY, b):
    return meanY - b * meanX * 1.0

def b(X, Y, n):
    #denominator and numerator
    x_squared = sum([X[i]*X[i] for i in range(5)])
    xy = sum([X[i]*Y[i] for i in range(5)])
    b = 1.0 * (n * xy - sum(X)*sum(Y))/(n * x_squared - sum(X)**2)
    return b

# X and Y
X = [95, 85, 80, 70, 60]
Y = [85, 95, 70, 65, 70]

n = 5
meanX = mean(X)
meanY = mean(Y)
b = b(X, Y, n)
a = a(meanX, meanY, b)
var = 80.0

result = a + b * var
print(round(result,3))