import Axios from 'axios';

const apiHelper = Axios.create({
  baseURL: "http://192.168.20.42/sales-tracking-be/app/gate_listener/",
});

export default apiHelper;