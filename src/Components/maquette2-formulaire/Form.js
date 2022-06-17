import "./Form.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function form() {
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  const [cpasswordIsVisible, setCpasswordIsVisible] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="corps">
        <div className="gauche">
          <div className="elt-form">
            <label>Prénom</label>
            <input
              type="text"
              placeholder="Ex. John"
              {...register("firstName", {
                required: true,
                maxLength: 20,
                pattern: /^[A-Za-z]+$/i
              })}
            />
            {errors?.firstName?.type === "required" && (
              <p style={{ color: "red", fontWeight: "bold" }}>
                First Name field is required
              </p>
            )}
            {errors?.firstName?.type === "maxLength" && (
              <p style={{ color: "red", fontWeight: "bold" }}>
                First name cannot exceed 20 characters
              </p>
            )}
            {errors?.firstName?.type === "pattern" && (
              <p style={{ color: "red", fontWeight: "bold" }}>
                Alphabetical characters only
              </p>
            )}
          </div>
          <div className="elt-form">
            <label>E-mail</label>
            <input
              type="text"
              placeholder="mail@mail.com"
              {...register("mail", {
                required: true,
                pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i
              })}
            />
            {errors?.mail?.type === "required" && (
              <p style={{ color: "red", fontWeight: "bold" }}>
                E-mail is required
              </p>
            )}
            {errors?.mail?.type === "pattern" && (
              <p style={{ color: "red", fontWeight: "bold" }}>
                E-mail is not valid
              </p>
            )}
          </div>
          <div className="elt-form">
            <label>Mot de passe </label>
            <input
              type={passwordIsVisible ? "text" : "password"}
              placeholder="xxxxxxxx"
              {...register("Pass", {
                required: true,
                minLength: 8,
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/i
              })}
            />
            {errors?.Pass?.type === "required" && (
              <p style={{ color: "red", fontWeight: "bold" }}>
                You must specify a password
              </p>
            )}
            {errors?.Pass?.type === "minLength" && (
              <p style={{ color: "red", fontWeight: "bold" }}>
                Password must have at least 8 characters
              </p>
            )}
            <button
              className="btn-password"
              onClick={() => setPasswordIsVisible((prevState) => !prevState)}
            >
              {passwordIsVisible ? (
                <FontAwesomeIcon icon={faEye} />
              ) : (
                <FontAwesomeIcon icon={faEyeSlash} />
              )}
            </button>
          </div>
        </div>
        <div className="droite">
          <div className="elt-form">
            <label>Nom</label>
            <input
              type="text"
              placeholder="Ex. DUPONT"
              {...register("lastName", {
                required: true,
                maxLength: 20,
                pattern: /^[A-Za-z]+$/i
              })}
            />
            {errors?.lastName?.type === "required" && (
              <p style={{ color: "red", fontWeight: "bold" }}>
                Last Name is required
              </p>
            )}
            {errors?.lastName?.type === "maxLength" && (
              <p style={{ color: "red", fontWeight: "bold" }}>
                Last name cannot exceed 20 characters
              </p>
            )}
            {errors?.lastName?.type === "pattern" && (
              <p style={{ color: "red", fontWeight: "bold" }}>
                Alphabetical characters only
              </p>
            )}
          </div>
          <div className="elt-form">
            <label>No. Téléphone portable</label>
            <input
              type="text"
              placeholder="Ex. 06 XX XX XX XX"
              {...register("tel", {
                required: true,
                pattern: /[0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}/i
              })}
            />
            {errors?.tel?.type === "required" && (
              <p style={{ color: "red", fontWeight: "bold" }}>
                Telephone field is required
              </p>
            )}
            {errors?.tel?.type === "pattern" && <p>Invalid format </p>}
          </div>
          <div className="elt-form">
            <label>Confirmation de mot de passe</label>
            <input
              type={cpasswordIsVisible ? "text" : "password"}
              placeholder="xxxxxxxx"
            />
            <button
              className="btn-cpassword"
              onClick={() => setCpasswordIsVisible((prevState) => !prevState)}
            >
              {cpasswordIsVisible ? (
                <FontAwesomeIcon icon={faEye} />
              ) : (
                <FontAwesomeIcon icon={faEyeSlash} />
              )}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
