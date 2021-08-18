import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import photo from './photo.JPG';
import clock from './clock.png';
import video from './video.jpg';
import pdf from './pdf.png';
import docs from './docs.png';


function App() {
  var inner = document.getElementsByClassName('innerDiv');

  function carousol(){
    if(inner[0].style.display==='none'){
      inner[0].style.display='flex';
      inner[1].style.display='none';
    }else{
      inner[1].style.display='flex';
      inner[0].style.display='none';
    }
  }
  return (
    <div>
      <h1 className="head">Oplago Internship Task</h1>


      <div className="outerDiv">
        <div>
          <button className="live"> LIVE</button> <span className="heading"> Upcoming Live Coaching </span>
          <div className="change_btn">
            <button onClick={carousol} className="change_l">&lt;</button>
            <button onClick={carousol} className="change_r">&gt;</button>
          </div>
        </div>

        <div className="innerDiv" >

          <div className="card" style={{width: '18rem'}}>
            <img src={photo} className="card-img-top" alt="..." />
              <h6 className="card-title enroll"> <img src={clock} alt="" width="20" style={{marginRight:'10px'}}/> 5 days left to enroll </h6>
            <div className="card-body">
              <h5 className="card-title">IBPS PO &amp; SBI PO Live Coaching in English Bat... </h5> <hr />
              <span className="card-text"><img src={video} alt="" width="16" style={{marginRight:'5px'}}/> 240+ Live Classess</span> <br />
              <span className="card-text"><img src={docs} alt="" width="16" style={{marginRight:'5px'}}/> 1500+ Questions</span>
              <span className="card-text"><img src={pdf} alt="" width="16" style={{marginRight:'5px'}}/> 200+ Notes</span>
            </div>
          </div>
          
          <div className="card" style={{width: '18rem'}}>
            <img src={photo} className="card-img-top" alt="..." />
              <h6 className="card-title enroll"> <img src={clock} alt="" width="20" style={{marginRight:'10px'}}/> Starts in 15 days </h6>
            <div className="card-body">
              <h5 className="card-title">Civil Junior Engineer Live<br/> Coaching Batch 2 </h5> <hr />
              <span className="card-text"><img src={video} alt="" width="16" style={{marginRight:'5px'}}/> 240+ Live Classess</span> <br />
              <span className="card-text"><img src={docs} alt="" width="16" style={{marginRight:'5px'}}/> 1500+ Questions</span>
              <span className="card-text"><img src={pdf} alt="" width="16" style={{marginRight:'5px'}}/> 200+ Notes</span>
             
            </div>
          </div>
          
          <div className="card" style={{width: '18rem'}}>
            <img src={photo} className="card-img-top" alt="..." />
              <h6 className="card-title enroll" style={{backgroundColor:'#51c089'}} style={{backgroundColor:'#51c089'}}> <img src={clock} alt="" width="20" style={{marginRight:'10px'}}/> Batch closes in 2 days </h6>
            <div className="card-body">
              <h5 className="card-title">UPSC CDS - 2 2021 Live <br/> Coaching Batch 3 </h5> <hr />
              <span className="card-text"><img src={video} alt="" width="16" style={{marginRight:'5px'}}/> 240+ Live Classess</span> <br />
              <span className="card-text"><img src={docs} alt="" width="16" style={{marginRight:'5px'}}/> 1500+ Questions</span>
              <span className="card-text"><img src={pdf} alt="" width="16" style={{marginRight:'5px'}}/> 200+ Notes</span>
             
            </div>
          </div>
        </div>


        <div className="innerDiv" style={{display:'none'}}>
        <div className="card" style={{width: '18rem'}}>
            <img src={photo} className="card-img-top" alt="..." />
              <h6 className="card-title enroll" style={{backgroundColor:'#51c089'}}> <img src={clock} alt="" width="20" style={{marginRight:'10px'}}/> Batch closes in 1 days </h6>
            <div className="card-body">
              <h5 className="card-title">UPSC IAS GS 2022 Foundation Live Coachin... </h5> <hr />
              <span className="card-text"><img src={video} alt="" width="16" style={{marginRight:'5px'}}/> 280+ Live Classess</span> <br />
              <span className="card-text"><img src={docs} alt="" width="16" style={{marginRight:'5px'}}/> 1500+ Questions</span>
              <span className="card-text"><img src={pdf} alt="" width="16" style={{marginRight:'5px'}}/> 200+ Notes</span>
             
            </div>
          </div>
          
          <div className="card" style={{width: '18rem'}}>
            <img src={photo} className="card-img-top" alt="..." />
              <h6 className="card-title enroll" style={{backgroundColor:'#51c089'}}> <img src={clock} alt="" width="20" style={{marginRight:'10px'}}/> Batch closes in 3 days </h6>
            <div className="card-body">
              <h5 className="card-title"> Civil Assistant Engineer <br/> Live Coaching Batch 2 </h5> <hr />
              <span className="card-text"><img src={video} alt="" width="16" style={{marginRight:'5px'}}/> 230+ Live Classess</span> <br />
              <span className="card-text"><img src={docs} alt="" width="16" style={{marginRight:'5px'}}/> 5000+ Questions</span>
              <span className="card-text"><img src={pdf} alt="" width="16" style={{marginRight:'5px'}}/> 85+ Notes</span>
             
            </div>
          </div>
          
          <div className="card" style={{width: '18rem'}}>
            <img src={photo} className="card-img-top" alt="..." />
              <h6 className="card-title enroll" style={{backgroundColor:'#51c089'}}> <img src={clock} alt="" width="20" style={{marginRight:'10px'}}/> Batch closes in 6 days </h6>
            <div className="card-body">
              <h5 className="card-title">BPSC Foundation Live <br/> Coaching (Pre+Main) </h5> <hr />
              <span className="card-text"><img src={video} alt="" width="16" style={{marginRight:'5px'}}/> 400+ Live Classess</span> <br />
              <span className="card-text"><img src={docs} alt="" width="16" style={{marginRight:'5px'}}/> 2000+ Questions</span>
              <span className="card-text"><img src={pdf} alt="" width="16" style={{marginRight:'5px'}}/> 300+ Notes</span>
             
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
