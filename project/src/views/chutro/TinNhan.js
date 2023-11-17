import React from 'react';
import  "../../styles/chutro/library/css/template.min.css";
import avt from "../../styles/chutro/library/images/avatars/4.jpg";
class TinNhan extends React.Component {
    render() {
        return (
            <>

                
<div class="page-heading header-text">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <h3>Tin Nhắn</h3>
                <span class=""><a href="#">Chủ Trọ: </a>Nguyễn Gia Nghiêm </span>
              </div>
            </div>
          </div>
        </div>
                <div class="section trending">
                   
                    <div class="layout layout_messenger_chutro">


                    <div class="sidebar list_nguoi_nhan_tin">
                        <div class="tab-content h-100" role="tablist">
                          

                            <div class="tab-pane fade h-100 show active" id="tab-content-dialogs" role="tabpanel">
                                <div class="d-flex flex-column h-100">

                                    <div class="hide-scrollbar list_nguoi_nhan_tin">
                                        <div class="container-fluid py-6">

                                            
                                            <h2 class="font-bold mb-6">Chats</h2>
                                            

                                            
                                            <form class="mb-6">
                                                <div class="input-group">
                                                    <input type="text" class="form-control form-control-lg" placeholder="Search for messages or users..." aria-label="Search for messages or users..."/>
                                                    <div class="input-group-append">
                                                        <button class="btn btn-lg btn-ico btn-secondary btn-minimal" type="submit">
                                                            <i class="fe-search"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                            
                                            <nav class="nav d-block list-discussions-js mb-n6">
                                                
                                                <a class="text-reset nav-link p-0 mb-6" href="chat-1.html">
                                                    <div class="card card-active-listener">
                                                        <div class="card-body">

                                                            <div class="media">
                                                                
                                                                
                                                                <div class="avatar mr-5">
                                                                    <img class="avatar-img" src={avt} alt="Bootstrap Themes"/>
                                                                </div>
                                                                
                                                                <div class="media-body overflow-hidden">
                                                                    <div class="d-flex align-items-center mb-1">
                                                                        <h6 class="text-truncate mb-0 mr-auto">Bootstrap Themes</h6>
                                                                        <p class="small text-muted text-nowrap ml-4">10:42 am</p>
                                                                    </div>
                                                                    <div class="text-truncate">Anna Bridges: Hey, Maher! How are you? The weather is great isn't it?</div>
                                                                </div>
                                                            </div>

                                                        </div>

                                                        
                                                        <div class="badge badge-circle badge-primary badge-border-light badge-top-right">
                                                            <span>3</span>
                                                        </div>
                                                        
                                                    </div>
                                                </a>
                                                

                                                <a class="text-reset nav-link p-0 mb-6" href="chat-2.html">
                                                    <div class="card card-active-listener">
                                                        <div class="card-body">

                                                            <div class="media">
                                                                
                                                                <div class="avatar avatar-online mr-5">
                                                                    <img class="avatar-img" src={avt} alt="Anna Bridges"/>
                                                                </div>
                                                                
                                                                
                                                                <div class="media-body overflow-hidden">
                                                                    <div class="d-flex align-items-center mb-1">
                                                                        <h6 class="text-truncate mb-0 mr-auto">Anna Bridges</h6>
                                                                        <p class="small text-muted text-nowrap ml-4">10:42 am</p>
                                                                    </div>
                                                                    <div class="text-truncate">is typing<span class='typing-dots'><span>.</span><span>.</span><span>.</span></span></div>
                                                                </div>
                                                            </div>

                                                        </div>

                                                        
                                                    </div>
                                                </a>
                                                

                                                <a class="text-reset nav-link p-0 mb-6" href="#">
                                                    <div class="card card-active-listener">
                                                        <div class="card-body">

                                                            <div class="media">
                                                                
                                                                
                                                                <div class="avatar mr-5">
                                                                    <img class="avatar-img" src={avt} alt="Simon Hensley"/>
                                                                </div>
                                                                
                                                                <div class="media-body overflow-hidden">
                                                                    <div class="d-flex align-items-center mb-1">
                                                                        <h6 class="text-truncate mb-0 mr-auto">Simon Hensley</h6>
                                                                        <p class="small text-muted text-nowrap ml-4">10:38 am</p>
                                                                    </div>
                                                                    <div class="text-truncate">I’m sorry, this question would be out of my expertise.</div>
                                                                </div>
                                                            </div>

                                                        </div>

                                                        
                                                    </div>
                                                </a>
                                                

                                                <a class="text-reset nav-link p-0 mb-6" href="#">
                                                    <div class="card card-active-listener">
                                                        <div class="card-body">

                                                            <div class="media">
                                                                
                                                                
                                                                <div class="avatar mr-5">
                                                                    <img class="avatar-img" src={avt} alt="William Wright"/>
                                                                </div>
                                                                
                                                                <div class="media-body overflow-hidden">
                                                                    <div class="d-flex align-items-center mb-1">
                                                                        <h6 class="text-truncate mb-0 mr-auto">William Wright</h6>
                                                                        <p class="small text-muted text-nowrap ml-4">10:20 am</p>
                                                                    </div>
                                                                    <div class="text-truncate">Hello! Let me transfer you to the marketing department.</div>
                                                                </div>
                                                            </div>

                                                        </div>

                                                        
                                                    </div>
                                                </a>
                                                

                                                <a class="text-reset nav-link p-0 mb-6" href="#">
                                                    <div class="card card-active-listener">
                                                        <div class="card-body">

                                                            <div class="media">
                                                                
                                                                
                                                                <div class="avatar mr-5">
                                                                    <img class="avatar-img" src={avt} alt="Leslie Sutton"/>
                                                                </div>
                                                                
                                                                <div class="media-body overflow-hidden">
                                                                    <div class="d-flex align-items-center mb-1">
                                                                        <h6 class="text-truncate mb-0 mr-auto">Leslie Sutton</h6>
                                                                        <p class="small text-muted text-nowrap ml-4">09:55 am</p>
                                                                    </div>
                                                                    <div class="text-truncate"><h6 class='d-inline'>You:</h6> I’m sorry, I don’t have the information on that.</div>
                                                                </div>
                                                            </div>

                                                        </div>

                                                        
                                                    </div>
                                                </a>
                                                

                                                <a class="text-reset nav-link p-0 mb-6" href="#">
                                                    <div class="card card-active-listener">
                                                        <div class="card-body">

                                                            <div class="media">
                                                                
                                                                
                                                                <div class="avatar mr-5">
                                                                    <img class="avatar-img" src={avt} alt="Matthew Wiggins"/>
                                                                </div>
                                                                
                                                                <div class="media-body overflow-hidden">
                                                                    <div class="d-flex align-items-center mb-1">
                                                                        <h6 class="text-truncate mb-0 mr-auto">Matthew Wiggins</h6>
                                                                        <p class="small text-muted text-nowrap ml-4">09:25 am</p>
                                                                    </div>
                                                                    <div class="text-truncate">Matthew, let me transfer you to the marketing department.</div>
                                                                </div>
                                                            </div>

                                                        </div>

                                                        
                                                    </div>
                                                </a>
                                                

                                                <a class="text-reset nav-link p-0 mb-6" href="#">
                                                    <div class="card card-active-listener">
                                                        <div class="card-body">

                                                            <div class="media">
                                                                
                                                                
                                                                <div class="avatar mr-5">
                                                                    <img class="avatar-img" src={avt} alt="Thomas Walker"/>
                                                                </div>
                                                                
                                                                <div class="media-body overflow-hidden">
                                                                    <div class="d-flex align-items-center mb-1">
                                                                        <h6 class="text-truncate mb-0 mr-auto">Thomas Walker</h6>
                                                                        <p class="small text-muted text-nowrap ml-4">09:00 am</p>
                                                                    </div>
                                                                    <div class="text-truncate">I am really sorry to hear that. Is there anything I can do to help you?</div>
                                                                </div>
                                                            </div>

                                                        </div>

                                                        
                                                    </div>
                                                </a>
                                            </nav>
                                            

                                        </div>
                                    </div>

                                </div>
                            </div>

                           

                           
                        </div>
                    </div>



<div class="main" data-mobile-height="">

   
    <div class="chat flex-column justify-content-center text-center">
        <div class="container-xxl">

            <div class="avatar avatar-lg mb-5">
                <img class="avatar-img" src={avt} alt=""/>
            </div>

            <h6>Hey, Matthew!</h6>
            <p>Please select a chat to start messaging.</p>
        </div>
    </div>
  

</div>


</div>
                    
                </div>
            </>
        )
    }
}
export default TinNhan;