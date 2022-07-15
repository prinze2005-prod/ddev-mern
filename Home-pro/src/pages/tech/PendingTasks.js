import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PendingTasks = () => {
	return (
		<main>
			<TaskTitle style={{ padding: '0.25rem' }}>
				<h2>Pending Tasks</h2>
			</TaskTitle>
			<Wrapper className="page-100">
				<section>
					<table>
						<tr>
							<th>Job-ID</th>
							<th>Date</th>
							<th>Customer</th>
							<th>Contact</th>
							<th>Accept/Reject</th>
						</tr>
						<tr>
							<td>xxxxxx</td>
							<td>19</td>
							<td>Male</td>
							<td>Male</td>
							<td>
								<label class="switch">
									<input type="checkbox" />
									<span class="slider round"></span>
								</label>
							</td>
						</tr>
						<tr>
							<td>xxxxxx</td>
							<td>19</td>
							<td>Female</td>
							<td>Female</td>
							<td>
								<label class="switch">
									<input type="checkbox" />
									<span class="slider round"></span>
								</label>
							</td>
						</tr>
						<tr>
							<td>xxxxxx</td>
							<td>25</td>
							<td>Male</td>
							<td>Male</td>
							<td>
								<label class="switch">
									<input type="checkbox" />
									<span class="slider round"></span>
								</label>
							</td>
						</tr>
					</table>
					<br />
					<Link to="/Tech" className="btn">
						back to Tech page
					</Link>
				</section>
			</Wrapper>
		</main>
	);
};

const Wrapper = styled.main`
	background: var(--clr-grey-10);
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	h1 {
		font-size: 5rem;
	}
	h3 {
		text-transform: none;
		margin-bottom: 2rem;
	}
	.btn {
		background: var(--clr-primary-5);
	}

	tr:hover {
		background-color: var(--clr-primary-5);
		width: 100%;
	}

	table {
		width: 800px;
		height: 200px;
		background: var(--clr-white);
		padding: 10px;
		border-radius: 15px;
	}

	th {
		border-bottom: 1px solid black;
	}

	td {
		text-align: center;
	}
	.App {
		width: 100%;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	/* The switch - the box around the slider */
	.switch {
		position: relative;
		display: inline-block;
		width: 60px;
		height: 34px;
	}

	/* Hide default HTML checkbox */
	.switch input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	/* The slider */
	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #ccc;
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}

	.slider:before {
		position: absolute;
		content: '';
		height: 26px;
		width: 26px;
		left: 4px;
		bottom: 4px;
		background-color: white;
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}

	input:checked + .slider {
		background-color: #21f372;
	}

	input:focus + .slider {
		box-shadow: 0 0 1px #2196f3;
	}

	input:checked + .slider:before {
		-webkit-transform: translateX(26px);
		-ms-transform: translateX(26px);
		transform: translateX(26px);
	}

	/* Rounded sliders */
	.slider.round {
		border-radius: 34px;
	}

	.slider.round:before {
		border-radius: 50%;
	}
`;

const TaskTitle = styled.div`
	background: var(--clr-primary-5);
	display: flex;
	justify-content: center;
	text-align: center;
`;
export default PendingTasks;
