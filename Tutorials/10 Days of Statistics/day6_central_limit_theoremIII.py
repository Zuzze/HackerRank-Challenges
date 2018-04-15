import math

n = 100
mean = 500
sd = 80
z = 1.96

# z = which probability you land in an interval of z standard deviations away from the mean
#margi of error formula: http://www.dummies.com/education/math/statistics/using-the-formula-for-margin-of-error-when-estimating-a-population-mean/
marginOfError = z * (sd / math.sqrt(n))
print(mean- marginOfError)
print(mean + marginOfError)