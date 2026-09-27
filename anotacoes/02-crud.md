# CRUD

## Create

```js
db.people.insertOne({ user_id: "bcd001", age: 45, status: "A" })
db.people.insertMany([{ user_id: "x1" }, { user_id: "x2" }])
```

## Read

O `find` recebe 2 coisas: o **filtro** e a **projeção** (quais campos voltam).

| SQL | MongoDB |
|---|---|
| `SELECT * FROM people` | `db.people.find()` |
| `SELECT user_id, status FROM people` | `db.people.find({}, { user_id: 1, status: 1 })` |
| `WHERE status = "A"` | `find({ status: "A" })` |
| `WHERE status != "A"` | `find({ status: { $ne: "A" } })` |
| `WHERE status = "A" AND age = 50` | `find({ status: "A", age: 50 })` |
| `WHERE status = "A" OR age = 50` | `find({ $or: [{ status: "A" }, { age: 50 }] })` |
| `WHERE age > 25` | `find({ age: { $gt: 25 } })` |
| `WHERE age > 25 AND age <= 50` | `find({ age: { $gt: 25, $lte: 50 } })` |
| `LIKE "%bc%"` | `find({ user_id: /bc/ })` |
| `LIKE "jim%"` | `find({ user_id: /^jim/ })` |
| `ORDER BY user_id DESC` | `.sort({ user_id: -1 })` |
| `LIMIT 5 SKIP 10` | `.limit(5).skip(10)` |
| `COUNT(*)` | `db.people.countDocuments()` |
| `EXPLAIN SELECT ...` | `.explain()` |

Obs: o `_id` sempre volta na projeção, a não ser que coloque `_id: 0`.

## Update

```js
// UPDATE people SET status = "C" WHERE age > 25
db.people.updateMany({ age: { $gt: 25 } }, { $set: { status: "C" } })

// UPDATE people SET age = age + 3 WHERE status = "A"
db.people.updateMany({ status: "A" }, { $inc: { age: 3 } })
```

## Delete

```js
db.people.deleteMany({ status: "D" }) // DELETE ... WHERE status = "D"
db.people.deleteMany({})              // apaga tudo, cuidado
```
