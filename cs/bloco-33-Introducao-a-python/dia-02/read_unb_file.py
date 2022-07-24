import csv


with open("graduacao_unb.csv", encoding="utf-8") as file:
    file_reader = csv.DictReader(file, delimiter=",", quotechar='"')
    array_of_objects = [row for row in file_reader]
    print(array_of_objects[0])
