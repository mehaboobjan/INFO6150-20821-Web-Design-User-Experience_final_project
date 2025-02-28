import React, { useState, useEffect } from 'react'
import  MetaData from '../layout/MetaData'

import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { updatePassword, clearErrors } from '../../actions/userActions'

import { UPDATE_PASSWORD_RESET } from '../../constants/userConstants'

const UpdatePassword = ({ history }) => {
  const navigate = useNavigate();
  const [oldPassword, setOldPassword] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch();

  const { error, isUpdated, loading } = useSelector(
    state => state.user)

  useEffect(() => {

    if(error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if(isUpdated) {
      toast.success('Password updated successfully');

      navigate('/me');

      dispatch({
        type: UPDATE_PASSWORD_RESET
      })
    }

  }, [dispatch, toast, error, navigate, isUpdated])

  const submitHandler = e => {
    e.preventDefault();

    const formData = new FormData();
    formData.set('oldPassword', oldPassword );
    formData.set('password', password );

    dispatch(updatePassword(formData));
  }

  return (
    <>
      <MetaData title={'Update Password'} />

      <div className="row wrapper">
            <div className="col-10 col-lg-5">
                <form className="shadow-lg" onSubmit={submitHandler}>
                    <h1 className="mb-3">Update Password</h1>

                    <div className="form-group">
                        <label htmlFor="password_field">Old Password</label>
                        <input
                            type="password"
                            id="password_field"
                            className="form-control"
                            value={oldPassword}
                            onChange={(e) => 
                              setOldPassword(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirm_password_field">New Password</label>
                        <input
                            type="password"
                            id="confirm_password_field"
                            className="form-control"
                            value={password}
                            onChange={(e) => 
                              setPassword(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-block py-3"
                        disabled={ loading ? true : false }
                        >
                        Update Password
                    </button>

                </form>
            </div>
        </div>
    </>
  )
}

export default UpdatePassword
