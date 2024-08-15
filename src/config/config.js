const arrUser = [
  {
    KEY: "1",
    ID: "TYPE",
    POSITION: "1",
    LABEL: "Tipo de identificacion",
    NAME: "TYPE",
    TYPE: "foreign",
    MAX_LENGTH: 20,
    LOW_LENGTH: 0,
    MANDATORY: true,
    VISIBLE: true,
    DISABLED: false,
    VALUE: "",
    FOCUS: false,
    FOREING_DAO: {
      CC: "CEDULA",
      TI: "TARJETA DE IDENTIDAD",
      CE: "CEDULA EXTRANJERIA",
      RC: "REGISTRO CIVIL",
    },
  },
  {
    KEY: "2",
    ID: "Identificacion",
    POSITION: "2",
    LABEL: "Identificacion",
    NAME: "Identificacion",
    TYPE: "number",
    MAX_LENGTH: 20,
    LOW_LENGTH: 0,
    MANDATORY: true,
    VISIBLE: true,
    DISABLED: false,
    VALUE: "",
    FOCUS: false,
    FOREING_DAO: {},
  },
  {
    KEY: "3",
    ID: "nombres",
    POSITION: "3",
    LABEL: "nombres",
    NAME: "nombres",
    TYPE: "text",
    MAX_LENGTH: 40,
    LOW_LENGTH: 0,
    MANDATORY: true,
    VISIBLE: true,
    DISABLED: false,
    VALUE: "",
    FOCUS: false,
    FOREING_DAO: {},
  },
  {
    KEY: "4",
    ID: "apellidos",
    POSITION: "4",
    LABEL: "apellidos",
    NAME: "apellidos",
    TYPE: "text",
    MAX_LENGTH: 40,
    LOW_LENGTH: 0,
    MANDATORY: true,
    VISIBLE: true,
    DISABLED: false,
    VALUE: "",
    FOCUS: false,
    FOREING_DAO: {},
  },
  {
    KEY: "5",
    ID: "numeroCelular",
    POSITION: "5",
    LABEL: "Numero de Celular",
    NAME: "numeroCelular",
    TYPE: "number",
    MAX_LENGTH: 20,
    LOW_LENGTH: 0,
    MANDATORY: true,
    VISIBLE: true,
    DISABLED: false,
    VALUE: "",
    FOCUS: false,
    FOREING_DAO: {},
  },
  {
    KEY: "6",
    ID: "correo",
    POSITION: "6",
    LABEL: "Correo electronico",
    NAME: "correo",
    TYPE: "text",
    MAX_LENGTH: 80,
    LOW_LENGTH: 0,
    MANDATORY: true,
    VISIBLE: true,
    DISABLED: false,
    VALUE: "",
    FOCUS: false,
    FOREING_DAO: {},
  },
  // fecha nacimiento
];
export { arrUser };
