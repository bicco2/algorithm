import heapq

def dijkstra(start):
    q = []

    heapq.heappush(q, (0,start))
    # 초기 시작 distance는 0으로 해서 상관없게 한다. 
    distance[start] = 0

    while q : 
        # 힙 pop은 가장 최솟값을 리턴한다. 
        dist, now = heapq.heappop(q)

        # 만약 이미 최단 경로가 지정(distance[now])이 되어있는데 이전에 초기값으로 들어와있는 것이 q 에 남아있을 경우
        # dist가 이전 값이므로 당연히 distance[now] 보다 큰 게 당연함 따라서 continue로 패스시킨다. 
        if distance[now] < dist : 
            continue

        # 현재(now) 노드를 computer에서 꺼내온다. i에 할당시킴
        for i in computer[now] :
            # dist(현재까지 걸리는 시간) + i[1](현재노드를 거쳐서 i[0]으로 갈수있는 시간)을 구해서 distance[i[0(즉, 초기화 되어 있는 i까지 걸리는 시간을 비교해서 더 작은 값을 distance[i[0] 에 할당 시킨다. )
            cost = dist + i[1]
            if cost < distance[i[0]]:
                distance[i[0]] = cost
                # 최단경로가 갱신 됐으니 업데이트 하고 힙에 다시 추가해준다.
                heapq.heappush(q, (cost, i[0]))



t = int(input())

for _ in range(t):
    n , d, c = map(int, input().split())
    computer = [[] for _ in range(n+1)]
    distance = [int(1e9)] * (n+1)

    # 각 computer에 해당하는 배열을 생성하고 거기에 의존하는 컴퓨터 a 와 걸리는 시간 s를 저장한다. 
    for _ in range(d): 
        a, b, s = map(int, input().split())
        computer[b].append((a,s))
    
    dijkstra(c)

    count = 0
    max_time = 0

    # 컴퓨터 수만큼 반복
    for i in range(1, n+ 1):
        # dis가 무한이 아니면 해킹 당한걸로 판별 즉, count + 1
        if distance[i] != int(1e9):
            count += 1
            # 그리고 그 dis의 값이 크면 최대시간을 교체 
            if distance[i] > max_time: 
                max_time = distance[i]

    print(count, max_time)