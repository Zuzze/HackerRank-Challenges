'''
The ratio of boys to girls for babies born in Russia is . If there is  child born per birth, what proportion of Russian families with exactly  children will have at least  boys?

--> Use binomial distribution that consists of repeated independent trials where the outcome of each trial is either success (s) or failure (f). 

equation:
b(x, n, p) = (nCx) * p^x * q^(n-x) = (n! / x!(n-k)!) * p^x * q^(n-x)
where n = number of trials, x=number of successes, p =probability of success of 1 trial, q=probability of failure of one trial
'''
import math

#n cross x helper
def nCx(n, x):
   return math.factorial(n)/(math.factorial(x)*(math.factorial(n-x)))

#binomial
def binomial(x, n, p):
    return nCx(n, x) * p**x * (1-p)**(n-x)

#main
ratio = [1.09, 1]
n = 6
xArr = [3, 4, 5, 6]#at leas 3 boys means sum of exactly 3, 4, 5 or 6 boys
p = ratio[0]/(ratio[0]+ratio[1])
P = 0
for x in xArr:
    P += binomial(x, n, p)
    
print(round(P, 3))