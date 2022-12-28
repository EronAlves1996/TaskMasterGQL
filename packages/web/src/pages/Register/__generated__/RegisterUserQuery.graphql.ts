/**
 * @generated SignedSource<<7ede9aeb8a2cd2e74ab53d7e4207d1b1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type RegisterUserQuery$variables = {
  email: string;
  name: string;
  password: string;
};
export type RegisterUserQuery$data = {
  readonly createUser: {
    readonly _id: string;
  } | null;
};
export type RegisterUserQuery = {
  response: RegisterUserQuery$data;
  variables: RegisterUserQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "email"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "name"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "password"
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "email",
            "variableName": "email"
          },
          {
            "kind": "Variable",
            "name": "name",
            "variableName": "name"
          },
          {
            "kind": "Variable",
            "name": "password",
            "variableName": "password"
          }
        ],
        "kind": "ObjectValue",
        "name": "user"
      }
    ],
    "concreteType": "user",
    "kind": "LinkedField",
    "name": "createUser",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "_id",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "RegisterUserQuery",
    "selections": (v3/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Operation",
    "name": "RegisterUserQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "a3ee42bcaa9cd380c7ea8bb981f17890",
    "id": null,
    "metadata": {},
    "name": "RegisterUserQuery",
    "operationKind": "mutation",
    "text": "mutation RegisterUserQuery(\n  $name: String!\n  $email: String!\n  $password: String!\n) {\n  createUser(user: {name: $name, email: $email, password: $password}) {\n    _id\n  }\n}\n"
  }
};
})();

(node as any).hash = "b91e00bb325f85d68577c90e3955e31c";

export default node;
