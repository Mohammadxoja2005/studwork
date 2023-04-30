import React, { useState, useEffect } from "react";
import CabinetLayout from "./CabinetLayout";
import { useSelector, useDispatch } from "react-redux";
import {
  createProject,
  getWorkTypes,
  getSubjectTypes,
} from "../../redux/slices/projectSlice";

const PostBody = () => {
  const projects = useSelector((state) => state.project);
  const dispatch = useDispatch();

  const userIndex = localStorage.getItem("userIndex");

  const [projectName, setProjectName] = useState("");
  const [projectWorkType, setProjectWorkType] = useState([]);
  const [projectSubject, setProjectSubject] = useState([]);
  const [projectDeadline, setProjectDeadline] = useState("");
  const [projectHours, setProjectHours] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectPrice, setProjectPrice] = useState();
  const [projectPremiumAccomodaition, setPremiumAccomodation] = useState(false);
  const [projectViews, setProjectViews] = useState(100);
  const [projectIsOpen, setProjectIsOpen] = useState(true);
  const [projectFiles, setProjectFiles] = useState([]);

  useEffect(() => {
    dispatch(getWorkTypes());
    dispatch(getSubjectTypes());
  }, []);

  const createProjectOrder = () => {
    const dataForm = new FormData();
    dataForm.append("user", userIndex);
    dataForm.append("name", projectName);
    dataForm.append("work_type", projectWorkType);
    dataForm.append("specialist", projectSubject);
    dataForm.append("deadline", projectDeadline);
    dataForm.append("hours", projectHours);
    dataForm.append("description", projectDescription);
    dataForm.append("price", projectPrice);
    dataForm.append("is_faster", projectPremiumAccomodaition);
    dataForm.append("views", projectViews);
    dataForm.append("is_open", projectIsOpen);
    // dataForm.append("file", projectFiles)

    dispatch(createProject(dataForm));
  };

  // console.log(projectFiles);

  return (
    <>
      <CabinetLayout>
        <div className="PostBody">
          <div className="post_body_box">
            <div className="post_body_name">Разместить заказ</div>
            <div className="row">
              <div className="col-12 mt-4">
                <input
                  type="text"
                  placeholder="Введите название работы"
                  className="post_body_inp"
                  onChange={(e) => setProjectName(e.target.value)}
                />
              </div>
              <div className="col-12 mt-4">
                <textarea
                  type="text"
                  placeholder="Введите описание"
                  className="post_body_inp"
                  onChange={(e) => setProjectDescription(e.target.value)}
                />
              </div>
              <div className="col-4 mt-4">
                <select
                  onClick={(e) => setProjectWorkType(e.target.value)}
                  className="post_body_inp"
                >
                  <option>Тип работы</option>
                  {projects.work_types &&
                    projects.work_types.map((item) => {
                      return (
                        <option value={item.id} key={item.id}>
                          {item.name}
                        </option>
                      );
                    })}
                </select>
              </div>
              <div className="col-8 mt-4">
                <select
                  className="post_body_inp"
                  onClick={(e) => setProjectSubject(e.target.value)}
                >
                  <option value="">Введите название предмета</option>
                  {projects.subject_types &&
                    projects.subject_types.map((item) => {
                      return (
                        <option value={item.id} key={item.id}>
                          {item.name}
                        </option>
                      );
                    })}
                </select>
              </div>
              <div className="col-4 mt-4">
                <input
                  type="date"
                  placeholder="Дата сдачи"
                  className="post_body_inp"
                  onChange={(e) => setProjectDeadline(e.target.value)}
                />
              </div>
              <div className="col-8 mt-4 d-flex align-items-center">
                <div className="post_body_h">Время сдачи</div>
                {/* <select className="post_body_inp_num">
                  <option value="">00</option>
                  <option value="">01</option>
                  <option value="">02</option>
                  <option value="">03</option>
                  <option value="">04</option>
                  <option value="">05</option>
                  <option value="">06</option>
                  <option value="">07</option>
                  <option value="">08</option>
                  <option value="">09</option>
                  <option value="">10</option>
                  <option value="">11</option>
                  <option value="">12</option>
                  <option value="">13</option>
                  <option value="">14</option>
                  <option value="">15</option>
                  <option value="">16</option>
                  <option value="">17</option>
                  <option value="">18</option>
                  <option value="">19</option>
                  <option value="">20</option>
                  <option value="">21</option>
                  <option value="">22</option>
                  <option value="">23</option>
                </select>
                <select className="post_body_inp_num">
                  <option value="">00</option>
                  <option value="">05</option>
                  <option value="">10</option>
                  <option value="">15</option>
                  <option value="">20</option>
                  <option value="">25</option>
                  <option value="">30</option>
                  <option value="">35</option>
                  <option value="">40</option>
                  <option value="">45</option>
                  <option value="">50</option>
                  <option value="">55</option>
                </select> */}
                <input
                  type="time"
                  onChange={(e) => setProjectHours(e.target.value)}
                />
              </div>
            </div>
            {/* <div className="post_body_add"><input type="file" onChange={(e) => setProjectFiles(e.target.files[0])} placeholder="dasdsa"/></div>  */}
            {/* <input
              type="file"
              onChange={(e) =>
                setProjectFiles([...projectFiles, ...e.target.files])
              }
              placeholder="dasdsa"
              multiple
            /> */}

            <div className="file-input mt-4">
              <input
                type="file"
                name="file-input"
                onChange={(e) =>
                  setProjectFiles([...projectFiles, ...e.target.files])
                }
                id="file-input"
                className="file-input__input"
                multiple
              />
              <label className="file-input__label" htmlFor="file-input">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="upload"
                  className="svg-inline--fa fa-upload fa-w-16"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                  />
                </svg>
                <span>Upload file</span>
              </label>
            </div>

            <div className="row post_body_sal_box">
              <div className="col-12 d-flex align-items-center">
                <input
                  placeholder="Стоимость"
                  type="text"
                  className="post_body_sal_inp"
                  onChange={(e) => setProjectPrice(e.target.value)}
                />
                <div className="post_body_sal_h">
                  Сумма, которую вы готовы заплатить эксперту
                </div>
              </div>
              <div className="col-12 d-flex align-items-center mt-4">
                <div className="post_body_sal_h">Срок блокировки оплаты</div>
                <select className="post_body_sal_sel" name="" id="">
                  <option value="">5 дней</option>
                  <option value="">10 дней</option>
                  <option value="">15 дней</option>
                  <option value="">20 дней</option>
                  <option value="">40 дней</option>
                </select>
              </div>
              <div className="col-12">
                <div className="post_body_sal_p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                  iste culpa itaque dolore et, eligendi pariatur. Ad unde
                  aperiam nam sed voluptates nobis laboriosam quas minus
                  veritatis! Modi, esse! Tenetur.
                </div>
              </div>
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
                          ? setPremiumAccomodation(true)
                          : setPremiumAccomodation(false)
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
                          Приоритетное размещение в ленте на 24 часа
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="post_body_sal_num">200 ₽</div>
                  </div>
                </div>
                <div className="row justify-content-between align-items-center mt-4">
                  <div className="col-1 d-flex justify-content-center">
                    <input
                      type="checkbox"
                      className="post_body_check"
                      onClick={(e) =>
                        e.target.checked
                          ? setPremiumAccomodation(true)
                          : setPremiumAccomodation(false)
                      }
                    />
                  </div>
                  <div className="col-8">
                    <div className="post_body_check_box">
                      <div className="post_body_check_left">
                        <img
                          src="/img/prof_bonus_2.svg"
                          alt=""
                          className="post_body_check_img"
                        />
                      </div>
                      <div className="post_body_check_right">
                        <div className="post_body_check_right_h">
                          Срочный заказ
                        </div>
                        <div className="post_body_check_right_p">
                          Яркое выделение заказа в ленте
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="post_body_sal_num">200 ₽</div>
                  </div>
                </div>
                <div className="row justify-content-between align-items-center mt-4">
                  <div className="col-1 d-flex justify-content-center">
                    <input
                      type="checkbox"
                      className="post_body_check"
                      onClick={(e) =>
                        e.target.checked
                          ? setPremiumAccomodation(true)
                          : setPremiumAccomodation(false)
                      }
                    />
                  </div>
                  <div className="col-8">
                    <div className="post_body_check_box">
                      <div className="post_body_check_left">
                        <img
                          src="/img/prof_bonus_3.svg"
                          alt=""
                          className="post_body_check_img"
                        />
                      </div>
                      <div className="post_body_check_right">
                        <div className="post_body_check_right_h">Скидка 3%</div>
                        <div className="post_body_check_right_p">
                          Ваша бонусная скидка
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
              <button onClick={createProjectOrder}>Разместить заказ</button>
            </div>
          </div>
        </div>
      </CabinetLayout>
    </>
  );
};

export default PostBody;
