import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_PATH } from "../tools/constants";

const SerWorks = () => {
  const [worktype, setWorkType] = useState([]);

  useEffect(() => {
  const getWorkType = () => {
    axios
      .get(API_PATH + "projects/list-worktype/")
      .then((res) => {
        setWorkType(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  getWorkType();
  },[])

  return (
    <>
      <div className="SerWorks">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-10">
              {worktype &&
                worktype.map((item, index) => {
                  return (
                    <a key={index} href="" className="ser_work_box">
                      <div className="ser_box_left">
                        <img
                          src="/img/last_ord_ecer_1.png"
                          alt=""
                          className="ser_left_img"
                        />
                        <div className="ser_left_h">{item.name}</div>
                      </div>
                      <div className="ser_box_right">
                        <div className="ser_right_h">
                          Срок: <span>от 3 часов</span>
                        </div>
                        <div className="ser_right_h">
                          Цена: <span>от 50 ₽</span>
                        </div>
                        <div className="ser_right_btn">
                          <button>Заказать</button>
                        </div>
                      </div>
                    </a>
                  );
                })}

              {/* <a href='' className="ser_work_box">
                                <div className="ser_box_left">
                                    <img src="/img/last_ord_ecer_1.png" alt="" className="ser_left_img" />
                                    <div className="ser_left_h">Задача</div>
                                </div>
                                <div className="ser_box_right">
                                    <div className="ser_right_h">Срок: <span>от 3 часов</span></div>
                                    <div className="ser_right_h">Цена: <span>от 50 ₽</span></div>
                                    <div className="ser_right_btn"><button>Заказать</button></div>
                                </div>
                            </a>
                            <a href='' className="ser_work_box">
                                <div className="ser_box_left">
                                    <img src="/img/last_ord_ecer_1.png" alt="" className="ser_left_img" />
                                    <div className="ser_left_h">Задача</div>
                                </div>
                                <div className="ser_box_right">
                                    <div className="ser_right_h">Срок: <span>от 3 часов</span></div>
                                    <div className="ser_right_h">Цена: <span>от 50 ₽</span></div>
                                    <div className="ser_right_btn"><button>Заказать</button></div>
                                </div>
                            </a>
                            <a href='' className="ser_work_box">
                                <div className="ser_box_left">
                                    <img src="/img/last_ord_ecer_1.png" alt="" className="ser_left_img" />
                                    <div className="ser_left_h">Задача</div>
                                </div>
                                <div className="ser_box_right">
                                    <div className="ser_right_h">Срок: <span>от 3 часов</span></div>
                                    <div className="ser_right_h">Цена: <span>от 50 ₽</span></div>
                                    <div className="ser_right_btn"><button>Заказать</button></div>
                                </div>
                            </a>
                            <a href='' className="ser_work_box">
                                <div className="ser_box_left">
                                    <img src="/img/last_ord_ecer_1.png" alt="" className="ser_left_img" />
                                    <div className="ser_left_h">Задача</div>
                                </div>
                                <div className="ser_box_right">
                                    <div className="ser_right_h">Срок: <span>от 3 часов</span></div>
                                    <div className="ser_right_h">Цена: <span>от 50 ₽</span></div>
                                    <div className="ser_right_btn"><button>Заказать</button></div>
                                </div>
                            </a>
                            <a href='' className="ser_work_box">
                                <div className="ser_box_left">
                                    <img src="/img/last_ord_ecer_1.png" alt="" className="ser_left_img" />
                                    <div className="ser_left_h">Задача</div>
                                </div>
                                <div className="ser_box_right">
                                    <div className="ser_right_h">Срок: <span>от 3 часов</span></div>
                                    <div className="ser_right_h">Цена: <span>от 50 ₽</span></div>
                                    <div className="ser_right_btn"><button>Заказать</button></div>
                                </div>
                            </a>
                            <a href='' className="ser_work_box">
                                <div className="ser_box_left">
                                    <img src="/img/last_ord_ecer_1.png" alt="" className="ser_left_img" />
                                    <div className="ser_left_h">Задача</div>
                                </div>
                                <div className="ser_box_right">
                                    <div className="ser_right_h">Срок: <span>от 3 часов</span></div>
                                    <div className="ser_right_h">Цена: <span>от 50 ₽</span></div>
                                    <div className="ser_right_btn"><button>Заказать</button></div>
                                </div>
                            </a>
                            <a href='' className="ser_work_box">
                                <div className="ser_box_left">
                                    <img src="/img/last_ord_ecer_1.png" alt="" className="ser_left_img" />
                                    <div className="ser_left_h">Задача</div>
                                </div>
                                <div className="ser_box_right">
                                    <div className="ser_right_h">Срок: <span>от 3 часов</span></div>
                                    <div className="ser_right_h">Цена: <span>от 50 ₽</span></div>
                                    <div className="ser_right_btn"><button>Заказать</button></div>
                                </div>
                            </a>
                            <a href='' className="ser_work_box">
                                <div className="ser_box_left">
                                    <img src="/img/last_ord_ecer_1.png" alt="" className="ser_left_img" />
                                    <div className="ser_left_h">Задача</div>
                                </div>
                                <div className="ser_box_right">
                                    <div className="ser_right_h">Срок: <span>от 3 часов</span></div>
                                    <div className="ser_right_h">Цена: <span>от 50 ₽</span></div>
                                    <div className="ser_right_btn"><button>Заказать</button></div>
                                </div>
                            </a>
                            <a href='' className="ser_work_box">
                                <div className="ser_box_left">
                                    <img src="/img/last_ord_ecer_1.png" alt="" className="ser_left_img" />
                                    <div className="ser_left_h">Задача</div>
                                </div>
                                <div className="ser_box_right">
                                    <div className="ser_right_h">Срок: <span>от 3 часов</span></div>
                                    <div className="ser_right_h">Цена: <span>от 50 ₽</span></div>
                                    <div className="ser_right_btn"><button>Заказать</button></div>
                                </div>
                            </a> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SerWorks;
