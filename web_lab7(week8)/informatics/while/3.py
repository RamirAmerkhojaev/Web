import math

n = int(input())

i = 0

while math.pow(2, i) <= n:
	print(int(math.pow(2, i)))
	i += 1