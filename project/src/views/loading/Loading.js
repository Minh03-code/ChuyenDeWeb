import React from 'react';
import "./style.css";
import {
  useNavigate,
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
function loading() {
  return (
    <div className='loading'>
    <div class="ring">
		loading
		<span></span>
	</div>
    </div>
  );
}

export default loading;
