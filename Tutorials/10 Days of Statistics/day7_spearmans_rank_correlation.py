#https://www.hackerrank.com/challenges/s10-spearman-rank-correlation-coefficient/problem

#sum diˆ2 = (rx-ry)ˆ2
def spearman_rank_correlation_coefficient(n, X, Y):
    XI=list(X)
    YI=list(Y)
    XI.sort()
    YI.sort()

    differences = ([(XI.index(X[i])-YI.index(Y[i]))**2 for i in range(size)])
    return 1 - 6 * sum(differences) / (n*(n**2-1))

size = int(input().strip())
X = [float(e) for e in input().strip().split(" ")]
Y = [float(e) for e in input().strip().split(" ")]
print(round(spearman_rank_correlation_coefficient(size, X, Y), 3))