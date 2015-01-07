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
			self.validerLivraison();
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

	self.modalSetUp = function(){

		$("#heureDepart").on("click",function(){
			self.afficherHeureDepart();
		});

		$("#boutonRetour").on("click",function(){
			self.retourModal();
		});

		$("#boutonEchec").on("click",function(){
			$('#modalEchec').modal('show');
			$('#validerRaison').on('click',function(){
				$('#raisonEchec').val('');
				$(this).closest('.modal').modal('hide');
				self.returnModal();
			});
		});

		$("#boutonReussi").on("click",function(){
			self.retourModal();
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
	};

	self.activerListeProbleme = function(div){
		if(div.hasClass('active')){
			div.removeClass("active");
		} else{
			div.addClass("active");
		}
	};

	self.toggleProbleme = function(){
		$("#listeProbleme").toggle();
		$("#detailLivaison").toggle();
	};

	self.validerLivraison = function(){		
		self.activerBouton($(this));
		

		var heureDArrive = '<h4><i class="fa fa-flag-checkered"></i> '+self.calculerHeure()+'</h4>'; 
		$("#heureArrive").html(heureDArrive);


		$("#modalValidation").modal('show');
		self.modalSetUp();
	};

	self.calculerHeure = function(){
		var currentdate = new Date(); 
		var heure = currentdate.getHours();
		var minutes = currentdate.getMinutes();
		if(minutes<10){
			minutes='0'+minutes;
		}

		var heureDArrive =heure+':'+minutes;
		return heureDArrive;
	};

	self.afficherHeureDepart = function(){
		$("#btnHeureDepart").hide();

		var heureDArrive = '<i class="fa fa-car"></i> '+self.calculerHeure();
		$("#heureDepart").find('h4').html(heureDArrive);
	};

	self.retourModal = function(){
		$("#btnHeureDepart").show();
		$("#heureDepart").find('h4').html("");
		$("#heureDepart").closest('.modal').modal('hide');
	};
}

var livreur = new Livreur();
livreur.setUp();

		//$("#modalValidation").modal('show');