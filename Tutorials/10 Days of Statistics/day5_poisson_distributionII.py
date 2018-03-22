#https://www.hackerrank.com/challenges/s10-poisson-distribution-2/problem

# Input
meanX = 0.88
meanY = 1.55

# Cost ( E[X^2] = mean+mean^2)
CostX = 160 + 40*(meanX + meanX**2)
CostY = 128 + 40*(meanY + meanY**2)

print(round(CostX, 3))
print(round(CostY, 3))