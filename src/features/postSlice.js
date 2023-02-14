import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { v4 } from "uuid";

const initialState = {
  posts: [],
  loading: false,
  error: "",
};

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  const res = await axios.get(`${process.env.REACT_APP_API}/posts`);
  return res.data.map((item) => {
    return {
      id: v4(),
      text: item.title,
    };
  });
});

export const addNewPost = createAsyncThunk("posts/addNewPost", async (post) => {
  const res = await axios.post(`${process.env.REACT_APP_API}/posts`, post);
  const data = await res.data;
  return {
    id: v4(),
    text: data.title,
  };
});

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    deletePost: (state, action) => {
      state.posts = state.posts.filter((item) => {
        return item.id !== action.payload;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
      state.error = "";
    });
    builder.addCase(getPosts.rejected, (state, action) => {
      state.loading = false;
      state.posts = [];
      state.error = action.error.message;
    });

    builder.addCase(addNewPost.fulfilled, (state, action) => {
      state.loading = false;
      state.posts.push(action.payload);
      state.error = "";
    });
    builder.addCase(addNewPost.rejected, (state, action) => {
      state.loading = false;
      state.posts = [];
      state.error = action.error.message;
    });
  },
});

export const { addPost, deletePost } = postSlice.actions;
