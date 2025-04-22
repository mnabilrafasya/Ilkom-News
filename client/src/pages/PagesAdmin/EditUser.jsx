import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from "../../features/AuthSlice";
import Layout from './Layout';
import FormEdituser from '../../components/ComponentAdmin/FormEditUser';

// Komponen edit userAdmin
const EditUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {isError} = useSelector((state) => state.auth);
  
  // Cek apakah user sudah login atau belum
  useEffect(()=>{
    dispatch(getMe());
  }, [dispatch]);
  
  // Redirect ke page home jika error
  useEffect(()=>{
    if(isError){
        navigate("/admin");
    }
  }, [isError, navigate]);

  // Tampilkan layout dan form edit user
  return (
    <Layout>
        <FormEdituser />
    </Layout>
  );
};

export default EditUser;