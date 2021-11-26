//midelware locale
const midelware=(request,response,next)=>{
   console.log('hello')
   next();
}
module.exports=midelware