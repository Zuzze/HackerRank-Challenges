'''
The probability that a machine produces a defective product is 1/3. What is the probability that the 1st defect is found during the 5th inspection?

--> geometric distribution g(n, p) = q^(n-1) * p
where n = number of indemendent bernoulli trials, p = probability of success, probability of failure
'''
def geometric_distribution(n, p):
    #example case
    #P(first 4 are successful and fifth not) = 0.66 * 0.66 * 0.66 * 0.66 * 0.33 
    #--> 0.66^4 * 0.33 = (1-p)^(n-1) * p
    q = 1-p
    return q**(n-1) * p 

n = 5
p = 1/3

#probability that first defect is found on fifth inspection
print(round(geometric_distribution(n, p), 3))