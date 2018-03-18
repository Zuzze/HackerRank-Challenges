import statistics as st

#standard deviation with statistics
n = int(input())
data = list(map(int, input().split()))
print(round(st.pstdev(data), 1))