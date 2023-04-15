import React, { useState, useEffect } from "react";
import CabinetLayout from "./CabinetLayout";
import { TabContent, TabPane, Nav, NavItem, NavLink, Row } from "reactstrap";
import classnames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { getWorkTypes, getSubjectTypes } from "../../redux/slices/projectSlice";
import { createMarket, getMarkets} from "../../redux/slices/marketSlice";

const ShopMain = () => {
  const dispatch = useDispatch();
  const workTypes = useSelector((state) => state.project.work_types);
  const subjectTypes = useSelector((state) => state.project.subject_types);

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
    formData.append("is_top	", shopPremiumAccomodation);
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
                <NavLink
                  className={classnames({ active: activeTab === "1" })}
                  onClick={() => {
                    toggle("1");
                  }}
                >
                  <div className="shopmain_tab_name">Мои работы</div>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "2" })}
                  onClick={() => {
                    toggle("2");
                  }}
                >
                  <div className="shopmain_tab_name">Мои покупки</div>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "3" })}
                  onClick={() => {
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
                    <input
                      placeholder="Поиск по ключевым словам"
                      type="text"
                      className="shopmain_tab_inp"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-5">
                    <select
                      onClick={(e) => setShopWorkType(e.target.value)}
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
                      <option onClick={(e) => setShopSubject(e.target.value)}>
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
                <div className="shopmain_tab_h">
                  Найдено <span>0</span> работ
                </div>
                <div className="shopmain_tab_p">
                  Не найдено ни одной работы.
                  <br />
                  Попробуйте изменить условия поиска.
                </div>
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
                    <input
                      placeholder="Заголовок работы"
                      type="text"
                      className="shopmain_tab_inp"
                      onChange={(e) => setShopName(e.target.value)}
                    />
                  </div>
                  <div className="col-10">
                    <textarea
                      placeholder="Напишите о чем ваша работа"
                      type="text"
                      className="shopmain_tab_inp"
                      onChange={(e) => setShopDescription(e.target.value)}
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
                    <input
                      type="file"
                      onChange={(e) =>
                        setDoneShopFiles([...doneShopFiles, ...e.target.files])
                      }
                      multiple
                    />
                    <input
                      type="file"
                      onChange={(e) =>
                        setDemoShopFiles([...demoShopFiles, ...e.target.files])
                      }
                      multiple
                    />
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
