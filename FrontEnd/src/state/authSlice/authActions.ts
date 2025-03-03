import {createAsyncThunk} from "@reduxjs/toolkit";

export const logUser = createAsyncThunk(
    'auth/login',
    async({email,password}: {email: string; password: string },{rejectWithValue}) => {
        try{
            const credentials = {
                email : email,
                password: password
            }
            const res = await fetch(`${process.env.REACT_APP_API_URL}/auth/login/`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(credentials),
                    credentials: "include"
                })
            if(res.ok){
                const user = res.json();
                return user;
            }
            const data = await res.json();
            console.log(data);
        }catch(error : unknown){
            console.log(error);
            return rejectWithValue(error)
        }
    }
)