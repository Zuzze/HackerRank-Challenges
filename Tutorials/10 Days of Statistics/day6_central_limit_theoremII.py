import math

# Cumulative Normal Distribution
def CDF(x, mean, sd): 
    return 0.5*(1 + math.erf((x - mean) / (sd * math.sqrt(2))))


# Central Limit Theorem (CLT) states that for a large enough sample the distribution mean will approach normal distribution. Area of standard normal distribution corresponds the probability (whole area =1) 
n = 100
mean = 2.4
sd = 2
var = 250

normalized_mean = n * mean
normalized_sd = math.sqrt(n) * sd
Z = (var - normalized_mean) / normalized_sd

#CDF(var, normalized_mean, normalized_sd) = CDF(Z, 0, 1)
print(round(CDF(Z, 0, 1), 4))