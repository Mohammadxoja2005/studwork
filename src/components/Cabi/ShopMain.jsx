import React, { useState, useEffect } from "react";
import CabinetLayout from "./CabinetLayout";
import { TabContent, TabPane, Nav, NavItem, NavLink, Row } from "reactstrap";
import classnames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { getWorkTypes, getSubjectTypes } from "../../redux/slices/projectSlice";
import { createMarket, getMarkets } from "../../redux/slices/marketSlice";
import { Link } from "react-router-dom";

const ShopMain = () => {
const dispatch = useDispatch();
const workTypes = useSelector((state) => state.project.work_types);
const subjectTypes = useSelector((state) => state.project.subject_types);
const markets = useSelector((state) => state.market.market);
// console.log(markets);
const userIndex = localStorage.getItem("userIndex");

const [activeTab, setActiveTab] = useState("1");

const [shopName, setShopName] = useState("");
const [shopWorkType, setShopWorkType] = useState();
const [shopSubject, setShopSubject] = useState();
const [shopUniverName, setShopUniverName] = useState("");
const [shopCourse, setShopCourse] = useState();
const [shopDescription, setShopDescription] = useState("");
const [shopContent, setShopContent] = useState("");
const [shopSource, setShopSource] = useState("");
const [shopPremiumAccomodation, setShopPremiumAccomodation] = useState(false);
const [doneShopFiles, setDoneShopFiles] = useState([]);
const [demoShopFiles, setDemoShopFiles] = useState([]);

const toggle = (tab) => {
if (activeTab !== tab) setActiveTab(tab);
};

useEffect(() => {
dispatch(getWorkTypes());
dispatch(getSubjectTypes());
dispatch(getMarkets());
}, []);

const createShop = () => {
const formData = new FormData();
formData.append("user", userIndex);
formData.append("name", shopName);
formData.append("work_type", shopWorkType);
formData.append("specialist", shopSubject);
formData.append("univer_name", shopUniverName);
formData.append("course", shopCourse);
formData.append("description", shopDescription);
formData.append("content", shopContent);
formData.append("list_lit", shopSource);
formData.append("is_top ", shopPremiumAccomodation);
formData.append("doneShopFiles", doneShopFiles);
formData.append("demoShopFiles", demoShopFiles);

dispatch(createMarket(formData));
};

return (
<>
  <CabinetLayout>
    <div className="ShopMain">
      <div className="shopmain_body_box">
        <div className="shopmain_body_name">Мой магазин </div>
        <div className="d-flex align-items-center">
          <a href="" className="ord_head_a_1">
            Главная{" "}
          </a>
          <a href="" className="ord_head_a_1">
            {" "}
            Профиль{" "}
          </a>
          <div className="ord_head_a_2">Мой магазин</div>
        </div>

        <Nav tabs className="">
          <NavItem>
            <NavLink className={classnames({ active: activeTab==="1" })} onClick={()=> {
              toggle("1");
              }}
              >
              <div className="shopmain_tab_name">Мои работы</div>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classnames({ active: activeTab==="2" })} onClick={()=> {
              toggle("2");
              }}
              >
              <div className="shopmain_tab_name">Мои покупки</div>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classnames({ active: activeTab==="3" })} onClick={()=> {
              toggle("3");
              }}
              >
              <div className="shopmain_tab_name">
                Добавить готовую работу
              </div>
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={activeTab}>
          <TabPane tabId="1" className="">
            <div className="row">
              <div className="col-10">
                <input placeholder="Поиск по ключевым словам" type="text" className="shopmain_tab_inp" />
              </div>
            </div>
            <div className="row">
              <div className="col-5">
                <select onClick={(e)=> setShopWorkType(e.target.value)}
                  className="shopmain_tab_inp"
                  >
                  <option>Типы работ</option>
                  {workTypes &&
                  workTypes.map((item) => {
                  return (
                  <option value={item.id} key={item.id}>
                    {item.name}
                  </option>
                  );
                  })}
                </select>
              </div>
              <div className="col-5">
                <select className="shopmain_tab_inp">
                  <option onClick={(e)=> setShopSubject(e.target.value)}>
                    Раздел
                  </option>

                  {subjectTypes &&
                  subjectTypes.map((item) => {
                  return (
                  <option value={item.id} key={item.id}>
                    {item.name}
                  </option>
                  );
                  })}
                </select>
              </div>
              <div className="col-2 d-flex align-items-center">
                <div className="shopmain_tab_btn">
                  <button>Поиск</button>
                </div>
              </div>
            </div>

            {/* <div className="shop_main_card"></div> */}

            {markets &&
            markets.map((item) => {
            return (
            <div className="market_card">
              <div className="market_premium">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                  class="sf-icon feature-badge__icon svg-inline--fa fa-star" data-v-4d7d0664="" data-v-63a3aa2d="">
                  <path fill="yellow"
                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                    class=""></path>
                </svg>
                <div className="market_premium_text">Премиум</div>
              </div>
              <div className="market_content">
                <Link to={`/OrderIn/${item.id}`} className="market_content_text">
                {item.content}
                </Link>
                <div className="market_price">400</div>
              </div>

              <div className="market_detail_show">
                <div className="market_username">
                  <div className="market_username_img"></div>
                  {item.user}
                </div>
                <div className="market_type">
                  <svg data-v-44480aa8="" aria-hidden="true" focusable="false" data-prefix="far"
                    data-icon="calendar-lines" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                    class="sf-icon svg-inline--fa fa-calendar-lines">
                    <path fill="currentColor"
                      d="M96 280C96 266.7 106.7 256 120 256H328C341.3 256 352 266.7 352 280C352 293.3 341.3 304 328 304H120C106.7 304 96 293.3 96 280zM232 352C245.3 352 256 362.7 256 376C256 389.3 245.3 400 232 400H120C106.7 400 96 389.3 96 376C96 362.7 106.7 352 120 352H232zM152 64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0C141.3 0 152 10.75 152 24V64zM48 448C48 456.8 55.16 464 64 464H384C392.8 464 400 456.8 400 448V192H48V448z"
                      class=""></path>
                  </svg>
                  Курсовая
                </div>
                <div className="market_type">
                  <svg data-v-44480aa8="" aria-hidden="true" focusable="false" data-prefix="far"
                    data-icon="calendar-lines" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                    class="sf-icon svg-inline--fa fa-calendar-lines">
                    <path fill="currentColor"
                      d="M96 280C96 266.7 106.7 256 120 256H328C341.3 256 352 266.7 352 280C352 293.3 341.3 304 328 304H120C106.7 304 96 293.3 96 280zM232 352C245.3 352 256 362.7 256 376C256 389.3 245.3 400 232 400H120C106.7 400 96 389.3 96 376C96 362.7 106.7 352 120 352H232zM152 64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0C141.3 0 152 10.75 152 24V64zM48 448C48 456.8 55.16 464 64 464H384C392.8 464 400 456.8 400 448V192H48V448z"
                      class=""></path>
                  </svg>
                  11 Апр в 21:49
                </div>
                <div className="market_type">
                  <svg data-v-2b2913da="" aria-hidden="true" focusable="false" data-prefix="far" data-icon="eye"
                    role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                    class="sf-icon info-counter__icon svg-inline--fa fa-eye">
                    <path fill="currentColor"
                      d="M160 256C160 185.3 217.3 128 288 128C358.7 128 416 185.3 416 256C416 326.7 358.7 384 288 384C217.3 384 160 326.7 160 256zM288 336C332.2 336 368 300.2 368 256C368 211.8 332.2 176 288 176C287.3 176 286.7 176 285.1 176C287.3 181.1 288 186.5 288 192C288 227.3 259.3 256 224 256C218.5 256 213.1 255.3 208 253.1C208 254.7 208 255.3 208 255.1C208 300.2 243.8 336 288 336L288 336zM95.42 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.42 399.4C48.62 355.1 17.34 304 2.461 268.3C-.8205 260.4-.8205 251.6 2.461 243.7C17.34 207.1 48.62 156 95.42 112.6V112.6zM288 80C222.8 80 169.2 109.6 128.1 147.7C89.6 183.5 63.02 225.1 49.44 256C63.02 286 89.6 328.5 128.1 364.3C169.2 402.4 222.8 432 288 432C353.2 432 406.8 402.4 447.9 364.3C486.4 328.5 512.1 286 526.6 256C512.1 225.1 486.4 183.5 447.9 147.7C406.8 109.6 353.2 80 288 80V80z"
                      class="st-current"></path>
                  </svg>
                  40
                </div>
                <div className="market_type">
                  <svg data-v-2b2913da="" aria-hidden="true" focusable="false" data-prefix="far" data-icon="credit-card"
                    role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                    class="sf-icon info-counter__icon svg-inline--fa fa-credit-card st-current">
                    <path fill="currentColor"
                      d="M168 336C181.3 336 192 346.7 192 360C192 373.3 181.3 384 168 384H120C106.7 384 96 373.3 96 360C96 346.7 106.7 336 120 336H168zM360 336C373.3 336 384 346.7 384 360C384 373.3 373.3 384 360 384H248C234.7 384 224 373.3 224 360C224 346.7 234.7 336 248 336H360zM512 32C547.3 32 576 60.65 576 96V416C576 451.3 547.3 480 512 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H512zM512 80H64C55.16 80 48 87.16 48 96V128H528V96C528 87.16 520.8 80 512 80zM528 224H48V416C48 424.8 55.16 432 64 432H512C520.8 432 528 424.8 528 416V224z"
                      class=""></path>
                  </svg>
                  0 покупок
                </div>
              </div>
            </div>
            );
            })}

            {/* <div className="shopmain_tab_h">
              Найдено <span>0</span> работ
            </div>
            <div className="shopmain_tab_p">
              Не найдено ни одной работы.
              <br />
              Попробуйте изменить условия поиска.
            </div> */}
          </TabPane>
        </TabContent>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="2" className="">
            <div className="shopmain_tab_p">
              Не найдено ни одной работы.
              <br />
              Попробуйте изменить условия поиска.
            </div>
          </TabPane>
        </TabContent>

        <TabContent activeTab={activeTab}>
          <TabPane tabId="3" className="">
            <div className="row">
              <div className="col-10">
                <input placeholder="Заголовок работы" type="text" className="shopmain_tab_inp" onChange={(e)=>
                setShopName(e.target.value)}
                />
              </div>
              <div className="col-10">
                <textarea placeholder="Напишите о чем ваша работа" type="text" className="shopmain_tab_inp"
                  onChange={(e)=> setShopDescription(e.target.value)}
                    />
                  </div>
                  <div className="col-10">
                    <textarea
                      placeholder="Напишите о чем ваша работа"
                      type="text"
                      className="shopmain_tab_inp"
                      onChange={(e) => setShopSource(e.target.value)}
                    />
                  </div>
                  <div className="col-10">
                    <textarea
                      placeholder="Это поле только для вас"
                      type="text"
                      className="shopmain_tab_inp"
                      onChange={(e) => setShopContent(e.target.value)}
                    />
                  </div>
                  <div className="col-5">
                    <select
                      onClick={(e) => setShopWorkType(e.target.value)}
                      className="shopmain_tab_inp"
                      name=""
                      id=""
                    >
                      <option>Типы работ</option>
                      {workTypes &&
                        workTypes.map((item) => {
                          return (
                            <option value={item.id} key={item.id}>
                              {item.name}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                  <div className="col-5">
                    <select
                      onClick={(e) => setShopSubject(e.target.value)}
                      className="shopmain_tab_inp"
                      name=""
                      id=""
                    >
                      <option>Раздел</option>

                      {subjectTypes &&
                        subjectTypes.map((item) => {
                          return (
                            <option value={item.id} key={item.id}>
                              {item.name}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                  <div className="col-7">
                    <input
                      placeholder="Укажите название вуза"
                      type="text"
                      className="shopmain_tab_inp"
                      onChange={(e) => setShopUniverName(e.target.value)}
                    />
                  </div>
                  <div className="col-3">
                    <select
                      onClick={(e) => setShopCourse(e.target.value)}
                      className="shopmain_tab_inp"
                      name=""
                      id=""
                    >
                      <option>Выберите курс</option>
                      {[1, 2, 3, 4].map((value) => {
                        return (
                          <option value={value} key={value}>
                            {value}
                          </option>
                        );
                      })}
                    </select>
                  </div>

                  <div className="col-12">
                    {" "}
                    {/* <div className="shopmain_body_add">Добавить файлы</div> */}


<div className="file-input mt-3">
                <input type="file" name="file-input" onChange={(e) =>
                        setDoneShopFiles([...doneShopFiles, ...e.target.files])
                      } id="file-input"
                className="file-input__input" multiple/>
                <label className="file-input__label" htmlFor="file-input">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="upload"
                    className="svg-inline--fa fa-upload fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path fill="currentColor"
                      d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z" />
                  </svg>
                  <span>Загрузите готовые файлы</span>
                </label>
              </div> 

              <div className="file-input">
                <input type="file" name="file-input"  onChange={(e) =>
                        setDemoShopFiles([...demoShopFiles, ...e.target.files])
                      } id="file-input"
                className="file-input__input" multiple/>
                <label className="file-input__label" htmlFor="file-input">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="upload"
                    className="svg-inline--fa fa-upload fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path fill="currentColor"
                      d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z" />
                  </svg>
                  <span>Загрузите демо файлы </span>
                </label>
              </div>

                    {/* <input
                      type="file"
                      onChange={(e) =>
                        setDemoShopFiles([...demoShopFiles, ...e.target.files])
                      }
                      multiple
                    /> */}
                  </div>

                  <div className="col-12">
                    <div className="row post_body_sal_box">
                      <div className="col-12">
                        <div className="post_body_sal_name">
                          Увеличить количество откликов
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="row justify-content-between align-items-center">
                          <div className="col-1 d-flex justify-content-center">
                            <input
                              type="checkbox"
                              className="post_body_check"
                              onClick={(e) =>
                                e.target.checked
                                  ? setShopPremiumAccomodation(true)
                                  : setShopPremiumAccomodation(false)
                              }
                            />
                          </div>
                          <div className="col-8">
                            <div className="post_body_check_box">
                              <div className="post_body_check_left">
                                <img
                                  src="/img/prof_bonus_1.svg"
                                  alt=""
                                  className="post_body_check_img"
                                />
                              </div>
                              <div className="post_body_check_right">
                                <div className="post_body_check_right_h">
                                  Премиум размещение
                                </div>
                                <div className="post_body_check_right_p">
                                  Приоритетное размещение в магазине на месяц
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-2">
                            <div className="post_body_sal_num">200 ₽</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="post_body_send">
                      <button onClick={() => createShop()}>
                        Разместить заказ
                      </button>
                    </div>
                  </div>
                </div>
              </TabPane>
            </TabContent>
          </div>
        </div>
      </CabinetLayout>
    </>
  );
};

export default ShopMain;