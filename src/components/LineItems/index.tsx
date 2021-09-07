import { useEffect, useReducer, useState } from "react";
import { FaTimes } from "react-icons/fa";
import TextInput from "../TextInput";

type LineItem = {
  name: string;
  price: number;
  quantity: number;
};

const lines: LineItem[] = [
  { name: "Legal Advising", quantity: 2, price: 500 },
  { name: "Expert Consulting", quantity: 0, price: 0 },
];

type RowProps = {
  data: LineItem;
  onChange: Function;
  onDelete: Function;
};

const TableRow = ({ data, onChange, onDelete }: RowProps) => {
  const [row, setRow] = useState(data);
  const [total, setTotal] = useState(0);

  const updateRow = (data: object) => {
    const value = { ...row, ...data };
    setRow(value);
    setTotal(value.quantity * value.price);
    onChange(value);
  };

  return (
    <tr>
      <td className="py-2">
        <TextInput
          value={row.name}
          setValue={(name: string) => updateRow({ name })}
        />
      </td>
      <td className="p-2">
        <TextInput
          type={"number"}
          value={row.quantity}
          setValue={(quantity: number) => updateRow({ quantity })}
        />
      </td>
      <td className="p-2">
        <TextInput
          type={"number"}
          value={row.price}
          setValue={(price: number) => updateRow({ price })}
        />
      </td>
      <td className="p-2">{total}</td>
      <td>
        <button
          onClick={(e) => {
            e.preventDefault();
            onDelete();
          }}
        >
          <FaTimes />
        </button>
      </td>
    </tr>
  );
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "add-line": {
      const lines = [...state.lines];
      lines.push({ name: "", price: 0, quantity: 0 });
      return { lines, total: calculateTotal(lines) };
    }

    case "calculate-total": {
      return { lines: state.lines, total: calculateTotal(state.lines) };
    }

    case "update-line": {
      const lines = [...state.lines];
      lines[action.payload.id] = action.payload.row;
      return { lines: lines, total: calculateTotal(lines) };
    }

    case "delete-line": {
      const lines = [...state.lines];
      lines.splice(action.payload.id, 1);
      return { lines: lines, total: calculateTotal(lines) };
    }

    default:
      throw new Error();
  }
};

const calculateTotal = (data: LineItem[]) => {
  return data.reduce((sum, c) => sum + c.price * c.quantity, 0);
};

const LineItems = () => {
  const [state, dispatch] = useReducer(reducer, { lines: lines, total: 0 });

  useEffect(() => {
    dispatch({ type: "calculate-total" });
  }, []);

  return (
    <div className="pb-10">
      <table className="w-full text-left">
        <colgroup>
          <col width="50%" />
          <col width="15%" />
          <col width="15%" />
          <col width="15%" />
          <col width="5%" />
        </colgroup>
        <thead className="text-sm text-gray-500">
          <tr>
            <th>Item</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {state.lines.map((row: LineItem, idx: number) => (
            <TableRow
              key={idx}
              data={row}
              onDelete={() =>
                dispatch({ type: "delete-line", payload: { id: idx } })
              }
              onChange={(r: LineItem) => {
                dispatch({ type: "update-line", payload: { row: r, id: idx } });
              }}
            />
          ))}
        </tbody>
      </table>
      <div className="flex justify-between">
        <button
          onClick={() => dispatch({ type: "add-line" })}
          className="text-blue-600 uppercase text-sm font-medium"
        >
          + Add Item
        </button>
        <div>Total: {state.total.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default LineItems;
