var express = require('express');
var router = express.Router();

//TODO: in progress..
router.post('/register', async (req, res) => {
	try {
		const { email, username, password } = req.body;
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then((userCredential) => {
				// Signed in
				var user = userCredential.user;
				console.log(user);
			})
			.catch((error) => {
				var errorCode = error.code;
				var errorMessage = error.message;
				console.log(error);
			});
		res.redirect('/');
	} catch (e) {
		res.redirect('register');
	}
});

module.exports = router;
