from inspect import stack
import sys

input = sys.stdin.readline

n = int(input())

stack = []
result = []
count = 1
certifi = True

for i in range(n):
    num = int(input())
    while(count <= num):
        stack.append(count)
        result.append("+")
        count += 1
    if(stack[-1] == num):
        stack.pop()
        result.append("-")
    else:
        certifi = False

if(certifi == False):
    print("NO")
else:
    for i in result:
        print(i)

