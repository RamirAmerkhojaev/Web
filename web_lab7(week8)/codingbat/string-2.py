def double_char(str):
  result = ""
  
  for i in range(len(str)):
    result = result +  str[i]*2
  
  return result

 def count_code(str):
    cnt = 0
    for i in range(len(str)-3):
      str1 = str[i:i+2]
      str2 = str[i+3]
      if str1+str[i]+str2 == "co"+str[i]+"e":
        cnt += 1 
        
    return cnt

def count_hi(str):
  cnt = 0
  for i in range(len(str)-1):
    if str[i:i+2] == "hi":
      cnt += 1 
  return cnt

def end_other(a, b):
  if len(a) > len(b):
    end = a[len(a)-len(b):]
    if end.lower() == b.lower():
      return True
    else:
      return False
  elif len(a) < len(b):
    end = b[len(b)-len(a):]
    if end.lower() == a.lower():
      return True
    else:
      return False 
  elif a.lower() == b.lower():
    return True
  else:
    return False

 def cat_dog(str):
  cnt1 = 0
  cnt2 = 0
  for i in range(len(str)-2):
    if str[i:i+3] == "cat":
      cnt1 += 1
    if str[i:i+3] == "dog":
      cnt2 += 1
  
  if cnt1 == cnt2:
    return True
  else:
    return False
    
def xyz_there(str):
  if str[:3] == "xyz":
    return True
  for i in range(len(str)-3):
    if str[i] != "." and str[i+1:i+4] == "xyz":
      return True
    
  return False
