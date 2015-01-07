function Login(){
	var self = this;
	var suivi = new Suivi();
	var preparation = new Preparation();
	var edition = new Edition();
	var livreur = new Livreur();

	self.setUp = function(){
		suivi.loadSuivi();
		self.setUpPages();

		$("#submitLogin").on("click",function(){
			self.login();
		});

		$("#inputPassword").on("keypress",function(e){
			if(e.keyCode == 13){
				self.login();
			}
		});
	};

	self.setUpPages = function(){
		suivi.setUp();
		preparation.setUp();
		edition.setUp();
		livreur.setUp();
	};

	self.login = function (){
		var password = $("#inputPassword").val();
		if (password === 'superviseur'){			
			window.location.assign('../html/index.html');
		} else if( password === 'livreur'){
			window.location.assign('../html/livreur/etatLivraison.html');
		} else {
			alert('SVP remplir le email avec "superviseur" ou "livreur"');
		}
	};
	
}

var login = new Login();
login.setUp();