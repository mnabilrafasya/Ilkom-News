import React, { useEffect } from 'react';
import Layout from './Layout';
import Welcome from '../../components/ComponentAdmin/Welcome';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from '../../features/AuthSlice';

export const Dashboard = () => {
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
        <Welcome/>
    </Layout>
  );
};

export default Dashboard;