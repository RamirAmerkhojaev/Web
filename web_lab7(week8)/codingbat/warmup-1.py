def sleep_in(weekday, vacation):
  if weekday == True and vacation == False:
    return False
  elif weekday == False and vacation == True:
    return True 
  elif weekday == False and vacation == False:
    return True
  else:
    return True

def diff21(n):
  if n < 21:
    return 21 - n
  else:
    return (n - 21)*2

def near_hundred(n):
  if n >= 90 and n <= 110:
    return True
  elif n >= 190 and n <= 210:
    return True
  else: 
    return False

def missing_char(str, n):
  front = str[:n] 
  back = str[n+1:]
  return front + back

def monkey_trouble(a_smile, b_smile):
  if a_smile and b_smile: 
    return (a_smile and b_smile)
  elif a_smile == False and b_smile == False:
    return True
  else:
    return False

def parrot_trouble(talking, hour):
  return (talking and (hour < 7 or hour > 20))

def pos_neg(a, b, negative):
  if a<0 and b<0 and negative == True:
    return True
  elif a<0 and b>0 and negative == False:
    return True
  elif a>0 and b<0 and negative == False:
    return True
  else: 
    return False

def front_back(str):
  if len(str)<=1:
    return str
  
  first = str[:]
  mid = str[1:len(str)-1]
  last = str[len(str)-1:]
  first = str[:1]
  
  return last+mid+first

def sum_double(a, b):
  if a == b:
    return 2*(a+b)
  else:
    return a+b

def makes10(a, b):
  if a + b == 10:
    return True
  elif a == 10 or b == 10:
    return True
  else:
    return False

def not_string(str):
  if str[:3] == "not":
    return str
  else:
    return "not "+str

 def front3(str):
  return str[:3]*3

