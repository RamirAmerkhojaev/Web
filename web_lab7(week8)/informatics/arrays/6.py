n = int(input())

a = [int(i) for i in input().split()]

cnt = 0
i = 1

while i < len(a)-1:
	if (a[i-1] < a[i]) and (a[i+1] < a[i]):
		cnt += 1
	i += 1


print(cnt)