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
    <>
      <div className="flex justify-between items-center text-xs text-gray-700">
        {props.cols.map((header: string) => (
          <TableHeader data={header} />
        ))}
      </div>

      <div>
        {props.rows.map((row: Array<Array<any>>) => (
          <div className="flex justify-between items-center text-xs text-gray-700">
            {row.map((element: any, idx: number) => (
              <TableRow data={element} renderer={renderers[idx] ?? null} />
            ))}
          </div>
        ))}
      </div>
    </>
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

  return <div className="p-2">{props.data}</div>;
};

type HeaderProp = {
  data: string;
};

const TableHeader = (props: HeaderProp) => {
  return <div className="p-2">{props.data}</div>;
};

export default FilterableTable;
