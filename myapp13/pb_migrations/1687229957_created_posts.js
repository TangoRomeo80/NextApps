migrate((db) => {
  const collection = new Collection({
    "id": "3rf1ebzogridq7h",
    "created": "2023-06-20 02:59:17.512Z",
    "updated": "2023-06-20 02:59:17.512Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "lb0vqnny",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("3rf1ebzogridq7h");

  return dao.deleteCollection(collection);
})
