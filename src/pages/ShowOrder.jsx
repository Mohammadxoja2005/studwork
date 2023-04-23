import React, { useState, useEffect } from "react";
import CabinetLayout from "../components/Cabi/CabinetLayout";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProject, projectResponse } from "../redux/slices/projectSlice";

function ShowOrder() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const order = useSelector((state) => state.project.singleProject);
  console.log(order);

  useEffect(() => {
    dispatch(getProject(id));
  }, []);

  const onSubmit = () => {
    dispatch(
      projectResponse({ work: order.id, user: localStorage.getItem("userIndex") })
    );
  };

  return (
    <CabinetLayout>
      <div className="showorder">
        <div className="showorder_container">
          <div className="showorder_title_container">
            <h2 className="showorder_title">
              Две лабораторные по метрологии, стандартизация и сертификация
            </h2>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="star"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              class="sf-icon favorite-toggle__icon svg-inline--fa fa-star has-tooltip"
              data-v-a1221380=""
              data-original-title="null"
              className="showorder_img"
            >
              <path
                fill="yellow"
                d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z"
                class=""
              ></path>
            </svg>
          </div>

          <div className="showorder_profile">
            <div className="showorder_profile_info">
              <div className="showorder_profile_img"></div>

              <p className="showorder_profile_username">maxx1011</p>
            </div>

            <div className="showorder_profile_features">
              <div className="showorder_features_pre showorder_feature">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="star"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  class="sf-icon feature-badge__icon svg-inline--fa fa-star"
                  data-v-4d7d0664=""
                  data-v-63a3aa2d=""
                >
                  <path
                    fill="#eaae2f"
                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                    class="st-current"
                  ></path>
                </svg>
                Премиум
              </div>
              <div className="showorder_features_fast showorder_feature">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="fire-flame-curved"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  class="sf-icon feature-badge__icon svg-inline--fa fa-fire-flame-curved st-current"
                  data-v-4d7d0664=""
                  data-v-63a3aa2d=""
                >
                  <path
                    fill="#eb3b5a"
                    d="M153.6 29.9l16-21.3C173.6 3.2 180 0 186.7 0C198.4 0 208 9.6 208 21.3V43.5c0 13.1 5.4 25.7 14.9 34.7L307.6 159C356.4 205.6 384 270.2 384 337.7C384 434 306 512 209.7 512H192C86 512 0 426 0 320v-3.8c0-48.8 19.4-95.6 53.9-130.1l3.5-3.5c4.2-4.2 10-6.6 16-6.6C85.9 176 96 186.1 96 198.6V288c0 35.3 28.7 64 64 64s64-28.7 64-64v-3.9c0-18-7.2-35.3-19.9-48l-38.6-38.6c-24-24-37.5-56.7-37.5-90.7c0-27.7 9-54.8 25.6-76.9z"
                    class=""
                  ></path>
                </svg>
                Срочно
              </div>
              <div className="showorder_features_opened showorder_feature">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="bell"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  class="sf-icon order-status__icon svg-inline--fa fa-bell"
                  data-v-6274a9c9=""
                >
                  <path
                    fill="currentColor"
                    d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"
                    class=""
                  ></path>
                </svg>
                открыт
              </div>
            </div>
          </div>

          <div className="showorder_details">
            <div className="showorder_detail_first">
              <table>
                <tr className="showorder_detail_info">
                  <td className="showorder_detail_info_title">
                    {" "}
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="hashtag"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      class="sf-icon svg-inline--fa fa-hashtag st-current"
                      data-v-00cd3d8e=""
                      data-v-6b623982=""
                      className="showorder_detail_icon"
                    >
                      <path
                        fill="currentColor"
                        d="M424 136l-74.01-.0254l13.63-75.76c2.344-13.03-6.312-25.53-19.38-27.88c-13-2.188-25.5 6.344-27.88 19.38l-15.16 84.26h-111.2l13.63-75.76c2.344-13.03-6.312-25.53-19.38-27.88C171.2 30.15 158.7 38.69 156.4 51.72l-15.16 84.26H56c-13.25 0-24 10.78-24 24.03c0 13.25 10.75 23.97 24 23.97h76.57l-25.92 144H24c-13.25 0-24 10.76-24 24.01C0 365.3 10.75 376 24 376l74.01-.0078l-13.63 75.76c-2.344 13.03 6.312 25.53 19.38 27.88C105.2 479.9 106.6 480 108 480c11.38 0 21.5-8.158 23.59-19.75l15.16-84.26h111.2l-13.63 75.76c-2.344 13.03 6.312 25.53 19.38 27.88C265.2 479.9 266.6 480 268 480c11.38 0 21.5-8.158 23.59-19.75l15.16-84.26L392 376c13.25 0 24-10.75 24-23.1c0-13.25-10.75-24.01-24-24.01h-76.57l25.92-144L424 184c13.25 0 24-10.75 24-23.1C448 146.8 437.3 136 424 136zM266.7 327.1h-111.2l25.92-144h111.2L266.7 327.1z"
                        class=""
                      ></path>
                    </svg>
                  </td>
                  <td className="showorder_detail_info_title">Заказ</td>
                  <td className="showorder_detail_info_data">5370250</td>
                </tr>
                <tr className="showorder_detail_info">
                  <td className="showorder_detail_info_title">
                    {" "}
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="bookmark"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                      class="sf-icon svg-inline--fa fa-bookmark"
                      data-v-00cd3d8e=""
                      data-v-6b623982=""
                    >
                      <path
                        fill="currentColor"
                        d="M336 0h-288C21.49 0 0 21.49 0 48v431.9c0 24.7 26.79 40.08 48.12 27.64L192 423.6l143.9 83.93C357.2 519.1 384 504.6 384 479.9V48C384 21.49 362.5 0 336 0zM336 452L192 368l-144 84V54C48 50.63 50.63 48 53.1 48h276C333.4 48 336 50.63 336 54V452z"
                        class=""
                      ></path>
                    </svg>
                  </td>
                  <td className="showorder_detail_info_title">Раздел</td>
                  <td className="showorder_detail_info_data">
                    Технические дисциплины
                  </td>
                </tr>
                <tr className="showorder_detail_info">
                  <td className="showorder_detail_info_title">
                    {" "}
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="book"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      class="sf-icon svg-inline--fa fa-book"
                      data-v-00cd3d8e=""
                      data-v-6b623982=""
                    >
                      <path
                        fill="currentColor"
                        d="M448 352V48C448 21.53 426.5 0 400 0h-320C35.89 0 0 35.88 0 80v352C0 476.1 35.89 512 80 512h344c13.25 0 24-10.75 24-24s-10.75-24-24-24H416v-66.95C434.6 390.4 448 372.8 448 352zM368 464h-288c-17.64 0-32-14.34-32-32s14.36-32 32-32h288V464zM400 352h-320c-11.38 0-22.2 2.375-32 6.688V80c0-17.66 14.36-32 32-32h320V352zM152 160h176C341.3 160 352 149.3 352 136S341.3 112 328 112h-176C138.8 112 128 122.8 128 136S138.8 160 152 160zM152 240h176C341.3 240 352 229.3 352 216S341.3 192 328 192h-176C138.8 192 128 202.8 128 216S138.8 240 152 240z"
                        class=""
                      ></path>
                    </svg>
                  </td>
                  <td className="showorder_detail_info_title">Предмет</td>
                  <td className="showorder_detail_info_data">Метрология</td>
                </tr>
                <tr className="showorder_detail_info">
                  <td className="showorder_detail_info_title">
                    {" "}
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="file-lines"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                      class="sf-icon svg-inline--fa fa-file-lines st-current"
                      data-v-00cd3d8e=""
                      data-v-6b623982=""
                    >
                      <path
                        fill="currentColor"
                        d="M365.3 93.38l-74.63-74.64C278.6 6.742 262.3 0 245.4 0L64-.0001c-35.35 0-64 28.65-64 64l.0065 384c0 35.34 28.65 64 64 64H320c35.2 0 64-28.8 64-64V138.6C384 121.7 377.3 105.4 365.3 93.38zM336 448c0 8.836-7.164 16-16 16H64.02c-8.838 0-16-7.164-16-16L48 64.13c0-8.836 7.164-16 16-16h160L224 128c0 17.67 14.33 32 32 32h79.1V448zM96 280C96 293.3 106.8 304 120 304h144C277.3 304 288 293.3 288 280S277.3 256 264 256h-144C106.8 256 96 266.8 96 280zM264 352h-144C106.8 352 96 362.8 96 376s10.75 24 24 24h144c13.25 0 24-10.75 24-24S277.3 352 264 352z"
                        class=""
                      ></path>
                    </svg>
                  </td>
                  <td className="showorder_detail_info_title">Тип работы</td>
                  <td className="showorder_detail_info_data">
                    Лабораторная работа
                  </td>
                </tr>
                <tr className="showorder_detail_info">
                  <td className="showorder_detail_info_title">
                    {" "}
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="percent"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                      class="sf-icon svg-inline--fa fa-percent"
                      data-v-00cd3d8e=""
                      data-v-6b623982=""
                    >
                      <path
                        fill="currentColor"
                        d="M376.1 71.03c-9.375-9.375-24.56-9.375-33.94 0l-336 336c-9.375 9.375-9.375 24.56 0 33.94C11.72 445.7 17.84 448 24 448s12.28-2.344 16.97-7.031l336-336C386.3 95.59 386.3 80.41 376.1 71.03zM64 176c26.51 0 48-21.49 48-48S90.51 80 64 80C37.49 80 16 101.5 16 128S37.49 176 64 176zM320 336c-26.51 0-48 21.49-48 48s21.49 48 48 48c26.51 0 48-21.49 48-48S346.5 336 320 336z"
                        class=""
                      ></path>
                    </svg>
                  </td>
                  <td className="showorder_detail_info_title">Антиплагиат</td>
                  <td className="showorder_detail_info_data">Не указан</td>
                </tr>
              </table>
            </div>

            <div className="showorder_detail_second">
              <table>
                <tr className="showorder_detail_info">
                  <td className="showorder_detail_info_title">
                    {" "}
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="calendar-check"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      class="sf-icon svg-inline--fa fa-calendar-check"
                      data-v-00cd3d8e=""
                      data-v-6b623982=""
                    >
                      <path
                        fill="currentColor"
                        d="M216.1 408.1C207.6 418.3 192.4 418.3 183 408.1L119 344.1C109.7 335.6 109.7 320.4 119 311C128.4 301.7 143.6 301.7 152.1 311L200 358.1L295 263C304.4 253.7 319.6 253.7 328.1 263C338.3 272.4 338.3 287.6 328.1 296.1L216.1 408.1zM128 0C141.3 0 152 10.75 152 24V64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0zM400 192H48V448C48 456.8 55.16 464 64 464H384C392.8 464 400 456.8 400 448V192z"
                        class=""
                      ></path>
                    </svg>
                  </td>
                  <td className="showorder_detail_info_title">Срок сдачи</td>
                  <td className="showorder_detail_info_data">30 Апр в 01:55</td>
                </tr>
                <tr className="showorder_detail_info">
                  <td className="showorder_detail_info_title">
                    {" "}
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="ruble-sign"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                      class="sf-icon svg-inline--fa fa-ruble-sign st-current"
                      data-v-00cd3d8e=""
                      data-v-6b623982=""
                    >
                      <path
                        fill="currentColor"
                        d="M240 32C319.5 32 384 96.47 384 176C384 255.5 319.5 320 240 320H112V368H296C309.3 368 320 378.7 320 392C320 405.3 309.3 416 296 416H112V456C112 469.3 101.3 480 88 480C74.75 480 64 469.3 64 456V416H24C10.75 416 0 405.3 0 392C0 378.7 10.75 368 24 368H64V320H24C10.75 320 0 309.3 0 296C0 282.7 10.75 272 24 272H64V79.31C64 53.18 85.18 32 111.3 32H240zM336 176C336 122.1 293 80 240 80H112V272H240C293 272 336 229 336 176z"
                        class=""
                      ></path>
                    </svg>
                  </td>
                  <td className="showorder_detail_info_title">Цена</td>
                  <td className="showorder_detail_info_data">Договорная</td>
                </tr>
                <tr className="showorder_detail_info">
                  <td className="showorder_detail_info_title">
                    {" "}
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="lock"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      class="sf-icon svg-inline--fa fa-lock"
                      data-v-00cd3d8e=""
                      data-v-6b623982=""
                    >
                      <path
                        fill="currentColor"
                        d="M96 192V128C96 57.31 153.3 0 224 0C294.7 0 352 57.31 352 128V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H96zM144 192H304V128C304 83.82 268.2 48 224 48C179.8 48 144 83.82 144 128V192zM48 448C48 456.8 55.16 464 64 464H384C392.8 464 400 456.8 400 448V256C400 247.2 392.8 240 384 240H64C55.16 240 48 247.2 48 256V448z"
                        class=""
                      ></path>
                    </svg>
                  </td>
                  <td className="showorder_detail_info_title">Блокировка</td>
                  <td className="showorder_detail_info_data">10 дней</td>
                </tr>
                <tr className="showorder_detail_info">
                  <td className="showorder_detail_info_title">
                    {" "}
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="clock"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      class="sf-icon svg-inline--fa fa-clock st-current"
                      data-v-00cd3d8e=""
                      data-v-6b623982=""
                    >
                      <path
                        fill="currentColor"
                        d="M232 120C232 106.7 242.7 96 256 96C269.3 96 280 106.7 280 120V243.2L365.3 300C376.3 307.4 379.3 322.3 371.1 333.3C364.6 344.3 349.7 347.3 338.7 339.1L242.7 275.1C236 271.5 232 264 232 255.1L232 120zM256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0zM48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48C141.1 48 48 141.1 48 256z"
                        class=""
                      ></path>
                    </svg>
                  </td>
                  <td className="showorder_detail_info_title">Размещен</td>
                  <td className="showorder_detail_info_data">22 Апр в 19:51</td>
                </tr>
                <tr className="showorder_detail_info">
                  <td className="showorder_detail_info_title">
                    {" "}
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="clock"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      class="sf-icon svg-inline--fa fa-clock"
                      data-v-00cd3d8e=""
                      data-v-6b623982=""
                    >
                      <path
                        fill="currentColor"
                        d="M232 120C232 106.7 242.7 96 256 96C269.3 96 280 106.7 280 120V243.2L365.3 300C376.3 307.4 379.3 322.3 371.1 333.3C364.6 344.3 349.7 347.3 338.7 339.1L242.7 275.1C236 271.5 232 264 232 255.1L232 120zM256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0zM48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48C141.1 48 48 141.1 48 256z"
                        class=""
                      ></path>
                    </svg>
                  </td>
                  <td className="showorder_detail_info_title">Просмотров</td>
                  <td className="showorder_detail_info_data">13</td>
                </tr>
              </table>
            </div>
          </div>

          <div className="showorder_alert">
            <h3 className="showorder_alert_title">Моё предложение</h3>

            <div className="showorder_alert_form">
              <div className="showorder_alert_name">
                Вы пока не сделали предложения
              </div>
              {/* <div className="showorder_alert_warn"></div> */}
              <div className="showorder_alert_input_container">
                <input
                  type="text"
                  placeholder="type something"
                  className="showorder_alert_input"
                />
              </div>

              <div className="showorder_alert_input_btns">
                <div className="showorder_alert_btn" onClick={onSubmit}>
                  отправить
                </div>
                {/* <div className="showorder_alert_price"></div> */}
                <input type="text" className="showorder_alert_input" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </CabinetLayout>
  );
}

export default ShowOrder;
