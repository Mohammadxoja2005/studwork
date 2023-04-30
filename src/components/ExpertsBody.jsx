import React, { useEffect } from "react";
import CabinetLayout from "./Cabi/CabinetLayout";
import ExpertsRating from "./ExpertsRating";
import OrderBox from "./OrderBox";
import UserLayout from "./UserLayout";
// react-redux
import { useSelector, useDispatch } from "react-redux";
import { getWorkTypes, getSubjectTypes } from "../redux/slices/projectSlice";

const ExpertsBody = () => {
  const dispatch = useDispatch();

  const workTypes = useSelector((state) => state.project.work_types);
  const subjectTypes = useSelector((state) => state.project.subject_types);

  useEffect(() => {
    dispatch(getWorkTypes());
    dispatch(getSubjectTypes());
  }, []);

  return (
    <>
      <CabinetLayout>
        <div className="ExpertsBody">
          <div className="experts_body_box">
            <div className="experts_body_name">Лента заказов</div>
            <div className="d-flex align-items-center">
              <a href="" className="ord_head_a_1">
                Главная{" "}
              </a>
              <div className="ord_head_a_2">Эксперты </div>
            </div>
            <div className="experts_body_sec_box">
              <select className="experts_body_sec me-3">
                <option value="">Все разделы</option>
                {workTypes &&
                  workTypes.map((work) => {
                    return <option key={work.id} value={work.id}>{work.name}</option>
                  })}
                {/* <option value="">Математические дисциплины</option>
                <option value="">Естественные дисциплины</option>
                <option value="">Технические дисциплины</option>
                <option value="">Программирование</option> */}
              </select>
              <select className="experts_body_sec ms-3">
                <option value="">Все предметы</option> 
                {subjectTypes &&
                  subjectTypes.map((work) => {
                    return <option key={work.id} value={work.id}>{work.name}</option>
                  })}
                {/* <option value="">Алгебра</option>
                <option value="">Аналитическая геометрия</option>
                <option value="">Векторная алгебра</option>
                <option value="">Высшая математика</option>
                <option value="">Геометрия</option> */}
              </select>
            </div>
            <div className="experts_body_inp_stats">
              <input
                placeholder="Поиск по логину"
                type="text"
                className="experts_body_inp"
              />
              <div className="experts_body_stats_btn">
                <a href="">
                  <button>Поиск </button>
                </a>
              </div>
              <div className="experts_body_inp_stats_h">
                Найдено <span>14 092 эксперта </span>{" "}
              </div>
            </div>

            <ExpertsRating />
          </div>
        </div>
      </CabinetLayout>
      {/* <div className="ExpertsBody">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-3">
                            <OrderBox />
                        </div>
                    </div>
                </div>
            </div> */}
    </>
  );
};

export default ExpertsBody;
