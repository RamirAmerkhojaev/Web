def function(x,y):
	if x == 1 and y == 1:
		return 0
	elif x == 0 and y == 0:
		return 0
	else:
		return 1

x, y = map(float, input().split())
print(function(x,y))