import React from "react";
import { Fragment } from "react/cjs/react.production.min";

const RequestOrderTable = ({ product, productRemoverHandler }) => {
  const productDeletedHandler = (item) => {
    productRemoverHandler(item.id);
  };
  return (
    <Fragment>
      {product.length === 0 ? (
        <div className="box_no-item-added">No item added</div>
      ) : (
        <div class="grid_container">
          <div class="i-grid-container">
            <div class="grid_column_selector_container">
              <div class="selector_content_container">
                <label class="lbl_selector">
                  <input
                    type="checkbox"
                    data-binding="selected"
                    data-type="string"
                    checked="checked"
                  />
                  Name{" "}
                </label>
                <label class="lbl_selector">
                  <input
                    type="checkbox"
                    data-binding="selected"
                    data-type="string"
                    checked="checked"
                  />
                  Strength{" "}
                </label>
                <label class="lbl_selector">
                  <input
                    type="checkbox"
                    data-binding="selected"
                    data-type="string"
                    checked="checked"
                  />
                  Quantity{" "}
                </label>
                <label class="lbl_selector">
                  <input
                    type="checkbox"
                    data-binding="selected"
                    data-type="string"
                    checked="checked"
                  />
                  Actions
                </label>
              </div>
            </div>
            <div class="i-grid i-widget">
              <div class="i-grid-header_container">
                <div class="i-grid-header" style={{ paddingRight: "17px" }}>
                  <div class="i-grid-header-wrap">
                    <table>
                      <colgroup>
                        <col />
                        <col />
                        <col />
                        <col class="actions" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th
                            rowspan="1"
                            scope="col"
                            class="i-header table_header sorting undefined"
                          >
                            <div
                              style={{ position: "relative" }}
                              class="header_container"
                            >
                              <a href>Name</a>
                              <span class="icon_container"></span>
                              <div class="resizer"></div>
                            </div>
                          </th>
                          <th
                            rowspan="1"
                            scope="col"
                            class="i-header table_header sorting undefined"
                          >
                            <div
                              style={{ position: "relative" }}
                              class="header_container"
                            >
                              <a href>Strength</a>
                              <span class="icon_container"></span>
                              <div class="resizer"></div>
                            </div>
                          </th>
                          <th
                            rowspan="1"
                            scope="col"
                            class="i-header table_header sorting undefined"
                          >
                            <div
                              style={{ position: "relative" }}
                              class="header_container"
                            >
                              <a href>Quantity</a>
                              <span class="icon_container"></span>
                              <div class="resizer"></div>
                            </div>
                          </th>
                          <th
                            rowspan="1"
                            scope="col"
                            class="i-header table_header sorting actions"
                          >
                            <div
                              style={{ position: "relative" }}
                              class="header_container"
                            >
                              <a href>Actions</a>
                              <span class="icon_container"></span>
                              <div class="resizer"></div>
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {product.map((item) => (
                          <tr style={{ cursor: "pointer" }}>
                            <td>{item.name}</td>
                            <td>{item.strength}</td>
                            <td>{item.quantity}</td>
                            <td
                              onClick={productDeletedHandler.bind(null, item)}
                            >
                              Delete
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default RequestOrderTable;
