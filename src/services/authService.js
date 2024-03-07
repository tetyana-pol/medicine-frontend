import { authClient } from "../http/authClient.js";

function getAllCompany() {
  return authClient.get("/company");
}

function getDrugsByCompany(idCompany) {
  return authClient.get(`/drug/${idCompany}`);
}

function addOrder(data) {
  return authClient.post("/order/add", data);
}

export const authService = { getAllCompany, getDrugsByCompany, addOrder };
