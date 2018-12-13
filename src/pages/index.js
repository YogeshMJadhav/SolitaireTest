import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import page from '../templates/page'
import Header from '../pages/header'
import Image from '../components/image'
import pageTemplate from '../templates/page'
const IndexPage = () => {
  console.log();
  return(
    <BrowserRouter>
      <div>
      <Header/>
        <Switch>
          <Route path="/home"   component={pageTemplate} exact/> 
          <Route path="/ongoing-projects" component ={pageTemplate} />
          <Route path="/About" component ={pageTemplate}/>
          <Route path="/Completed-projects" component ={pageTemplate}/>
          <Route path="/contacts" component ={pageTemplate}/>
        </Switch>
        <Image/>  
      </div>
    </BrowserRouter>
  );
}

export default IndexPage