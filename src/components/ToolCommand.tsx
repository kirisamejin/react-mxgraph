import * as React from "react";

// @ts-ignore
import * as mxGraphJs from "mxgraph-js";

import { IMxGraphContext, MxGraphContext } from "../context/MxGraphContext";
import { actionType, } from "../types/action";

export class ToolCommand extends React.PureComponent<{ name: string; text?: string }> {
  private readonly _containerRef = React.createRef<HTMLDivElement>();

  constructor(props: { name: string; text?: string }) {
    super(props);

  }

  public render(): React.ReactNode {
    return (
      <div ref={this._containerRef} >
        {this.props.children}
        <MxGraphContext.Consumer>{(value: IMxGraphContext) => {
          const { graph, action } = value;
          const container = this._containerRef.current;
          if (!graph || !container || !action) {
            return null;
          }
          if (actionType.indexOf(this.props.name) === -1) {
            throw new Error("tool Item Type Error");
          }
          const itemType = this.props.name;
          const func = itemType === "paste" ?
          action.paste.getFunc(200, 200) :
          action[itemType].func;

          // this.addListener(container, graph, clipboard); do not know if there will be influence
          container.addEventListener("click", (_evt) => { func(); });
          return null;

        }}</MxGraphContext.Consumer>
      </div>
    );
  }

}
