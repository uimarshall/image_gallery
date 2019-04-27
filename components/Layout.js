import Head from "next/head";
import Navbar from "./Navbar";

const Layout = props => (
	<div>
		<Head>
			<title>Image Gallery</title>
			<link
				href="https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/materia/bootstrap.min.css"
				rel="stylesheet"
				integrity="sha384-SYbiks6VdZNAKT8DNoXQZwXAiuUo5/quw6nMKtFlGO/4WwxW86BSTMtgdzzB9JJl"
				crossOrigin="anonymous"
			/>
		</Head>
		<Navbar />
		{/* The body content of other component will override '{props.children}' */}
		<div className="container">{props.children}</div>
	</div>
);
export default Layout;
