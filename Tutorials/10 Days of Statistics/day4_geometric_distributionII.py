'''
The probability that a machine produces a defective product is 1/3. What is the probability that the 1st defect is found during the first 5th inspections?

A = 1st defect found during first 5th inspections
A' = no defect found during first 5th inspections, first 5 are ok
P(A') = 0.66 * 0.66 * 0.66 * 0.66 * 0.66 = 0.66^5
--> P(A) = 1 - P(A')
'''

def allProductsOK(numberOfProducts, pOfOKProduct):
    return pOfOKProduct**numberOfProducts

n = 5
p = 1/3 #defect product
q = 1-p #OK product

#probability that first defect is not found during 5 inspections
Pc = allProductsOK(n, q)
#probability that first defect is found during 5 inspections
P = 1 - Pc
print(round(P, 3))