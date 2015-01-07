function Livreur(){
	var self = this;

	self.setUp = function(){

		$('#boutonBouchon').tooltip("show");

		$('#navGPS').on('click',function(){
			self.activateTab('GPS');
		});

		$('#navCarte').on('click',function(){
			self.activateTab('Carte');
		});

		$("#boutonValider").on("click",function(){
			self.activerBouton($(this));
		});

		$("#boutonBouchon").on("click",function(){
			self.activerBouton($(this));			
		});

		$("#boutonProbleme").on("click",function(){
			self.toggleProbleme();
		});

		$("#boutonTel").on("click",function(){
			self.activerBouton($(this));
		});

		$("#validerProbleme").on("click",function(){
			self.toggleProbleme();
		});


	};

	self.activateTab = function(tab){	
		$('#carteHeader').find("[class*='active']").removeClass('active');	
		$('#carteContent').find("[class*='active']").removeClass('active');
		$('#nav'+tab).addClass('active');
		$('#tab'+tab).addClass('active');
	};	

	self.activerBouton = function(bouton){
		if(bouton.hasClass('active')){
			bouton.removeClass("active");
		} else{
			bouton.addClass("active");
		}
	}

	self.activerListeProbleme = function(div){
		if(div.hasClass('active')){
			div.removeClass("active");
		} else{
			div.addClass("active");
		}
	}

	self.toggleProbleme = function(){
		$("#listeProbleme").toggle();
		$("#detailLivaison").toggle();
	}
}

var livreur = new Livreur();
livreur.setUp();