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

export const getProjects = createAsyncThunk('/projects/work-list/', () => {
    return axios.get(`${API_PATH}/projects/work-list/`)
        .then((response) => {
            return response.data;
        })

});

export const getProject = createAsyncThunk('/projects/work-detail/', (id) => {

    return axios.get(`${API_PATH}/projects/work-detail/${id}`)
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
        singleProject: [],
        loading: false
    },
    reducers: {
        createProject(state, action) {
            const data = action.payload;

            axios.post(`${API_PATH}projects/work-create/`, data)
                .then((response) => {
                    console.log(response);
                })
        },

        projectResponse(state, action) {
            const data = action.payload;
            axios.post(`${API_PATH}projects/otclick/`, data, { headers: { 'Authorization': `Token ${accessToken}` } })
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
        },


        [getProjects.pending]: (state, action) => {
            state.loading = true;
        },
        [getProjects.fulfilled]: (state, action) => {
            state.loading = false;
            state.project = action.payload;
        },
        [getProjects.rejected]: (state, action) => {
            state.loading = false;
        },


        [getProject.pending]: (state, action) => {
            state.loading = true;
        },
        [getProject.fulfilled]: (state, action) => {
            state.loading = false;
            state.singleProject = action.payload;
        },
        [getProject.rejected]: (state, action) => {
            state.loading = false;
        },
    },
})

export const { createProject, projectResponse } = projectSlice.actions;
export default projectSlice.reducer;