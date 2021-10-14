import Navbar from "../components/navbar";
import React from "react";
import Footer from "../components/footer";
import AddNewPost from "../components/add-new-post";

export default function Main() {
	return (
		<>
			<Navbar />
			<AddNewPost />
			<p> Main page </p>
			<Footer />
		</>
	)
}