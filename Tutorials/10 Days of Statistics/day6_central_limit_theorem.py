import math

# Cumulative Normal Distribution
def CDF(x, mean, sd): 
    return 0.5*(1 + math.erf((x - mean) / (sd * math.sqrt(2))))


# Central Limit Theorem (CLT) states that for a large enough sample the distribution mean will approach normal distribution.
n = 49
mean = 205
sd = 15
maxWeight = 9800

normalized_mean = n * mean
normalized_sd = math.sqrt(n) * sd
Z = (maxWeight - normalized_mean) / normalized_sd

print(round(CDF(Z, 0, 1), 4))