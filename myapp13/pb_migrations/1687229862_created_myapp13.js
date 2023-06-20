migrate((db) => {
  const collection = new Collection({
    "id": "dnb1n77w3plkb9a",
    "created": "2023-06-20 02:57:42.406Z",
    "updated": "2023-06-20 02:57:42.406Z",
    "name": "myapp13",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "n1hnmpvd",
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
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("dnb1n77w3plkb9a");

  return dao.deleteCollection(collection);
})
