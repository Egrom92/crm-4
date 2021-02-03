export const orderTableHeaders = [
  {
    label: "",
    field: "ID"
  },
  {
    label: "ИФО",
    field: "client"
  },
  {
    label: "Заказ",
    field: "name"
  },
  {
    label: "Сумма",
    field: "price"
  },
  {
    label: "Статус",
    field: "status"
  },
  {
    label: "Действия",
    field: "action"
  },
  {
    label: "Дата / Время",
    field: "dateTime"
  }
];

export const modes = [
  {
    id: 0,
    name: "Новый",
    value: "new",
    className: "btn-outline-primary"
  },
  {
    id: 1,
    name: "На исполнение",
    value: "process",
    className: "btn-outline-warning"
  },
  {
    id: 2,
    name: "Возврат",
    value: "back",
    className: "btn-outline-danger"
  },
  {
    id: 3,
    name: "Заархивированные",
    value: "archived",
    className: "btn-outline-dark"
  }
];