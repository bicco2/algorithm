from inspect import stack
import sys

input = sys.stdin.readline

n = int(input())

data = [input().strip() for _ in range(n)] 



testArray = []
# for i in range(n):
#     data.append(list(map(int,input().split())))

#print(list(data[0])) #input에서 가져온 배열에서 첫번째 즉 (())()) 이거임 

for i in range(n):
    testArray.append(list(data[i]))
    cnt = 0
    for j in range(len(testArray[i])):
        if(testArray[i][j] == ")"):
            cnt -= 1
            if(cnt < 0):
                print("NO")
                break
        elif(testArray[i][j] == "("):
            cnt += 1
    if(cnt>0):
        print("NO")
    elif(cnt == 0):
        print("YES")

