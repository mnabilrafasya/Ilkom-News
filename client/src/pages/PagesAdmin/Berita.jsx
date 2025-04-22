import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from "../../features/AuthSlice";
import Layout from './Layout';
import Beritalist from '../../components/ComponentAdmin/BeritaList';

const Berita = () => {

  // Dispatch dan Navigate dari React Router
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {isError} = useSelector((state) => state.auth);

  // Cek user login
  useEffect(()=>{
    dispatch(getMe());
  }, [dispatch]);

  // Kalo user tidak login, redirect ke page login
  useEffect(()=>{
    if(isError){
        navigate("/admin");
    }
  }, [isError, navigate]);

  // Return layout & daftar berita
  return (
    <Layout>
        <Beritalist />
    </Layout>
  )
}

export default Berita;