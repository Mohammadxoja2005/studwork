import React, { useEffect, useState } from "react";
import CabinetLayout from "./CabinetLayout";
import { useSelector, useDispatch } from "react-redux";
import {
  getProfile,
  updateProfile,
  updateProfilePassword,
} from "../../redux/slices/profileSlice";

const OptBody = () => {
  const { profile, loading } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");

  useEffect(() => {
    dispatch(getProfile());
  }, []);

  if (loading) {
    return console.log("data is loading...");
  }

  const changeData = () => {
    dispatch(updateProfile({ phone: phone, username: username }));
  };

  const changeUserPassword = () => {
    dispatch(
      updateProfilePassword({
        old_password: oldPassword,
        password: newPassword,
      })
    );
  };

  return (
    <>
      <CabinetLayout>
        <div className="OptBody">
          <div className="opt_body_box">
            <div className="opt_body_name">Служба технической поддержки </div>
            <div className="d-flex align-items-center">
              <a href="" className="ord_head_a_1">
                Главная{" "}
              </a>
              <div className="ord_head_a_2">Настройки</div>
            </div>

            <div className=" option_inputs">
              <div className="">
                <div className="opt_body_info">
                  <div className="opt_body_info_h">Личная информация</div>
                  <div className="opt_body_info_box">
                    <div className="opt_body_info_box_h">Логин</div>
                    <input
                      placeholder={`${
                        profile.username != null
                          ? profile.username
                          : "write username username"
                      }`}
                      onChange={(e) => setUsername(e.target.value)}
                      type="text"
                      className="opt_body_info_box_inp"
                    />
                  </div>
                  <div className="opt_body_info_box">
                    <div className="opt_body_info_box_h">Телефон</div>
                    <input
                      placeholder={`${
                        profile.phone != null
                          ? profile.phone
                          : "write phone number"
                      }`}
                      onChange={(e) => setPhone(e.target.value)}
                      type="text"
                      className="opt_body_info_box_inp"
                    />
                  </div>
                </div>
                <div className="opt_body_info_btn">
                  <button onClick={() => changeData()}>Изменить данные</button>
                </div>
              </div>
              <div className="">
                <div className="opt_body_info">
                  <div className="opt_body_info_h">Пароль</div>
                  <div className="opt_body_info_box">
                    <div className="opt_body_info_box_h">Старый пароль</div>
                    <input
                      placeholder="User_Name"
                      type="text"
                      className="opt_body_info_box_inp"
                      onChange={(e) => setOldPassword(e.target.value)}
                    />
                  </div>
                  <div className="opt_body_info_box">
                    <div className="opt_body_info_box_h">Новый пароль</div>
                    <input
                      placeholder="User_Name"
                      type="text"
                      className="opt_body_info_box_inp"
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </div>
                  <button
                    className="profile_change_btn"
                    onClick={() => changeUserPassword()}
                  >
                    change password
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CabinetLayout>
    </>
  );
};

export default OptBody;
