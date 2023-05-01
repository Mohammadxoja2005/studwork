import React, { useEffect, useState } from "react";
import CabinetLayout from "./CabinetLayout";
import { useSelector, useDispatch } from "react-redux";
import { getProfile, updateProfile } from "../../redux/slices/profileSlice";

const ProfileBody = () => {
  const { profile, loading } = useSelector((state) => state.profile);
  const [isOpen, setIsOpen] = useState(false);
  const [bio, setBio] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile());
  }, []);

  if (loading) {
    console.log(loading);
  }

  const changeBio = () => {
    setIsOpen(false);

    dispatch(updateProfile({ bio: bio }));
  };

  const changePhoto = () => {
    const formData = new FormData();
    formData.append("image", selectedFile);
    dispatch(updateProfile(formData));
  };

  return (
    <>
      <CabinetLayout>
        <div className="ProfileBody">
          <div className="prof_body_box">
            <div className="exp_info_head">
              {loading ? (
                <div className="exp_info_head_left">
                  {profile.image != null ? (
                    <div className="profile_img">
                      <img
                        src={`${profile.image}`}
                        style={{
                          width: "100px",
                          height: "100px",
                          marginBottom: "20px",
                          borderRadius: "50%",
                        }}
                      />
                      <div className="file-input">
                        <input
                          type="file"
                          name="file-input"
                          onChange={(e) => setSelectedFile(e.target.files[0])}
                          id="file-input"
                          className="file-input__input"
                          multiple
                        />
                        <label
                          className="file-input__label"
                          htmlFor="file-input"
                        >
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

                      <div className="prof_body_bonus_box_2_btn">
                        <button
                          onClick={() => changePhoto()}
                          className="profile_change_btn"
                        >
                          Поменять
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="profile_img">
                      <img
                        src="/img/reviews_img.svg"
                        alt=""
                        className="exp_info_head_img"
                        style={{
                          width: "100px",
                          height: "100px",
                          marginBottom: "20px",
                        }}
                      />

                      <div className="file-input">
                        <input
                          type="file"
                          name="file-input"
                          onChange={(e) => setSelectedFile(e.target.files[0])}
                          id="file-input"
                          className="file-input__input"
                        />
                        <label
                          className="file-input__label"
                          htmlFor="file-input"
                        >
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
                      <div className="prof_body_bonus_box_2_btn">
                        <button
                          onClick={() => changePhoto()}
                          className="profile_change_btn"
                        >
                          Поменять
                        </button>
                      </div>
                    </div>
                  )}
                  <div className="exp_info_head_name_h">
                    {profile.username}{" "}
                  </div>
                </div>
              ) : (
                <div>Loading...</div>
              )}
              <div className="exp_info_head_right">
                <div className="exp_info_head_right_box">
                  <div className="exp_info_head_right_text">
                    <div className="profile_img">
                      <img
                        src="/img/a_author_trophy.svg"
                        alt=""
                        className="exp_info_head_right_img"
                      />
                    </div>
                    <div className="exp_info_head_right_text_h">307 726 </div>
                  </div>
                  <div className="exp_info_head_right_text_p">
                    Рейтинг автора{" "}
                  </div>
                </div>
                <div className="exp_info_head_right_box">
                  <div className="exp_info_head_right_text">
                    <img
                      src="/img/a_author_trophy.svg"
                      alt=""
                      className="exp_info_head_right_img"
                    />
                    <div className="exp_info_head_right_text_h">175 626 </div>
                  </div>
                  <div className="exp_info_head_right_text_p">
                    Рейтинг заказчика{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="exp_info_main">
                  <div className="exp_info_main_h">Имя пользователя </div>
                  <div className="exp_info_main_p">{profile.username} </div>
                </div>
                <div className="exp_info_main">
                  <div className="exp_info_main_h">Зарегистрирован </div>
                  <div className="exp_info_main_p">1 Ноя 2012 </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="exp_info_main">
                  <div className="exp_info_main_h"> Рабочий статус </div>
                  <div className="exp_info_main_p_2">Готов к работе </div>
                </div>
                <div className="exp_info_main">
                  <div className="exp_info_main_h">Отзывы о работе </div>
                  <img
                    src="/img/like.png"
                    alt=""
                    className="exp_info_main_icon"
                  />
                  <div className="exp_info_main_p_2">2 043 </div>
                  <img
                    src="/img/dizlike.png"
                    alt=""
                    className="exp_info_main_icon"
                  />
                  <div className="exp_info_main_p_2">
                    <span>15</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="prof_body_about">
              <div className="prof_body_about_h">О себе</div>

              {loading ? (
                <div className="prof_body_about_p">
                  {profile.bio != null
                    ? profile.bio
                    : "Информация о себе еще не заполнена."}
                </div>
              ) : (
                <div>Loading...</div>
              )}

              {isOpen ? (
                <textarea
                  style={{
                    border: "2px solid black",
                    color: "black",
                    padding: "10px",
                    borderRadius: "5px",
                    outline: "none",
                    resize: "none",
                    width: "100%",
                    height: "200px",
                    fontSize: "16px",
                    fontFamily: "Arial, sans-serif",
                  }}
                  placeholder="Расскажите о себе..."
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                />
              ) : null}

              {isOpen ? (
                <div className="prof_body_about_btn">
                  <button onClick={() => changeBio()}>Отправить</button>
                </div>
              ) : (
                <div className="prof_body_about_btn">
                  <button onClick={() => setIsOpen(true)}>Заполнить</button>
                </div>
              )}
            </div>
            {/* <div className="prof_body_comission">
              <div className="prof_body_comis_box">
                <div className="prof_body_comis_box_h">Комиссия</div>
                <div className="prof_body_comis_box_p">Рейтинг</div>
              </div>
              <div className="prof_body_comis_box">
                <div className="prof_body_comis_box_h">
                  <span>22%</span>{" "}
                </div>
                <input type="radio" className="prof_body_comis_box_radio" />
                <div className="prof_body_comis_box_p">0</div>
              </div>
              <div className="prof_body_comis_box">
                <div className="prof_body_comis_box_h">21%</div>
                <input type="radio" className="prof_body_comis_box_radio" />
                <div className="prof_body_comis_box_p">100</div>
              </div>
              <div className="prof_body_comis_box">
                <div className="prof_body_comis_box_h">20%</div>
                <input type="radio" className="prof_body_comis_box_radio" />
                <div className="prof_body_comis_box_p">150</div>
              </div>
              <div className="prof_body_comis_box">
                <div className="prof_body_comis_box_h">19%</div>
                <input type="radio" className="prof_body_comis_box_radio" />
                <div className="prof_body_comis_box_p">300</div>
              </div>
              <div className="prof_body_comis_box">
                <div className="prof_body_comis_box_h">18%</div>
                <input type="radio" className="prof_body_comis_box_radio" />
                <div className="prof_body_comis_box_p">500</div>
              </div>
              <div className="prof_body_comis_box">
                <div className="prof_body_comis_box_h">17%</div>
                <input type="radio" className="prof_body_comis_box_radio" />
                <div className="prof_body_comis_box_p">1200</div>
              </div>
            </div> */}
            <div className="prof_body_bonus">
              <div className="prof_body_bonus_name">Бонусы</div>

              <div className="row">
                <div className="col-lg-3 mb-4">
                  <div className="prof_body_bonus_box_1">
                    <div className="prof_body_bonus_box_1_h">Уровень 0</div>
                    <img
                      src="/img/services_1.png"
                      alt=""
                      className="prof_body_bonus_box_1_img"
                    />
                    <div className="prof_body_bonus_box_1_p">Рейтинг 0</div>
                  </div>
                </div>
                <div className="col-lg-3 mb-4">
                  <div className="prof_body_bonus_box_2">
                    <img
                      src="/img/prof_bonus_1.svg"
                      alt=""
                      className="prof_body_bonus_box_2_img"
                    />
                    <div className="prof_body_bonus_box_2_p">
                      -3% скидка на 1 заказ
                    </div>
                    <div className="prof_body_bonus_box_2_btn">
                      <button>Выбрать</button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 mb-4">
                  <div className="prof_body_bonus_box_2">
                    <img
                      src="/img/prof_bonus_2.svg"
                      alt=""
                      className="prof_body_bonus_box_2_img"
                    />
                    <div className="prof_body_bonus_box_2_p">
                      Премиум размещение
                    </div>
                    <div className="prof_body_bonus_box_2_btn">
                      <button>Выбрать</button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="prof_body_bonus_box_2">
                    <img
                      src="/img/prof_bonus_3.svg"
                      alt=""
                      className="prof_body_bonus_box_2_img"
                    />
                    <div className="prof_body_bonus_box_2_p">Срочный заказ</div>
                    <div className="prof_body_bonus_box_2_btn">
                      <button>Выбрать</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CabinetLayout>
    </>
  );
};

export default ProfileBody;
