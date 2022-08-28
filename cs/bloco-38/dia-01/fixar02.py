import Employee
import HashMap

employees = [(14, "name1"), (23, "name2"), (10, "name3"), (9, "name4")]
lista = HashMap.HashMap()

for id_num, name in employees:
    employee = Employee.Employee(id_num, name)
    lista.insert(employee)

print(lista.get_value(23))

print(lista.get_value(10))
lista.update_value(10, "name30")
print(lista.get_value(10))
