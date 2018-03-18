import stistics as st

# read input and map it to sorted int list
num = int(input())
numbers = sorted(map(int, input().split()))
mid = len(numbers) // 2 # floor division

#slice operator slices list from start to end [start:end]
if (len(numbers) % 2 == 0):
    Q1 = st.median(numbers[:mid])
    Q3 = st.median(numbers[mid:])
else:
    Q1 = st.median(numbers[:mid])
    Q3 = st.median(numbers[mid+1:])

print(int(Q1))
print(int(st.median(numbers)))
print(int(Q3))