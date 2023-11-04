import './tableData.scss';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { GridToolbar } from '@mui/x-data-grid/components';
import { Link } from 'react-router-dom';

type Props = {
  columns: GridColDef[],
  rows: object[],
  select: string
}

const TableData = (props: Props) => {

  const handleDelete = (id:number) => {
    //delete the item
    //axios.delete(`/api/${slug}/id`)
    console.log(id + 'has been deleted!')
  }

  const actionColumn: GridColDef = {
    field:'action',
    headerName: 'Action',
    width: 200,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/${props.select}/${params.row.id}`}>
            <img src="/view.svg" alt="" />
          </Link>
          <div className="delete" onClick={() => handleDelete(params.row.id)}>
            <img src="/delete.svg" alt="" />
          </div>
        </div>
      )
    }
  }

  return (
    <div className='dataTable' style={{height: 700, width: "85%"}}>
       <DataGrid className='dataGrid'
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}

        slots={{toolbar: GridToolbar}}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
}

export default TableData;
