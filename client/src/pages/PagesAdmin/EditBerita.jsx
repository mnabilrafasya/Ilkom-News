import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from "../../features/AuthSlice";
import Layout from './Layout';
import FormEditBerita from '../../components/ComponentAdmin/FormEditBerita';

// Komponen edit berita
const EditBerita = () => {
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

  // Tampilkan layout dan form edit berita
  return (
    <Layout>
        <FormEditBerita />
    </Layout>
  );
};

export default EditBerita;