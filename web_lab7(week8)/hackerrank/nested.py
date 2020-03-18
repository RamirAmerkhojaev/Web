if __name__ == '__main__':
    users = list()
    for _ in range(int(input())):
        name = input()
        score = float(input())
        user = list()
        user.append(name)
        user.append(score)
        users.append(user)
                
    users.sort(key=lambda x: (x[1],x[0]))
    names = [i[0] for i in users]
    marks = [i[1] for i in users]

    cnt = 0
    for i in range(0, len(marks)):
        if marks[i] == min(marks):
            cnt += 1
    
    if cnt == 1:
        marks.remove(marks[0])
        names.remove(names[0])
    else:
        for i in range(0, cnt):
            marks.remove(marks[0])
            names.remove(names[0])

    for i in range(0, len(marks)):
        if marks[i] == min(marks):
            print(names[i])