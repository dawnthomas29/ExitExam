import React, { useEffect, useState } from 'react';
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Container,
  Typography,
} from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const blogData = [
  {
    title: 'Travel the world!!!!!',
    category: 'Travel',
    image: '/pic1.jpg',
  },
  {
    title: 'Art!!!!!!!!!!!!!',
    category: 'Art',
    image: '/pic2.jpg',
  },
  {
    title: 'Food is Art!!!!',
    category: 'Food',
    image: '/pic3.jpg',
  },
];

function Home() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
  axios
    .get('http://localhost:3001/get')
    .then((res) => {
      const combinedBlogs = [...res.data, ...blogData]; 
      setBlogs(combinedBlogs);
    })
    .catch((err) => {
      console.error("Error fetching blogs:", err);
    });
}, []);

return (
    <Container sx={{ mt: 5 }}>
      <Grid container spacing={4}>
        {blogs.map((blog) => (
          <Grid item xs={12} sm={6} md={4} key={blog._id}>
            <Card elevation={3}>
              <CardMedia
                component="img"
                height="200"
                image={blog.img_url || '/p1.jpg'}
                alt={blog.title}
              />
              <CardContent>
                <Typography variant="subtitle2" color="textSecondary">
                  {blog.content}
                </Typography>
         <Typography variant="h6" gutterBottom>
                  {blog.title}
                </Typography>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => handleDelete(blog._id)}
                >
                  DELETE
                </Button>
                &nbsp;&nbsp;
                <Button
                  variant="contained"
                  sx={{ backgroundColor: '#8e24aa' }}
                  onClick={() => handleUpdate(blog._id)}
                >
                  UPDATE
                </Button>
              </CardContent>
            </Card>
            </Grid>
        ))}
      </Grid>
    </Container>
);
}

export default Home;
