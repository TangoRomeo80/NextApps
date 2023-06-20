migrate((db) => {
  const collection = new Collection({
    "id": "40f3y0jcvzlpcq6",
    "created": "2023-06-20 03:15:07.843Z",
    "updated": "2023-06-20 03:15:07.843Z",
    "name": "notes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "dxtvh5lm",
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
  const collection = dao.findCollectionByNameOrId("40f3y0jcvzlpcq6");

  return dao.deleteCollection(collection);
})
