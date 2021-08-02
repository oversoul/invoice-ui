interface Renderer {
  [index: number]: Function;
}

type TableProps = {
  cols: Array<string>;
  rows: Array<Array<any>>;
  renderer?: Renderer;
};

const FilterableTable = (props: TableProps) => {
  const renderers: Renderer = props.renderer ?? {};
  return (
    <table className="custom-table border-separate text-left w-full">
      <thead>
        <tr>
          {props.cols.map((header: string, cI: number) => (
            <th className="px-4 text-sm text-gray-500" key={cI}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.rows.length === 0 && (
          <tr>
            <td colSpan={props.cols.length} className="text-center p-4">No rows.</td>
          </tr>
        )}
        {props.rows.map((row: Array<Array<any>>, rI: number) => (
          <tr className="shadow rounded-xl" key={rI}>
            {row.map((element: any, idx: number) => (
              <td className="bg-white p-4" key={`${rI}-${idx}`}>
                <TableRow data={element} renderer={renderers[idx] ?? null} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

type RowProp = {
  data: any;
  renderer?: Function;
};

const TableRow = (props: RowProp) => {
  if (props.renderer) {
    return props.renderer(props.data);
  }

  return <div>{props.data}</div>;
};

export default FilterableTable;
