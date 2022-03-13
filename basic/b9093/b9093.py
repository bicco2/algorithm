import sys

input = sys.stdin.readline

n = int(input())

data = [input().strip() for _ in range(n)] 

# for i in range(n):
#     data.append(list(map(int,input().split())))

for i in range(n):
    firstArray = data[i].split()
    for j in range(len(firstArray)):
        print(firstArray[j][::-1], end= " ")
    print(f"")


# print(firstData)


















# import sys

# input = sys.stdin.readline

# data = []
# n = int(input())
# for i in range(n):
#     data.append(list(map(int,input().split())))

# print(data)

    
