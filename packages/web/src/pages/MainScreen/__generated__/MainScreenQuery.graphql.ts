/**
 * @generated SignedSource<<94ea295ac6f83c2735d450473f44834c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MainScreenQuery$variables = {
  company?: string | null;
  projects?: ReadonlyArray<string | null> | null;
};
export type MainScreenQuery$data = {
  readonly getCompany: {
    readonly name: string;
  } | null;
  readonly getProjectsById: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"ProjectFragment_data">;
  } | null> | null;
};
export type MainScreenQuery = {
  response: MainScreenQuery$data;
  variables: MainScreenQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "company"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "projects"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": [
    {
      "kind": "Variable",
      "name": "_id",
      "variableName": "company"
    }
  ],
  "concreteType": "company",
  "kind": "LinkedField",
  "name": "getCompany",
  "plural": false,
  "selections": [
    (v1/*: any*/)
  ],
  "storageKey": null
},
v3 = [
  {
    "kind": "Variable",
    "name": "_ids",
    "variableName": "projects"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "MainScreenQuery",
    "selections": [
      (v2/*: any*/),
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "project",
        "kind": "LinkedField",
        "name": "getProjectsById",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ProjectFragment_data"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "MainScreenQuery",
    "selections": [
      (v2/*: any*/),
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "project",
        "kind": "LinkedField",
        "name": "getProjectsById",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "description",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "deadline",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "20ba27ab5985708d121790f564d060a7",
    "id": null,
    "metadata": {},
    "name": "MainScreenQuery",
    "operationKind": "query",
    "text": "query MainScreenQuery(\n  $company: String\n  $projects: [String]\n) {\n  getCompany(_id: $company) {\n    name\n  }\n  getProjectsById(_ids: $projects) {\n    ...ProjectFragment_data\n  }\n}\n\nfragment ProjectFragment_data on project {\n  name\n  description\n  deadline\n}\n"
  }
};
})();

(node as any).hash = "8d6a6bfe7428a8fc7dbec9d0390b31be";

export default node;
