def string_times(str, n):
  return str*n

def string_splosion(str):
  string = ""
  for i in range(len(str)):
    string = string + str[:i+1]

  return string

def array_front9(nums):
  item = 9
  if item in nums[:4]:
    return True
  else:
    return False

def front_times(str, n):
  return str[:3]*n

def last2(str):
  cnt = 0
  last = str[len(str)-2:]
  string = str[:len(str)-2]
  for i in range(len(string)):
    if str[i:i+2] == last:
      cnt += 1
      
  return cnt

def array123(nums):
  cnt = 0 
  seq = [1,2,3]
  for i in range(len(nums)):
    if nums[i:i+3] == seq:
      return True
      
  return False

def string_bits(str):
  result = ""
  for i in range(len(str)):
    if i%2 == 0:
      result = result + str[i]
  return result

def array_count9(nums):
  n = 9
  cnt = 0
  for elem in nums:
    if elem == n:
      cnt += 1
      
  return cnt

def string_match(a, b):
  cnt = 0
  for i in range(len(a)-1):
    if a[i:i+2] == b[i:i+2]:
      cnt += 1
  return cnt