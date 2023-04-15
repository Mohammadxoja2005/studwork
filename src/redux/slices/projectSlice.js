import React from "react";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_PATH } from "../../tools/constants";
import axios from "axios";

const accessToken = localStorage.getItem("accessToken");

export const getWorkTypes = createAsyncThunk('/projects/list-worktype/', () => {
    return axios.get(`${API_PATH}/projects/list-worktype/`)
        .then((response) => {
            return response.data;
        })

});

export const getSubjectTypes = createAsyncThunk('/projects/list-subjecttype/', () => {
    return axios.get(`${API_PATH}/projects/list-subjecttype/`)
        .then((response) => {
            return response.data;
        })

});

export const projectSlice = createSlice({
    name: "project",
    initialState: {
        work_types: [],
        subject_types: [],
        project: [],
        loading: false
    },
    reducers: {
        createProject(state, action) {
            const data = action.payload;

            axios.post(`${API_PATH}projects/work-create/`, data)
                .then((response) => {
                    console.log(response);
                })
        }
    },

    extraReducers: {
        [getWorkTypes.pending]: (state, action) => {
            state.loading = true;
        },
        [getWorkTypes.fulfilled]: (state, action) => {
            state.loading = false;
            state.work_types = action.payload;
        },
        [getWorkTypes.rejected]: (state, action) => {
            state.loading = false;
        },

        [getSubjectTypes.pending]: (state, action) => {
            state.loading = true;
        },
        [getSubjectTypes.fulfilled]: (state, action) => {
            state.loading = false;
            state.subject_types = action.payload;
        },
        [getSubjectTypes.rejected]: (state, action) => {
            state.loading = false;
        }
    },
})

export const { createProject } = projectSlice.actions;
export default projectSlice.reducer;