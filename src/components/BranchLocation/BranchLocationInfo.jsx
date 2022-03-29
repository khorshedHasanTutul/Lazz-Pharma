import React from 'react'

const BranchLocationInfo = () => {
  return (
    <div class="request_product">
        <div class="grid_container" style="margin: 2%;">
          <div class="i-grid-container">
            <div class="grid_column_selector_container">
              <div class="btn_selector_open">
                <span class="glyphicon glyphicon-chevron-up"></span>
              </div>
              <div class="selector_content_container">
                <label class="lbl_selector">
                  <input
                    type="checkbox"
                    data-binding="selected"
                    data-type="string"
                    checked="checked"
                  />{" "}
                  Branch Name{" "}
                </label>
                <label class="lbl_selector">
                  <input
                    type="checkbox"
                    data-binding="selected"
                    data-type="string"
                    checked="checked"
                  />{" "}
                  Mobile{" "}
                </label>
                <label class="lbl_selector">
                  <input
                    type="checkbox"
                    data-binding="selected"
                    data-type="string"
                    checked="checked"
                  />{" "}
                  Location{" "}
                </label>
              </div>
            </div>
            <div class="i-grid i-widget">
              <div style="position: absolute; width: 100%; height: 100%; top: 0px; z-index: 5; display: none;">
                <div style="width: 100%; height: 100%; position: absolute; z-index: 1; opacity: 0.4; background-color: rgb(255, 255, 255);"></div>
                <div style="width: 100%; height: 100%; position: absolute; z-index: 2; background-image: url('/Content/IqraService/Img/loading_line.gif'); background-repeat: no-repeat; background-position: center center;"></div>
              </div>
              <div class="i-grid-header_container">
                <div class="i-grid-header" style="padding-right: 17px;">
                  <div class="i-grid-header-wrap">
                    <table>
                      <colgroup>
                        <col style="width: 30px;" />
                        <col style="width: 20px;" />
                        <col style="width: 30px;" class="hide_on_mobile" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th
                            rowspan="1"
                            scope="col"
                            class="i-header table_header sorting undefined"
                          >
                            <div
                              style="position: relative;"
                              class="header_container"
                            >
                              <a>Branch Name</a>
                              <span class="icon_container filter_icon_container">
                                <span class="search_icon"></span>
                              </span>
                              <div class="resizer"></div>
                            </div>
                          </th>
                          <th
                            rowspan="1"
                            scope="col"
                            class="i-header table_header sorting undefined"
                          >
                            <div
                              style="position: relative;"
                              class="header_container"
                            >
                              <a>Mobile</a>
                              <span class="icon_container filter_icon_container">
                                <span class="search_icon"></span>
                              </span>
                              <div class="resizer"></div>
                            </div>
                          </th>
                          <th
                            rowspan="1"
                            scope="col"
                            class="i-header table_header sorting hide_on_mobile"
                          >
                            <div
                              style="position: relative;"
                              class="header_container"
                            >
                              <a>Location</a>
                              <span class="icon_container filter_icon_container">
                                <span class="search_icon"></span>
                              </span>
                              <div class="resizer"></div>
                            </div>
                          </th>
                        </tr>
                      </thead>
                    </table>
                  </div>
                </div>
              </div>
              <div class="i-grid-content">
                <table>
                  <colgroup>
                    <col style="width: 30px;" />
                    <col style="width: 20px;" />
                    <col style="width: 30px;" class="hide_on_mobile" />
                  </colgroup>
                  <tbody>
                    <tr class="grid_item" role="row">
                      <td>
                        <a>Lazz Center / Corporate</a>
                      </td>
                      <td>01857052143</td>
                      <td class="hide_on_mobile">
                        63/C Lake Circus,Kalabagan, West Panthpath
                        Dhaka,Bangladesh, 1205
                      </td>
                    </tr>
                    <tr class="grid_item" role="row">
                      <td>
                        <a>Rasel Square / Panthapath</a>
                      </td>
                      <td>01886686690</td>
                      <td class="hide_on_mobile">
                        Lazz Pharma, West Panthapath, Kalabagan
                      </td>
                    </tr>
                    <tr class="grid_item" role="row">
                      <td>
                        <a>Kalabagan</a>
                      </td>
                      <td>01721652925</td>
                      <td class="hide_on_mobile">
                        Lazz Pharma Ltd. Mirpur Rd, Kalabagan, Dhaka
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="i-pager-wrap i-grid-pager i-widget">
                <div class="pagger">
                  <ul class="i-pager-numbers i-reset">
                    <li>
                      <span class="i-state-selected">1</span>
                    </li>
                    <li>
                      <a class="i-link" href="#">
                        2
                      </a>
                    </li>
                    <li>
                      <a class="i-link" href="#">
                        3
                      </a>
                    </li>
                    <li>
                      <a class="i-link" href="#">
                        4
                      </a>
                    </li>
                    <li>
                      <span class="">...</span>
                    </li>
                  </ul>
                  <a
                    class="i-link i-pager-nav"
                    title="Go to the next page"
                    href="#"
                  >
                    <span class="i-icon i-i-arrow-e">Go to the next page</span>
                  </a>
                  <a
                    class="i-link i-pager-nav i-pager-last"
                    title="Go to the last page"
                    href="#"
                  >
                    <span class="i-icon i-i-seek-e">Go to the last page</span>
                  </a>
                </div>
                <span class="i-pager-sizes i-label">
                  <select
                    class="form-control input-sm"
                    style="height: auto; display: inline;"
                  >
                    <option selected="selected">5</option>
                    <option>10</option>
                    <option>20</option>
                    <option>50</option>
                    <option>100</option>
                    <option>200</option>
                    <option>300</option>
                    <option>400</option>
                    <option>500</option>
                    <option>1000</option>
                  </select>
                </span>
                <span class="i-pager-info i-label">
                  Showing 1 to 3 of 62 items
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          class="map_container"
          style="margin: 2%; height: 500px; position: relative; overflow: hidden;"
        >
          <div style="height: 100%; width: 100%; position: absolute; top: 0px; left: 0px; background-color: rgb(229, 227, 223);">
            <div
              style="position: absolute; z-index: 0; left: 0px; top: 0px; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px;"
              class="gm-style"
            >
              <div>
                <button
                  style="
                                            background: transparent none repeat scroll 0% 0%;
                                            display: block;
                                            border: medium none;
                                            margin: 0px;
                                            padding: 0px;
                                            text-transform: none;
                                            appearance: none;
                                            position: absolute;
                                            cursor: pointer;
                                            user-select: none;
                                            z-index: 1000002;
                                            outline-offset: 3px;
                                            right: 0px;
                                            bottom: 0px;
                                            transform: translateX(100%);
                                        "
                  draggable="false"
                  aria-label="Keyboard shortcuts"
                  title="Keyboard shortcuts"
                  type="button"
                ></button>
              </div>
              <div
                style="position: absolute; z-index: 0; left: 0px; top: 0px; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; cursor: pointer; touch-action: pan-x pan-y;"
                tabindex="0"
                aria-label="Map"
                aria-roledescription="map"
                role="group"
              >
                <div style="z-index: 1; position: absolute; left: 50%; top: 50%; width: 100%; transform: translate(0px);">
                  <div style="position: absolute; left: 0px; top: 0px; z-index: 100; width: 100%;">
                    <div style="position: absolute; left: 0px; top: 0px; z-index: 0;">
                      <div style="position: absolute; z-index: 986; transform: matrix(1, 0, 0, 1, -67, -172);">
                        <div style="position: absolute; left: 0px; top: 0px; width: 256px; height: 256px;">
                          <div style="width: 256px; height: 256px;"></div>
                        </div>
                        <div style="position: absolute; left: -256px; top: 0px; width: 256px; height: 256px;">
                          <div style="width: 256px; height: 256px;"></div>
                        </div>
                        <div style="position: absolute; left: -256px; top: -256px; width: 256px; height: 256px;">
                          <div style="width: 256px; height: 256px;"></div>
                        </div>
                        <div style="position: absolute; left: 0px; top: -256px; width: 256px; height: 256px;">
                          <div style="width: 256px; height: 256px;"></div>
                        </div>
                        <div style="position: absolute; left: 256px; top: -256px; width: 256px; height: 256px;">
                          <div style="width: 256px; height: 256px;"></div>
                        </div>
                        <div style="position: absolute; left: 256px; top: 0px; width: 256px; height: 256px;">
                          <div style="width: 256px; height: 256px;"></div>
                        </div>
                        <div style="position: absolute; left: 256px; top: 256px; width: 256px; height: 256px;">
                          <div style="width: 256px; height: 256px;"></div>
                        </div>
                        <div style="position: absolute; left: 0px; top: 256px; width: 256px; height: 256px;">
                          <div style="width: 256px; height: 256px;"></div>
                        </div>
                        <div style="position: absolute; left: -256px; top: 256px; width: 256px; height: 256px;">
                          <div style="width: 256px; height: 256px;"></div>
                        </div>
                        <div style="position: absolute; left: -512px; top: 256px; width: 256px; height: 256px;">
                          <div style="width: 256px; height: 256px;"></div>
                        </div>
                        <div style="position: absolute; left: -512px; top: 0px; width: 256px; height: 256px;">
                          <div style="width: 256px; height: 256px;"></div>
                        </div>
                        <div style="position: absolute; left: -512px; top: -256px; width: 256px; height: 256px;">
                          <div style="width: 256px; height: 256px;"></div>
                        </div>
                        <div style="position: absolute; left: 512px; top: -256px; width: 256px; height: 256px;">
                          <div style="width: 256px; height: 256px;"></div>
                        </div>
                        <div style="position: absolute; left: 512px; top: 0px; width: 256px; height: 256px;">
                          <div style="width: 256px; height: 256px;"></div>
                        </div>
                        <div style="position: absolute; left: 512px; top: 256px; width: 256px; height: 256px;">
                          <div style="width: 256px; height: 256px;"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style="position: absolute; left: 0px; top: 0px; z-index: 101; width: 100%;"></div>
                  <div style="position: absolute; left: 0px; top: 0px; z-index: 102; width: 100%;"></div>
                  <div style="position: absolute; left: 0px; top: 0px; z-index: 103; width: 100%;">
                    <div style="position: absolute; left: 0px; top: 0px; z-index: -1;">
                      <div style="position: absolute; z-index: 986; transform: matrix(1, 0, 0, 1, -67, -172);">
                        <div style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: 0px; top: 0px;"></div>
                        <div style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: -256px; top: 0px;"></div>
                        <div style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: -256px; top: -256px;"></div>
                        <div style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: 0px; top: -256px;"></div>
                        <div style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: 256px; top: -256px;"></div>
                        <div style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: 256px; top: 0px;"></div>
                        <div style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: 256px; top: 256px;"></div>
                        <div style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: 0px; top: 256px;"></div>
                        <div style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: -256px; top: 256px;"></div>
                        <div style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: -512px; top: 256px;"></div>
                        <div style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: -512px; top: 0px;"></div>
                        <div style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: -512px; top: -256px;"></div>
                        <div style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: 512px; top: -256px;"></div>
                        <div style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: 512px; top: 0px;"></div>
                        <div style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: 512px; top: 256px;"></div>
                      </div>
                    </div>
                    <div style="width: 40px; height: 40px; overflow: hidden; position: absolute; left: 614px; top: -638px; z-index: -598;">
                      <img
                        style="position: absolute; left: 0px; top: 0px; user-select: none; width: 40px; height: 40px; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                        alt=""
                        src="Lazz%20Pharma%20Limited_files/mapicon-40x40-new2.png"
                        draggable="false"
                      />
                    </div>
                    <div style="width: 40px; height: 40px; overflow: hidden; position: absolute; left: 317px; top: -12715px; z-index: -12675;">
                      <img
                        style="position: absolute; left: 0px; top: 0px; user-select: none; width: 40px; height: 40px; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                        alt=""
                        src="Lazz%20Pharma%20Limited_files/mapicon-40x40-new2.png"
                        draggable="false"
                      />
                    </div>
                    <div style="width: 40px; height: 40px; overflow: hidden; position: absolute; left: 3306px; top: 6597px; z-index: 6637;">
                      <img
                        style="position: absolute; left: 0px; top: 0px; user-select: none; width: 40px; height: 40px; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                        alt=""
                        src="Lazz%20Pharma%20Limited_files/mapicon-40x40-new2.png"
                        draggable="false"
                      />
                    </div>
                    <div style="width: 40px; height: 40px; overflow: hidden; position: absolute; left: 329px; top: -6031px; z-index: -5991;">
                      <img
                        style="position: absolute; left: 0px; top: 0px; user-select: none; width: 40px; height: 40px; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                        alt=""
                        src="Lazz%20Pharma%20Limited_files/mapicon-40x40-new2.png"
                        draggable="false"
                      />
                    </div>
                    <div style="width: 40px; height: 40px; overflow: hidden; position: absolute; left: 412px; top: 361px; z-index: 401;">
                      <img
                        style="position: absolute; left: 0px; top: 0px; user-select: none; width: 40px; height: 40px; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                        alt=""
                        src="Lazz%20Pharma%20Limited_files/mapicon-40x40-new2.png"
                        draggable="false"
                      />
                    </div>
                    <div style="width: 40px; height: 40px; overflow: hidden; position: absolute; left: -1px; top: 21px; z-index: 61;">
                      <img
                        style="position: absolute; left: 0px; top: 0px; user-select: none; width: 40px; height: 40px; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                        alt=""
                        src="Lazz%20Pharma%20Limited_files/mapicon-40x40-new2.png"
                        draggable="false"
                      />
                    </div>
                    <div style="width: 40px; height: 40px; overflow: hidden; position: absolute; left: 794px; top: 585px; z-index: 625;">
                      <img
                        style="position: absolute; left: 0px; top: 0px; user-select: none; width: 40px; height: 40px; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                        alt=""
                        src="Lazz%20Pharma%20Limited_files/mapicon-40x40-new2.png"
                        draggable="false"
                      />
                    </div>
                    <div style="width: 40px; height: 40px; overflow: hidden; position: absolute; left: 271px; top: 31px; z-index: 71;">
                      <img
                        style="position: absolute; left: 0px; top: 0px; user-select: none; width: 40px; height: 40px; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                        alt=""
                        src="Lazz%20Pharma%20Limited_files/mapicon-40x40-new2.png"
                        draggable="false"
                      />
                    </div>
                    <div style="width: 40px; height: 40px; overflow: hidden; position: absolute; left: -11739px; top: -13996px; z-index: -13956;">
                      <img
                        style="position: absolute; left: 0px; top: 0px; user-select: none; width: 40px; height: 40px; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                        alt=""
                        src="Lazz%20Pharma%20Limited_files/mapicon-40x40-new2.png"
                        draggable="false"
                      />
                    </div>
                    <div style="width: 40px; height: 40px; overflow: hidden; position: absolute; left: -4379px; top: -1421px; z-index: -1381;">
                      <img
                        style="position: absolute; left: 0px; top: 0px; user-select: none; width: 40px; height: 40px; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                        alt=""
                        src="Lazz%20Pharma%20Limited_files/mapicon-40x40-new2.png"
                        draggable="false"
                      />
                    </div>
                    <div style="width: 40px; height: 40px; overflow: hidden; position: absolute; left: 176px; top: -1601px; z-index: -1561;">
                      <img
                        style="position: absolute; left: 0px; top: 0px; user-select: none; width: 40px; height: 40px; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                        alt=""
                        src="Lazz%20Pharma%20Limited_files/mapicon-40x40-new2.png"
                        draggable="false"
                      />
                    </div>
                    <div style="width: 40px; height: 40px; overflow: hidden; position: absolute; left: -27px; top: -29px; z-index: 11;">
                      <img
                        style="position: absolute; left: 0px; top: 0px; user-select: none; width: 40px; height: 40px; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                        alt=""
                        src="Lazz%20Pharma%20Limited_files/mapicon-40x40-new2.png"
                        draggable="false"
                      />
                    </div>
                    <div style="width: 40px; height: 40px; overflow: hidden; position: absolute; left: 518px; top: -513px; z-index: -473;">
                      <img
                        style="position: absolute; left: 0px; top: 0px; user-select: none; width: 40px; height: 40px; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                        alt=""
                        src="Lazz%20Pharma%20Limited_files/mapicon-40x40-new2.png"
                        draggable="false"
                      />
                    </div>
                    <div style="width: 40px; height: 40px; overflow: hidden; position: absolute; left: 77px; top: -546px; z-index: -506;">
                      <img
                        style="position: absolute; left: 0px; top: 0px; user-select: none; width: 40px; height: 40px; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                        alt=""
                        src="Lazz%20Pharma%20Limited_files/mapicon-40x40-new2.png"
                        draggable="false"
                      />
                    </div>
                    <div style="width: 40px; height: 40px; overflow: hidden; position: absolute; left: -1451px; top: -1154px; z-index: -1114;">
                      <img
                        style="position: absolute; left: 0px; top: 0px; user-select: none; width: 40px; height: 40px; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                        alt=""
                        src="Lazz%20Pharma%20Limited_files/mapicon-40x40-new2.png"
                        draggable="false"
                      />
                    </div>
                    <div style="width: 40px; height: 40px; overflow: hidden; position: absolute; left: 367px; top: -12930px; z-index: -12890;">
                      <img
                        style="position: absolute; left: 0px; top: 0px; user-select: none; width: 40px; height: 40px; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                        alt=""
                        src="Lazz%20Pharma%20Limited_files/mapicon-40x40-new2.png"
                        draggable="false"
                      />
                    </div>
                    <div style="width: 40px; height: 40px; overflow: hidden; position: absolute; left: -13276px; top: -25804px; z-index: -25764;">
                      <img
                        style="position: absolute; left: 0px; top: 0px; user-select: none; width: 40px; height: 40px; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                        alt=""
                        src="Lazz%20Pharma%20Limited_files/mapicon-40x40-new2.png"
                        draggable="false"
                      />
                    </div>
                    <div style="width: 40px; height: 40px; overflow: hidden; position: absolute; left: 435px; top: -131px; z-index: -91;">
                      <img
                        style="position: absolute; left: 0px; top: 0px; user-select: none; width: 40px; height: 40px; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                        alt=""
                        src="Lazz%20Pharma%20Limited_files/mapicon-40x40-new2.png"
                        draggable="false"
                      />
                    </div>
                    <div style="width: 40px; height: 40px; overflow: hidden; position: absolute; left: -20px; top: -40px; z-index: 0;">
                      <img
                        style="position: absolute; left: 0px; top: 0px; user-select: none; width: 40px; height: 40px; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                        alt=""
                        src="Lazz%20Pharma%20Limited_files/mapicon-40x40-new2.png"
                        draggable="false"
                      />
                    </div>
                    <div style="width: 40px; height: 40px; overflow: hidden; position: absolute; left: 3970px; top: -2335px; z-index: -2295;">
                      <img
                        style="position: absolute; left: 0px; top: 0px; user-select: none; width: 40px; height: 40px; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                        alt=""
                        src="Lazz%20Pharma%20Limited_files/mapicon-40x40-new2.png"
                        draggable="false"
                      />
                    </div>
                    <div style="width: 40px; height: 40px; overflow: hidden; position: absolute; left: -202px; top: -1027px; z-index: -987;">
                      <img
                        style="position: absolute; left: 0px; top: 0px; user-select: none; width: 40px; height: 40px; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                        alt=""
                        src="Lazz%20Pharma%20Limited_files/mapicon-40x40-new2.png"
                        draggable="false"
                      />
                    </div>
                    <div style="width: 40px; height: 40px; overflow: hidden; position: absolute; left: -191px; top: -342px; z-index: -302;">
                      <img
                        style="position: absolute; left: 0px; top: 0px; user-select: none; width: 40px; height: 40px; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                        alt=""
                        src="Lazz%20Pharma%20Limited_files/mapicon-40x40-new2.png"
                        draggable="false"
                      />
                    </div>
                    <div style="width: 40px; height: 40px; overflow: hidden; position: absolute; left: 413px; top: -27px; z-index: 13;">
                      <img
                        style="position: absolute; left: 0px; top: 0px; user-select: none; width: 40px; height: 40px; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                        alt=""
                        src="Lazz%20Pharma%20Limited_files/mapicon-40x40-new2.png"
                        draggable="false"
                      />
                    </div>
                    <div style="width: 40px; height: 40px; overflow: hidden; position: absolute; left: 507px; top: -1047px; z-index: -1007;">
                      <img
                        style="position: absolute; left: 0px; top: 0px; user-select: none; width: 40px; height: 40px; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                        alt=""
                        src="Lazz%20Pharma%20Limited_files/mapicon-40x40-new2.png"
                        draggable="false"
                      />
                    </div>
                    <div style="width: 40px; height: 40px; overflow: hidden; position: absolute; left: 565px; top: 502px; z-index: 542;">
                      <img
                        style="position: absolute; left: 0px; top: 0px; user-select: none; width: 40px; height: 40px; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                        alt=""
                        src="Lazz%20Pharma%20Limited_files/mapicon-40x40-new2.png"
                        draggable="false"
                      />
                    </div>
                    <div style="width: 40px; height: 40px; overflow: hidden; position: absolute; left: -5416px; top: -6469px; z-index: -6429;">
                      <img
                        style="position: absolute; left: 0px; top: 0px; user-select: none; width: 40px; height: 40px; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                        alt=""
                        src="Lazz%20Pharma%20Limited_files/mapicon-40x40-new2.png"
                        draggable="false"
                      />
                    </div>
                    <div style="width: 40px; height: 40px; overflow: hidden; position: absolute; left: -109px; top: 40px; z-index: 80;">
                      <img
                        style="position: absolute; left: 0px; top: 0px; user-select: none; width: 40px; height: 40px; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                        alt=""
                        src="Lazz%20Pharma%20Limited_files/mapicon-40x40-new2.png"
                        draggable="false"
                      />
                    </div>
                    <div style="width: 40px; height: 40px; overflow: hidden; position: absolute; left: -79px; top: 13254px; z-index: 13294;">
                      <img
                        style="position: absolute; left: 0px; top: 0px; user-select: none; width: 40px; height: 40px; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                        alt=""
                        src="Lazz%20Pharma%20Limited_files/mapicon-40x40-new2.png"
                        draggable="false"
                      />
                    </div>
                    <div style="width: 40px; height: 40px; overflow: hidden; position: absolute; left: -6346px; top: 1832px; z-index: 1872;">
                      <img
                        style="position: absolute; left: 0px; top: 0px; user-select: none; width: 40px; height: 40px; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                        alt=""
                        src="Lazz%20Pharma%20Limited_files/mapicon-40x40-new2.png"
                        draggable="false"
                      />
                    </div>
                    <div style="width: 40px; height: 40px; overflow: hidden; position: absolute; left: 216px; top: -1430px; z-index: -1390;">
                      <img
                        style="position: absolute; left: 0px; top: 0px; user-select: none; width: 40px; height: 40px; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                        alt=""
                        src="Lazz%20Pharma%20Limited_files/mapicon-40x40-new2.png"
                        draggable="false"
                      />
                    </div>
                    <div style="width: 40px; height: 40px; overflow: hidden; position: absolute; left: -13294px; top: -25679px; z-index: -25639;">
                      <img
                        style="position: absolute; left: 0px; top: 0px; user-select: none; width: 40px; height: 40px; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                        alt=""
                        src="Lazz%20Pharma%20Limited_files/mapicon-40x40-new2.png"
                        draggable="false"
                      />
                    </div>
                    <div style="width: 40px; height: 40px; overflow: hidden; position: absolute; left: 17386px; top: -14716px; z-index: -14676;">
                      <img
                        style="position: absolute; left: 0px; top: 0px; user-select: none; width: 40px; height: 40px; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                        alt=""
                        src="Lazz%20Pharma%20Limited_files/mapicon-40x40-new2.png"
                        draggable="false"
                      />
                    </div>
                    <div style="width: 40px; height: 40px; overflow: hidden; position: absolute; left: 226px; top: -285px; z-index: -245;">
                      <img
                        style="position: absolute; left: 0px; top: 0px; user-select: none; width: 40px; height: 40px; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                        alt=""
                        src="Lazz%20Pharma%20Limited_files/mapicon-40x40-new2.png"
                        draggable="false"
                      />
                    </div>
                    <div style="width: 40px; height: 40px; overflow: hidden; position: absolute; left: 246px; top: 8px; z-index: 48;">
                      <img
                        style="position: absolute; left: 0px; top: 0px; user-select: none; width: 40px; height: 40px; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                        alt=""
                        src="Lazz%20Pharma%20Limited_files/mapicon-40x40-new2.png"
                        draggable="false"
                      />
                    </div>
                    <div style="width: 40px; height: 40px; overflow: hidden; position: absolute; left: 11858px; top: 9381px; z-index: 9421;">
                      <img
                        style="position: absolute; left: 0px; top: 0px; user-select: none; width: 40px; height: 40px; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                        alt=""
                        src="Lazz%20Pharma%20Limited_files/mapicon-40x40-new2.png"
                        draggable="false"
                      />
                    </div>
                    <div style="width: 40px; height: 40px; overflow: hidden; position: absolute; left: 20842px; top: -13810px; z-index: -13770;">
                      <img
                        style="position: absolute; left: 0px; top: 0px; user-select: none; width: 40px; height: 40px; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                        alt=""
                        src="Lazz%20Pharma%20Limited_files/mapicon-40x40-new2.png"
                        draggable="false"
                      />
                    </div>
                    <div style="width: 40px; height: 40px; overflow: hidden; position: absolute; left: 16803px; top: 17592px; z-index: 17632;">
                      <img
                        style="position: absolute; left: 0px; top: 0px; user-select: none; width: 40px; height: 40px; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                        alt=""
                        src="Lazz%20Pharma%20Limited_files/mapicon-40x40-new2.png"
                        draggable="false"
                      />
                    </div>
                    <div style="width: 40px; height: 40px; overflow: hidden; position: absolute; left: 438px; top: 189px; z-index: 229;">
                      <img
                        style="position: absolute; left: 0px; top: 0px; user-select: none; width: 40px; height: 40px; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                        alt=""
                        src="Lazz%20Pharma%20Limited_files/mapicon-40x40-new2.png"
                        draggable="false"
                      />
                    </div>
                    <div style="width: 40px; height: 40px; overflow: hidden; position: absolute; left: 476px; top: -3201px; z-index: -3161;">
                      <img
                        style="position: absolute; left: 0px; top: 0px; user-select: none; width: 40px; height: 40px; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                        alt=""
                        src="Lazz%20Pharma%20Limited_files/mapicon-40x40-new2.png"
                        draggable="false"
                      />
                    </div>
                    <div style="width: 40px; height: 40px; overflow: hidden; position: absolute; left: 344px; top: 118px; z-index: 158;">
                      <img
                        style="position: absolute; left: 0px; top: 0px; user-select: none; width: 40px; height: 40px; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                        alt=""
                        src="Lazz%20Pharma%20Limited_files/mapicon-40x40-new2.png"
                        draggable="false"
                      />
                    </div>
                    <div style="width: 40px; height: 40px; overflow: hidden; position: absolute; left: 631px; top: -180px; z-index: -140;">
                      <img
                        style="position: absolute; left: 0px; top: 0px; user-select: none; width: 40px; height: 40px; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                        alt=""
                        src="Lazz%20Pharma%20Limited_files/mapicon-40x40-new2.png"
                        draggable="false"
                      />
                    </div>
                    <div style="width: 40px; height: 40px; overflow: hidden; position: absolute; left: 558px; top: 259px; z-index: 299;">
                      <img
                        style="position: absolute; left: 0px; top: 0px; user-select: none; width: 40px; height: 40px; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                        alt=""
                        src="Lazz%20Pharma%20Limited_files/mapicon-40x40-new2.png"
                        draggable="false"
                      />
                    </div>
                    <div style="width: 40px; height: 40px; overflow: hidden; position: absolute; left: -6443px; top: 9452px; z-index: 9492;">
                      <img
                        style="position: absolute; left: 0px; top: 0px; user-select: none; width: 40px; height: 40px; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                        alt=""
                        src="Lazz%20Pharma%20Limited_files/mapicon-40x40-new2.png"
                        draggable="false"
                      />
                    </div>
                    <div style="width: 40px; height: 40px; overflow: hidden; position: absolute; left: 199px; top: 312px; z-index: 352;">
                      <img
                        style="position: absolute; left: 0px; top: 0px; user-select: none; width: 40px; height: 40px; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                        alt=""
                        src="Lazz%20Pharma%20Limited_files/mapicon-40x40-new2.png"
                        draggable="false"
                      />
                    </div>
                    <div style="width: 40px; height: 40px; overflow: hidden; position: absolute; left: 361px; top: 491px; z-index: 531;">
                      <img
                        style="position: absolute; left: 0px; top: 0px; user-select: none; width: 40px; height: 40px; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                        alt=""
                        src="Lazz%20Pharma%20Limited_files/mapicon-40x40-new2.png"
                        draggable="false"
                      />
                    </div>
                    <div style="width: 40px; height: 40px; overflow: hidden; position: absolute; left: 238px; top: -541px; z-index: -501;">
                      <img
                        style="position: absolute; left: 0px; top: 0px; user-select: none; width: 40px; height: 40px; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                        alt=""
                        src="Lazz%20Pharma%20Limited_files/mapicon-40x40-new2.png"
                        draggable="false"
                      />
                    </div>
                    <div style="width: 40px; height: 40px; overflow: hidden; position: absolute; left: 103px; top: -102px; z-index: -62;">
                      <img
                        style="position: absolute; left: 0px; top: 0px; user-select: none; width: 40px; height: 40px; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                        alt=""
                        src="Lazz%20Pharma%20Limited_files/mapicon-40x40-new2.png"
                        draggable="false"
                      />
                    </div>
                    <div style="width: 40px; height: 40px; overflow: hidden; position: absolute; left: -9543px; top: 11895px; z-index: 11935;">
                      <img
                        style="position: absolute; left: 0px; top: 0px; user-select: none; width: 40px; height: 40px; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                        alt=""
                        src="Lazz%20Pharma%20Limited_files/mapicon-40x40-new2.png"
                        draggable="false"
                      />
                    </div>
                    <div style="width: 40px; height: 40px; overflow: hidden; position: absolute; left: 4654px; top: -8793px; z-index: -8753;">
                      <img
                        style="position: absolute; left: 0px; top: 0px; user-select: none; width: 40px; height: 40px; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                        alt=""
                        src="Lazz%20Pharma%20Limited_files/mapicon-40x40-new2.png"
                        draggable="false"
                      />
                    </div>
                    <div style="width: 40px; height: 40px; overflow: hidden; position: absolute; left: 104px; top: 102px; z-index: 142;">
                      <img
                        style="position: absolute; left: 0px; top: 0px; user-select: none; width: 40px; height: 40px; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                        alt=""
                        src="Lazz%20Pharma%20Limited_files/mapicon-40x40-new2.png"
                        draggable="false"
                      />
                    </div>
                    <div style="width: 40px; height: 40px; overflow: hidden; position: absolute; left: -236px; top: -185px; z-index: -145;">
                      <img
                        style="position: absolute; left: 0px; top: 0px; user-select: none; width: 40px; height: 40px; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                        alt=""
                        src="Lazz%20Pharma%20Limited_files/mapicon-40x40-new2.png"
                        draggable="false"
                      />
                    </div>
                    <div style="width: 40px; height: 40px; overflow: hidden; position: absolute; left: -199px; top: -638px; z-index: -598;">
                      <img
                        style="position: absolute; left: 0px; top: 0px; user-select: none; width: 40px; height: 40px; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                        alt=""
                        src="Lazz%20Pharma%20Limited_files/mapicon-40x40-new2.png"
                        draggable="false"
                      />
                    </div>
                    <div style="width: 40px; height: 40px; overflow: hidden; position: absolute; left: 9367px; top: 3630px; z-index: 3670;">
                      <img
                        style="position: absolute; left: 0px; top: 0px; user-select: none; width: 40px; height: 40px; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                        alt=""
                        src="Lazz%20Pharma%20Limited_files/mapicon-40x40-new2.png"
                        draggable="false"
                      />
                    </div>
                    <div style="width: 40px; height: 40px; overflow: hidden; position: absolute; left: -323px; top: -589px; z-index: -549;">
                      <img
                        style="position: absolute; left: 0px; top: 0px; user-select: none; width: 40px; height: 40px; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                        alt=""
                        src="Lazz%20Pharma%20Limited_files/mapicon-40x40-new2.png"
                        draggable="false"
                      />
                    </div>
                    <div style="width: 40px; height: 40px; overflow: hidden; position: absolute; left: 4091px; top: -14487px; z-index: -14447;">
                      <img
                        style="position: absolute; left: 0px; top: 0px; user-select: none; width: 40px; height: 40px; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                        alt=""
                        src="Lazz%20Pharma%20Limited_files/mapicon-40x40-new2.png"
                        draggable="false"
                      />
                    </div>
                    <div style="width: 40px; height: 40px; overflow: hidden; position: absolute; left: -101px; top: -738px; z-index: -698;">
                      <img
                        style="position: absolute; left: 0px; top: 0px; user-select: none; width: 40px; height: 40px; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                        alt=""
                        src="Lazz%20Pharma%20Limited_files/mapicon-40x40-new2.png"
                        draggable="false"
                      />
                    </div>
                    <div style="width: 40px; height: 40px; overflow: hidden; position: absolute; left: -289px; top: -866px; z-index: -826;">
                      <img
                        style="position: absolute; left: 0px; top: 0px; user-select: none; width: 40px; height: 40px; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                        alt=""
                        src="Lazz%20Pharma%20Limited_files/mapicon-40x40-new2.png"
                        draggable="false"
                      />
                    </div>
                    <div style="width: 40px; height: 40px; overflow: hidden; position: absolute; left: -9742px; top: 11804px; z-index: 11844;">
                      <img
                        style="position: absolute; left: 0px; top: 0px; user-select: none; width: 40px; height: 40px; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                        alt=""
                        src="Lazz%20Pharma%20Limited_files/mapicon-40x40-new2.png"
                        draggable="false"
                      />
                    </div>
                  </div>
                  <div style="position: absolute; left: 0px; top: 0px; z-index: 0;">
                    <div style="position: absolute; z-index: 986; transform: matrix(1, 0, 0, 1, -67, -172);">
                      <div style="position: absolute; left: 0px; top: 0px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;">
                        <img
                          style="width: 256px; height: 256px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          draggable="false"
                          alt=""
                          role="presentation"
                          src="Lazz%20Pharma%20Limited_files/vt_008.png"
                        />
                      </div>
                      <div style="position: absolute; left: -256px; top: 0px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;">
                        <img
                          style="width: 256px; height: 256px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          draggable="false"
                          alt=""
                          role="presentation"
                          src="Lazz%20Pharma%20Limited_files/vt_012.png"
                        />
                      </div>
                      <div style="position: absolute; left: -256px; top: -256px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;">
                        <img
                          style="width: 256px; height: 256px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          draggable="false"
                          alt=""
                          role="presentation"
                          src="Lazz%20Pharma%20Limited_files/vt_007.png"
                        />
                      </div>
                      <div style="position: absolute; left: 0px; top: -256px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;">
                        <img
                          style="width: 256px; height: 256px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          draggable="false"
                          alt=""
                          role="presentation"
                          src="Lazz%20Pharma%20Limited_files/vt_010.png"
                        />
                      </div>
                      <div style="position: absolute; left: 256px; top: -256px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;">
                        <img
                          style="width: 256px; height: 256px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          draggable="false"
                          alt=""
                          role="presentation"
                          src="Lazz%20Pharma%20Limited_files/vt.png"
                        />
                      </div>
                      <div style="position: absolute; left: 256px; top: 0px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;">
                        <img
                          style="width: 256px; height: 256px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          draggable="false"
                          alt=""
                          role="presentation"
                          src="Lazz%20Pharma%20Limited_files/vt_013.png"
                        />
                      </div>
                      <div style="position: absolute; left: 256px; top: 256px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;">
                        <img
                          style="width: 256px; height: 256px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          draggable="false"
                          alt=""
                          role="presentation"
                          src="Lazz%20Pharma%20Limited_files/vt_009.png"
                        />
                      </div>
                      <div style="position: absolute; left: 0px; top: 256px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;">
                        <img
                          style="width: 256px; height: 256px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          draggable="false"
                          alt=""
                          role="presentation"
                          src="Lazz%20Pharma%20Limited_files/vt_004.png"
                        />
                      </div>
                      <div style="position: absolute; left: -256px; top: 256px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;">
                        <img
                          style="width: 256px; height: 256px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          draggable="false"
                          alt=""
                          role="presentation"
                          src="Lazz%20Pharma%20Limited_files/vt_002.png"
                        />
                      </div>
                      <div style="position: absolute; left: -512px; top: 256px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;">
                        <img
                          style="width: 256px; height: 256px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          draggable="false"
                          alt=""
                          role="presentation"
                          src="Lazz%20Pharma%20Limited_files/vt_015.png"
                        />
                      </div>
                      <div style="position: absolute; left: -512px; top: 0px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;">
                        <img
                          style="width: 256px; height: 256px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          draggable="false"
                          alt=""
                          role="presentation"
                          src="Lazz%20Pharma%20Limited_files/vt_006.png"
                        />
                      </div>
                      <div style="position: absolute; left: -512px; top: -256px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;">
                        <img
                          style="width: 256px; height: 256px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          draggable="false"
                          alt=""
                          role="presentation"
                          src="Lazz%20Pharma%20Limited_files/vt_003.png"
                        />
                      </div>
                      <div style="position: absolute; left: 512px; top: -256px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;">
                        <img
                          style="width: 256px; height: 256px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          draggable="false"
                          alt=""
                          role="presentation"
                          src="Lazz%20Pharma%20Limited_files/vt_014.png"
                        />
                      </div>
                      <div style="position: absolute; left: 512px; top: 0px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;">
                        <img
                          style="width: 256px; height: 256px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          draggable="false"
                          alt=""
                          role="presentation"
                          src="Lazz%20Pharma%20Limited_files/vt_005.png"
                        />
                      </div>
                      <div style="position: absolute; left: 512px; top: 256px; width: 256px; height: 256px; transition: opacity 200ms linear 0s;">
                        <img
                          style="width: 256px; height: 256px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          draggable="false"
                          alt=""
                          role="presentation"
                          src="Lazz%20Pharma%20Limited_files/vt_011.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div style="z-index: 3; position: absolute; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; left: 0px; top: 0px; touch-action: pan-x pan-y;">
                  <div style="z-index: 4; position: absolute; left: 50%; top: 50%; width: 100%; transform: translate(0px);">
                    <div style="position: absolute; left: 0px; top: 0px; z-index: 104; width: 100%;"></div>
                    <div style="position: absolute; left: 0px; top: 0px; z-index: 105; width: 100%;"></div>
                    <div style="position: absolute; left: 0px; top: 0px; z-index: 106; width: 100%;">
                      <span
                        id="ED23FDD3-AB54-4BA3-96C2-FD4F84D2C6BF"
                        style="display: none;"
                      >
                        To navigate, press the arrow keys.
                      </span>
                      <div
                        style="width: 40px; height: 40px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: 614px; top: -638px; z-index: -598;"
                        title=""
                        tabindex="-1"
                      >
                        <img
                          style="width: 40px; height: 40px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          alt=""
                          src="Lazz%20Pharma%20Limited_files/transparent.png"
                          draggable="false"
                        />
                      </div>
                      <div
                        style="width: 40px; height: 40px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: 317px; top: -12715px; z-index: -12675;"
                        title=""
                        tabindex="-1"
                      >
                        <img
                          style="width: 40px; height: 40px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          alt=""
                          src="Lazz%20Pharma%20Limited_files/transparent.png"
                          draggable="false"
                        />
                      </div>
                      <div
                        style="width: 40px; height: 40px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: 3306px; top: 6597px; z-index: 6637;"
                        title=""
                        tabindex="-1"
                      >
                        <img
                          style="width: 40px; height: 40px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          alt=""
                          src="Lazz%20Pharma%20Limited_files/transparent.png"
                          draggable="false"
                        />
                      </div>
                      <div
                        style="width: 40px; height: 40px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: 329px; top: -6031px; z-index: -5991;"
                        title=""
                        tabindex="-1"
                      >
                        <img
                          style="width: 40px; height: 40px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          alt=""
                          src="Lazz%20Pharma%20Limited_files/transparent.png"
                          draggable="false"
                        />
                      </div>
                      <div
                        style="width: 40px; height: 40px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: 412px; top: 361px; z-index: 401;"
                        title=""
                        tabindex="-1"
                      >
                        <img
                          style="width: 40px; height: 40px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          alt=""
                          src="Lazz%20Pharma%20Limited_files/transparent.png"
                          draggable="false"
                        />
                      </div>
                      <div
                        style="width: 40px; height: 40px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: -1px; top: 21px; z-index: 61;"
                        title=""
                        tabindex="-1"
                      >
                        <img
                          style="width: 40px; height: 40px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          alt=""
                          src="Lazz%20Pharma%20Limited_files/transparent.png"
                          draggable="false"
                        />
                      </div>
                      <div
                        style="width: 40px; height: 40px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: 794px; top: 585px; z-index: 625;"
                        title=""
                        tabindex="-1"
                      >
                        <img
                          style="width: 40px; height: 40px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          alt=""
                          src="Lazz%20Pharma%20Limited_files/transparent.png"
                          draggable="false"
                        />
                      </div>
                      <div
                        style="width: 40px; height: 40px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: 271px; top: 31px; z-index: 71;"
                        title=""
                        tabindex="-1"
                      >
                        <img
                          style="width: 40px; height: 40px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          alt=""
                          src="Lazz%20Pharma%20Limited_files/transparent.png"
                          draggable="false"
                        />
                      </div>
                      <div
                        style="width: 40px; height: 40px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: -11739px; top: -13996px; z-index: -13956;"
                        title=""
                        tabindex="-1"
                      >
                        <img
                          style="width: 40px; height: 40px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          alt=""
                          src="Lazz%20Pharma%20Limited_files/transparent.png"
                          draggable="false"
                        />
                      </div>
                      <div
                        style="width: 40px; height: 40px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: -4379px; top: -1421px; z-index: -1381;"
                        title=""
                        tabindex="-1"
                      >
                        <img
                          style="width: 40px; height: 40px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          alt=""
                          src="Lazz%20Pharma%20Limited_files/transparent.png"
                          draggable="false"
                        />
                      </div>
                      <div
                        style="width: 40px; height: 40px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: 176px; top: -1601px; z-index: -1561;"
                        title=""
                        tabindex="-1"
                      >
                        <img
                          style="width: 40px; height: 40px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          alt=""
                          src="Lazz%20Pharma%20Limited_files/transparent.png"
                          draggable="false"
                        />
                      </div>
                      <div
                        style="width: 40px; height: 40px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: -27px; top: -29px; z-index: 11;"
                        title=""
                        tabindex="-1"
                      >
                        <img
                          style="width: 40px; height: 40px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          alt=""
                          src="Lazz%20Pharma%20Limited_files/transparent.png"
                          draggable="false"
                        />
                      </div>
                      <div
                        style="width: 40px; height: 40px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: 518px; top: -513px; z-index: -473;"
                        title=""
                        tabindex="-1"
                      >
                        <img
                          style="width: 40px; height: 40px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          alt=""
                          src="Lazz%20Pharma%20Limited_files/transparent.png"
                          draggable="false"
                        />
                      </div>
                      <div
                        style="width: 40px; height: 40px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: 77px; top: -546px; z-index: -506;"
                        title=""
                        tabindex="-1"
                      >
                        <img
                          style="width: 40px; height: 40px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          alt=""
                          src="Lazz%20Pharma%20Limited_files/transparent.png"
                          draggable="false"
                        />
                      </div>
                      <div
                        style="width: 40px; height: 40px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: -1451px; top: -1154px; z-index: -1114;"
                        title=""
                        tabindex="-1"
                      >
                        <img
                          style="width: 40px; height: 40px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          alt=""
                          src="Lazz%20Pharma%20Limited_files/transparent.png"
                          draggable="false"
                        />
                      </div>
                      <div
                        style="width: 40px; height: 40px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: 367px; top: -12930px; z-index: -12890;"
                        title=""
                        tabindex="-1"
                      >
                        <img
                          style="width: 40px; height: 40px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          alt=""
                          src="Lazz%20Pharma%20Limited_files/transparent.png"
                          draggable="false"
                        />
                      </div>
                      <div
                        style="width: 40px; height: 40px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: -13276px; top: -25804px; z-index: -25764;"
                        title=""
                        tabindex="-1"
                      >
                        <img
                          style="width: 40px; height: 40px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          alt=""
                          src="Lazz%20Pharma%20Limited_files/transparent.png"
                          draggable="false"
                        />
                      </div>
                      <div
                        style="width: 40px; height: 40px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: 435px; top: -131px; z-index: -91;"
                        title=""
                        tabindex="-1"
                      >
                        <img
                          style="width: 40px; height: 40px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          alt=""
                          src="Lazz%20Pharma%20Limited_files/transparent.png"
                          draggable="false"
                        />
                      </div>
                      <div
                        style="width: 40px; height: 40px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: -20px; top: -40px; z-index: 0;"
                        title=""
                        tabindex="-1"
                      >
                        <img
                          style="width: 40px; height: 40px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          alt=""
                          src="Lazz%20Pharma%20Limited_files/transparent.png"
                          draggable="false"
                        />
                      </div>
                      <div
                        style="width: 40px; height: 40px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: 3970px; top: -2335px; z-index: -2295;"
                        title=""
                        tabindex="-1"
                      >
                        <img
                          style="width: 40px; height: 40px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          alt=""
                          src="Lazz%20Pharma%20Limited_files/transparent.png"
                          draggable="false"
                        />
                      </div>
                      <div
                        style="width: 40px; height: 40px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: -202px; top: -1027px; z-index: -987;"
                        title=""
                        tabindex="-1"
                      >
                        <img
                          style="width: 40px; height: 40px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          alt=""
                          src="Lazz%20Pharma%20Limited_files/transparent.png"
                          draggable="false"
                        />
                      </div>
                      <div
                        style="width: 40px; height: 40px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: -191px; top: -342px; z-index: -302;"
                        title=""
                        tabindex="-1"
                      >
                        <img
                          style="width: 40px; height: 40px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          alt=""
                          src="Lazz%20Pharma%20Limited_files/transparent.png"
                          draggable="false"
                        />
                      </div>
                      <div
                        style="width: 40px; height: 40px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: 413px; top: -27px; z-index: 13;"
                        title=""
                        tabindex="-1"
                      >
                        <img
                          style="width: 40px; height: 40px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          alt=""
                          src="Lazz%20Pharma%20Limited_files/transparent.png"
                          draggable="false"
                        />
                      </div>
                      <div
                        style="width: 40px; height: 40px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: 507px; top: -1047px; z-index: -1007;"
                        title=""
                        tabindex="-1"
                      >
                        <img
                          style="width: 40px; height: 40px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          alt=""
                          src="Lazz%20Pharma%20Limited_files/transparent.png"
                          draggable="false"
                        />
                      </div>
                      <div
                        style="width: 40px; height: 40px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: 565px; top: 502px; z-index: 542;"
                        title=""
                        tabindex="-1"
                      >
                        <img
                          style="width: 40px; height: 40px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          alt=""
                          src="Lazz%20Pharma%20Limited_files/transparent.png"
                          draggable="false"
                        />
                      </div>
                      <div
                        style="width: 40px; height: 40px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: -5416px; top: -6469px; z-index: -6429;"
                        title=""
                        tabindex="-1"
                      >
                        <img
                          style="width: 40px; height: 40px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          alt=""
                          src="Lazz%20Pharma%20Limited_files/transparent.png"
                          draggable="false"
                        />
                      </div>
                      <div
                        style="width: 40px; height: 40px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: -109px; top: 40px; z-index: 80;"
                        title=""
                        tabindex="-1"
                      >
                        <img
                          style="width: 40px; height: 40px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          alt=""
                          src="Lazz%20Pharma%20Limited_files/transparent.png"
                          draggable="false"
                        />
                      </div>
                      <div
                        style="width: 40px; height: 40px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: -79px; top: 13254px; z-index: 13294;"
                        title=""
                        tabindex="-1"
                      >
                        <img
                          style="width: 40px; height: 40px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          alt=""
                          src="Lazz%20Pharma%20Limited_files/transparent.png"
                          draggable="false"
                        />
                      </div>
                      <div
                        style="width: 40px; height: 40px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: -6346px; top: 1832px; z-index: 1872;"
                        title=""
                        tabindex="-1"
                      >
                        <img
                          style="width: 40px; height: 40px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          alt=""
                          src="Lazz%20Pharma%20Limited_files/transparent.png"
                          draggable="false"
                        />
                      </div>
                      <div
                        style="width: 40px; height: 40px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: 216px; top: -1430px; z-index: -1390;"
                        title=""
                        tabindex="-1"
                      >
                        <img
                          style="width: 40px; height: 40px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          alt=""
                          src="Lazz%20Pharma%20Limited_files/transparent.png"
                          draggable="false"
                        />
                      </div>
                      <div
                        style="width: 40px; height: 40px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: -13294px; top: -25679px; z-index: -25639;"
                        title=""
                        tabindex="-1"
                      >
                        <img
                          style="width: 40px; height: 40px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          alt=""
                          src="Lazz%20Pharma%20Limited_files/transparent.png"
                          draggable="false"
                        />
                      </div>
                      <div
                        style="width: 40px; height: 40px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: 17386px; top: -14716px; z-index: -14676;"
                        title=""
                        tabindex="-1"
                      >
                        <img
                          style="width: 40px; height: 40px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          alt=""
                          src="Lazz%20Pharma%20Limited_files/transparent.png"
                          draggable="false"
                        />
                      </div>
                      <div
                        style="width: 40px; height: 40px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: 226px; top: -285px; z-index: -245;"
                        title=""
                        tabindex="-1"
                      >
                        <img
                          style="width: 40px; height: 40px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          alt=""
                          src="Lazz%20Pharma%20Limited_files/transparent.png"
                          draggable="false"
                        />
                      </div>
                      <div
                        style="width: 40px; height: 40px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: 246px; top: 8px; z-index: 48;"
                        title=""
                        tabindex="-1"
                      >
                        <img
                          style="width: 40px; height: 40px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          alt=""
                          src="Lazz%20Pharma%20Limited_files/transparent.png"
                          draggable="false"
                        />
                      </div>
                      <div
                        style="width: 40px; height: 40px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: 11858px; top: 9381px; z-index: 9421;"
                        title=""
                        tabindex="-1"
                      >
                        <img
                          style="width: 40px; height: 40px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          alt=""
                          src="Lazz%20Pharma%20Limited_files/transparent.png"
                          draggable="false"
                        />
                      </div>
                      <div
                        style="width: 40px; height: 40px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: 20842px; top: -13810px; z-index: -13770;"
                        title=""
                        tabindex="-1"
                      >
                        <img
                          style="width: 40px; height: 40px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          alt=""
                          src="Lazz%20Pharma%20Limited_files/transparent.png"
                          draggable="false"
                        />
                      </div>
                      <div
                        style="width: 40px; height: 40px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: 16803px; top: 17592px; z-index: 17632;"
                        title=""
                        tabindex="-1"
                      >
                        <img
                          style="width: 40px; height: 40px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          alt=""
                          src="Lazz%20Pharma%20Limited_files/transparent.png"
                          draggable="false"
                        />
                      </div>
                      <div
                        style="width: 40px; height: 40px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: 438px; top: 189px; z-index: 229;"
                        title=""
                        tabindex="-1"
                      >
                        <img
                          style="width: 40px; height: 40px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          alt=""
                          src="Lazz%20Pharma%20Limited_files/transparent.png"
                          draggable="false"
                        />
                      </div>
                      <div
                        style="width: 40px; height: 40px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: 476px; top: -3201px; z-index: -3161;"
                        title=""
                        tabindex="-1"
                      >
                        <img
                          style="width: 40px; height: 40px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          alt=""
                          src="Lazz%20Pharma%20Limited_files/transparent.png"
                          draggable="false"
                        />
                      </div>
                      <div
                        style="width: 40px; height: 40px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: 344px; top: 118px; z-index: 158;"
                        title=""
                        tabindex="-1"
                      >
                        <img
                          style="width: 40px; height: 40px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          alt=""
                          src="Lazz%20Pharma%20Limited_files/transparent.png"
                          draggable="false"
                        />
                      </div>
                      <div
                        style="width: 40px; height: 40px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: 631px; top: -180px; z-index: -140;"
                        title=""
                        tabindex="-1"
                      >
                        <img
                          style="width: 40px; height: 40px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          alt=""
                          src="Lazz%20Pharma%20Limited_files/transparent.png"
                          draggable="false"
                        />
                      </div>
                      <div
                        style="width: 40px; height: 40px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: 558px; top: 259px; z-index: 299;"
                        title=""
                        tabindex="-1"
                      >
                        <img
                          style="width: 40px; height: 40px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          alt=""
                          src="Lazz%20Pharma%20Limited_files/transparent.png"
                          draggable="false"
                        />
                      </div>
                      <div
                        style="width: 40px; height: 40px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: -6443px; top: 9452px; z-index: 9492;"
                        title=""
                        tabindex="-1"
                      >
                        <img
                          style="width: 40px; height: 40px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          alt=""
                          src="Lazz%20Pharma%20Limited_files/transparent.png"
                          draggable="false"
                        />
                      </div>
                      <div
                        style="width: 40px; height: 40px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: 199px; top: 312px; z-index: 352;"
                        title=""
                        tabindex="-1"
                      >
                        <img
                          style="width: 40px; height: 40px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          alt=""
                          src="Lazz%20Pharma%20Limited_files/transparent.png"
                          draggable="false"
                        />
                      </div>
                      <div
                        style="width: 40px; height: 40px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: 361px; top: 491px; z-index: 531;"
                        title=""
                        tabindex="-1"
                      >
                        <img
                          style="width: 40px; height: 40px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          alt=""
                          src="Lazz%20Pharma%20Limited_files/transparent.png"
                          draggable="false"
                        />
                      </div>
                      <div
                        style="width: 40px; height: 40px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: 238px; top: -541px; z-index: -501;"
                        title=""
                        tabindex="-1"
                      >
                        <img
                          style="width: 40px; height: 40px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          alt=""
                          src="Lazz%20Pharma%20Limited_files/transparent.png"
                          draggable="false"
                        />
                      </div>
                      <div
                        style="width: 40px; height: 40px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: 103px; top: -102px; z-index: -62;"
                        title=""
                        tabindex="-1"
                      >
                        <img
                          style="width: 40px; height: 40px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          alt=""
                          src="Lazz%20Pharma%20Limited_files/transparent.png"
                          draggable="false"
                        />
                      </div>
                      <div
                        style="width: 40px; height: 40px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: -9543px; top: 11895px; z-index: 11935;"
                        title=""
                        tabindex="-1"
                      >
                        <img
                          style="width: 40px; height: 40px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          alt=""
                          src="Lazz%20Pharma%20Limited_files/transparent.png"
                          draggable="false"
                        />
                      </div>
                      <div
                        style="width: 40px; height: 40px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: 4654px; top: -8793px; z-index: -8753;"
                        title=""
                        tabindex="-1"
                      >
                        <img
                          style="width: 40px; height: 40px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          alt=""
                          src="Lazz%20Pharma%20Limited_files/transparent.png"
                          draggable="false"
                        />
                      </div>
                      <div
                        style="width: 40px; height: 40px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: 104px; top: 102px; z-index: 142;"
                        title=""
                        tabindex="-1"
                      >
                        <img
                          style="width: 40px; height: 40px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          alt=""
                          src="Lazz%20Pharma%20Limited_files/transparent.png"
                          draggable="false"
                        />
                      </div>
                      <div
                        style="width: 40px; height: 40px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: -236px; top: -185px; z-index: -145;"
                        title=""
                        tabindex="-1"
                      >
                        <img
                          style="width: 40px; height: 40px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          alt=""
                          src="Lazz%20Pharma%20Limited_files/transparent.png"
                          draggable="false"
                        />
                      </div>
                      <div
                        style="width: 40px; height: 40px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: -199px; top: -638px; z-index: -598;"
                        title=""
                        tabindex="-1"
                      >
                        <img
                          style="width: 40px; height: 40px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          alt=""
                          src="Lazz%20Pharma%20Limited_files/transparent.png"
                          draggable="false"
                        />
                      </div>
                      <div
                        style="width: 40px; height: 40px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: 9367px; top: 3630px; z-index: 3670;"
                        title=""
                        tabindex="-1"
                      >
                        <img
                          style="width: 40px; height: 40px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          alt=""
                          src="Lazz%20Pharma%20Limited_files/transparent.png"
                          draggable="false"
                        />
                      </div>
                      <div
                        style="width: 40px; height: 40px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: -323px; top: -589px; z-index: -549;"
                        title=""
                        tabindex="-1"
                      >
                        <img
                          style="width: 40px; height: 40px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          alt=""
                          src="Lazz%20Pharma%20Limited_files/transparent.png"
                          draggable="false"
                        />
                      </div>
                      <div
                        style="width: 40px; height: 40px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: 4091px; top: -14487px; z-index: -14447;"
                        title=""
                        tabindex="-1"
                      >
                        <img
                          style="width: 40px; height: 40px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          alt=""
                          src="Lazz%20Pharma%20Limited_files/transparent.png"
                          draggable="false"
                        />
                      </div>
                      <div
                        style="width: 40px; height: 40px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: -101px; top: -738px; z-index: -698;"
                        title=""
                        tabindex="-1"
                      >
                        <img
                          style="width: 40px; height: 40px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          alt=""
                          src="Lazz%20Pharma%20Limited_files/transparent.png"
                          draggable="false"
                        />
                      </div>
                      <div
                        style="width: 40px; height: 40px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: -289px; top: -866px; z-index: -826;"
                        title=""
                        tabindex="-1"
                      >
                        <img
                          style="width: 40px; height: 40px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          alt=""
                          src="Lazz%20Pharma%20Limited_files/transparent.png"
                          draggable="false"
                        />
                      </div>
                      <div
                        style="width: 40px; height: 40px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: -9742px; top: 11804px; z-index: 11844;"
                        title=""
                        tabindex="-1"
                      >
                        <img
                          style="width: 40px; height: 40px; user-select: none; border: 0px none; padding: 0px; margin: 0px; max-width: none;"
                          alt=""
                          src="Lazz%20Pharma%20Limited_files/transparent.png"
                          draggable="false"
                        />
                      </div>
                    </div>
                    <div style="position: absolute; left: 0px; top: 0px; z-index: 107; width: 100%;"></div>
                  </div>
                </div>
                <div
                  style="z-index: 4; position: absolute; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; left: 0px; top: 0px; opacity: 0;"
                  class="gm-style-moc"
                >
                  <p class="gm-style-mot"></p>
                </div>
              </div>
              <iframe
                aria-hidden="true"
                tabindex="-1"
                style="z-index: -1; position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; border: medium none;"
                frameborder="0"
              ></iframe>
              <div style="pointer-events: none; width: 100%; height: 100%; box-sizing: border-box; position: absolute; z-index: 1000002; opacity: 0; border: 2px solid rgb(26, 115, 232);"></div>
              <div>
                <div
                  class="gmnoprint"
                  style="margin: 10px; z-index: 0; position: absolute; cursor: pointer; left: 0px; top: 0px;"
                  role="menubar"
                >
                  <div
                    style="float: left; position: relative;"
                    class="gm-style-mtc"
                  >
                    <button
                      style="
                                                    background: rgb(255, 255, 255) none repeat scroll 0% 0% padding-box;
                                                    display: table-cell;
                                                    border: 0px none;
                                                    margin: 0px;
                                                    padding: 0px 17px;
                                                    text-transform: none;
                                                    appearance: none;
                                                    position: relative;
                                                    cursor: pointer;
                                                    user-select: none;
                                                    direction: ltr;
                                                    overflow: hidden;
                                                    text-align: center;
                                                    height: 40px;
                                                    vertical-align: middle;
                                                    color: rgb(0, 0, 0);
                                                    font-family: Roboto, Arial, sans-serif;
                                                    font-size: 18px;
                                                    border-bottom-left-radius: 2px;
                                                    border-top-left-radius: 2px;
                                                    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px;
                                                    min-width: 36px;
                                                    font-weight: 500;
                                                "
                      draggable="false"
                      aria-label="Show street map"
                      title="Show street map"
                      type="button"
                      role="menuitemradio"
                      aria-checked="true"
                      id="7A060373-8A0F-421F-B950-F4A705BC5C9B"
                      aria-expanded="false"
                    >
                      Map
                    </button>
                    <ul
                      style="
                                                    background-color: white;
                                                    list-style: none;
                                                    padding: 2px;
                                                    margin: 0px;
                                                    z-index: -1;
                                                    border-bottom-left-radius: 2px;
                                                    border-bottom-right-radius: 2px;
                                                    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px;
                                                    position: absolute;
                                                    left: 0px;
                                                    top: 40px;
                                                    text-align: left;
                                                    display: none;
                                                "
                      role="menu"
                      aria-labelledby="7A060373-8A0F-421F-B950-F4A705BC5C9B"
                    >
                      <li
                        tabindex="-1"
                        role="menuitemcheckbox"
                        aria-label="Show street map with terrain"
                        style="
                                                        color: black;
                                                        font-family: Roboto, Arial, sans-serif;
                                                        user-select: none;
                                                        font-size: 18px;
                                                        background-color: rgb(255, 255, 255);
                                                        padding: 5px 8px 5px 5px;
                                                        direction: ltr;
                                                        text-align: left;
                                                        white-space: nowrap;
                                                    "
                        draggable="false"
                        title="Show street map with terrain"
                        aria-checked="false"
                        class="ssQIHO-checkbox-menu-item"
                      >
                        <span>
                          <img
                            src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22/%3E%3Cpath%20d%3D%22M19%203H5c-1.11%200-2%20.9-2%202v14c0%201.1.89%202%202%202h14c1.11%200%202-.9%202-2V5c0-1.1-.89-2-2-2zm-9%2014l-5-5%201.41-1.41L10%2014.17l7.59-7.59L19%208l-9%209z%22/%3E%3C/svg%3E"
                            alt=""
                            style="height: 1em; width: 1em; transform: translateY(0.15em); display: none;"
                          />
                          <img
                            src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M19%205v14H5V5h14m0-2H5c-1.1%200-2%20.9-2%202v14c0%201.1.9%202%202%202h14c1.1%200%202-.9%202-2V5c0-1.1-.9-2-2-2z%22/%3E%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22/%3E%3C/svg%3E"
                            alt=""
                            style="height: 1em; width: 1em; transform: translateY(0.15em);"
                          />
                        </span>
                        <label style="cursor: inherit;">Terrain</label>
                      </li>
                    </ul>
                  </div>
                  <div
                    style="float: left; position: relative;"
                    class="gm-style-mtc"
                  >
                    <button
                      style="
                                                    background: rgb(255, 255, 255) none repeat scroll 0% 0% padding-box;
                                                    display: table-cell;
                                                    border: 0px none;
                                                    margin: 0px;
                                                    padding: 0px 17px;
                                                    text-transform: none;
                                                    appearance: none;
                                                    position: relative;
                                                    cursor: pointer;
                                                    user-select: none;
                                                    direction: ltr;
                                                    overflow: hidden;
                                                    text-align: center;
                                                    height: 40px;
                                                    vertical-align: middle;
                                                    color: rgb(86, 86, 86);
                                                    font-family: Roboto, Arial, sans-serif;
                                                    font-size: 18px;
                                                    border-bottom-right-radius: 2px;
                                                    border-top-right-radius: 2px;
                                                    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px;
                                                    min-width: 66px;
                                                "
                      draggable="false"
                      aria-label="Show satellite imagery"
                      title="Show satellite imagery"
                      type="button"
                      role="menuitemradio"
                      aria-checked="false"
                      id="A118F666-C3AD-4DFD-B3D8-B7DDF53B126C"
                      aria-expanded="false"
                    >
                      Satellite
                    </button>
                    <ul
                      style="
                                                    background-color: white;
                                                    list-style: none;
                                                    padding: 2px;
                                                    margin: 0px;
                                                    z-index: -1;
                                                    border-bottom-left-radius: 2px;
                                                    border-bottom-right-radius: 2px;
                                                    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px;
                                                    position: absolute;
                                                    right: 0px;
                                                    top: 40px;
                                                    text-align: left;
                                                    display: none;
                                                "
                      role="menu"
                      aria-labelledby="A118F666-C3AD-4DFD-B3D8-B7DDF53B126C"
                    >
                      <li
                        tabindex="-1"
                        role="menuitemcheckbox"
                        aria-label="Show imagery with street names"
                        style="
                                                        color: black;
                                                        font-family: Roboto, Arial, sans-serif;
                                                        user-select: none;
                                                        font-size: 18px;
                                                        background-color: rgb(255, 255, 255);
                                                        padding: 5px 8px 5px 5px;
                                                        direction: ltr;
                                                        text-align: left;
                                                        white-space: nowrap;
                                                    "
                        draggable="false"
                        title="Show imagery with street names"
                        aria-checked="true"
                        class="ssQIHO-checkbox-menu-item"
                      >
                        <span>
                          <img
                            src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22/%3E%3Cpath%20d%3D%22M19%203H5c-1.11%200-2%20.9-2%202v14c0%201.1.89%202%202%202h14c1.11%200%202-.9%202-2V5c0-1.1-.89-2-2-2zm-9%2014l-5-5%201.41-1.41L10%2014.17l7.59-7.59L19%208l-9%209z%22/%3E%3C/svg%3E"
                            alt=""
                            style="height: 1em; width: 1em; transform: translateY(0.15em);"
                          />
                          <img
                            src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M19%205v14H5V5h14m0-2H5c-1.1%200-2%20.9-2%202v14c0%201.1.9%202%202%202h14c1.1%200%202-.9%202-2V5c0-1.1-.9-2-2-2z%22/%3E%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22/%3E%3C/svg%3E"
                            alt=""
                            style="height: 1em; width: 1em; transform: translateY(0.15em); display: none;"
                          />
                        </span>
                        <label style="cursor: inherit;">Labels</label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div></div>
              <div></div>
              <div></div>
              <div>
                <button
                  style="
                                            background: rgb(255, 255, 255) none repeat scroll 0% 0%;
                                            border: 0px none;
                                            margin: 10px;
                                            padding: 0px;
                                            text-transform: none;
                                            appearance: none;
                                            position: absolute;
                                            cursor: pointer;
                                            user-select: none;
                                            border-radius: 2px;
                                            height: 40px;
                                            width: 40px;
                                            box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px;
                                            overflow: hidden;
                                            top: 0px;
                                            right: 0px;
                                        "
                  draggable="false"
                  aria-label="Toggle fullscreen view"
                  title="Toggle fullscreen view"
                  type="button"
                  class="gm-control-active gm-fullscreen-control"
                >
                  <img
                    style="height: 18px; width: 18px;"
                    src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M0%200v6h2V2h4V0H0zm16%200h-4v2h4v4h2V0h-2zm0%2016h-4v2h6v-6h-2v4zM2%2012H0v6h6v-2H2v-4z%22/%3E%3C/svg%3E"
                    alt=""
                  />
                  <img
                    style="height: 18px; width: 18px;"
                    src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23333%22%20d%3D%22M0%200v6h2V2h4V0H0zm16%200h-4v2h4v4h2V0h-2zm0%2016h-4v2h6v-6h-2v4zM2%2012H0v6h6v-2H2v-4z%22/%3E%3C/svg%3E"
                    alt=""
                  />
                  <img
                    style="height: 18px; width: 18px;"
                    src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23111%22%20d%3D%22M0%200v6h2V2h4V0H0zm16%200h-4v2h4v4h2V0h-2zm0%2016h-4v2h6v-6h-2v4zM2%2012H0v6h6v-2H2v-4z%22/%3E%3C/svg%3E"
                    alt=""
                  />
                </button>
              </div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div>
                <div
                  class="gmnoprint gm-bundled-control gm-bundled-control-on-bottom"
                  style="margin: 10px; user-select: none; position: absolute; bottom: 167px; right: 40px;"
                  draggable="false"
                  data-control-width="40"
                  data-control-height="153"
                >
                  <div
                    class="gmnoprint"
                    data-control-width="40"
                    data-control-height="40"
                    style="display: none; position: absolute;"
                  >
                    <div style="background-color: rgb(255, 255, 255); box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px; border-radius: 2px; width: 40px; height: 40px;">
                      <button
                        style="
                                                        background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%;
                                                        display: none;
                                                        border: 0px none;
                                                        margin: 0px;
                                                        padding: 0px;
                                                        text-transform: none;
                                                        appearance: none;
                                                        position: relative;
                                                        cursor: pointer;
                                                        user-select: none;
                                                        left: 0px;
                                                        top: 0px;
                                                        overflow: hidden;
                                                        width: 40px;
                                                        height: 40px;
                                                    "
                        draggable="false"
                        aria-label="Rotate map clockwise"
                        title="Rotate map clockwise"
                        type="button"
                        class="gm-control-active"
                      >
                        <img
                          style="width: 20px; height: 20px;"
                          src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h24v24H0V0z%22/%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M12.06%209.06l4-4-4-4-1.41%201.41%201.59%201.59h-.18c-2.3%200-4.6.88-6.35%202.64-3.52%203.51-3.52%209.21%200%2012.72%201.5%201.5%203.4%202.36%205.36%202.58v-2.02c-1.44-.21-2.84-.86-3.95-1.97-2.73-2.73-2.73-7.17%200-9.9%201.37-1.37%203.16-2.05%204.95-2.05h.17l-1.59%201.59%201.41%201.41zm8.94%203c-.19-1.74-.88-3.32-1.91-4.61l-1.43%201.43c.69.92%201.15%202%201.32%203.18H21zm-7.94%207.92V22c1.74-.19%203.32-.88%204.61-1.91l-1.43-1.43c-.91.68-2%201.15-3.18%201.32zm4.6-2.74l1.43%201.43c1.04-1.29%201.72-2.88%201.91-4.61h-2.02c-.17%201.18-.64%202.27-1.32%203.18z%22/%3E%3C/svg%3E"
                        />
                        <img
                          style="width: 20px; height: 20px;"
                          src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h24v24H0V0z%22/%3E%3Cpath%20fill%3D%22%23333%22%20d%3D%22M12.06%209.06l4-4-4-4-1.41%201.41%201.59%201.59h-.18c-2.3%200-4.6.88-6.35%202.64-3.52%203.51-3.52%209.21%200%2012.72%201.5%201.5%203.4%202.36%205.36%202.58v-2.02c-1.44-.21-2.84-.86-3.95-1.97-2.73-2.73-2.73-7.17%200-9.9%201.37-1.37%203.16-2.05%204.95-2.05h.17l-1.59%201.59%201.41%201.41zm8.94%203c-.19-1.74-.88-3.32-1.91-4.61l-1.43%201.43c.69.92%201.15%202%201.32%203.18H21zm-7.94%207.92V22c1.74-.19%203.32-.88%204.61-1.91l-1.43-1.43c-.91.68-2%201.15-3.18%201.32zm4.6-2.74l1.43%201.43c1.04-1.29%201.72-2.88%201.91-4.61h-2.02c-.17%201.18-.64%202.27-1.32%203.18z%22/%3E%3C/svg%3E"
                        />
                        <img
                          style="width: 20px; height: 20px;"
                          src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h24v24H0V0z%22/%3E%3Cpath%20fill%3D%22%23111%22%20d%3D%22M12.06%209.06l4-4-4-4-1.41%201.41%201.59%201.59h-.18c-2.3%200-4.6.88-6.35%202.64-3.52%203.51-3.52%209.21%200%2012.72%201.5%201.5%203.4%202.36%205.36%202.58v-2.02c-1.44-.21-2.84-.86-3.95-1.97-2.73-2.73-2.73-7.17%200-9.9%201.37-1.37%203.16-2.05%204.95-2.05h.17l-1.59%201.59%201.41%201.41zm8.94%203c-.19-1.74-.88-3.32-1.91-4.61l-1.43%201.43c.69.92%201.15%202%201.32%203.18H21zm-7.94%207.92V22c1.74-.19%203.32-.88%204.61-1.91l-1.43-1.43c-.91.68-2%201.15-3.18%201.32zm4.6-2.74l1.43%201.43c1.04-1.29%201.72-2.88%201.91-4.61h-2.02c-.17%201.18-.64%202.27-1.32%203.18z%22/%3E%3C/svg%3E"
                        />
                      </button>
                      <div style="position: relative; overflow: hidden; width: 30px; height: 1px; margin: 0px 5px; background-color: rgb(230, 230, 230); display: none;"></div>
                      <button
                        style="
                                                        background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%;
                                                        display: none;
                                                        border: 0px none;
                                                        margin: 0px;
                                                        padding: 0px;
                                                        text-transform: none;
                                                        appearance: none;
                                                        position: relative;
                                                        cursor: pointer;
                                                        user-select: none;
                                                        left: 0px;
                                                        top: 0px;
                                                        overflow: hidden;
                                                        width: 40px;
                                                        height: 40px;
                                                        transform: scaleX(-1);
                                                    "
                        draggable="false"
                        aria-label="Rotate map counterclockwise"
                        title="Rotate map counterclockwise"
                        type="button"
                        class="gm-control-active"
                      >
                        <img
                          style="width: 20px; height: 20px;"
                          src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h24v24H0V0z%22/%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M12.06%209.06l4-4-4-4-1.41%201.41%201.59%201.59h-.18c-2.3%200-4.6.88-6.35%202.64-3.52%203.51-3.52%209.21%200%2012.72%201.5%201.5%203.4%202.36%205.36%202.58v-2.02c-1.44-.21-2.84-.86-3.95-1.97-2.73-2.73-2.73-7.17%200-9.9%201.37-1.37%203.16-2.05%204.95-2.05h.17l-1.59%201.59%201.41%201.41zm8.94%203c-.19-1.74-.88-3.32-1.91-4.61l-1.43%201.43c.69.92%201.15%202%201.32%203.18H21zm-7.94%207.92V22c1.74-.19%203.32-.88%204.61-1.91l-1.43-1.43c-.91.68-2%201.15-3.18%201.32zm4.6-2.74l1.43%201.43c1.04-1.29%201.72-2.88%201.91-4.61h-2.02c-.17%201.18-.64%202.27-1.32%203.18z%22/%3E%3C/svg%3E"
                        />
                        <img
                          style="width: 20px; height: 20px;"
                          src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h24v24H0V0z%22/%3E%3Cpath%20fill%3D%22%23333%22%20d%3D%22M12.06%209.06l4-4-4-4-1.41%201.41%201.59%201.59h-.18c-2.3%200-4.6.88-6.35%202.64-3.52%203.51-3.52%209.21%200%2012.72%201.5%201.5%203.4%202.36%205.36%202.58v-2.02c-1.44-.21-2.84-.86-3.95-1.97-2.73-2.73-2.73-7.17%200-9.9%201.37-1.37%203.16-2.05%204.95-2.05h.17l-1.59%201.59%201.41%201.41zm8.94%203c-.19-1.74-.88-3.32-1.91-4.61l-1.43%201.43c.69.92%201.15%202%201.32%203.18H21zm-7.94%207.92V22c1.74-.19%203.32-.88%204.61-1.91l-1.43-1.43c-.91.68-2%201.15-3.18%201.32zm4.6-2.74l1.43%201.43c1.04-1.29%201.72-2.88%201.91-4.61h-2.02c-.17%201.18-.64%202.27-1.32%203.18z%22/%3E%3C/svg%3E"
                        />
                        <img
                          style="width: 20px; height: 20px;"
                          src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h24v24H0V0z%22/%3E%3Cpath%20fill%3D%22%23111%22%20d%3D%22M12.06%209.06l4-4-4-4-1.41%201.41%201.59%201.59h-.18c-2.3%200-4.6.88-6.35%202.64-3.52%203.51-3.52%209.21%200%2012.72%201.5%201.5%203.4%202.36%205.36%202.58v-2.02c-1.44-.21-2.84-.86-3.95-1.97-2.73-2.73-2.73-7.17%200-9.9%201.37-1.37%203.16-2.05%204.95-2.05h.17l-1.59%201.59%201.41%201.41zm8.94%203c-.19-1.74-.88-3.32-1.91-4.61l-1.43%201.43c.69.92%201.15%202%201.32%203.18H21zm-7.94%207.92V22c1.74-.19%203.32-.88%204.61-1.91l-1.43-1.43c-.91.68-2%201.15-3.18%201.32zm4.6-2.74l1.43%201.43c1.04-1.29%201.72-2.88%201.91-4.61h-2.02c-.17%201.18-.64%202.27-1.32%203.18z%22/%3E%3C/svg%3E"
                        />
                      </button>
                      <div style="position: relative; overflow: hidden; width: 30px; height: 1px; margin: 0px 5px; background-color: rgb(230, 230, 230); display: none;"></div>
                      <button
                        style="
                                                        background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%;
                                                        display: block;
                                                        border: 0px none;
                                                        margin: 0px;
                                                        padding: 0px;
                                                        text-transform: none;
                                                        appearance: none;
                                                        position: relative;
                                                        cursor: pointer;
                                                        user-select: none;
                                                        top: 0px;
                                                        left: 0px;
                                                        overflow: hidden;
                                                        width: 40px;
                                                        height: 40px;
                                                    "
                        draggable="false"
                        aria-label="Tilt map"
                        title="Tilt map"
                        type="button"
                        class="gm-tilt gm-control-active"
                      >
                        <img
                          style="width: 18px;"
                          src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2016%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M0%2016h8V9H0v7zm10%200h8V9h-8v7zM0%207h8V0H0v7zm10-7v7h8V0h-8z%22/%3E%3C/svg%3E"
                        />
                        <img
                          style="width: 18px;"
                          src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2016%22%3E%3Cpath%20fill%3D%22%23333%22%20d%3D%22M0%2016h8V9H0v7zm10%200h8V9h-8v7zM0%207h8V0H0v7zm10-7v7h8V0h-8z%22/%3E%3C/svg%3E"
                        />
                        <img
                          style="width: 18px;"
                          src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2016%22%3E%3Cpath%20fill%3D%22%23111%22%20d%3D%22M0%2016h8V9H0v7zm10%200h8V9h-8v7zM0%207h8V0H0v7zm10-7v7h8V0h-8z%22/%3E%3C/svg%3E"
                        />
                      </button>
                    </div>
                  </div>
                  <div
                    class="gm-svpc"
                    dir="ltr"
                    title="Drag Pegman onto the map to open Street View"
                    style="
                                                background-color: rgb(255, 255, 255);
                                                box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px;
                                                border-radius: 2px;
                                                width: 40px;
                                                height: 40px;
                                                cursor: url('https://maps.gstatic.com/mapfiles/openhand_8_8.cur'), default;
                                                touch-action: none;
                                                position: absolute;
                                                left: 0px;
                                                top: 0px;
                                            "
                    data-control-width="40"
                    data-control-height="40"
                  >
                    <div style="position: absolute; left: 50%; top: 50%;"></div>
                    <div style="position: absolute; left: 50%; top: 50%;">
                      <img
                        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2023%2038%22%3E%3Cpath%20d%3D%22M16.6%2038.1h-5.5l-.2-2.9-.2%202.9h-5.5L5%2025.3l-.8%202a1.53%201.53%200%2001-1.9.9l-1.2-.4a1.58%201.58%200%2001-1-1.9v-.1c.3-.9%203.1-11.2%203.1-11.2a2.66%202.66%200%20012.3-2l.6-.5a6.93%206.93%200%20014.7-12%206.8%206.8%200%20014.9%202%207%207%200%20012%204.9%206.65%206.65%200%2001-2.2%205l.7.5a2.78%202.78%200%20012.4%202s2.9%2011.2%202.9%2011.3a1.53%201.53%200%2001-.9%201.9l-1.3.4a1.63%201.63%200%2001-1.9-.9l-.7-1.8-.1%2012.7zm-3.6-2h1.7L14.9%2020.3l1.9-.3%202.4%206.3.3-.1c-.2-.8-.8-3.2-2.8-10.9a.63.63%200%2000-.6-.5h-.6l-1.1-.9h-1.9l-.3-2a4.83%204.83%200%20003.5-4.7A4.78%204.78%200%200011%202.3H10.8a4.9%204.9%200%2000-1.4%209.6l-.3%202h-1.9l-1%20.9h-.6a.74.74%200%2000-.6.5c-2%207.5-2.7%2010-3%2010.9l.3.1L4.8%2020l1.9.3.2%2015.8h1.6l.6-8.4a1.52%201.52%200%20011.5-1.4%201.5%201.5%200%20011.5%201.4l.9%208.4zm-10.9-9.6zm17.5-.1z%22%20style%3D%22isolation%3Aisolate%22%20fill%3D%22%23333%22%20opacity%3D%22.7%22/%3E%3Cpath%20d%3D%22M5.9%2013.6l1.1-.9h7.8l1.2.9%22%20fill%3D%22%23ce592c%22/%3E%3Cellipse%20cx%3D%2210.9%22%20cy%3D%2213.1%22%20rx%3D%222.7%22%20ry%3D%22.3%22%20style%3D%22isolation%3Aisolate%22%20fill%3D%22%23ce592c%22%20opacity%3D%22.5%22/%3E%3Cpath%20d%3D%22M20.6%2026.1l-2.9-11.3a1.71%201.71%200%2000-1.6-1.2H5.699999999999999a1.69%201.69%200%2000-1.5%201.3l-3.1%2011.3a.61.61%200%2000.3.7l1.1.4a.61.61%200%2000.7-.3l2.7-6.7.2%2016.8h3.6l.6-9.3a.47.47%200%2001.44-.5h.06c.4%200%20.4.2.5.5l.6%209.3h3.6L15.7%2020.3l2.5%206.6a.52.52%200%2000.66.31l1.2-.4a.57.57%200%2000.5-.7z%22%20fill%3D%22%23fdbf2d%22/%3E%3Cpath%20d%3D%22M7%2013.6l3.9%206.7%203.9-6.7%22%20style%3D%22isolation%3Aisolate%22%20fill%3D%22%23cf572e%22%20opacity%3D%22.6%22/%3E%3Ccircle%20cx%3D%2210.9%22%20cy%3D%227%22%20r%3D%225.9%22%20fill%3D%22%23fdbf2d%22/%3E%3C/svg%3E"
                        style="height: 30px; width: 30px; position: absolute; transform: translate(-50%, -50%); pointer-events: none;"
                        aria-label="Street View Pegman Control"
                      />
                      <img
                        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2038%22%3E%3Cpath%20d%3D%22M22%2026.6l-2.9-11.3a2.78%202.78%200%2000-2.4-2l-.7-.5a6.82%206.82%200%20002.2-5%206.9%206.9%200%2000-13.8%200%207%207%200%20002.2%205.1l-.6.5a2.55%202.55%200%2000-2.3%202s-3%2011.1-3%2011.2v.1a1.58%201.58%200%20001%201.9l1.2.4a1.63%201.63%200%20001.9-.9l.8-2%20.2%2012.8h11.3l.2-12.6.7%201.8a1.54%201.54%200%20001.5%201%201.09%201.09%200%2000.5-.1l1.3-.4a1.85%201.85%200%2000.7-2zm-1.2.9l-1.2.4a.61.61%200%2001-.7-.3l-2.5-6.6-.2%2016.8h-9.4L6.6%2021l-2.7%206.7a.52.52%200%2001-.66.31l-1.1-.4a.52.52%200%2001-.31-.66l3.1-11.3a1.69%201.69%200%20011.5-1.3h.2l1-.9h2.3a5.9%205.9%200%20113.2%200h2.3l1.1.9h.2a1.71%201.71%200%20011.6%201.2l2.9%2011.3a.84.84%200%2001-.4.7z%22%20fill%3D%22%23333%22%20fill-opacity%3D%22.2%22/%3E%26quot%3B%3C/svg%3E"
                        style="display: none; height: 30px; width: 30px; position: absolute; transform: translate(-50%, -50%); pointer-events: none;"
                        aria-label="Pegman is on top of the Map"
                      />
                      <img
                        style="display: none; height: 40px; width: 40px; position: absolute; transform: translate(-60%, -45%); pointer-events: none;"
                        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2040%2050%22%3E%3Cpath%20d%3D%22M34-30.4l-2.9-11.3a2.78%202.78%200%2000-2.4-2l-.7-.5a6.82%206.82%200%20002.2-5%206.9%206.9%200%2000-13.8%200%207%207%200%20002.2%205.1l-.6.5a2.55%202.55%200%2000-2.3%202s-3%2011.1-3%2011.2v.1a1.58%201.58%200%20001%201.9l1.2.4a1.63%201.63%200%20001.9-.9l.8-2%20.2%2012.8h11.3l.2-12.6.7%201.8a1.54%201.54%200%20001.5%201%201.09%201.09%200%2000.5-.1l1.3-.4a1.85%201.85%200%2000.7-2zm-1.2.9l-1.2.4a.61.61%200%2001-.7-.3L28.4-36l-.2%2016.8h-9.4L18.6-36l-2.7%206.7a.52.52%200%2001-.66.31l-1.1-.4a.52.52%200%2001-.31-.66l3.1-11.3a1.69%201.69%200%20011.5-1.3h.2l1-.9h2.3a5.9%205.9%200%20113.2%200h2.3l1.1.9h.2a1.71%201.71%200%20011.6%201.2l2.9%2011.3a.84.84%200%2001-.4.7zM34%2029.6l-2.9-11.3a2.78%202.78%200%2000-2.4-2l-.7-.5a6.82%206.82%200%20002.2-5%206.9%206.9%200%2000-13.8%200%207%207%200%20002.2%205.1l-.6.5a2.55%202.55%200%2000-2.3%202s-3%2011.1-3%2011.2v.1a1.58%201.58%200%20001%201.9l1.2.4a1.63%201.63%200%20001.9-.9l.8-2%20.2%2012.8h11.3l.2-12.6.7%201.8a1.54%201.54%200%20001.5%201%201.09%201.09%200%2000.5-.1l1.3-.4a1.85%201.85%200%2000.7-2zm-1.2.9l-1.2.4a.61.61%200%2001-.7-.3L28.4%2024l-.2%2016.8h-9.4L18.6%2024l-2.7%206.7a.52.52%200%2001-.66.31l-1.1-.4a.52.52%200%2001-.31-.66l3.1-11.3a1.69%201.69%200%20011.5-1.3h.2l1-.9h2.3a5.9%205.9%200%20113.2%200h2.3l1.1.9h.2a1.71%201.71%200%20011.6%201.2l2.9%2011.3a.84.84%200%2001-.4.7z%22%20fill%3D%22%23333%22%20fill-opacity%3D%22.2%22/%3E%3Cpath%20d%3D%22M15.4%2038.8h-4a1.64%201.64%200%2001-1.4-1.1l-3.1-8a.9.9%200%2001-.5.1l-1.4.1a1.62%201.62%200%2001-1.6-1.4L2.3%2015.4l1.6-1.3a6.87%206.87%200%2001-3-4.6A7.14%207.14%200%20012%204a7.6%207.6%200%20014.7-3.1A7.14%207.14%200%200112.2%202a7.28%207.28%200%20012.3%209.6l2.1-.1.1%201c0%20.2.1.5.1.8a2.41%202.41%200%20011%201s1.9%203.2%202.8%204.9c.7%201.2%202.1%204.2%202.8%205.9a2.1%202.1%200%2001-.8%202.6l-.6.4a1.63%201.63%200%2001-1.5.2l-.6-.3a8.93%208.93%200%2000.5%201.3%207.91%207.91%200%20001.8%202.6l.6.3v4.6l-4.5-.1a7.32%207.32%200%2001-2.5-1.5l-.4%203.6zm-10-19.2l3.5%209.8%202.9%207.5h1.6V35l-1.9-9.4%203.1%205.4a8.24%208.24%200%20003.8%203.8h2.1v-1.4a14%2014%200%2001-2.2-3.1%2044.55%2044.55%200%2001-2.2-8l-1.3-6.3%203.2%205.6c.6%201.1%202.1%203.6%202.8%204.9l.6-.4c-.8-1.6-2.1-4.6-2.8-5.8-.9-1.7-2.8-4.9-2.8-4.9a.54.54%200%2000-.4-.3l-.7-.1-.1-.7a4.33%204.33%200%2000-.1-.5l-5.3.3%202.2-1.9a4.3%204.3%200%2000.9-1%205.17%205.17%200%2000.8-4%205.67%205.67%200%2000-2.2-3.4%205.09%205.09%200%2000-4-.8%205.67%205.67%200%2000-3.4%202.2%205.17%205.17%200%2000-.8%204%205.67%205.67%200%20002.2%203.4%203.13%203.13%200%20001%20.5l1.6.6-3.2%202.6%201%2011.5h.4l-.3-8.2z%22%20fill%3D%22%23333%22/%3E%3Cpath%20d%3D%22M3.35%2015.9l1.1%2012.5a.39.39%200%2000.36.42h.14l1.4-.1a.66.66%200%2000.5-.4l-.2-3.8-3.3-8.6z%22%20fill%3D%22%23fdbf2d%22/%3E%3Cpath%20d%3D%22M5.2%2028.8l1.1-.1a.66.66%200%2000.5-.4l-.2-3.8-1.2-3.1z%22%20fill%3D%22%23ce592b%22%20fill-opacity%3D%22.25%22/%3E%3Cpath%20d%3D%22M21.4%2035.7l-3.8-1.2-2.7-7.8L12%2015.5l3.4-2.9c.2%202.4%202.2%2014.1%203.7%2017.1%200%200%201.3%202.6%202.3%203.1v2.9m-8.4-8.1l-2-.3%202.5%2010.1.9.4v-2.9%22%20fill%3D%22%23e5892b%22/%3E%3Cpath%20d%3D%22M17.8%2025.4c-.4-1.5-.7-3.1-1.1-4.8-.1-.4-.1-.7-.2-1.1l-1.1-2-1.7-1.6s.9%205%202.4%207.1a19.12%2019.12%200%20001.7%202.4z%22%20style%3D%22isolation%3Aisolate%22%20fill%3D%22%23cf572e%22%20opacity%3D%22.6%22/%3E%3Cpath%20d%3D%22M14.4%2037.8h-3a.43.43%200%2001-.4-.4l-3-7.8-1.7-4.8-3-9%208.9-.4s2.9%2011.3%204.3%2014.4c1.9%204.1%203.1%204.7%205%205.8h-3.2s-4.1-1.2-5.9-7.7a.59.59%200%2000-.6-.4.62.62%200%2000-.3.7s.5%202.4.9%203.6a34.87%2034.87%200%20002%206z%22%20fill%3D%22%23fdbf2d%22/%3E%3Cpath%20d%3D%22M15.4%2012.7l-3.3%202.9-8.9.4%203.3-2.7%22%20fill%3D%22%23ce592b%22/%3E%3Cpath%20d%3D%22M9.1%2021.1l1.4-6.2-5.9.5%22%20style%3D%22isolation%3Aisolate%22%20fill%3D%22%23cf572e%22%20opacity%3D%22.6%22/%3E%3Cpath%20d%3D%22M12%2013.5a4.75%204.75%200%2001-2.6%201.1c-1.5.3-2.9.2-2.9%200s1.1-.6%202.7-1%22%20fill%3D%22%23bb3d19%22/%3E%3Ccircle%20cx%3D%227.92%22%20cy%3D%228.19%22%20r%3D%226.3%22%20fill%3D%22%23fdbf2d%22/%3E%3Cpath%20d%3D%22M4.7%2013.6a6.21%206.21%200%20008.4-1.9v-.1a8.89%208.89%200%2001-8.4%202z%22%20fill%3D%22%23ce592b%22%20fill-opacity%3D%22.25%22/%3E%3Cpath%20d%3D%22M21.2%2027.2l.6-.4a1.09%201.09%200%2000.4-1.3c-.7-1.5-2.1-4.6-2.8-5.8-.9-1.7-2.8-4.9-2.8-4.9a1.6%201.6%200%2000-2.17-.65l-.23.15a1.68%201.68%200%2000-.4%202.1s2.3%203.9%203.1%205.3c.6%201%202.1%203.7%202.9%205.1a.94.94%200%20001.24.49l.16-.09z%22%20fill%3D%22%23fdbf2d%22/%3E%3Cpath%20d%3D%22M19.4%2019.8c-.9-1.7-2.8-4.9-2.8-4.9a1.6%201.6%200%2000-2.17-.65l-.23.15-.3.3c1.1%201.5%202.9%203.8%203.9%205.4%201.1%201.8%202.9%205%203.8%206.7l.1-.1a1.09%201.09%200%2000.4-1.3%2057.67%2057.67%200%2000-2.7-5.6z%22%20fill%3D%22%23ce592b%22%20fill-opacity%3D%22.25%22/%3E%3C/svg%3E"
                        aria-label="Street View Pegman Control"
                      />
                    </div>
                  </div>
                  <div
                    class="gmnoprint"
                    style="position: absolute; left: 0px; top: 72px;"
                    data-control-width="40"
                    data-control-height="81"
                  >
                    <div
                      draggable="false"
                      style="user-select: none; box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px; border-radius: 2px; cursor: pointer; background-color: rgb(255, 255, 255); width: 40px; height: 81px;"
                    >
                      <button
                        style="
                                                        background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%;
                                                        display: block;
                                                        border: 0px none;
                                                        margin: 0px;
                                                        padding: 0px;
                                                        text-transform: none;
                                                        appearance: none;
                                                        position: relative;
                                                        cursor: pointer;
                                                        user-select: none;
                                                        overflow: hidden;
                                                        width: 40px;
                                                        height: 40px;
                                                        top: 0px;
                                                        left: 0px;
                                                    "
                        draggable="false"
                        aria-label="Zoom in"
                        title="Zoom in"
                        type="button"
                        class="gm-control-active"
                      >
                        <img
                          style="height: 18px; width: 18px;"
                          src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M18%207h-7V0H7v7H0v4h7v7h4v-7h7z%22/%3E%3C/svg%3E"
                          alt=""
                        />
                        <img
                          style="height: 18px; width: 18px;"
                          src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23333%22%20d%3D%22M18%207h-7V0H7v7H0v4h7v7h4v-7h7z%22/%3E%3C/svg%3E"
                          alt=""
                        />
                        <img
                          style="height: 18px; width: 18px;"
                          src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23111%22%20d%3D%22M18%207h-7V0H7v7H0v4h7v7h4v-7h7z%22/%3E%3C/svg%3E"
                          alt=""
                        />
                        <img
                          style="height: 18px; width: 18px;"
                          src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23d1d1d1%22%20d%3D%22M18%207h-7V0H7v7H0v4h7v7h4v-7h7z%22/%3E%3C/svg%3E"
                          alt=""
                        />
                      </button>
                      <div style="position: relative; overflow: hidden; width: 30px; height: 1px; margin: 0px 5px; background-color: rgb(230, 230, 230); top: 0px;"></div>
                      <button
                        style="
                                                        background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%;
                                                        display: block;
                                                        border: 0px none;
                                                        margin: 0px;
                                                        padding: 0px;
                                                        text-transform: none;
                                                        appearance: none;
                                                        position: relative;
                                                        cursor: pointer;
                                                        user-select: none;
                                                        overflow: hidden;
                                                        width: 40px;
                                                        height: 40px;
                                                        top: 0px;
                                                        left: 0px;
                                                    "
                        draggable="false"
                        aria-label="Zoom out"
                        title="Zoom out"
                        type="button"
                        class="gm-control-active"
                      >
                        <img
                          style="height: 18px; width: 18px;"
                          src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M0%207h18v4H0V7z%22/%3E%3C/svg%3E"
                          alt=""
                        />
                        <img
                          style="height: 18px; width: 18px;"
                          src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23333%22%20d%3D%22M0%207h18v4H0V7z%22/%3E%3C/svg%3E"
                          alt=""
                        />
                        <img
                          style="height: 18px; width: 18px;"
                          src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23111%22%20d%3D%22M0%207h18v4H0V7z%22/%3E%3C/svg%3E"
                          alt=""
                        />
                        <img
                          style="height: 18px; width: 18px;"
                          src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23d1d1d1%22%20d%3D%22M0%207h18v4H0V7z%22/%3E%3C/svg%3E"
                          alt=""
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div style="margin: 0px 5px; z-index: 1000000; position: absolute; left: 0px; bottom: 0px;">
                  <a
                    style="display: inline;"
                    target="_blank"
                    rel="noopener"
                    title="Open this area in Google Maps (opens a new window)"
                    aria-label="Open this area in Google Maps (opens a new window)"
                    href="https://maps.google.com/maps?ll=23.751689,90.379267&amp;z=14&amp;t=m&amp;hl=en-US&amp;gl=US&amp;mapclient=apiv3"
                  >
                    <div style="width: 66px; height: 26px;">
                      <img
                        style="position: absolute; left: 0px; top: 0px; width: 66px; height: 26px; user-select: none; border: 0px none; padding: 0px; margin: 0px;"
                        alt="Google"
                        src="Lazz%20Pharma%20Limited_files/google4.png"
                        draggable="false"
                      />
                    </div>
                  </a>
                </div>
              </div>
              <div></div>
              <div>
                <div
                  class="gmnoprint"
                  style="z-index: 1000001; position: absolute; right: 253px; bottom: 0px;"
                >
                  <div
                    draggable="false"
                    style="user-select: none; height: 14px; line-height: 14px;"
                    class="gm-style-cc"
                  >
                    <div style="opacity: 0.7; width: 100%; height: 100%; position: absolute;">
                      <div style="width: 1px;"></div>
                      <div style="background-color: rgb(245, 245, 245); width: auto; height: 100%; margin-left: 1px;"></div>
                    </div>
                    <div
                      style="
                                                    position: relative;
                                                    padding-right: 6px;
                                                    padding-left: 6px;
                                                    box-sizing: border-box;
                                                    font-family: Roboto, Arial, sans-serif;
                                                    font-size: 10px;
                                                    color: rgb(0, 0, 0);
                                                    white-space: nowrap;
                                                    direction: ltr;
                                                    text-align: right;
                                                    vertical-align: middle;
                                                    display: inline-block;
                                                "
                    >
                      <button
                        style="
                                                        background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%;
                                                        display: inline-block;
                                                        border: 0px none;
                                                        margin: 0px;
                                                        padding: 0px;
                                                        text-transform: none;
                                                        appearance: none;
                                                        position: relative;
                                                        cursor: pointer;
                                                        user-select: none;
                                                        color: rgb(0, 0, 0);
                                                        font-family: inherit;
                                                        line-height: inherit;
                                                    "
                        draggable="false"
                        aria-label="Keyboard shortcuts"
                        title="Keyboard shortcuts"
                        type="button"
                      >
                        Keyboard shortcuts
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  class="gmnoprint"
                  style="z-index: 1000001; position: absolute; right: 166px; bottom: 0px; width: 87px;"
                >
                  <div
                    draggable="false"
                    style="user-select: none; height: 14px; line-height: 14px;"
                    class="gm-style-cc"
                  >
                    <div style="opacity: 0.7; width: 100%; height: 100%; position: absolute;">
                      <div style="width: 1px;"></div>
                      <div style="background-color: rgb(245, 245, 245); width: auto; height: 100%; margin-left: 1px;"></div>
                    </div>
                    <div
                      style="
                                                    position: relative;
                                                    padding-right: 6px;
                                                    padding-left: 6px;
                                                    box-sizing: border-box;
                                                    font-family: Roboto, Arial, sans-serif;
                                                    font-size: 10px;
                                                    color: rgb(0, 0, 0);
                                                    white-space: nowrap;
                                                    direction: ltr;
                                                    text-align: right;
                                                    vertical-align: middle;
                                                    display: inline-block;
                                                "
                    >
                      <button
                        style="
                                                        background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%;
                                                        display: none;
                                                        border: 0px none;
                                                        margin: 0px;
                                                        padding: 0px;
                                                        text-transform: none;
                                                        appearance: none;
                                                        position: relative;
                                                        cursor: pointer;
                                                        user-select: none;
                                                        color: rgb(0, 0, 0);
                                                        font-family: inherit;
                                                        line-height: inherit;
                                                    "
                        draggable="false"
                        aria-label="Map Data"
                        title="Map Data"
                        type="button"
                      >
                        Map Data
                      </button>
                      <span>Map data ©2022</span>
                    </div>
                  </div>
                </div>
                <div
                  class="gmnoprint gm-style-cc"
                  style="z-index: 1000001; user-select: none; height: 14px; line-height: 14px; position: absolute; right: 95px; bottom: 0px;"
                  draggable="false"
                >
                  <div style="opacity: 0.7; width: 100%; height: 100%; position: absolute;">
                    <div style="width: 1px;"></div>
                    <div style="background-color: rgb(245, 245, 245); width: auto; height: 100%; margin-left: 1px;"></div>
                  </div>
                  <div
                    style="
                                                position: relative;
                                                padding-right: 6px;
                                                padding-left: 6px;
                                                box-sizing: border-box;
                                                font-family: Roboto, Arial, sans-serif;
                                                font-size: 10px;
                                                color: rgb(0, 0, 0);
                                                white-space: nowrap;
                                                direction: ltr;
                                                text-align: right;
                                                vertical-align: middle;
                                                display: inline-block;
                                            "
                  >
                    <a
                      style="text-decoration: none; cursor: pointer; color: rgb(0, 0, 0);"
                      href="https://www.google.com/intl/en-US_US/help/terms_maps.html"
                      target="_blank"
                      rel="noopener"
                    >
                      Terms of Use
                    </a>
                  </div>
                </div>
                <div
                  draggable="false"
                  style="user-select: none; height: 14px; line-height: 14px; position: absolute; right: 0px; bottom: 0px;"
                  class="gm-style-cc"
                >
                  <div style="opacity: 0.7; width: 100%; height: 100%; position: absolute;">
                    <div style="width: 1px;"></div>
                    <div style="background-color: rgb(245, 245, 245); width: auto; height: 100%; margin-left: 1px;"></div>
                  </div>
                  <div
                    style="
                                                position: relative;
                                                padding-right: 6px;
                                                padding-left: 6px;
                                                box-sizing: border-box;
                                                font-family: Roboto, Arial, sans-serif;
                                                font-size: 10px;
                                                color: rgb(0, 0, 0);
                                                white-space: nowrap;
                                                direction: ltr;
                                                text-align: right;
                                                vertical-align: middle;
                                                display: inline-block;
                                            "
                  >
                    <a
                      target="_blank"
                      rel="noopener"
                      title="Report errors in the road map or imagery to Google"
                      dir="ltr"
                      style="font-family: Roboto, Arial, sans-serif; font-size: 10px; color: rgb(0, 0, 0); text-decoration: none; position: relative;"
                      href="https://www.google.com/maps/@23.7516891,90.3792672,14z/data=!10m1!1e1!12b1?source=apiv3&amp;rapsrc=apiv3"
                    >
                      Report a map error
                    </a>
                  </div>
                </div>
                <div
                  class="gmnoscreen"
                  style="position: absolute; right: 0px; bottom: 0px;"
                >
                  <div style="font-family: Roboto, Arial, sans-serif; font-size: 11px; color: rgb(0, 0, 0); direction: ltr; text-align: right; background-color: rgb(245, 245, 245);">
                    Map data ©2022
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default BranchLocationInfo