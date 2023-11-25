import React from 'react';
import { createContext } from 'react';
import { NavLink } from 'react-router-dom';
import Loading from '../loading/Loading';
import { baseURL } from '../../services/my-axios';
import InputText from '../item/InputText';
import Header from '../item/Header';
class AddRoom extends React.Component {
    state = {
        // ten,
    }
    async componentDidMount() {

    }
    handleCallback(childData) {
        // this.setState({ 
        //     ten: childData 
        // });
        // console.log(ten);
    }
    render() {
        
        return (
            <>
                <Header 
                tenManHinh={"Màn hình thêm phòng"}
                tenChuTro={"Nguyễn Đức Minh"}/>
                <div class="section trending">
                    <div class="container">
                        <form>
                            <InputText 
                            label={"Số phòng:"} 
                            type={"text"}
                            placeholder={"Nhập số phòng"}
                            parentCallback={this.handleCallback}
                            />
                        </form>
                    </div>
                </div>
            </>
        )
    }
}
export default AddRoom;