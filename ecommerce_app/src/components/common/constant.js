import { useLocation } from "react-router";

export const constant = {
  APIURL: "http://localhost:8000/api/v4",
  IMAGEURL: "http://localhost:8000/uploads",
};

export function hideNavbarandFooter() {
  const location = useLocation();
  const hideNavbarAndFooter =
    location.pathname === "/admin" ||
    location.pathname === "/admin/" ||
    location.pathname === "/admin/login" ||
    location.pathname === "/admin/product" ||
    location.pathname === "/admin/category" ||
    location.pathname === "/admin/category/addcategory" ||
    location.pathname === "/admin/product/addproduct" ||
    location.pathname === "/admin/changepassword" ||
    location.pathname === "/admin/banner" ||
    location.pathname === "/admin/carousel" ||
    location.pathname === "/admin/carousel/addcarousel" ||
    location.pathname === "/admin/banner/addbanner" ||
    location.pathname === "/admin/users" ||
    location.pathname === "/admin/users/adduser" ||
    location.pathname === "/admin/allorders" ||
    location.pathname === "/admin/canceled/orders" ||
    location.pathname === "/admin/delivered/orders" ||
    location.pathname === "/admin/pending/orders" ||
    location.pathname === "/admin/confirm/orders" ||
    location.pathname === "/admin/onthedelivery/orders" ||
    location.pathname === "/admin/attribute" ||
    location.pathname === "/admin/subattribute" ||
    location.pathname === "/admin/attribute/addattribute" ||
    location.pathname === "/admin/subattribute/subaddattribute" ||
    location.pathname === "/admin/testimonial" ||
    location.pathname === "/admin/testimonial/addtestimonial" ||
    location.pathname === "/admin/subcategory" ||
    location.pathname === "/admin/subcategory/addsubcategory" ||
    location.pathname === "/admin/users/updateuser" ||
    location.pathname.startsWith("/admin/product/");

  return hideNavbarAndFooter;
}

export const deliveryCharge = 100;

export const itemperPage = 10;
export const itemperPageforUser = 20;
