/**
 * @generated SignedSource<<01bee4317762e53f8938c413e77dc1f3>>
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
    readonly id: string | null;
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
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "createUser",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
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
    "cacheID": "dbc387e933e2757be0fd4294815795f0",
    "id": null,
    "metadata": {},
    "name": "RegisterUserQuery",
    "operationKind": "mutation",
    "text": "mutation RegisterUserQuery(\n  $name: String!\n  $email: String!\n  $password: String!\n) {\n  createUser(user: {name: $name, email: $email, password: $password}) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "38bf5850440a807d9d242f2899e91714";

export default node;
