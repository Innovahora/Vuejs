const TOKEN = 'token'
const USER_ID = 'user_id'
const FIRST_NAME = 'first_name'
const LAST_NAME = 'last_name'
const EMAIL = 'email'
const NAME = 'username'
const TYPE_USER = 'type_user'
const READ_ONLY = 'read_only'
const DEFAULT_ROLE = 'afp'
// const EXP = 'exp'

export function jwtDecode(token) {
  let base64Url = token.split('.')[1]
  let base64 = base64Url.replace('-', '+').replace('_', '/')
  let dataUser = JSON.parse(window.atob(base64))
  return dataUser
}

export function setTokenData(token, user) {
  //let jsonData = jwtDecode(token)
  let userId = user.id
  let userName = user.username
  let email = user.email
  let type_user = (user.type_user != '' && user.type_user != null) ? user.type_user : DEFAULT_ROLE

  let read_only = ''
  if (type_user == 'afp') {
    read_only = (user.read_only != '' && user.read_only != null) ? (user.read_only ? 1 : 0) : 0
  }

  // console.log('toedadsa', token)
  setToken(token)
  setName(userName)
  setTypeUser(type_user)
  setReadOnly(read_only)
  setUserId(userId)
  setEmail(email)
  // setExpire(jsonData.exp)
}

export function setToken(token) {
  localStorage.setItem(TOKEN, token)
}

export function setUserId(userId) {
  localStorage.setItem(USER_ID, userId)
}

export function setEmail(email) {
  localStorage.setItem(EMAIL, email)
}

export function setName(name) {
  localStorage.setItem(NAME, name)
}

export function setTypeUser(type_user) {
  type_user = (type_user != '' && type_user != null) ? type_user : DEFAULT_ROLE
  localStorage.setItem(TYPE_USER, type_user)
}

export function setReadOnly(read_only) {
  read_only = (read_only != '' && read_only != null) ? (read_only ? 1 : 0) : 0
  localStorage.setItem(READ_ONLY, read_only)
}

export function getToken() {
  return localStorage.getItem(TOKEN)
}

export function getUserId() {
  return localStorage.getItem(USER_ID)
}

export function getEmail() {
  return localStorage.getItem(EMAIL)
}

export function getName() {
  return localStorage.getItem(NAME)
}

export function getTypeUser() {
  let type_user = (localStorage.getItem(TYPE_USER) != '' && localStorage.getItem(TYPE_USER) != null) ? localStorage.getItem(TYPE_USER) : DEFAULT_ROLE
  return type_user
}

export function getReadOnly() {
  let read_only = (localStorage.getItem(READ_ONLY) != '' && localStorage.getItem(READ_ONLY) != null) ? localStorage.getItem(READ_ONLY) : 0
  return read_only
}

export function removeToken() {
  return localStorage.removeItem(TOKEN)
}

export function removeUserId() {
  return localStorage.removeItem(USER_ID)
}

export function removeEmail() {
  return localStorage.removeItem(EMAIL)
}

export function removeName() {
  return localStorage.removeItem(NAME)
}
export function removeTypeUser() {
  return localStorage.removeItem(TYPE_USER)
}
// function setExpire(expire) {
//   if (!expire) { return null; }
//   const date = new Date(0)
//   date.setUTCSeconds(token.exp)
//   return date;
// }

export function isAuthenticated() {
  const idToken = getToken()
  return !!idToken
}

export function authLogout() {
  removeToken()
  removeUserId()
  removeEmail()
  removeName()
  removeTypeUser()
}
