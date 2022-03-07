import sys
input = sys.stdin.readline

stack=[]

n = int(input())

for _ in range(n): 
    command = input().split()
    if command[0] == 'push':
        stack.append(command[1])
    elif command[0] == 'pop':
        print(stack.pop() if stack else -1)