import React, { useEffect, useState } from "react";
import { modes } from "../../../data";
import { NavLink } from "react-router-dom";
import hc from "../../../hc";
import NewOrderPage from "../../NewOrderPage";
import OrderPage from "../../OrderPage";
import ManagerPage from "../index";

import Table from "../../../components/Table";

const statusClass = {
  new: "badge-primary",
  process: "badge-warning",
  back: "badge-danger",
  archived: "badge-dark"
};

export default function Orders(props) {

  const {orders, setOrders} = props;

  const [products, setProducts] = useState([]);

  const fields = [
    { label: "ID", name: "id" },
    { label: "ИФО", name: "fullname" },
    {
      label: "Заказ",
      render(order) {
        return products.find((x) => x.id === order.productId)?.name;
      }
    },
    {
      label: "Статус",
      render({ status }) {
        const mode = modes.find((x) => x.id === +status);
        // if (mode.value) {
        //   return <span className={`badge ${statusClass[mode.value]}`}>{mode.name}</span>;
        // }
      }
    },
    {
      label: "Цена",
      render(order) {
        return products.find((x) => x.id === order.productId)?.price;
      }
    },
    {
      label: "Действия",
      render(order) {
        return (
          <NavLink
            to={`/order/${order.id}`}
            className="btn btn-outline-primary btn-sm"
          >
            Редактировать
          </NavLink>
        );
      }
    },
    {
      label: 'Дата',
      render(order) {
        const date = new Date(order.createdAt);
        const dateString = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;

        return dateString
      }
    }
  ];

  useEffect(() => {
    hc.get("/products", { _limit: 1000 }).then((products) =>
      setProducts(products)
    );
  }, []);

  useEffect(() => {
    hc.get("/orders", { _limit: 1000 }).then((orders) => setOrders(orders));
  }, []);

  return (
    <Table className="table table-striped" fields={fields} items={orders} />
  );
}
