
import { useRef } from "react";
import "../App.css";
const Home = () => {
    return (
        <div>
           <h1>Filebin
</h1>
<h3>Convenient file sharing in three steps without registration.</h3>
<p><span>1</span>
<input type="file"
       value="" 
        />
<button>Select Files to Upload</button>
&nbsp;or drag-and-drop files into this browser window. </p>
<p><span>2</span> 


 The file uploads will begin. Wait until they complete.
</p>
<p><span>3</span>  The files will be available at URL HERE which is a link you can share.</p>
<p>The file uploads will cancel if you move away from this page before they complete. Uploaded files can be deleted manually at any time and will in any case be deleted automatically 6 days from now.
</p>




           
        </div>
    )
}

export default Home
