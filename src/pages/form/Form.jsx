import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Stack } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useNavigate } from "react-router-dom";

const dataOptions = [
  { value: 'user', label: 'User' },
  { value: 'admin', label: 'Admin' },
  { value: 'manager', label: 'Manager' },
  { value: 'other', label: 'Other' },
];

const Form = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(true);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpen(false);
  };

  const onSubmit = async (data) => {
    console.log("The Entered Data:", data);
    setError('');
    setLoading(true);

    try {

      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit data to the server');
      }

      const responseData = await response.json();
      console.log('The Response Data:', responseData);

      handleClick();
      reset();

    } catch (err) {
      console.error("error:", err);
      setError(err.message || 'occurred an error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
        display: 'flex',
        flexDirection: 'column',
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Stack direction="row" spacing={2}>
        <TextField
          error={Boolean(errors.firstName)}
          helperText={Boolean(errors.firstName) ? "This field is required & min length 3 chars" : null}
          {...register("firstName", { required: true, minLength: 3 })}
          sx={{ flex: 1 }}
          label="First Name"
          variant="filled"
        />

        <TextField
          error={Boolean(errors.lastName)}
          helperText={Boolean(errors.lastName) ? "This field is required & min length 3 chars" : null}
          {...register("lastName", { required: true, minLength: 3 })}
          sx={{ flex: 1 }}
          label="Last Name"
          variant="filled"
        />
      </Stack>

      <TextField
        error={Boolean(errors.email)}
        helperText={Boolean(errors.email) ? "This field is required & valid email format" : null}
        {...register("email", {
          required: true,
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          }
        })}
        label="Email"
        variant="filled"
      />

      <TextField
        error={Boolean(errors.contactNumber)}
        helperText={Boolean(errors.contactNumber) ? "This field is required & valid contact number" : null}
        {...register("contactNumber", {
          required: true,
          pattern: {
            value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
          }
        })}
        label="Contact Number"
        variant="filled"
      />

      <TextField {...register("address1")} label="Address 1" variant="filled" />
      <TextField {...register("address2")} label="Address 2" variant="filled" />

      <TextField
        variant="filled"
        id="outlined-select-currency"
        select
        label="Role"
        defaultValue="admin"
        {...register("role")}
      >
        {dataOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            <p>{option.label}</p>
          </MenuItem>
        ))}
      </TextField>

      <Box sx={{ textAlign: 'right' }}>
        <Button
          type="submit"
          disabled={loading}
          sx={{ textTransform: 'capitalize' }}
          variant="contained"
          color="primary"
        >
          {loading ? 'Creating...' : 'Create New User'}
        </Button>
      </Box>

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="info" variant="filled">
          Account Created Successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Form;