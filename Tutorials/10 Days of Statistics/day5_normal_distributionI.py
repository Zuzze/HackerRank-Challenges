import math

# Cumulative Normal Distribution
def CDF(x): 
    return 0.5*(1 + math.erf((x - mean) / (sd * math.sqrt(2))))

# Parameters
mean = 20
sd = 2 #standard deviation
h1High = 19.5
h2Low, h2High = 20, 22

print(round(CDF(h1High), 3))
print(round(CDF(h2High) - CDF(h2Low), 3))