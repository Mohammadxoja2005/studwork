import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_PATH } from "../tools/constants";
import CabinetLayout from "./Cabi/CabinetLayout";
import OrderBox from "./OrderBox";
import {
  getSubjectTypes,
  getWorkTypes,
  getProjects,
} from "../redux/slices/projectSlice";
import { useSelector, useDispatch } from "react-redux";

const OrdersBody = () => {
  const dispatch = useDispatch();

  const workTypes = useSelector((state) => state.project.work_types);
  const subjectTypes = useSelector((state) => state.project.subject_types);
  const orders = useSelector((state) => state.project.project);

  useEffect(() => {
    dispatch(getSubjectTypes());
    dispatch(getWorkTypes());
    dispatch(getProjects());
  }, []);

  return (
    <>
      <CabinetLayout>
        <div className="OrdersBody">
          <div className="orders_body_box">
            <div className="orders_body_name">Лента заказов</div>
            <div className="d-flex align-items-center">
              <a href="" className="ord_head_a_1">
                Главная{" "}
              </a>
              <div className="ord_head_a_2">Лента заказов </div>
            </div>
            <input
              placeholder="Поиск по ключевым словам"
              type="text"
              className="orders_body_inp"
            />
            <div className="orders_body_inp_box">
              <select className="orders_body_inp_box_sel me-4">
                <option value="">Все типы работ</option>
                {workTypes &&
                  workTypes.map((item) => {
                    return (
                      <option key={item.id} value={item.id}>
                        {item.name}
                      </option>
                    );
                  })}
              </select>
              <select className="orders_body_inp_box_sel me-4">
                <option value="">Все предметы</option>
                {subjectTypes &&
                  subjectTypes.map((item) => {
                    return (
                      <option key={item.id} value={item.id}>
                        {item.name}
                      </option>
                    );
                  })}
              </select>
              <div className="orders_body_inp_btn">
                <a href="">
                  <button>Поиск</button>
                </a>
              </div>
            </div>

            {orders &&
              orders.map((item, index) => {
                return (
                  <div key={index} className="orders_body_main">
                    <Link to="/OrderIn" className="orders_body_main_name">
                      {item.name}
                    </Link>
                    <p>{item.work_type.name}</p>
                    <p>{item.specialist.name}</p>
                    <div className="orders_body_main_box">
                      <div className="orders_body_main_h">
                        {item.description.slice(0, 20)}
                      </div>
                      <div className="orders_body_main_p">
                        {item.is_open ? "Open" : "Close"}
                      </div>
                    </div>
                    <div className="orders_body_main_info">
                      <div className="orders_body_info_user">
                        <img
                          src="/img/a_author_1.jpg"
                          alt=""
                          className="orders_body_info_img"
                        />
                        {item.user.phone}
                      </div>
                      <div className="orders_body_info_date_box">
                        <div className="orders_body_info_date_send">
                          Дата создания: <span>{item.created_at}</span>
                        </div>
                        <div className="orders_body_info_date_get">
                          Срок здачи: <span>{item.deadline}</span>
                        </div>
                      </div>
                      <div className="orders_body_info_views">
                        <div className="orders_body_info_views_h">
                          {item.views} просмотра{" "}
                        </div>
                        <div className="orders_body_info_views_h">
                          {item.get_click} откликов{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </CabinetLayout>
    </>
  );
};

export default OrdersBody;
