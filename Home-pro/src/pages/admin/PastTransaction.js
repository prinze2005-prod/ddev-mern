import React from 'react';
import styled from 'styled-components';
import { Container, Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const PastTransaction = () => {
	return (
		<main>
			<PaintTitle style={{ padding: '0.25rem' }}>
				<h2>Past Transaction</h2>
			</PaintTitle>
			<br />
			<SearchForm>
				<label>Order ID</label>
				<input type="text" />

				<label>Start</label>
				<input type="date" />

				<label>End</label>
				<input type="date" />

				<EditButton
					type="submit"
					className="btn btn-outline"
					style={{ color: 'black', background: '#ffb347' }}
				>
					Search
				</EditButton>
			</SearchForm>
			<br />
			<br />
			<Wrapper className="page section section-center ">
				<article>
					<div className="title"></div>

					<Container>
						<Table responsive striped hover size="sm" className="noWrap">
							<thead>
								<tr>
									<th>Order ID</th>
									<th>Date</th>
									<th>Date</th>
									<th>Details</th>

									<th></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1......6</td>
									<td>March 23, 2022</td>
									<td>$1000</td>

									<td>
										<EditButton
											className="btn btn-outline"
											style={{ color: 'black', background: '#ffb347' }}
										>
											Details
										</EditButton>
									</td>
								</tr>
								<tr>
									<td>1......6</td>
									<td>March 23, 2022</td>
									<td>$1000</td>

									<td>
										<EditButton
											className="btn btn-outline"
											style={{ color: 'black', background: '#ffb347' }}
										>
											Details
										</EditButton>
									</td>
								</tr>
								<tr>
									<td>1......6</td>
									<td>March 23, 2022</td>
									<td>$1000</td>

									<td>
										<EditButton
											className="btn btn-outline"
											style={{ color: 'black', background: '#ffb347' }}
										>
											Details
										</EditButton>
									</td>
								</tr>
								<tr>
									<td>1......6</td>
									<td>March 23, 2022</td>
									<td>$1000</td>

									<td>
										<EditButton
											className="btn btn-outline"
											style={{ color: 'black', background: '#ffb347' }}
										>
											Details
										</EditButton>
									</td>
								</tr>
								<tr>
									<td>1......6</td>
									<td>March 23, 2022</td>
									<td>$1000</td>

									<td>
										<EditButton
											className="btn btn-outline"
											style={{ color: 'black', background: '#ffb347' }}
										>
											Details
										</EditButton>
									</td>
								</tr>
							</tbody>
						</Table>
					</Container>

					<DefaultButton
						className="btn btn-outline"
						style={{ color: 'black', background: '#ffb347' }}
					>
						<NavLink
							to="/admin"
							style={(isActive) => ({
								color: isActive ? '#ffb347' : 'black',
							})}
						>
							<center>Home</center>
						</NavLink>
					</DefaultButton>
				</article>
			</Wrapper>
		</main>
	);
};

const Wrapper = styled.section`
	text-align: center;
	padding: 0.25rem;
	height: 40rem;
	margin-top: -0.05rem;

	td,
	th,
	tr {
		border: none;
	}
	table {
		width: 100%;
	}
`;

const PaintTitle = styled.div`
	background: var(--clr-primary-5);
	display: flex;
	justify-content: center;
	text-align: center;
`;

const DeleteButton = styled.button`
	background: var(--clr-primary-5);
	border: none;
	border-radius: 0.25rem;
	text-transform: capitalize;
	padding: 0.25rem;
	width: 150px;
	float: right;
`;
const DefaultButton = styled.button`
	background: var(--clr-primary-5);
	color: #fff;
	border: none;
	border-radius: 0.25rem;
	cursor: pointer;
	text-transform: capitalize;
	padding: 0.25rem;
	display: block;
	width: 150px;
	margin: 1rem left;
`;

const EditButton = styled.button`
	background: var(--clr-primary-5);
	color: #fff;
	border: none;
	border-radius: 0.25rem;
	text-transform: capitalize;
	padding: 0.25rem;
	width: 80px;
`;

const BackButton = styled.button`
	background: var(--clr-primary-5);
	color: #fff;
	border: none;
	border-radius: 0.25rem;
	text-transform: capitalize;
	padding: 0.25rem;
	width: 110px;
	float: right;
`;

const SearchForm = styled.div`
	width: 50rem;
	float: center;
	align-items: center;
	margin-left: 40rem;
	box-sizing: 10px;
`;
export default PastTransaction;
