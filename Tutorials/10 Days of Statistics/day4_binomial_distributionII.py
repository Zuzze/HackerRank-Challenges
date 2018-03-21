'''
A manufacturer of metal pistons finds that, on average,  of the pistons they manufacture are rejected because they are incorrectly sized. What is the probability that a batch of  pistons will contain:

1) No more than 2 rejects?
2) At least 2 rejects?
'''
import math

#n cross x helper
def nCx(n, x):
   return math.factorial(n)/(math.factorial(x)*(math.factorial(n-x)))

#binomial
def binomial(x, n, p):
    return nCx(n, x) * p**x * (1-p)**(n-x)

#main
percentageOfRejected = 12
n = 10
p = percentageOfRejected/100

P1 = 0
#at least 2 rejects = exactly 2,3,4,5,6,7,8,9 or 10 rejects out of 10 pistons
P1xArr = [2, 3, 4, 5, 6, 7, 8, 9, 10]
for x in P1xArr:
    P1 += binomial(x, n, p)

P2 = 0
#no more than 2 rejects = 0, 1 or 2 rejects
P2xArr = [0, 1, 2]
for x in P2xArr:
    P2 += binomial(x, n, p)

print(round(P2, 3))
print(round(P1, 3))

