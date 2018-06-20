// API definition for individual component
// "database talker"
import axios from 'axios';

// Endpoint root
const root = '/layouts';

export default class LayoutAPI {
  static get() {
    return axios.get(root);
  }

  static edit(payload) {
    return axios.put(`${root}/edit/payload.id`, payload);
  }

  static add(payload) {
    return axios.post(root, payload);
  }

  static delete(payload) {
    return axios.delete(`${root}/delete/payload.id`, payload);
  }
}
