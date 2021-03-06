/*
 * Copyright 2020 Bitnine Co., Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { createSlice } from '@reduxjs/toolkit'
import uuid from 'react-uuid'

const AlertSlice = createSlice({
  name: 'alerts',
  initialState: [],
  reducers: {
    addAlert: {
      reducer: (state, action) => {
        let alertName = action.payload.alertName
        let alertType = 'Notice'
        let errorMessage = ''

        if (['ErrorServerConnectFail', 'ErrorNoDatabaseConnected', 'ErrorPlayLoadFail'].includes(alertName)) {
          alertType = 'Error'
          errorMessage = action.payload.message
        }

        state.push({alertName : alertName, alertProps : {key : uuid(), alertType : alertType, errorMessage : errorMessage}})
      },
      prepare: (alertName, message) => {
        return { payload: { alertName, message } }
      }
    }
  }
})

export const { addAlert } = AlertSlice.actions

export default AlertSlice.reducer