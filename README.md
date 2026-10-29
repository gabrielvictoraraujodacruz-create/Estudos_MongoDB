# 🍃 Estudos MongoDB

![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Status](https://img.shields.io/badge/status-estudando-blue?style=flat-square)

Meu repo de estudo de MongoDB. Comecei depois de uma palestra sobre MongoDB comparando com SQL, onde vi CRUD, filtros, índices e aggregation na prática. No final fiz a avaliação e ganhei o badge **CRUD Operations in MongoDB**.

A ideia é ir guardando aqui o que eu aprendo e, mais pra frente, subir projetos usando MongoDB.

> 🇺🇸 **In English:** my MongoDB study repo. I started it after a talk comparing SQL and MongoDB, where I learned CRUD, query filters, indexes and the aggregation pipeline, and earned the **CRUD Operations in MongoDB** badge. Here I keep my notes, `mongosh` examples and, soon, projects built with MongoDB.

## 🏅 Certificado

**CRUD Operations in MongoDB** (MongoDB University)
Curso de 4 horas na faculdade em 26/09/2026. Refiz o Skill Check em 29/10/2026 e o certificado saiu com o meu nome completo (ID MDB4f6eswnu3r).
[Ver no Credly](https://www.credly.com/badges/799efa1b-23fd-47b6-afb2-014512d4d337) · [PDF](certificados/CRUD-Operations-in-MongoDB.pdf)

## 📂 O que tem aqui

| Pasta | O que é |
|---|---|
| [`anotacoes/`](anotacoes) | Minhas anotações do que aprendi |
| [`exemplos/`](exemplos) | Comandos pra rodar no `mongosh` |
| [`material/`](material) | Material da palestra (SQL to MongoDB Cheat Sheet) |
| [`certificados/`](certificados) | Certificados |
| [`projetos/`](projetos) | Projetos futuros com MongoDB |

## 📝 O que eu aprendi até agora

- [x] Diferença entre SQL e MongoDB (tabela → coleção, linha → documento, coluna → campo)
- [x] `mongod` e `mongosh`
- [x] CRUD: `insertOne`, `find`, `updateMany`, `deleteMany`
- [x] Filtros: `$gt`, `$lt`, `$lte`, `$ne`, `$or`, regex no lugar do `LIKE`
- [x] `sort`, `limit`, `skip`, `countDocuments`, `explain`
- [x] Índices simples e compostos
- [x] Aggregation pipeline: `$match`, `$group`, `$sort`, `$project`, `$lookup`
- [x] Arrays: busca exata x `$all`, e `$push` / `$addToSet` / `$pull` ([revisão](anotacoes/04-revisao-skill-check.md))
- [ ] Modelagem de documentos (embutir x referenciar)
- [ ] MongoDB Atlas
- [ ] Usar MongoDB com Python (`pymongo`)
- [ ] Primeiro projeto

## 📚 Links

- [SQL to MongoDB Mapping Chart](https://www.mongodb.com/docs/manual/reference/sql-comparison/)
- [SQL to Aggregation Mapping Chart](https://www.mongodb.com/docs/manual/reference/sql-aggregation-comparison/)
- [MongoDB for SQL Professionals (curso grátis)](https://learn.mongodb.com/learning-paths/mongodb-for-sql-professionals)
- [MongoDB for Students](https://www.mongodb.com/students)

---

> O cheat sheet em `material/` é da MongoDB, distribuído na palestra. Tá aqui só como referência de estudo.
