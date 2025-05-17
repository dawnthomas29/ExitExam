const mongoose=require('mongoose');
const schema = mongoose.Schema({
  title: String,
  content: String,
  img_url: String,
});

const Blogmodel=mongoose.model('blog',schema);

module.exports=Blogmodel;