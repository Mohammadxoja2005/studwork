import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { API_PATH } from "../tools/constants";
import CabinetLayout from "./Cabi/CabinetLayout";
import OrderBox from "./OrderBox";
// react-redux
import { useSelector, useDispatch } from "react-redux";
import { getWorkTypes, getSubjectTypes } from "../redux/slices/projectSlice";

const ShopBody = () => {
  const dispatch = useDispatch();

  const [shop, setShop] = useState([]);

  useEffect(() => {
    dispatch(getWorkTypes());
    dispatch(getSubjectTypes());
  }, []);

  const workTypes = useSelector((state) => state.project.work_types);
  const subjectTypes = useSelector((state) => state.project.subject_types);

  useEffect(() => {
    const getWorkType = () => {
      axios
        .get(API_PATH + "market/project-list/")
        .then((res) => {
          setShop(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getWorkType();
  }, []);

  return (
    <>
      <CabinetLayout>
        <div className="ShopBody">
          <div className="shop_body_box">
            <div className="shop_body_name">Магазин готовых работ</div>
            <div className="d-flex align-items-center">
              <a href="" className="ord_head_a_1">
                Главная{" "}
              </a>
              <div className="ord_head_a_2">Магазин готовых работ </div>
            </div>
            <input
              placeholder="Поиск по ключевым словам"
              type="text"
              className="shop_body_inp"
            />
            <div className="shop_body_inp_box">
              <select className="shop_body_inp_box_sel me-4">
                <option value="">Все типы работ</option> 

                {workTypes &&
                  workTypes.map((work) => {
                    return (
                      <option key={work.id} value="">
                        {work.name}
                      </option>
                    );
                  })}
                {/* <option value="">Задача</option>
                <option value="">Контрольная работа</option>
                <option value="">Курсовая работа</option>
                <option value="">Дипломная работа</option> */}
              </select>
              <select className="shop_body_inp_box_sel me-4">
                <option value="">Все предметы</option> 

                {subjectTypes &&
                  subjectTypes.map((work) => {
                    return (
                      <option key={work.id} value="">
                        {work.name}
                      </option>
                    );
                  })}
                {/* <option value="">Алгебра</option>
                <option value="">Аналитическая геометрия</option>
                <option value="">Вычислительная математика</option>
                <option value="">Геометрия</option> */}
              </select>
              <div className="shop_body_inp_btn">
                <a href="">
                  <button>Поиск</button>
                </a>
              </div>
            </div>
            {shop &&
              shop.map((item, index) => {
                return (
                  <div key={index} className="shop_body_main">
                    <div className="shop_body_main_name_salary">
                      <a href="" className="shop_body_main_name">
                        {item.name}{" "}
                      </a>
                      <div className="shop_body_main_name_salary_h">
                        Cтоимость работы: <span>{item.price}</span>{" "}
                      </div>
                    </div>
                    <div className="shop_body_main_info">
                      <div className="shop_body_info_user">
                        <img
                          src="/img/a_author_1.jpg"
                          alt=""
                          className="shop_body_info_img"
                        />
                        {item.user}
                      </div>
                      <div className="shop_body_info_date_box">
                        <div className="shop_body_info_date_send">
                          дата размещения работы <span>13 Окт в 00:56 </span>
                        </div>
                      </div>
                      <div className="shop_body_info_views">
                        <div className="shop_body_info_views_h">
                          62 просмотра{" "}
                        </div>
                        <div className="shop_body_info_views_h">9 покупок </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </CabinetLayout>
      {/* <div className="ShopBody">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-3">
                            <OrderBox />
                        </div>
                        <div className="col-9">
                        </div>

                    </div>
                </div>
            </div> */}
    </>
  );
};

export default ShopBody;
