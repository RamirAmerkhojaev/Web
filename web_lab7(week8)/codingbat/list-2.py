def count_evens(nums):
  cnt = 0
  for elem in nums[:]:
    if elem%2 == 0:
      cnt +=1 
      
  return cnt

def sum13(nums):
  sum = 0
  if len(nums) == 0:
    return 0
  for i in range(len(nums)):
    if nums[i] != 13:
      if i == 0 or nums[i-1]!=13:
        sum+=nums[i]
    
  return sum

def big_diff(nums):
  return max(nums) - min(nums)

def sum67(nums):
  flag=False
  sum=0
  for num in nums:
    if(num==6):                
      flag=True
      continue
    if(num==7 and flag is True): 
      flag=False
      continue
    if(flag is False):          
      sum+=num
  return sum

def centered_average(nums):
  nums = sorted(nums)
  if len(nums)%2 == 0:
    return (nums[len(nums)/2-1]+nums[(len(nums)/2)]) /2
  else:
    return nums[len(nums)/2]

def has22(nums):
  for i in range(len(nums)-1):
    if nums[i] == 2 and nums[i+1] == 2:
      return True
  return False