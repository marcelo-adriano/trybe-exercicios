number = 5
mult = number - 1
result = 0
while mult > 1:
    if result == 0:
        result = number * mult
    else:
        result = result * mult
    mult = mult - 1
print(result)
