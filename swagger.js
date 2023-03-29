// const m2s = require('mongoose-to-swagger');
// const User = require('./models/user.model');
// const Product = require('./models/product.model');

// exports.opions={
//     "swagger":"2.0",
//     "info":{
//         "version": "1.0.0",
//         "desc":"products API",
//         "title":"products CRUD API"
//     },
//     "host":"localhost:3000",
//     "basepath":"/"
// }


const m2s = require('mongoose-to-swagger');
const User = require('./models/user.model');
const Product = require('./models/product.model');

exports.options = {
  "definitions": {
    User: m2s(User),
    Product: m2s(Product)
  },  
  "swagger":"2.0",
  "info": {
    "version": "1.0.0",
    "description": "Products Project Application API",
    "title": "Products CRUD API"
  },
  "host": "localhost:3000",
  "basePath": "/",
  "tags": [
    {
      "name": "Users",
      "description": "API for users"
    },
    {
      "name": "Users and Products",
      "description": "API for users and their products"
    }
  ],
  "schemes":["http"],
  "consumes": ["application/json"],
  "produces": ["application/json"],
  "paths":{
    "/api/user/findAll":{
      "get":{
        "tags": [
          "Users"
        ],
        "summary": "Gets all users from system",
        "responses":{
          "200":{
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/User"
            }
          }
        }
      }
    },
    "/api/user/findOne/{username}":{
      "get":{
        "tags": [
          "Users"
        ],
        "parameters":[
          {
            "name":"username",
            "in":"path",
            "required":true,
            "description": "Username of user",
            "type":"string"
          }
        ],
        "summary": "Gets a users from system",
        "responses":{
          "200":{
            "description": "User find",
            "schema": {
              "$ref": "#/definitions/User"
            }
          }
        }
      }
    },
    "/api/user/create":{
        "post":{
            "tags":[
                "Users"
            ],
            "description": "Crate new user at API",
            "parameters":[{
                "name": "Parameters for user",
                "in": "body",
                "description": "users parameters for new creation",
                "schema": {
                    // "$ref":"#/definitions/User"
                    "type": "object",
                    "properties":{
                    "name": {"type":"string"},
                    "surname": {"type": "string"},
                    "username": {"type":"string"},
                    "password": {"type": "string"},
                    "email": {"type": "string"},
                    "address": {
                        "type":"object",
                        "properties":{
                            "area": {"type": "string"},
                            "road": {"type": "string"},
                        },
                    },
                    "phone":{
                        "type": "array",
                        "items":{
                            "type": "object",
                            "properties":{
                                "type": {"type": "string"},
                                "number": {"type": "string"}
                            },
                        },
                    },

                    },
                    "required":["username", "email"]
                },
                
            }],
            "produces":["application/json"],
            "responses":{
                "200":{
                    "description": "New user is created",
                    "schema":{
                        "$ref":"#/definitions/User"
                    },
                },
            },
        }
    },
    "/api/user/update":{
        "patch":{
            "tags":[
                "Users"
            ],
            "description": "Update user",
            "parameters": [{
                "name": "update user",
                "in": "body",
                "description": "user for update",
                "schema":{
                    "type": "object",
                    "properties": {
                        "name": {"type":"string"},
                        "surname": {"type": "string"},
                        "username": {"type":"string"},
                        "password": {"type": "string"},
                        "email": {"type": "string"},
                        "address": {
                            "type":"object",
                            "properties":{
                                "area": {"type": "string"},
                                "road": {"type": "string"},
                            },
                        },
                        "phone":{
                            "type": "array",
                            "items":{
                                "type": "object",
                                "properties":{
                                    "type": {"type": "string"},
                                    "number": {"type": "string"}
                                },
                            },
                        },
                    }
                }, "required":["username", "email"]
            }],
            "produces":["application/json"],
            "responses":{
                "200":{
                    "description": "New user is created"
                },
            },

        }
    },
    "api/user/delete/{username}":{
        "delete":{
            "tags":[
                "Users"
            ],
            "description": "Delete user",
            "parameters": [{
                "name":"username",
                "in": "path",
                "description": "user that will be deleted"
            }],
            "responses":{
                "200":{
                    "description": "New user is created"
                },
            },
        }
    },
    "/api/userproducts/findone/{username}":{
        "get": {
            "tags":[
                "Users and products"
            ],
            "parameters":[{
                "name":"username",
                "in": "path",
                "description": "user that will be deleted",
                "type": "string"                    
            }],
            "responses":{
                "200":{
                    "description": "New user is created"
                },
            },
        }
    }
  }
}




                    // "username": {"type":"String"},
                    // "password": {"type": "String"},
                    // "name": {"type":"String"},
                    // "email": {"type": "String"},
                    // "address": {
                    //     "type":"Object",
                    //     "properties":{
                    //         "area": {"type": "String"},
                    //         "road": {"type": "String"},
                    //     }
                    // },
                    // "phone":{
                    //     "type": "array",
                    //     "items":{
                    //         "type": "object",
                    //         "properties":{
                    //             "type": {"type": "String"},
                    //             "number": {"type": "String"}
                    //         }
                    //     }
                    // },