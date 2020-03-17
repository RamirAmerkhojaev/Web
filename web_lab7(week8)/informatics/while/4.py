import math

n = int(input())

ans = False
i = 0

while i < n:
	if math.pow(2, i) == n:
		ans = True
		print("YES")
		break
	else:
		ans = False
		i += 1

if ans == False:
	print("NO")