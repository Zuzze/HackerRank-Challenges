#read first line: number of elements in arrays X and W converted into int array
N = map(int, input().split())

#read second line: numbers to int list
# strip() returns a copy of the string in which whitespace chars have been stripped from the beginning and the end
X = list(map(int, input().strip().split(' ')))

#read third line: weights to int list
W = list(map(int, input().strip().split(' ')))

#weighted sum
#zip takes iterables one by one from both arrays and returns list of tuples
sum_X = sum([a*b for a,b in zip(X,W)])
#roun to one decimal -> round(num, 1)
print(round((sum_X/sum(W)),1))