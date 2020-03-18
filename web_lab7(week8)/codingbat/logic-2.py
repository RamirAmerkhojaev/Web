def make_bricks(small, big, goal):
  if goal%5 <= small and goal-(big*5) <= small:
    return True
  return False

def no_teen_sum(a, b, c):
  return fix_teen(a) +fix_teen(b)+fix_teen(c)
      
      
def fix_teen(n):
  if n == 13 or n == 14 or n == 17 or n ==18 or n == 19: 
    return 0
  else:
    return n

def make_chocolate(small, big, goal):
  if (big*5) + small < goal:
    return -1
  elif big*5 > goal:
    if goal%5 > small:
      return -1
    else:
      return goal%5
  else:
    return goal-(big*5)

def lone_sum(a, b, c):
  if a == b and b == c and a == c:
    a = 0
    b = 0
    c = 0
  elif a == b:
    a = 0;
    b = 0;
  elif a == c:
    a = 0
    c = 0
  elif b == c:
    b = 0
    c = 0
  return a+b+c
    
def round_sum(a, b, c):
  return round10(a)+ round10(b)+round10(c)
  
def round10(n):
  if n%10 >= 5:
    n = n + (10 - (n%10))
  elif n%10 < 5:
    n = n - (n%10)
  return n

def lucky_sum(a, b, c):
  if a == 13:
    return 0
  elif b == 13:
    return a
  elif c == 13:
    return a+b
  return a+b+c

def close_far(a, b, c):
  if abs(b-a) <= 1 and abs(c-a)>=2 and abs(c-b)>= 2:
    return True
  elif abs(c-a) <= 1 and abs(b-a)>=2 and abs(b-c)>= 2:
    return True
  else:
    return False
