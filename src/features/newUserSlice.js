import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  userAlbum: [],
  userPost: [],
  userTodo: [],
  loading: false,
  error: "",
};

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  const res = await axios.get(`${process.env.REACT_APP_API}/users`);
  return res.data.map((item) => {
    return {
      id: item.id,
      text: item.name,
      username: item.username,
      email: item.email,
      address: {
        street: item.address.street,
        suite: item.address.suite,
        city: item.address.city,
        zipcode: item.address.zipcode,
      },
      phone: item.phone,
      website: item.website,
      company: {
        name: item.company.name,
        catchPhrase: item.company.catchPhrase,
        bs: item.company.bs,
      },
    };
  });
});

export const getUserAlbum = createAsyncThunk(
  "users/getUserAlbum",
  async (id) => {
    const res = await axios.get(
      `${process.env.REACT_APP_API}/users/${id}/albums`
    );
    return res.data.map((item) => {
      return {
        id: item.id,
        title: item.title,
      };
    });
  }
);

export const getUserPost = createAsyncThunk("users/getUserPost", async (id) => {
  const res = await axios.get(`${process.env.REACT_APP_API}/users/${id}/posts`);
  return res.data.map((item) => {
    return {
      id: item.id,
      title: item.title,
      body: item.body,
    };
  });
});

export const getUserTodo = createAsyncThunk("users/getUserTodo", async (id) => {
  const res = await axios.get(`${process.env.REACT_APP_API}/users/${id}/todos`);
  return res.data.map((item) => {
    return {
      id: item.id,
      title: item.title,
      completed: item.completed,
    };
  });
});

export const addNewUser = createAsyncThunk("users/addNewUser", async (post) => {
  const res = await axios.post(`${process.env.REACT_APP_API}/users`, post);
  const data = await res.data;
  return {
    id: data.id,
    text: data.title,
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  };
});

export const newUserSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    userDelete: (state, action) => {
      state.users = state.users.filter((item) => {
        return item.id !== action.payload;
      });
      state.userAlbum = [];
      state.userPost = [];
      state.userTodo = [];
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
    builder.addCase(addNewUser.fulfilled, (state, action) => {
      state.loading = false;
      state.users.push(action.payload);
      state.error = "";
    });
    builder.addCase(addNewUser.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
    builder.addCase(getUserAlbum.fulfilled, (state, action) => {
      state.userAlbum = action.payload;
    });
    builder.addCase(getUserPost.fulfilled, (state, action) => {
      state.userPost = action.payload;
    });
    builder.addCase(getUserTodo.fulfilled, (state, action) => {
      state.userTodo = action.payload;
    });
  },
});

export const { userDelete } = newUserSlice.actions;
