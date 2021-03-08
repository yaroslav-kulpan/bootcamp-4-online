import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import classnames from "classnames";

const Breadcrumbs = ({ location, children }) => {
  const path = location.pathname.split("/").filter((x) => x);
  return (
    <div className="bg-light py-3 mb-3">
      <div className="container">
        <div className="row">
          <div className="col-9 col-lg-8 offset-lg-1 d-flex align-items-center">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                {path.map((c, idx) => {
                  const to = `/${path.slice(0, idx + 1).join("/")}`;
                  return (
                    <li
                      className={classnames("breadcrumb-item", {
                        active: to === location.pathname,
                      })}
                      aria-current="page"
                      key={c}
                    >
                      <Link
                        to={to}
                        className="breadcrumb-item text-decoration-none"
                      >
                        {c}
                      </Link>
                    </li>
                  );
                })}
              </ol>
            </nav>
          </div>
          <div className="col-3 col-lg-1 d-lg-flex justify-content-end">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Breadcrumbs);
