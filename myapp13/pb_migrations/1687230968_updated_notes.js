migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("40f3y0jcvzlpcq6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "h5svfnqy",
    "name": "content",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("40f3y0jcvzlpcq6")

  // remove
  collection.schema.removeField("h5svfnqy")

  return dao.saveCollection(collection)
})
