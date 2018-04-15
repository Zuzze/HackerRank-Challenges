#https://www.hackerrank.com/challenges/s10-multiple-linear-regression/problem

#import data
import numpy as np
m,n = [int(i) for i in input().strip().split(' ')]
X = [] # [[0.18, 0.89], [1.0, 0.26]...]
Y = [] # [[109.85], [155.72]]
for i in range(n):
    data = input().strip().split(' ')
    X.append(data[:m])
    Y.append(data[m:])

q = int(input().strip())
X_new = [] # [[0.49, 0.18], [0.57, 0.83]...]
for x in range(q):
    X_new.append(input().strip().split(' '))

#format to matrices
X = np.array(X,float)
Y = np.array(Y,float)
X_new = np.array(X_new,float)

#center
X_R = X-np.mean(X,axis=0)
Y_R = Y-np.mean(Y)

#calculate beta (np.dot(X, Y) = X x Y)
beta = np.dot(np.linalg.inv(np.dot(X_R.T,X_R)),np.dot(X_R.T,Y_R))

#predict
X_new_R = X_new-np.mean(X,axis=0)
Y_new_R = np.dot(X_new_R,beta)
Y_new = Y_new_R + np.mean(Y)

#print
for i in Y_new:
    print(round(float(i),2))