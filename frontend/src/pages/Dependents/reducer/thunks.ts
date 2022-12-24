import { createAsyncThunk } from "@reduxjs/toolkit";

import { DependentAPI } from "../../../models/Dependent";

export const getKids = createAsyncThunk(
  'dependents/getlist',
  DependentAPI.getList
);

export const getKid = createAsyncThunk(
  'dependents/get',
  DependentAPI.get
)

export const createKid = createAsyncThunk(
  'dependents/create',
  DependentAPI.create
);

export const updateKid = createAsyncThunk(
  'dependents/update',
  DependentAPI.update
);

export const deleteKid = createAsyncThunk(
  'dependents/delete',
  DependentAPI.delete
);
