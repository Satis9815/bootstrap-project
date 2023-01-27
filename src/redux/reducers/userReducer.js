import {createReducer} from "@reduxjs/toolkit";

export const userReducer = createReducer({},{
    //Login reducer starts here 
    loginRequest:(state)=>{
        state.loading= true;
    },
    loginSuccess:(state,action)=>{
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.message = action.payload.message;

    },
    loginFail:(state,action)=>{
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
    },

    //Sign up reducers starts here 
    signupRequest:(state)=>{
        state.loading= true;
    },
    signupSuccess:(state,action)=>{
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.message = action.payload.message;

    },
    signupFail:(state,action)=>{
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
    },

    //Logout reducers starts here 

    logoutRequest:(state)=>{
        state.loading= true;
    },
    logoutSuccess:(state,action)=>{
        state.loading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.message = action.payload;

    },
    logoutFail:(state,action)=>{
        state.loading = false;
        state.isAuthenticated = true;
        state.error = action.payload;
    },
    // Get my profile reducer starts here 

    loadUserRequest:(state)=>{
        state.loading= true;
    },
    loadUserSuccess:(state,action)=>{
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;

    },
    loadUserFail:(state,action)=>{
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
    },

    
    // Handling error and catch 
    clearError:(state)=>{
        state.error = null;

    },
    clearMessage:(state)=>{
        state.message = null;
        
    }

});

// Update profile reducer 
export const profileReducer = createReducer({},{
    updateProfileRequest:(state)=>{
        state.loading = true
    },
    updateProfileSuccess:(state,action)=>{
        state.loading = false;
        state.message = action.payload;
    },
    updateProfileFail:(state,action)=>{
            state.loading = false;
            state.error = action.payload;
    },

    changePasswordRquest:(state)=>{
        state.loading = true
    },
    changePasswordSuccess:(state,action)=>{
        state.loading = false;
        state.message = action.payload;
    },
    changePasswordFail:(state,action)=>{
            state.loading = false;
            state.error = action.payload;
    },

    
    updateProfiePictureRquest:(state)=>{
        state.loading = true
    },
    updateProfiePictureSuccess:(state,action)=>{
        state.loading = false;
        state.message = action.payload;
    },
    updateProfiePictureFail:(state,action)=>{
            state.loading = true;
            state.error = action.payload;
    },
     // Handling error and catch 
     clearError:(state)=>{
        state.error = null;

    },
    clearMessage:(state)=>{
        state.message = null;
        
    }

})