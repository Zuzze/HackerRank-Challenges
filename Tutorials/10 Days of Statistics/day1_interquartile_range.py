import statistics as st

#read input and map it into int lists
n = int(input())
data = list(map(int, input().split()))
freq = list(map(int, input().split()))

#add all elements to one list
s = []
for i in range(n):
    s += [data[i]] * freq[i]
s.sort()

#number of items in the input list
N = sum(freq)

# ':' is slice operator [start:end] (end excluded)
# s[:N] is the whole list from beginning to N
# s[:N//2] list items till median
# s[N//2 + 1:] list items after median (-1 if n odd length)
if n%2 != 0:
    q1 = st.median(s[:N//2])
    q3 = st.median(s[N//2+1:])
else:
    q1 = st.median(s[:N//2])
    q3 = st.median(s[N//2:])

# round(num, decimalCount)
ir = round(float(q3-q1), 1)
print(ir)