import AdminHomeStyles from '../../assets/styles/AdminHomeStyles';
import NavbarNftConnected from '../../components/Navbar/NavbarNftConnected';
import AdminLink from '../../components/AdminLink/AdminLink';
import { useEffect, useState } from 'react';

const AdminHome = () => {
	const [href, setHref] = useState('')
	// Scroll page
	useEffect(() => {
		const href = window.location.href.substring(window.location.href.lastIndexOf('#') + 1);
		setHref(href);
		console.log(href);
		const element = document.getElementById(href);
		if (element) {
			element.scrollIntoView({behavior: 'smooth'});
		}
	}, [href])

	return (
		<AdminHomeStyles>
			<NavbarNftConnected />
			<div className='admin-container'>
				<div className='admin-container-links'>
					<AdminLink />
				</div>

				<div id={href}className='admin-container-form'>
					<form>
						<h2>ADMIN</h2>
						<div className='row-1'>
							<label htmlFor='name'>NAME</label>
							<input type='text' id='name' placeholder='CONNECT WALLET' />
						</div>

						<div className='row-2'>
							<label htmlFor='desc'>DESCRIPTION</label>
							<textarea
								name='desc'
								id='desc'
								placeholder='DESCRIPTION'
							></textarea>
							<p>Briefly describe what you need</p>
						</div>

						<div className='row-3'>
							<label htmlFor='token'>REWARD TOKEN ADDRESS</label>
							<input type='text' id='token' placeholder='TOKEN ADDRESS' />
						</div>

						<div className='row-4'>
							<label htmlFor='collection'>NFT COLLECTION ADDRESS</label>
							<input type='text' id='collection' placeholder='NFT ADDRESS' />
						</div>

						<div className='row-5'>
							<label htmlFor='boost'>BOOST NFT ADDRESS</label>
							<input type='text' id='boost' placeholder='TOKEN ADDRESS' />
						</div>

						<div className='row-6'>
							<input type='checkbox' name='check' id='check' />
							<label htmlFor='check'>UPDATE STAKING FEES</label>
							<p>(optional)</p>
						</div>

						<button>SUBMIT</button>
					</form>
				</div>
			</div>
		</AdminHomeStyles>
	);
};

export default AdminHome;
