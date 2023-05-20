import './index.css'

import React from 'react'
import { createRoot } from 'react-dom/client'
import {Main} from "./components/Main/Main";

const container = document.getElementById('app-root')!
const root = createRoot(container)
root.render(<Main />)
