# c = 2
# b = 3
# print(c ** b)




# # 리스트
# a = [1,2,3,4,5,6]
# a = [0] * 6
# a[0] = 1 

# print(a)

# print(a[1:3]) # index 1~3 출력

# array1 = [i*i for i in range(10) if i % 2 == 0] #리스트 컴프리헨션 >> array1 배열을 만드나 1~10까지의 수로 채워라 (조건 1. 짝수 여야하고 2. 짝수를 제곱해서 넣어라) i는 변수 설정 변수 필요 없으면 _로 설정 

# print(array1)

# n = 4
# m = 7
# array2 = [[2] * m for _ in range(n)] # 2차원 배열 [2] x m 의 1차원 배열을 n개 만들어라 
# print(array2) 

# a1 = [1, 2, 3, 4, 5, 5, 5]
# remove_set = {3,5}

# result1 = [i for i in a1 if i not in remove_set]
# print(result1)







# # 튜플 () 로 나타나고 값 변경이 안댐 
# a2 = (1, 2, 3, 4, 5, 6, 7, 8)
# print(a2)







# # 사전 자료형 dictionary
# data1 = dict()
# data1['사과'] = 'Apple'
# data1['바나나'] = 'Banana'
# data1['코코넛'] = 'Coconut'

# print(data1)

# if '사과' in data1 : 
#     print("have it")

# print(data1.keys())
# print(list(data1.values()))








# # 집합 자료형 (중복 제거)
# data2 = set([1,2,2,3,3,4,5])
# data3 = {1,2,3,4,4,5,5,5}
# print(data2,data3)





# 입출력 
# n = int(input())
# data = list(map(int, input().split())) # 공백 기준으로 나눠서 배열에 들어감  
# # map = 원하는 형으로 바꿔주는 작업 
# # list 원하는 형태로 바꾼 후 list로 다시 만들어 주는 작업
# print(n)
# print(data)





# 빠르게 입력 받기 readline
# import sys

# data1 = sys.stdin.readline().rstrip() # 한 줄로 받아짐 
# print(data1)




# 줄 바꿈 방지 
# print(7, end= " ")
# print(8)

# # 백틱
# answer = 7
# print(f"정답은 {answer}입니다.")









# 조건문 
# x = 15 
# if x >= 10 :
#     print(x)
# elif x <= 10:
#     print(x)
# else :
#     print("x")









# 연산자 
# x in 리스트 >> 있으면 참
# score = 30 
# if score > 80 : 
#     pass # 일단 넘어가 









# 함수 
# def add(a, b):
#     return a+b
# # == 

# print((lambda a,b : a+b)(3,7))










# lambda
array = [('jorce', 50), ('bicco', 100), ('nonoka', 70)]

def my_key(x):
    return x[1]

print(sorted(array, key=my_key)) # x[1]의 의미 즉, 두번째 원소로 정렬을 수행해라 라는 뜻 
print(sorted(array, key=lambda x : x[1])) 