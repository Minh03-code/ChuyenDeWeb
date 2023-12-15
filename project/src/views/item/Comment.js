import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import InputText from './InputText';
import ItemComment from './ItemComment';
import "./styles/modalcomment.css";
import firebase from '../../firebase/firebase.js';
import { getDatabase, ref, onValue, set } from "firebase/database";
import { layTatCaBinhLuanCuaPhong, themBinhLuanChoPhong } from '../../services/chutro/MinhService';
import { baseURL } from '../../services/my-axios';
export default function Comment(props) {
    const [text, setText] = useState("");
    const [comments, setComments] = useState(null);
    const [loading, setLoading] = useState(true);
    const { show } = props;
    const { onHide } = props;
    const { idPhong } = props;

    const handleComment = async () => {
        if (text != "") {
            const res = await themBinhLuanChoPhong(idPhong, sessionStorage.getItem('accountId'), text);
            console.log(res);
            if (res) {
                console.log(res);
                writeComment(idPhong, res.id);
            }
        }
        else {
            alert("Hãy nhập gì đó rồi comment");
        }
    }
    const writeComment = (idPhong, commentId) => {
        const db = getDatabase();
        const commentRef = ref(db, `comment/${idPhong}/${commentId}`);

        set(commentRef, commentId)
            .then(() => {
                console.log('Data added successfully');
            })
            .catch((error) => {
                console.error('Error adding data: ', error);
            });
    }
    const handleClose = () => {
        onHide();
    }
    const getText = (text) => {
        setText(text);
    }
    const fetchData = async () => {
        const db = getDatabase();
        const starCountRef = ref(db, `comment/${idPhong}`);
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            fetchDataComment();
            console.log(data);
        });
    };
    const fetchDataComment = async () => {
        try {
            const res = await layTatCaBinhLuanCuaPhong(idPhong);
            if (res) {
                setComments(res);
                setLoading(false);
            }
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    };
    useEffect(() => {
        fetchData();

    }, [show]);

    return (
        <>
            <Modal show={show ? show : false} onHide={handleClose} size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>Bình luận</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="comment-body">
                        {
                            comments && comments.length > 0 && comments.map((item, index) => {
                                return (
                                    <ItemComment
                                        image={baseURL + item.nguoiGui.hinh}
                                        name={item.nguoiGui.ten}
                                        loaiTaiKhoan={item.loaiTaiKhoan}
                                        content={item.noiDungBinhLuan}
                                    />
                                )
                            })
                        }
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <InputText
                        value={text}
                        changeValue={getText} />
                    <Button variant="primary" onClick={handleComment}>
                        Gửi
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
