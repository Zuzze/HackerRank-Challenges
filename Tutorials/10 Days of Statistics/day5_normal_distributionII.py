import math

# Cumulative Normal Distribution
def CDF(x): 
    return 0.5*(1 + math.erf((x - mean) / (sd * math.sqrt(2))))

# Parameters
mean, sd = 70, 10
var1 = 80
var2 = 60

# Multiply by 100 to get %
# Subtracting from 100 gives the upper part
print(round(100 - CDF(var1) * 100,2))
print(round(100 - CDF(var2) * 100,2)) 
print(round(CDF(var2) * 100,2))