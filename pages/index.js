import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";
import Photo from "../components/Photo";

class Index extends Component {
	// getInitialProps pushes the fetched data into the props.
	/*static async getInitialProps() {
		const res = await fetch("http://localhost:3000/api/photos");
		const images = await res.json();
		return { images };
	}
	// We then inject that data we get from fetch into the component state, via componentWillMount
	componentWillMount() {
		this.setState({
			images: this.props.images
		});
	}

	LikesEntry(id) {
		let images = this.state.images;
		let image = images.find(i => i._id === id);
		image.likes = parseInt(image.likes) + 1;
		this.setState({
			images
		});
		fetch(`http://localhost:3000/photos/${id}`, {
			method: "PUT",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json"
			},
			body: JSON.stringify(image)
		});
	}*/
	render() {
		return (
			<Layout>
				{/* {this.state.images.map((image, key) => (
					<Photo
						LikesEntry={this.LikesEntry.bind(this)}
						id={image._id}
						key={key}
						data={image}
					/>
				))} */}
				<div>The home page</div>
			</Layout>
		);
	}
}
export default Index;
