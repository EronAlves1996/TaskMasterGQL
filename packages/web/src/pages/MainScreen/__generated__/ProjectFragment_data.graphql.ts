/**
 * @generated SignedSource<<431e4c02e41b087b950191d6cbc42378>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ProjectFragment_data$data = {
  readonly deadline: any;
  readonly description: string;
  readonly name: string;
  readonly " $fragmentType": "ProjectFragment_data";
};
export type ProjectFragment_data$key = {
  readonly " $data"?: ProjectFragment_data$data;
  readonly " $fragmentSpreads": FragmentRefs<"ProjectFragment_data">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ProjectFragment_data",
  "selections": [
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
  "type": "project",
  "abstractKey": null
};

(node as any).hash = "a1f9eed7c3b458333ea2877c1d5f5f83";

export default node;
