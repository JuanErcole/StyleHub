import { Grid, TextField, Divider } from '@mui/material';
import InputLabel from '@mui/material/InputLabel'
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { useProductStore } from "../../hooks/useProductStore"
import Typography from '@mui/material/Typography';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Product } from '../../models/models';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

const initialState: Product = {
  id: 0,
  name: "",
  description: "",
  price: 0,
  is_offer: false,
  imgUrl: ''
}

export const SavingProductPage = () => {

  const [product, setProduct] = useState<Product>(initialState)

  const { products, /* savingProduct */ } = useProductStore();

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const productId = parseInt(id)
      const item = products.find(product => product.id === productId)
      setProduct(prevProduct => item || prevProduct)
    }
  }, [])

  const handleImputChange = ({ target }: any) => {
    const { name, value } = target
    setProduct({
      ...product,
      [name]: value
    })
  }

  const valueOfSelect = product?.is_offer === true ? 'true' : 'false'; 

  const handleChange = (event: SelectChangeEvent) => {
    
    let val;

    (event.target.value === 'true' ? val = true : val = false)

    setProduct({
      ...product,
      [event.target.name]: val

    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(product);
    
  }

  return (
    <Grid>
      <Grid
        item
        xs={12}
        textAlign='center'
      >
        <Typography variant="h2" >
          {id ? 'Editar producto' : 'Añadir producto'}
        </Typography>
      </Grid>
      <Divider />
      <form onSubmit={handleSubmit}>
        <Grid
          item
          display='flex'
          flexDirection='column'
          xs={12}
          my={3}
          px={2}
          gap={3}
        >
          <TextField
            label="Nombre"
            name='name'
            value={product?.name}
            onChange={handleImputChange}
            variant="standard"
          />
          <TextField
            label="Descripcion"
            name='description'
            value={product?.description}
            onChange={handleImputChange}
            variant="standard"
          />
          <TextField
            label="Imagen"
            name='imgUrl'
            value={product?.imgUrl}
            onChange={handleImputChange}
            multiline
            rows={3}
            maxRows={6}
            variant="standard"
          />
          <InputLabel id="demo-simple-select-label">¿Esta en oferta?</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name='is_offer'
            value={valueOfSelect}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={'true'} >
              Si
            </MenuItem>
            <MenuItem value={'false'}>
              No
            </MenuItem>
          </Select>
          <Button>
            {id ? 'Actualizar' : 'Añadir'}
          </Button>
        </Grid>
      </form>
    </Grid>
  )
}
