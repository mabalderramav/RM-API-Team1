var expect = require('chai').expect;
var atendee = require('../../lib/atendee_libs/atendeeLib.js');

describe('Atendee', function(){
	it('GET /atendee', function(done){
		atendee.getAtendee(function(err, res){			
			expect(res.status).to.equals(200);
			done();
		});
	});
});