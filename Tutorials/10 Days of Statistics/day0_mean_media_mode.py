n = int(input())

#mean: 
numbers = sorted(int(val) for val in input().split())
mean = sum(numbers) / n
print(mean)

#median: if odd length -> mode = middle, if even length -> mode = avg of two middle numbers
middle, is_odd_length = divmod(n, 2)

if is_odd_length:
    median = numbers[middle]
else:
    median = (numbers[middle - 1] + numbers[middle]) / 2
print(median)
    
#mode: the number with highest count, if many -> the lowest value
maxFreq = 0
mode = 0
counts = {num: numbers.count(num) for num in set(numbers)}
for val, count in counts.items():
    if count > maxFreq:
        mode = val
        maxFreq = count
        
    elif count == maxFreq and val < mode:
        mode = val
print(mode)