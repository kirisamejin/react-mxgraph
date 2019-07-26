// tslint:disable: file-name-casing
import { storiesOf } from "@storybook/react";
import React from "react";

import {
  ContextMenu,
  Flow,
  MxGraph,
} from "../src/index";
import "./index.scss";

storiesOf("Flow", module)
  .add("Basic flow", () => {
    const data = {
      nodes: [
        {
          type: "node",
          size: [70, 70],
          shape: "flow-circle",
          color: "#FA8C16",
          label: "起止节点",
          x: 55,
          y: 55,
          id: "ea1184e8",
          index: 0,
        },
        {
          type: "node",
          size: [70, 70],
          shape: "flow-circle",
          color: "#FA8C16",
          label: "结束节点",
          x: 55,
          y: 255,
          id: "481fbb1a",
          index: 2,
        }
      ],
      edges: [{
        source: "ea1184e8",
        sourceAnchor: 2,
        target: "481fbb1a",
        targetAnchor: 0,
        id: "7989ac70",
        index: 1,
      }],
    };

    return (
      <MxGraph>
        <Flow
          data={data}
        />
      </MxGraph>
    );
  })
  .add("Context menu", () => {
    const data = {
      nodes: [{
        type: "node",
        size: [70, 70],
        shape: "flow-circle",
        color: "#FA8C16",
        label: "起止节点",
        x: 55,
        y: 55,
        id: "ea1184e8",
        index: 0,
      },      {
        type: "node",
        size: [70, 70],
        shape: "flow-circle",
        color: "#FA8C16",
        label: "结束节点",
        x: 55,
        y: 255,
        id: "481fbb1a",
        index: 2,
      }],
      edges: [{
        source: "ea1184e8",
        sourceAnchor: 2,
        target: "481fbb1a",
        targetAnchor: 0,
        id: "7989ac70",
        index: 1,
      }],
    };

    const menuData = [
      {
        name: "vertex",
        items: [
          {
            menuItemType: "item",
            text: "this is a vertex",
            func(): void { alert("item 1"); },
          },
          {
            menuItemType: "separator",
          },
          {
            menuItemType: "item",
            text: "this is a test vertex item",
            func(): void { alert("item 2"); },
          },
        ]
      },
      {
        name: "edge",
        items: [
          {
            menuItemType: "item",
            text: "this is a edge",
            func(): void { alert("item 1"); },
          },
        ],
      },
      {
        name: "canvas",
        items: [
          {
            menuItemType: "item",
            text: "this is a canvas",
            func(): void { alert("item 1"); },
          },
        ],
      },
    ];

    return (
      <MxGraph>
        <Flow
          data={data}
        />
        <ContextMenu
          data={menuData}
        />
      </MxGraph>
    );
  });