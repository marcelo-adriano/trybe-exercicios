from pymongo import MongoClient

# client = MongoClient()
# # o banco de dados catalogue será criado se não existir
# db = client.catalogue
# print(db)
# # a coleção books será criada se não existir
# students = db.books
# print(students)

# client.close()  # fecha a conexão com o banco de dados

# client = MongoClient()
# db = client.catalogue
# # busca um documento da coleção, sem filtros
# documents = [
#     {
#         "title": "A Light in the Attic",
#     },
#     {
#         "title": "Tipping the Velvet",
#     },
#     {
#         "title": "Soumission",
#     },
# ]
# db.books.insert_many(documents)
# print(db.books.find_one())
# # busca utilizando filtros
# for book in db.books.find({"title": {"$regex": "t"}}):
#     print(book["title"])
# client.close()  # fecha a conexão com o banco de dados

with MongoClient() as client:
    db = client.catalogue
    for book in db.books.find({"title": {"$regex": "t"}}):
        print(book["title"])
