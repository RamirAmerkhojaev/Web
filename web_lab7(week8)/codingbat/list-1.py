def first_last6(nums):
  first = nums[0]
  last = nums[-1]
  if first == 6 or last == 6:
    return True
  return False

def common_end(a, b):
  if a[0] == b[0] or a[-1] == b[-1]:
    return True
  return False

def reverse3(nums):
  return nums[::-1]
  
def middle_way(a, b):
  arr1 = a[len(a)/2]
  arr2 = b[len(b)/2]
  string = str(arr1)+str(arr2)
  res = list(map(int, str(string))) 
  return res
  
def same_first_last(nums):
  if len(nums)>=1 and nums[0] == nums[-1]:
    return True
  return False

def max_end3(nums):
  first = nums[0]
  last = nums[-1]
  maxi = max(first, last)
  
  return [maxi]*3
  

def sum3(nums):
  sum = 0
  for i in range(len(nums)):
    sum += nums[i]
    
  return sum

def make_ends(nums):
  first = nums[:1]
  last = nums[-1:]
  return first+last

def make_pi():
  pi = [3,1,4]
  return pi

def rotate_left3(nums):
  return nums[1:]+nums[:1]

def sum2(nums):
  sum = 0
  if len(nums) > 2:
    sum = nums[0]+nums[1]
  elif len(nums) == 2 or len(nums) == 1:
    for i in range(len(nums)):
      sum += nums[i]
  else:
    sum = 0
  return sum

def has23(nums):
  for elem in nums[:]:
    if elem == 2 or elem == 3:
      return True
  return False
