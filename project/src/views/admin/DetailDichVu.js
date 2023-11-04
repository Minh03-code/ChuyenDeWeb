import React from 'react';
import './styleKiet.css';
import { NavLink, useParams } from "react-router-dom";
import { baseURL } from "../../services/my-axios";
import { getDetailServiceCallAPI } from '../../services/admin/KietService';

function LayId() {
    let { id } = useParams("id");
    return id;
}

class DetailDichVu extends React.Component {

    state = {
        detailService:[]
    }
    async componentDidMount() {
        let resDetailService = await getDetailServiceCallAPI(<LayId />);
        if (resDetailService != null) {
            this.setState({
                detailService: resDetailService
            })
        }
        console.log(resDetailService);
    }

    render() {
        let { detailService } = this.state

        return (
            <>

            </>
        )
    }
}

export default DetailDichVu