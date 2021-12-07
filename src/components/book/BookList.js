import React, { useEffect, useState } from "react";
import { styled } from "@material-ui/core";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import callApi from "../../api";
import {
  AddCart,
  GetAllProduct,
  GetAllProductBest,
  GetAllProductNew,
} from "../../actions/cart";
import { Divider, ListItemText, Rating } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

const Container = styled("div")({
  display: "flex",
});
const Wrapper = styled("div")({
  padding: 10,
  flex: 1,
});
const Title = styled("h1")({
  paddingLeft: "10px",
  margin: "20px",
  marginLeft: "40px",
  color: "green",
  width: "auto",
  display: "flex",
  flex: 1,
});

const ViewMore = styled("div")({
  justifyContent: "flex-end",
  display: "flex",
  flex: 1,
  marginTop: "-55px",
  marginLeft: "70px",
});

const BookList = () => {
  const { _productBestList, _productNewList, Carts } = useSelector(
    (state) => state.product
  );
  const [active, setActive] = useState([true]);
  const dispatch = useDispatch();
  useEffect(() => {
    callApi("book/list-best-book", "GET", null).then((res) => {
      dispatch(GetAllProductBest(res.data));
    });
    callApi("book/list-newest-book", "GET", null).then((res) => {
      dispatch(GetAllProductNew(res.data));
    });
  }, []);

  

  return (
    <Container>
      <Wrapper>
        <Title>Sách Hay</Title>
        <ViewMore>
          <Button
            sx={{
              background: "green",
              color: "white",
              "&:hover": {
                background: "green",
              },
            }}
          >
            Xem Thêm
          </Button>
        </ViewMore>

        <Grid container spacing={2} direction="row" sx={{ width: "auto" }}>
          {_productBestList.map((item, key) => (
            <Grid key={item._id} item xs={6} md={3} style={{ padding: 30 }}>
              <Card
                sx={{
                  marginTop: 1,
                  width: "100%",
                  borderBottomColor: "red",
                }}
              >
                <Grid sx={{ height: "100%" }} container spacing={2}>
                  <Grid item xs={1} />
                  <Grid item xs={4}>
                    <CardMedia
                      component="img"
                      height="160px"
                      width="115"
                      src={`https://firebasestorage.googleapis.com/v0/b/bookshoponline-85349.appspot.com/o/book%2F${item.image}?alt=media`}
                      alt="green iguana"
                      style={{ border: "1px solid #d8d8d8", marginTop: 10 }}
                    />
                  </Grid>
                  <Grid item xs={7}>
                    <CardContent sx={{ height: "50px" }}>
                      <Typography
                        gutterBottom
                        variant="h6"
                        style={{ alignItems: "center" }}
                      >
                        <Link
                          style={{
                            textDecoration: "none",
                          }}
                          to={`/book?id=${item._id}`}
                        >
                          <ListItemText
                            primary={
                              <Typography
                                style={{ fontWeight: "bold", fontSize: 18 }}
                              >
                                {item.title.length > 12
                                  ? item.title.substr(0, 12).concat("...")
                                  : item.title}
                              </Typography>
                            }
                            secondary={item.author}
                          />
                        </Link>
                        <Divider />
                        <ListItemText
                          secondary={item.summary_content
                            ?.substr(0, 95)
                            .concat("...")}
                        />
                      </Typography>
                    </CardContent>
                  </Grid>
                </Grid>
                <Divider sx={{ mt: 2 }} />
                <Grid sx={{ height: "100%" }} container spacing={2}>
                  <CardActions
                    sx={{
                      // justifyContent: "center",
                      height: "90px",
                      width: "100%",
                    }}
                  >
                    <Grid item xs={1} />
                    <Grid item xs={5}>
                      <ListItemText
                        primary={
                          <Typography
                            style={{ fontSize: 20 }}
                          >
                            Đánh giá
                          </Typography>
                        }
                        disableTypography
                        secondary={
                          <Typography>
                            {item.review.length > 0
                              ? item.rate
                              : "Chưa có đánh giá"}
                            {item.review.length > 0 && (
                              <StarIcon
                                style={{ fontSize: 20, color: "yellow" }}
                              />
                            )}
                          </Typography>
                        }
                      />
                    </Grid>

                    <span style={{ color: "red", marginLeft: "20px" }}>
                      <h5>
                        {item.price?.toLocaleString("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        })}
                      </h5>
                    </span>
                  </CardActions>
                </Grid>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Title>Sách Mới Cập Nhật</Title>
        <ViewMore>
          <Button
            sx={{
              background: "green",
              color: "white",
              "&:hover": {
                background: "green",
              },
            }}
          >
            Xem Thêm
          </Button>
        </ViewMore>
        <Grid container spacing={2} direction="row" sx={{ width: "auto" }}>
          {_productNewList.map((item, key) => (
            <Grid key={item._id} item xs={6} md={3} style={{ padding: 30 }}>
              <Card
                sx={{
                  marginTop: 1,
                  width: "100%",
                  borderBottomColor: "red",
                }}
              >
                <Grid sx={{ height: "100%" }} container spacing={2}>
                  <Grid item xs={1} />
                  <Grid item xs={4}>
                    <CardMedia
                      component="img"
                      height="160px"
                      width="115"
                      src={`https://firebasestorage.googleapis.com/v0/b/bookshoponline-85349.appspot.com/o/book%2F${item.image}?alt=media`}
                      alt="green iguana"
                      style={{ border: "1px solid #d8d8d8", marginTop: 10 }}
                    />
                  </Grid>
                  <Grid item xs={7}>
                    <CardContent sx={{ height: "50px" }}>
                      <Typography
                        gutterBottom
                        variant="h6"
                        style={{ alignItems: "center" }}
                      >
                        <Link
                          style={{
                            textDecoration: "none",
                          }}
                          to={`/book?id=${item._id}`}
                        >
                          <ListItemText
                            primary={
                              <Typography
                                style={{ fontWeight: "bold", fontSize: 18 }}
                              >
                                {item.title.length > 12
                                  ? item.title.substr(0, 12).concat("...")
                                  : item.title}
                              </Typography>
                            }
                            secondary={item.author}
                          />
                        </Link>
                        <Divider />
                        <ListItemText
                          secondary={item.summary_content
                            ?.substr(0, 95)
                            .concat("...")}
                        />
                      </Typography>
                    </CardContent>
                  </Grid>
                </Grid>
                <Divider sx={{ mt: 2 }} />
                <Grid sx={{ height: "100%" }} container spacing={2}>
                  <CardActions
                    sx={{
                      // justifyContent: "center",
                      height: "90px",
                      width: "100%",
                    }}
                  >
                    <Grid item xs={1} />
                    <Grid item xs={5}>
                      <ListItemText
                        primary={
                          <Typography
                          style={{ fontSize: 20 }}
                          >
                            Đánh giá
                          </Typography>
                        }
                        disableTypography
                        secondary={
                          <Typography>
                            {item.review.length > 0
                              ? item.rate
                              : "Chưa có đánh giá"}
                            {item.review.length > 0 && (
                              <StarIcon
                                style={{ fontSize: 20, color: 'yellow' }}
                              />
                            )}
                          </Typography>
                        }
                      />
                    </Grid>

                    <span style={{ color: "red", marginLeft: "20px" }}>
                      <h5>
                        {item.price?.toLocaleString("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        })}
                      </h5>
                    </span>
                  </CardActions>
                </Grid>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Wrapper>
    </Container>
  );
};
export default BookList;
