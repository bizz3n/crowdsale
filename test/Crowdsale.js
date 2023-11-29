const { ethers } = require('hardhat');
const { expect } = require('chai');

const tokens = (n) => {
	return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe('Crowdsale', () => {

	beforeEach(async () => {
		let crowdsale

	})

	describe('Deployment', ()=> {
		it('has correct name', async () => {
			const Crowdsale = await ethers.getContractFactory('Crowdsale')
			crowdsale = await Crowdsale.deploy()
			expect(await crowdsale.name()).to.eq('Crowdsale')
		})
	})
})