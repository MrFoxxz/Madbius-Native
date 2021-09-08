//POST
export const NEW_USER = 'NEW_USER';
export const NEW_USER_COMMIT = 'NEW_USER_COMMIT';
export const NEW_USER_ROLLBACK = 'NEW_USER_ROLLBACK';
//GET
export const GET_USERS = 'GET_USERS';
export const GET_USERS_COMMIT = 'GET_USERS_COMMIT';
export const GET_USERS_ROLLBACK = 'GET_USERS_ROLLBACK';

/* 
Si una transacción es valida, se hace. La instrucción
 COMMIT garantiza que todas las modificaciones de la
  transacción se conviertan en una parte permanente
   de la base de datos. ... Esto se hace con la
    instrucción ROLLBACK que devuelve los datos al
     estado en que estaban al inicio de la transacción. */

//CONST
const DATABASE = 'http://10.0.2.2:3001';

/* npx react-native run-android */

export const newUser = userInfo => ({
  type: NEW_USER,
  payload: {userInfo},
  meta: {
    offline: {
      effect: {
        url: DATABASE + '/api/user/new',
        method: 'POST',
        json: {userInfo},
      },
      commit: {type: NEW_USER_COMMIT, meta: {userInfo}},
      rollback: {type: NEW_USER_ROLLBACK, meta: {userInfo}},
    },
  },
});

export const getUsers = () => ({
  type: GET_USERS,
  payload: {},
  meta: {
    offline: {
      // la acción de red para ejecutar:
      effect: {url: DATABASE + '/api/user/get', method: 'GET'},
      // acción para enviar cuando el efecto tiene éxito:
      commit: {type: GET_USERS_COMMIT, meta: {}},
      // acción para enviar si la acción de la red falla permanentemente:
      rollback: {type: GET_USERS_ROLLBACK, meta: {}},
    },
  },
});
