import TableData from '../../components/TableData/TableData';
import { userRows } from '../../data';
import './users.scss';
import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Add from '../../components/Add/Add';
import {useState} from 'react';
import { useQuery } from '@tanstack/react-query';
 

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'avatar',
    headerName: 'Avatar',
    width:100,
    renderCell: (params) => {
      return <img src={params.row.img || '/noavatar.png'} alt="" />
    }
  },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    type: 'string',
    width: 150,
    editable: true,
  },
  {
    field: 'phone',
    headerName: 'Phone',
    type: 'string',
    width: 150,
    editable: true,
  },
  {
    field: 'createdAt',
    headerName: 'Date Created',
    type: 'Date',
    width: 150,
    editable: true,
  },
  {
    field: 'verified',
    headerName: 'Verified',
    type: 'boolean',
    width: 150,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];


const Users = () => {

  const [open, setOpen] = useState(false);

  const { isLoading } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://api.github.com/repos/TanStack/query').then(
        (res) => res.json(),
      ),
  })

  return (
    <div className='users'>
      <div className="info">
        <h1>Users</h1>
        <button onClick={()=> setOpen(true)}>Add New User</button>
      </div>

      {isLoading ? ('Loading...') :  <TableData select='users' columns={columns} rows={userRows}/>}

      {open && <Add slug='user' columns={columns} setOpen={setOpen}/>}
    </div>
  );
}

export default Users;
