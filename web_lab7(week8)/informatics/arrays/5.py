n = int(input())

a = [int(i) for i in input().split()]

cnt = 0
i = 1

while i < len(a):
	if (a[i] > 0 and a[i-1] > 0) or (a[i] < 0 and a[i-1] < 0):
		cnt += 1
	i += 1

if cnt != 0 :
	print("YES")
else:
	print("NO")