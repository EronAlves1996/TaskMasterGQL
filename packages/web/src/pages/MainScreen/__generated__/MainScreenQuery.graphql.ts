/**
 * @generated SignedSource<<48b655e7b16233828230694d99b2a477>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type MainScreenQuery$variables = {};
export type MainScreenQuery$data = {
  readonly allUsers: ReadonlyArray<{
    readonly email: string;
    readonly id: string | null;
    readonly name: string;
  } | null> | null;
};
export type MainScreenQuery = {
  response: MainScreenQuery$data;
  variables: MainScreenQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "allUsers",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "email",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "MainScreenQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "MainScreenQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "2e7c8e5722817318f2546328ca5ddc29",
    "id": null,
    "metadata": {},
    "name": "MainScreenQuery",
    "operationKind": "query",
    "text": "query MainScreenQuery {\n  allUsers {\n    id\n    name\n    email\n  }\n}\n"
  }
};
})();

(node as any).hash = "75e689f82cb646bc10376e1b6300b7c4";

export default node;
