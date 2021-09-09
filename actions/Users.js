import {
  NEW_USER,
  NEW_USER_COMMIT,
  NEW_USER_ROLLBACK,
  GET_USERS,
  GET_USERS_COMMIT,
  GET_USERS_ROLLBACK,
} from '../constants/ActionTypes';

/* 
Si una transacción es valida, se hace. La instrucción
 COMMIT garantiza que todas las modificaciones de la
  transacción se conviertan en una parte permanente
   de la base de datos. ... Esto se hace con la
    instrucción ROLLBACK que devuelve los datos al
     estado en que estaban al inicio de la transacción. */

//CONST
const DATABASE = 'http://10.0.2.2:3001';

export const newUser = userInfo => ({
  type: NEW_USER,
  payload: {userInfo},
});

export const getUsers = () => ({
  type: GET_USERS,
  payload: {},
});
