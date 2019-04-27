import Layout from "../components/Layout";

const About = () => (
	<Layout>
		<div>
			<h1>About MyTodo</h1>
			<p>
				This is <span>My Schedule Manager</span> to help me manage my daily
				routine. I guess i won't have to mess around with social media so much
				anymore!, Basically i'll be doing the following to light up my day!
			</p>
			<ul className="list-group">
				<li className="list-group-item">
					Mess around with social media: <strong>6 - 7 am</strong>
				</li>
				<li className="list-group-item">
					Drop kids at school: <strong>7 - 8 am</strong>
				</li>
				<li className="list-group-item">
					Start coding my projects: <strong>9 - 12 pm</strong>
				</li>
				<li className="list-group-item">Go for an hour break</li>
				<li className="list-group-item">
					Start coding my projects again: <strong>1 - 4 pm</strong>
				</li>
			</ul>
			<style>
				{`
                h1{
                    text-align: center;
                } 
                span{
                    color: red;
                    }
                    p{font-size: 18px;}
                `}
			</style>
		</div>
	</Layout>
);
export default About;
