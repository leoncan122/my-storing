import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { AppDispatch, RootState } from "../../app/store";
import { connect } from "../user/UserSlice";

import styles from "../counter/Counter.module.css";
export const selector = (state: RootState) => state.users;
export const selectorAuth = (state: RootState) => state.auth;

export function User() {
  const dispatch: AppDispatch = useAppDispatch();
  const statusSelector = useAppSelector(selector);
  const authSelector = useAppSelector(selectorAuth);

  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    location: "",
    status: "",
  });

  function handleOnChange(event: any) {
    setNewUser({
      ...newUser,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <>
      <title>{authSelector.token}</title>
      <div role="main" className="wrapper">
        {!newUser.username ? (
          <div>Empty</div>
        ) : (
          <p>{statusSelector.username + " from " + statusSelector.location}</p>
        )}
        <p>{statusSelector.status} </p>
        <button
          className={styles.button}
          onClick={() => dispatch(connect(newUser))}
        >
          Connect
        </button>
        <form>
          <input type="email" name="email" onChange={handleOnChange} />
          <input type="text" name="username" onChange={handleOnChange} />
          <input type="text" name="location" onChange={handleOnChange} />
        </form>
      </div>
    </>
  );
}
