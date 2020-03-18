n = int(input())
arr = map(int, input().split())
    
arr = list(set(list(arr)))

arr = sorted(arr)

print(arr[len(arr)-2])
