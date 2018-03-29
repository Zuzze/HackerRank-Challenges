#https://www.hackerrank.com/challenges/s10-pearson-correlation-coefficient/problem

import statistics as st

n=int(input())
x=tuple(map(float,input().split()))
y=tuple(map(float,input().split()))

def rho(): 
    #sigma = sum((xi -ux)(yi -uy))
    sigma = sum([a*b for a,b in zip([i-st.mean(x) for i in x],[i-st.mean(y) for i in y])])
    return  sigma / (n * st.pstdev(x) * st.pstdev(y))   

print(round(rho(), 3))