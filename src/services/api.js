import requestApi from 'Utils/http-utils'

export const authAPI = {
  signUp(userInfo) {
    return requestApi()
      .post(`/auth/sign_up`, userInfo)
      .then((response) => response);
  },
  signIn(userData) {
    return requestApi()
      .post(`/auth/sign_in`, userData)
      .then((response) => response);
  },
};

export const officersAPI = {
  getOfficers(token) {
    return requestApi(token)
      .get(`/officers`)
      .then((response) => response);
  },
  addNewOfficer(token, officerData) {
    return requestApi(token)
      .post(`/officers`, officerData)
      .then((response) => response);
  },
  editOfficer(token, officerId, officerData) {
    return requestApi(token)
      .put(`/officers/${officerId}`, officerData)
      .then((response) => response);
  },
  deleteOfficer(token, id) {
    return requestApi(token)
      .delete(`/officers/${id}`)
      .then((response) => response);
  },
};

export const casesAPI = {
  addNewUnauthorizedMessage(newMessage) {
    return requestApi()
      .post(`/public/report`, newMessage)
      .then((response) => response);
  },
  addNewMessage(token, newMessage) {
    return requestApi(token)
      .post(`/cases`, newMessage)
      .then((response) => response);
  },
  editMessage(token, messageId, newMessage) {
    return requestApi(token)
      .put(`/cases/${messageId}`, newMessage)
      .then((response) => response);
  },
  deleteMessage(token, messageId) {
    return requestApi(token)
      .delete(`/cases/${messageId}`)
      .then((response) => response);
  },
  getAllMessages(token) {
    return requestApi(token)
      .get(`/cases`)
      .then((response) => response);
  },
  getCurrentMessage(token, messageId) {
    return requestApi(token)
      .get(`/cases/${messageId}`)
      .then((response) => response);
  },
};
