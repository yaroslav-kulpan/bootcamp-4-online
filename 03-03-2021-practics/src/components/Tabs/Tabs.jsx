import React, { PureComponent } from "react";

export default class Tabs extends PureComponent {
  state = {
    activeTabIdx: 0,
  };

  // shouldComponentUpdate(nextProps, nextState) {
  //     return nextState.activeTabIdx !== this.state.activeTabIdx;
  // }

  setActiveTabIdx = ({ target }) => {
    const idx = Number(target.dataset.idx);
    this.setState({ activeTabIdx: idx });
  };

  render() {
    console.log("[RENDER]:", Date.now());

    const { activeTabIdx } = this.state;
    const { items } = this.props;
    const activeTab = items[activeTabIdx];

    return (
      <>
        <div>
          {items.map((item, idx) => (
            <button
              type="button"
              className="btn btn-primary mr-3"
              key={item.label}
              data-idx={idx}
              onClick={this.setActiveTabIdx}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div>
          <h2>{activeTab.label}</h2>
          <p>{activeTab.content}</p>
        </div>
      </>
    );
  }
}
