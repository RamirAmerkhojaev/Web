import math

n = int(input())

i = 0

while i < n:
	if math.pow(2, i) >= n:
		print(i)
		break
	else:
		i += 1 
