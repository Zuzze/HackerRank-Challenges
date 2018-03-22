from math import factorial #!
from math import exp #neper's number e

# Poisson distribution
def Poisson(k, l):
    return (l**k * exp(-l))/(factorial(k))

# Input
average = 2.5
variable = 5

# Probability
print(round(Poisson(variable, average), 3))