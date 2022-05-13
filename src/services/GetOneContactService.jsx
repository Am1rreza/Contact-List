import http from "./httpService";

export default function getOneContacts(id) {
  return http.get(`/contacts/${id}`);
}