import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from "../../features/AuthSlice";
import Layout from './Layout';
import FormAddBerita from '../../components/ComponentAdmin/FormAddBerita';

const AddBerita = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {isError} = useSelector((state) => state.auth);

  useEffect(()=>{
    dispatch(getMe());
  }, [dispatch]);

  useEffect(()=>{
    if(isError){
        navigate("/admin");
    }
  }, [isError, navigate]);

  return (
    <Layout>
        <FormAddBerita />
    </Layout>
  );
};

export default AddBerita;