// eslint-disable-next-line no-unused-vars
import React, { useReducer, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import "./FieldUniversalStyle.css";
/* ********** COMPONENTES FIELD *****************/
import {
  FieldText,
  FieldForeign,
  FieldLocation,
  FieldBoolean,
  FieldForeingMulti,
} from "./fields/componentFieldsIndex";

/* ********** ***************** *****************/

const i18n =
  (window.navigator.language || navigator.browserLanguage).split("-")[0] ===
  "es"
    ? "es"
    : "en";

const TYPES = { STATE_FIELD: "STATE_FIELD" };

const reducer = (state, action) => {
  switch (action.type) {
    case TYPES.STATE_FIELD: {
      const { value, text, validation } = action.payload.dataValidate;

      return { ...state, value, text, validation };
    }
    default:
      return state;
  }
};

const TYPE = {
  BOOLEAN: "boolean" || "Boolean",
  LOCATION: "location" || "Location",
  TEXT: "text" || "Text" || "TEXT",
  NUMBER: "number" || "Number",
  SELECT: "foreign" || "Foreign",
  SELECT_MULTI: "select",
  HIDDEN: "hidden" || "Hidden",
  DATE: "date" || "Date",
  PRUEBA: "prb",
};

export const FieldUniversal = ({
  type,
  value = "",
  maxStr = 0,
  minStr = 0,
  maxNum = 10,
  mandatory = false,
  getValue,
  style = {},
  onCreateFrg,
  permissionsCreateFrg = false,
  id,
  label,
  //  visible = true,
  iconMndtory = true,
  disabled = false,
  readOnly = false,
  autoComplete = false,
  foreignDao = { 1: "Example 1", 2: "Example 2" },
  zoom = 17,
  typeGeo = 0, // 0 TRACKEO - 1 CURRENTPOSITION
  expReg = "",
  nameBtnClose = "Close",
  nameBtnCreate = "Create",
  iconSelect,
}) => {
  const maxIntStr = parseInt(maxStr);
  const fieldRef = useRef(null);

  const defaultValue = (_) => {
    let result = value;

    //	const minInt = parseInt(min);
    if (type === TYPE.BOOLEAN && ["", null, undefined].includes(value)) {
      result = false;
    }
    if (type === TYPE.TEXT) {
      if (value.length > maxIntStr) {
        result = value.substring(0, maxIntStr);
      }
    }
    return result;
  };

  const initalStateFU = {
    value: defaultValue(),
    text: "",
    validation: { show: false, msn: "" },
    i18n,
  };
  const [state, dispatch] = useReducer(reducer, initalStateFU);

  useEffect(() => {
    validateField(value, null);
    return () => {};
  }, []);

  /**
   * @name onChange
   * @description se ejecuta en el evento change de cada field
   * @param {value} valor a cambiar
   * @param {textField} valor que viene en los selects
   */
  const onChange = (value, textField) => {
    if (value === null && textField !== "") {
      onCreateFrg(textField);
    } else {
      validateField(value, textField);
    }
  };

  const validateField = (value, textField = null) => {
    let newValue = textField !== null && textField !== "" ? textField : value;
    let msn = "";
    let show = false;

    if (value === "" && mandatory) {
      msn = "Campo requerido";
      show = true;
    }

    switch (type) {
      case TYPE.PRUEBA:
        if (value.length > maxIntStr) {
          msn = `solo ${maxIntStr} caracteres permitidos`;
          show = true;
          newValue = value.substring(0, maxIntStr);
        }
        break;
      case TYPE.TEXT:
        if (value.length > maxIntStr) {
          msn = `solo ${maxIntStr} caracteres permitidos`;
          show = true;
          newValue = value.substring(0, maxIntStr);
        }
        if (expReg !== "") {
          const testValue = expReg.test(value);
          console.log(testValue);
          if (!testValue) {
            msn = `no se permite caracteres especiales y solo ${maxIntStr} caracteres permitidos`;
            show = true;
          }
        }
        break;
      case TYPE.NUMBER:
        if (value.length > maxIntStr) {
          msn = `solo ${maxIntStr} caracteres permitidos`;
          show = true;
          newValue = value.substring(0, maxIntStr);
        }
        if (expReg !== "") {
          const testValue = expReg.test(value);
          console.log(testValue);
          if (!testValue) {
            msn = `no se permite caracteres especiales y solo ${maxIntStr} caracteres permitidos`;
            show = true;
          }
        }
        break;
      case TYPE.DATE:
        if (value === "invalid date") {
          msn = "no cumple el formato de fecha";
          show = true;
        }
        break;
      default:
        break;
    }

    const dataValidate = {
      value: newValue,
      text: textField,
      validation: { show: msn !== "", msn },
    };

    getValue(id, value, show, textField);
    dispatch({ type: TYPES.STATE_FIELD, payload: { dataValidate } });
  };

  return (
    <div className="containerFieldUniversal">
      {type !== TYPE.HIDDEN && (
        <>
          {[TYPE.TEXT, TYPE.NUMBER].includes(type) && (
            <FieldText
              id={id}
              type={type}
              label={label}
              value={state.value}
              i18n={state.i18n}
              maxlength={maxIntStr}
              min={minStr}
              max={maxStr}
              mandatory={mandatory}
              disabled={disabled}
              autoComplete={autoComplete === true ? "on" : "off"}
              showValidation={state.validation.show}
              onValueMax={maxNum}
              reference={fieldRef}
              onChange={onChange}
              readOnly={readOnly}
            />
          )}
          {type === TYPE.SELECT && (
            <FieldForeign
              id={id}
              label={label}
              value={state.value}
              i18n={state.i18n}
              mandatory={mandatory}
              disabled={disabled}
              autoComplete={autoComplete === true ? "on" : "off"}
              showValidation={state.validation.show}
              reference={fieldRef}
              onChange={onChange}
              foreignDao={foreignDao}
              permissionsCreateFrg={permissionsCreateFrg}
              readOnly={readOnly}
              nameBtnClose={nameBtnClose}
              nameBtnCreate={nameBtnCreate}
              iconSelect={iconSelect}
            />
          )}
          {type === TYPE.SELECT_MULTI && (
            <FieldForeingMulti
              id={id}
              label={label}
              value={state.value}
              i18n={state.i18n}
              mandatory={mandatory}
              disabled={disabled}
              autoComplete={autoComplete === true ? "on" : "off"}
              showValidation={state.validation.show}
              reference={fieldRef}
              onChange={onChange}
              foreignDao={foreignDao}
              permissionsCreateFrg={permissionsCreateFrg}
              readOnly={readOnly}
              nameBtnClose={nameBtnClose}
              nameBtnCreate={nameBtnCreate}
              iconSelect={iconSelect}
            />
          )}
          {type === TYPE.LOCATION && (
            <FieldLocation
              id={id}
              label={label}
              value={state.value}
              i18n={state.i18n}
              mandatory={mandatory}
              disabled={disabled}
              autoComplete={autoComplete === true ? "on" : "off"}
              showValidation={state.validation.show}
              reference={fieldRef}
              onChange={onChange}
              zoom={zoom}
              typeGeo={typeGeo}
              readOnly={readOnly}
              iconSelect={iconSelect}
            />
          )}
          {type === TYPE.BOOLEAN && (
            <FieldBoolean
              id={id}
              label={label}
              value={state.value}
              i18n={state.i18n}
              mandatory={mandatory}
              disabled={disabled}
              showValidation={state.validation.show}
              reference={fieldRef}
              onChange={onChange}
              readOnly={readOnly}
            />
          )}
        </>
      )}

      {mandatory && iconMndtory && (
        <>
          <span className={"spanValidateIcon"}>*</span>
        </>
      )}
      {state.validation.msn !== "" && (
        <span className={"spanValidateMsn"}>{state.validation.msn}</span>
      )}
    </div>
  );
};

FieldUniversal.propTypes = {
  type: PropTypes.string,
  value: PropTypes.any,
  maxStr: PropTypes.number,
  minStr: PropTypes.number,
  maxNum: PropTypes.number,
  mandatory: PropTypes.bool,
  getValue: PropTypes.func,
  onCreateFrg: PropTypes.func,
  id: PropTypes.any,
  label: PropTypes.string,
  permissionsCreateFrg: PropTypes.bool,
  //  visible: PropTypes.bool,
  iconMndtory: PropTypes.bool,
  disabled: PropTypes.bool,
  autoComplete: PropTypes.bool,
  foreignDao: PropTypes.any,
  zoom: PropTypes.number,
  typeGeo: PropTypes.number,
  readOnly: PropTypes.bool,
  expReg: PropTypes.any,
};
/* 
const expresiones = {
    user:  /^[a-zA-Z0-9_-]{4,16}$/,
     name: /^[a-zA-ZÁ-ÿ\s]{1,40}$/,
    pass:  /^.{4,12}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    movil: /^d{7,14}$/
}
*/
