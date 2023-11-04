import './products.scss';
import Add from '../../components/Add/Add';
import {useState} from 'react';
import TableData from '../../components/TableData/TableData';
import { GridColDef } from '@mui/x-data-grid';
import { products } from '../../data';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'avatar',
    headerName: 'Avatar',
    width:90,
    renderCell: (params) => {
      return <img src={params.row.img} alt="" />
    },
  },
  {
    field: 'title',
    headerName: 'Title', 
    width: 240,
    type: 'string',
  },
  {
    field: 'color',
    headerName: 'Color',
    width: 120,
    type: 'string',
  },
  {
    field: 'price',
    headerName: 'Price',
    type: 'string',
    width: 150,
  },
  {
    field: 'producer',
    headerName: 'Producer',
    type: 'string',
    width: 160,
  },
  {
    field: 'createdAt',
    headerName: 'Date Created',
    type: 'string',
    width: 120,
  },
  {
    field: 'inStock',
    headerName: 'In Stock',
    type: 'boolean',
    width: 150,
  },
  
];

const Products = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className='products'>
      <div className="info">
        <h1>Products</h1>
        <button onClick={()=> setOpen(true)}>Add New Products</button>
      </div>
      <TableData select='products' columns={columns} rows={products}/>
      {open && <Add slug='product' columns={columns} setOpen={setOpen}/>}
    </div>
  );
  
}

export default Products;
