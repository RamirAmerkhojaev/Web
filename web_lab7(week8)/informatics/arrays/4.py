n = int(input())

a = [int(i) for i in input().split()]

cnt = 0
i = 1

while i < len(a):
	if a[i] > a[i-1]:
		cnt += 1
	i += 1

print(cnt)