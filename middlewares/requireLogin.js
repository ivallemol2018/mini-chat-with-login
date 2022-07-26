module.exports = (request,response,next) =>{
  if (!request.session.username){
    response.render('login')
  }
  else{
    next();
  } 
}
