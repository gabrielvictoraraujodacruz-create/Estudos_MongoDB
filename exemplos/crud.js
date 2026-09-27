// Rodar com: mongosh exemplos/crud.js
// Usa um banco de teste, pode apagar depois com db.dropDatabase()

db = db.getSiblingDB("estudos")
db.people.drop()

// CREATE
db.people.insertMany([
  { user_id: "abc123", age: 55, status: "A" },
  { user_id: "bcd001", age: 45, status: "A" },
  { user_id: "jim01", age: 22, status: "B" },
  { user_id: "jim02", age: 30, status: "D" }
])

// READ
print("Status A:")
printjson(db.people.find({ status: "A" }, { _id: 0 }).toArray())

print("Idade entre 25 e 50:")
printjson(db.people.find({ age: { $gt: 25, $lte: 50 } }, { _id: 0 }).toArray())

print("Começa com jim:")
printjson(db.people.find({ user_id: /^jim/ }, { _id: 0 }).sort({ age: -1 }).toArray())

print("Total:", db.people.countDocuments())

// UPDATE
db.people.updateMany({ status: "A" }, { $inc: { age: 3 } })
db.people.updateMany({}, { $set: { join_date: new Date() } })

// DELETE
db.people.deleteMany({ status: "D" })

// AGGREGATION: quantas pessoas por status
printjson(db.people.aggregate([
  { $group: { _id: "$status", qtd: { $sum: 1 } } },
  { $sort: { qtd: -1 } }
]).toArray())

// Índice
db.people.createIndex({ user_id: 1 })
