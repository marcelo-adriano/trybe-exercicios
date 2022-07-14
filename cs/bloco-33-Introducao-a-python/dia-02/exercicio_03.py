file = open("exercicio_03.txt", mode="r")
for line in file:
    name, score = line.split()
    score = int(score)
    if score >= 6:
        print(name)
file.close()
