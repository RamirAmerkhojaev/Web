def cigar_party(cigars, is_weekend):
  if cigars >= 40 and cigars <= 60 and is_weekend == False:
    return True
  elif cigars >= 40 and cigars <= 60 and is_weekend == True:
    return True
  elif cigars > 60 and is_weekend == True:
    return True
  else:
    return False

def caught_speeding(speed, is_birthday):
  if is_birthday == True:
    if speed <= 60:
      return 0
    elif speed >= 61 and speed <= 65:
      return 0
    elif speed >=66 and speed <= 80:
      return 1
    elif speed > 80 and speed <=85:
      return 1
    else:
      return 2
  elif is_birthday == False:
    if speed <= 60:
      return 0
    elif speed >= 61 and speed <= 80:
      return 1
    elif speed > 80:
      return 2

 def love6(a, b):
  if a == 6 or b == 6:
    return True
  elif a+b == 6:
    return True
  elif abs(a-b) == 6:
    return True
  else:
    return False

def date_fashion(you, date):
  if you <= 2 or date <= 2:
    return 0
  elif you >= 8 or date >= 8:
    return 2
  else:
    return 1

def sorta_sum(a, b):
  sum = a+b
  if sum <= 19 and sum >= 10:
    return 20
  else:
    return sum

def in1to10(n, outside_mode):
  if n <= 10 and n >= 1 and  outside_mode == False:
    return True
  elif (n <= 1 or n >= 10) and outside_mode == True:
    return True
  else:
    return False

def squirrel_play(temp, is_summer):
  if temp >= 60 and temp <= 90 and is_summer == False:
    return True
  elif temp >= 60 and temp <= 100 and is_summer == True:
    return True
  else:
    return False

def alarm_clock(day, vacation):
  if vacation == True:
    if day >= 1 and day <= 5:
      return "10:00"
    elif day == 0 or day == 6:
      return "off"
  elif vacation == False:
    if day >= 1 and day <= 5:
      return "7:00"
    elif day == 0 or day == 6:
      return "10:00"

def near_ten(num):
  if num % 10 <= 2:
    return True
  elif num % 10 <= 10 and num % 10 >= 8:
    return True
  else:
    return False
