import React from 'react';

import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from 'reactstrap';

class ModalKhuVuc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {

    }
    toggle = () => {
        alert('me toggle')
    }

    render() {
        return (
            <Modal isOpen={true} toggle={() => { this.toggle() }} className={'abcclassName'}>
                <ModalHeader toggle={() => { this.toggle() }}>Create a new khu vuc</ModalHeader>
                <ModalBody>
                    loresshshshsssssssskkkkkkkkkkkkkkkkkkkk
                    kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
                    kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => { this.toggle() }}>Do something</Button>
                    <Button color="secondary" onClick={() => { this.toggle() }}>Cancle</Button>
                </ModalFooter>
            </Modal>
        )
    }
}
export default ModalKhuVuc;