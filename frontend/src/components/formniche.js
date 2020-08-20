import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));


export default function formNiche() {

  return (
    <div id='form-niche' className='container-fluid'>
        <div class="maprouter col-md-5 flax"><div class="gmap_canvas"><iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=pict&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://2torrentz.net"></a></div>
      </div>
      <div  className=' col-md-6'>
        <h5>Didnt get website you need ? just make a query we will come up with one</h5>
        <div className="bag">
          <form className="container sfx">
            <div className="form-group ">
              <label for="exampleFormControlSelect1"><strong>Select niche</strong> </label>
              <select className="form-control" id="exampleFormControlSelect1">
                <option>BLOGS</option>
                <option>PORTFOLIO WEBSITE</option>
                <option>PHOTOGRAPHERS</option>
                <option>SCHOOL MANAGEMENT SYSTEM</option>
                <option>E-COMMERCE</option>
                <option>OTHERS</option>
              </select>
            </div>
            <div>
              <label for="exampleFormControlTextarea1"><strong>Something more</strong></label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
            </div>
            <div className="center baton">
              <button className="alert-primary obs"><a>submit</a></button>
            </div>
          </form>
        </div>
      </div>
      </div>
  )
}