n = int(input())

a = [int(i) for i in input().split()]

i = len(a)-1

while i >= 0:
	print(a[i])
	i -= 1 