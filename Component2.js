		 var i; 
		 for (i=0; i<=15; i++) { 
			document.write(" Επαναληψη ν."+i); 
	 	 	window.alert("Επαναληψη ν."+i); 
			console.log("Επαναληψη ν."+i); 
		 } 
		 document.write("<br><br><br>"); //3 νεες γραμμές 
		//Ελέγξτε την λειτουργία της while αν αλλάξτε την τιμή της μεταβλητής με άλλους ακεραίους/δεκαδικούς 
		var Mia_timi=20; 
		while (Mia_timi>=12) { //εκτέλεσε τον κώδικα όσο η συνθήκη είναι αληθής 
			document.write(" Τιμη Μεταβλητης(while):"+Mia_timi); 
			window.alert(Mia_timi); console.log(Mia_timi); 
			Mia_timi = Mia_timi-1; 
		} 
		document.write("<br><br><br>"); //3 νεες γραμμές 
		Mia_timi=22; 
		do { 
		// εκτέλεσε των κώδικα όσο η συνθήκη είναι αληθής(τρέχει τουλάχιστον μία φορά)
		document.write(" Τιμη Μεταβλητης(while):"+Mia_timi); 
		window.alert(Mia_timi); console.log(Mia_timi); 
		Mia_timi = Mia_timi-1; 
		} while (Mia_timi>=13); 
