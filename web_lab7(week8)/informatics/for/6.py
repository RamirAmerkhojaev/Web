import math

x = int(input())
cnt = 0;

for i in range(1, int(math.sqrt(x))):
	if x % i == 0:
		cnt += 1
 
ans = cnt*2

if math.sqrt(x) % 1 == 0:
	ans += 1;

print(ans)