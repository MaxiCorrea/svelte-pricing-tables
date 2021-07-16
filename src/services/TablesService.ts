import axios from "axios";
import type { Table } from "../domains/Table";

export class TablesService {
  static async getTables(): Promise<Table[]> {
    return axios
      .get("https://java-pricing-tables-api.herokuapp.com/tables")
      .then((res) => {
        const { data } = res;
        return data;
      })
      .catch((err) => {
        throw err;
      });
  }
}
