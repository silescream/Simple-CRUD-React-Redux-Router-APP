import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { v4 } from "uuid";

const initialState = {
  todos: [],
  loading: false,
  error: "",
};

export const getTodos = createAsyncThunk("posts/getTodos", async () => {
  const res = await axios.get(`${process.env.REACT_APP_API}/todos`);
  return res.data.map((item) => {
    return {
      id: v4(),
      text: item.title,
      completed: item.completed,
    };
  });
});

export const addNewTodo = createAsyncThunk("users/addNewTodo", async (post) => {
  const res = await axios.post(`${process.env.REACT_APP_API}/posts`, post);
  const data = await res.data;
  return {
    id: v4(),
    text: data.title,
    completed: false,
  };
});

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    toggleCompletedTodo: (state, action) => {
      const toggleTodo = state.todos.find((todo) => todo.id === action.payload);
      toggleTodo.completed = !toggleTodo.completed;
    },
    todoDelete: (state, action) => {
      state.todos = state.todos.filter((item) => {
        return item.id !== action.payload;
      });
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getTodos.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTodos.fulfilled, (state, action) => {
      state.loading = false;
      state.todos = action.payload;
      state.error = "";
    });
    builder.addCase(getTodos.rejected, (state, action) => {
      state.loading = false;
      state.todos = [];
      state.error = action.error.message;
    });
    builder.addCase(addNewTodo.fulfilled, (state, action) => {
      state.loading = false;
      state.todos.push(action.payload);
      state.error = "";
    });
    builder.addCase(addNewTodo.rejected, (state, action) => {
      state.loading = false;
      state.todos = [];
      state.error = action.error.message;
    });
  },
});

export const { toggleCompletedTodo, todoDelete } = todoSlice.actions;
