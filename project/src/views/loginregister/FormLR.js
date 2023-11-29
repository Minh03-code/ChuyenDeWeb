import React from 'react';
import {
    useNavigate,
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";
import "./main.css";
import "./util.css";
import { checkAccountAPI } from "../../services/admin/MinhService";

class LoginRegister extends React.Component {
    state = {
        username: "",
        password: "",
        account: {},
        loading: false,
        fail: false
    }


    handleOnChangeUsername(e) {
        this.setState({ username: e.target.value })
    }
    handleOnChangePassword(e) {
        this.setState({ password: e.target.value })
    }

    async getData() {
        this.setState({
            fail: false,
            loading: false,
        });
        let res = await checkAccountAPI(this.state.username, this.state.password);
        if (res != null) {
            this.setState({
                account: res,
                loading: true
            });
        }
        if (res == "") {
            this.setState({
                fail: true
            });
        }
    }
    checkLogin = () => {
        if (this.state.account != "") {
            sessionStorage.setItem("accountId", this.state.account.id);
            sessionStorage.setItem("accountType", this.state.account.loaiTaiKhoan);
            if (this.state.account.loaiTaiKhoan == 2) { window.location.href = '/admin' }
            else if (this.state.account.loaiTaiKhoan == 1) { window.location.href = '/chutro' }
            else if (this.state.account.loaiTaiKhoan == 0) { window.location.href = '/nguoithue' }

        }
        else {
            window.location.href = '/'
        }
    }




    render() {
        let { username, password, account, loading, fail } = this.state

        return (
            loading == true && fail == false ? this.checkLogin() :
                <>
                    <div className="limiter">
                        <div className="container-login100 my-background-lr">
                            <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
                                <form className="login100-form validate-form">
                                    <span className="login100-form-title p-b-49">
                                        Đăng nhập
                                    </span>

                                    <div className="wrap-input100 validate-input m-b-23" data-validate="Username is reauired">
                                        <span className="label-input100">Email</span>
                                        <input className="input100" type="text" value={username} onChange={(e) => this.handleOnChangeUsername(e)} placeholder="Nhập email của bạn" />
                                        <span className="focus-input100" data-symbol="&#xf206;"></span>
                                    </div>

                                    <div className="wrap-input100 validate-input" data-validate="Password is required">
                                        <span className="label-input100">Mật khẩu</span>
                                        <input className="input100" type="password" value={password} onChange={(e) => this.handleOnChangePassword(e)} placeholder="Nhập mật khẩu của bạn" />
                                        <span className="focus-input100" data-symbol="&#xf190;"></span>
                                    </div>

                                    <div className="text-right p-t-8 p-b-31">
                                        <a href="#">
                                            Quên mật khẩu?
                                        </a>
                                    </div>

                                    {fail == true ? <p className='fail-login'>Tài khoản mật khẩu không chính xác</p> : <p className='fail-login'></p>}

                                    <div className="container-login100-form-btn">
                                        <div className="wrap-login100-form-btn">
                                            <div className="login100-form-bgbtn"></div>
                                            <button className="login100-form-btn" type='button' onClick={() => this.getData()}>
                                                Đăng nhập
                                            </button>
                                        </div>
                                    </div>

                                    <div className="txt1 text-center p-t-54 p-b-20">

                                        <a href="#" className="txt2">
                                            <Link to="/chonloaitaikhoan">
                                            Đăng ký
                                            </Link>
                                        </a>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>



                </>

        )
    }

}

export default LoginRegister;