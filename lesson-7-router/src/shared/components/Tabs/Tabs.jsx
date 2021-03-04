import React, { PureComponent } from "react";
import classnames from "classnames";

export default class Tabs extends PureComponent {
  state = {
    activeTabIdx: 0,
  };

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
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          {items.map((item, idx) => (
            <li className="nav-item" role="presentation" key={item.label}>
              <button
                type="button"
                className={classnames("nav-link", {
                  active: idx === activeTabIdx,
                })}
                aria-controls={item.label}
                aria-selected={idx === activeTabIdx}
                data-idx={idx}
                onClick={this.setActiveTabIdx}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="tab-content">
          <div
            className="tab-pane fade show active"
            id={activeTab.label}
            role="tabpanel"
            aria-labelledby="products-tab"
          >
            <p>{activeTab.content}</p>
          </div>
        </div>
      </>
    );
  }
}
